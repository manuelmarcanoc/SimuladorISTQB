import React, { useState, useEffect, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import Results from './Results';
import QuizSetup from './QuizSetup';
import QuestionNav from './QuestionNav';
import questionsData from '../data/questions.json';
import {
  loadStats, saveStats, loadAchievements, saveAchievements,
  checkAndUnlockAchievements,
} from './Achievements';
import { saveWrongQuestions } from '../utils/storage';

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



const Quiz = ({ onClose, onNewAchievements }) => {
  const [isSetupPhase, setIsSetupPhase] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

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

  // Save exam results when showResults becomes true
  useEffect(() => {
    if (!showResults || questions.length === 0) return;

    const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
    const pct = Math.round((correctCount / questions.length) * 100);

    // Save wrong questions for "Repasar Errores"
    const wrongQs = questions.filter((_, i) => userAnswers[i] && !userAnswers[i].isCorrect);
    saveWrongQuestions(wrongQs);

    // Build chapter stats
    const chapterStats = {};
    questions.forEach((q, i) => {
      const ch = q.chapter;
      if (!chapterStats[ch]) chapterStats[ch] = { correct: 0, total: 0 };
      chapterStats[ch].total++;
      if (userAnswers[i]?.isCorrect) chapterStats[ch].correct++;
    });

    // Update global stats
    const stats = loadStats();
    const newBestStreak = Math.max(stats.bestStreak || 0, currentStreak);
    const updatedStats = {
      ...stats,
      totalAnswered: (stats.totalAnswered || 0) + questions.length,
      totalCorrect: (stats.totalCorrect || 0) + correctCount,
      totalExams: (stats.totalExams || 0) + 1,
      passedExams: (stats.passedExams || 0) + (pct >= 65 ? 1 : 0),
      perfectExams: (stats.perfectExams || 0) + (pct === 100 ? 1 : 0),
      bestStreak: newBestStreak,
      examHistory: [
        ...(stats.examHistory || []),
        { date: new Date().toISOString(), total: questions.length, correct: correctCount, pct, chapterStats },
      ].slice(-50), // keep last 50 exams
    };

    // Study streak
    const today = new Date().toDateString();
    if (stats.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      updatedStats.studyStreak = stats.lastStudyDate === yesterday
        ? (stats.studyStreak || 0) + 1
        : 1;
      updatedStats.lastStudyDate = today;
    }

    saveStats(updatedStats);

    // Check achievements
    const currentUnlocked = loadAchievements();
    const { allUnlocked, newlyUnlocked } = checkAndUnlockAchievements(updatedStats, currentUnlocked);
    if (newlyUnlocked.length > 0) {
      saveAchievements(allUnlocked);
      onNewAchievements && onNewAchievements(newlyUnlocked);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResults]);

  const startQuiz = useCallback((config) => {
    let filtered = config.questions
      ? config.questions
      : [...questionsData];

    if (!config.questions) {
      if (config.chapter !== 'all') {
        filtered = filtered.filter(q => q.chapter === config.chapter);
      }
      filtered = shuffle(filtered).slice(0, config.count);
    }

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
    setCurrentStreak(0);
    const t = randomizedQuestions.length * (config.timePerQuestion || 90);
    setTimeLeft(t);
    setTotalTime(t);
  }, []);

  const handleOptionSelect = useCallback((index) => {
    setUserAnswers(prev => {
      if (prev[currentQuestionIndex]) return prev;
      const isCorrect = index === questions[currentQuestionIndex].correctAnswer;
      setCurrentStreak(s => isCorrect ? s + 1 : 0);
      return {
        ...prev,
        [currentQuestionIndex]: { selectedOption: index, isCorrect },
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
    setTotalTime(0);
    setQuestions([]);
    setCurrentStreak(0);
  }, []);

  const calculateScore = () =>
    Object.values(userAnswers).filter(a => a.isCorrect).length;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const timerWarning = !isSetupPhase && !showResults && timeLeft > 0 && timeLeft <= 300;
  const timerProgress = totalTime > 0 ? (timeLeft / totalTime) * 100 : 100;

  return (
    <div className="quiz-main-container animate-in">
      <div className="card">
        {/* Timer progress bar at the very top of the card */}
        {!isSetupPhase && !showResults && (
          <div className="quiz-timer-track">
            <div
              className="quiz-timer-fill"
              style={{
                width: `${timerProgress}%`,
                background: timerWarning ? 'var(--error)' : timerProgress < 50 ? 'var(--warning)' : 'var(--primary)',
              }}
            />
          </div>
        )}

        <div className="card-header">
          <div className="card-title">
            Simulador ISTQB
            {!isSetupPhase && !showResults && (
              <span style={{ color: timerWarning ? 'var(--warning)' : 'var(--text-muted)', fontSize: '1rem', marginLeft: '1rem' }}>
                [ Tiempo: {formatTime(timeLeft)} ]
              </span>
            )}
            {!isSetupPhase && !showResults && currentStreak >= 3 && (
              <span style={{ color: 'var(--warning)', fontSize: '1rem' }}> 🔥{currentStreak}</span>
            )}
          </div>
        </div>



        <div className="card-body">
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
              key={currentQuestionIndex}
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
        <div className="card">
          <div className="card-header">
            <div className="card-title">Navegación</div>
          </div>
          <div className="card-body">
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
