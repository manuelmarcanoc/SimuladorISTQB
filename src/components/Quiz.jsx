import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import Results from './Results';
import QuizSetup from './QuizSetup';
import QuestionNav from './QuestionNav';
import questionsData from '../data/questions.json';

const Quiz = ({ onClose }) => {
  const [isSetupPhase, setIsSetupPhase] = useState(true);
  const [questions, setQuestions] = useState([]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!isSetupPhase && !showResults && timeLeft > 0) {
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
    }
  }, [isSetupPhase, showResults, timeLeft]);

  const startQuiz = (config) => {
    let filtered = [...questionsData];
    
    // Filter by chapter
    if (config.chapter !== 'all') {
      filtered = filtered.filter(q => q.chapter === config.chapter);
    }
    
    // Filter by difficulty
    if (config.difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === config.difficulty);
    }
    
    // Shuffle the array of questions using Fisher-Yates
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    
    // Slice to the requested count
    filtered = filtered.slice(0, config.count);
    
    // Shuffle the options within each question
    const randomizedQuestions = filtered.map(q => {
      const optionsWithMeta = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === q.correctAnswer
      }));
      
      // Fisher-Yates shuffle for options
      for (let i = optionsWithMeta.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithMeta[i], optionsWithMeta[j]] = [optionsWithMeta[j], optionsWithMeta[i]];
      }
      
      const newCorrectIndex = optionsWithMeta.findIndex(o => o.isCorrect);
      
      return {
        ...q,
        options: optionsWithMeta.map(o => o.text),
        correctAnswer: newCorrectIndex
      };
    });
    
    setQuestions(randomizedQuestions);
    setIsSetupPhase(false);
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setUserAnswers({});
    
    // Set timer: 1.5 minutes (90 seconds) per question.
    setTimeLeft(config.count * 90);
  };

  const handleOptionSelect = (index) => {
    if (userAnswers[currentQuestionIndex]) return;
    
    const isCorrect = index === questions[currentQuestionIndex].correctAnswer;
    
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        selectedOption: index,
        isCorrect: isCorrect
      }
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return Object.values(userAnswers).filter(ans => ans.isCorrect).length;
  };

  const handleRestart = () => {
    setIsSetupPhase(true);
    setUserAnswers({});
    setTimeLeft(0);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="app-container" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
      <div className="retro-window" style={{ flex: 3, maxWidth: isSetupPhase || showResults ? '600px' : '800px', width: '100%' }}>
        <div className="title-bar">
          <div className="title-bar-text">
            Simulador_ISTQB.exe {(!isSetupPhase && !showResults) ? `[ Tiempo Restante: ${formatTime(timeLeft)} ]` : ''}
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

      {(!isSetupPhase && !showResults) && (
        <div className="retro-window" style={{ flex: 1, minWidth: '250px', position: 'sticky', top: '10px' }}>
          <div className="title-bar">
            <div className="title-bar-text">Navegación</div>
            <div className="title-bar-controls">
              <button className="title-bar-btn" onClick={() => {}}>X</button>
            </div>
          </div>
          <div className="window-body">
            <QuestionNav 
              totalQuestions={questions.length}
              currentQuestionIndex={currentQuestionIndex}
              userAnswers={userAnswers}
              onJump={(index) => setCurrentQuestionIndex(index)}
              onFinish={() => setShowResults(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
