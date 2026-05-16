import React, { useState, useEffect, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import Results from './Results';
import QuizSetup from './QuizSetup';
import QuestionNav from './QuestionNav';
import questionsData from '../data/questions.json';

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Quiz = ({ onClose }) => {
  const [isSetupPhase, setIsSetupPhase] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (isSetupPhase || showResults || timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerId);
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [isSetupPhase, showResults, timeLeft]);

  const startQuiz = useCallback((config) => {
    let filtered = [...questionsData];

    // Fix: compare correctly with number or 'all'
    if (config.chapter !== 'all') {
      filtered = filtered.filter(q => q.chapter === config.chapter);
    }
    if (config.difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === config.difficulty);
    }

    filtered = shuffle(filtered).slice(0, config.count);

    // Shuffle options within each question
    const randomizedQuestions = filtered.map(q => {
      const withMeta = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === q.correctAnswer,
      }));
      const shuffled = shuffle(withMeta);
      return {
        ...q,
        options: shuffled.map(o => o.text),
        correctAnswer: shuffled.findIndex(o => o.isCorrect),
      };
    });

    setQuestions(randomizedQuestions);
    setIsSetupPhase(false);
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setUserAnswers({});
    setTimeLeft(config.count * (config.timePerQuestion || 90));
  }, []);

  const handleOptionSelect = useCallback((index) => {
    setUserAnswers(prev => {
      if (prev[currentQuestionIndex]) return prev;
      return {
        ...prev,
        [currentQuestionIndex]: {
          selectedOption: index,
          isCorrect: index === questions[currentQuestionIndex].correctAnswer,
        },
      };
    });
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(i => i + 1);
    } else {
      setShowResults(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setIsSetupPhase(true);
    setUserAnswers({});
    setTimeLeft(0);
    setQuestions([]);
  }, []);

  const calculateScore = () =>
    Object.values(userAnswers).filter(a => a.isCorrect).length;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const timerWarning = !isSetupPhase && !showResults && timeLeft > 0 && timeLeft <= 300;

  return (
    <div className="app-container" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '20px' }}>
      <div className="retro-window" style={{ maxWidth: isSetupPhase || showResults ? '600px' : '800px', width: '100%', margin: '0 auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">
            Simulador_ISTQB.exe
            {!isSetupPhase && !showResults && (
              <span style={{ color: timerWarning ? '#ffcc00' : 'inherit' }}>
                {' '}[ Tiempo: {formatTime(timeLeft)} ]
              </span>
            )}
          </div>
          <div className="title-bar-controls">
            <button className="title-bar-btn">_</button>
            <button className="title-bar-btn">□</button>
            <button className="title-bar-btn" onClick={onClose}>X</button>
          </div>
        </div>

        <div className="window-body">
          {isSetupPhase ? (
            <QuizSetup onStartQuiz={startQuiz} />
          ) : showResults ? (
            <Results
              score={calculateScore()}
              totalQuestions={questions.length}
              userAnswers={userAnswers}
              questions={questions}
              onRestart={handleRestart}
            />
          ) : (
            <QuestionCard
              questionData={questions[currentQuestionIndex]}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              selectedOption={userAnswers[currentQuestionIndex]?.selectedOption ?? null}
              handleOptionSelect={handleOptionSelect}
              handleNextQuestion={handleNextQuestion}
              isAnswered={!!userAnswers[currentQuestionIndex]}
            />
          )}
        </div>
      </div>

      {!isSetupPhase && !showResults && (
        <div className="retro-window" style={{ position: 'fixed', right: '20px', top: '20px', width: '200px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
          <div className="title-bar" style={{ flexShrink: 0 }}>
            <div className="title-bar-text">Navegación</div>
          </div>
          <div className="window-body" style={{ overflowY: 'auto', flexGrow: 1 }}>
            <QuestionNav
              totalQuestions={questions.length}
              currentQuestionIndex={currentQuestionIndex}
              userAnswers={userAnswers}
              onJump={setCurrentQuestionIndex}
              onFinish={() => setShowResults(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
