import React, { useState, useEffect, useCallback } from 'react';
import allQuestions from '../data/questions.json';

const EXAM_TOTAL = 40;
const EXAM_MINUTES = 60;
const PASS_RATE = 0.65;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function selectExamQuestions() {
  // Distribute 40 questions proportionally across 6 chapters
  const chapters = [1,2,3,4,5,6];
  const counts = [8, 7, 6, 8, 7, 4]; // roughly proportional to syllabus weight
  let selected = [];
  chapters.forEach((ch, i) => {
    const pool = allQuestions.filter(q => q.chapter === ch);
    selected = selected.concat(shuffle(pool).slice(0, counts[i]));
  });
  return shuffle(selected);
}

export default function ExamMode({ onClose }) {
  const [phase, setPhase] = useState('intro'); // intro | exam | results
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(EXAM_MINUTES * 60);
  const [flagged, setFlagged] = useState(new Set());

  const endExam = useCallback(() => {
    setPhase('results');
  }, []);

  // Timer
  useEffect(() => {
    if (phase !== 'exam') return;
    const interval = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) { clearInterval(interval); endExam(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase, endExam]);

  const startExam = () => {
    const qs = selectExamQuestions();
    setQuestions(qs);
    setAnswers({});
    setCurrentIndex(0);
    setSecondsLeft(EXAM_MINUTES * 60);
    setFlagged(new Set());
    setPhase('exam');
  };

  const handleAnswer = (answerIndex) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: answerIndex }));
  };

  const toggleFlag = () => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(currentIndex)) next.delete(currentIndex);
      else next.add(currentIndex);
      return next;
    });
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  };

  // ── INTRO ────────────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="exam-intro">
        <h2 className="exam-intro-title">🎓 Modo Examen Real</h2>
        <div className="exam-intro-rules">
          <p>Simula las condiciones reales del examen ISTQB Foundation Level.</p>
          <ul>
            <li>📋 <strong>40 preguntas</strong> tipo test (A/B/C/D)</li>
            <li>⏱️ <strong>60 minutos</strong> de tiempo máximo</li>
            <li>✅ <strong>Aprobado: 65%</strong> (26 respuestas correctas)</li>
            <li>🚩 Puedes marcar preguntas para revisar al final</li>
            <li>❌ Sin feedback hasta terminar el examen</li>
            <li>💾 Tus fallos se guardan para repasarlos después</li>
          </ul>
        </div>
        <button className="exam-start-btn" onClick={startExam}>
          Comenzar Examen ▶
        </button>
      </div>
    );
  }

  // ── RESULTS ──────────────────────────────────────────────────────────────────
  if (phase === 'results') {
    const correct = questions.filter((q, i) => answers[i] === q.correctAnswer).length;
    const answered = Object.keys(answers).length;
    const score = correct / EXAM_TOTAL;
    const passed = score >= PASS_RATE;

    // Save fails to localStorage for FailsPanel
    const failedQuestions = questions
      .filter((q, i) => answers[i] !== q.correctAnswer)
      .map(q => q.id);
    const existing = JSON.parse(localStorage.getItem('istqb_fails') || '[]');
    const merged = [...new Set([...existing, ...failedQuestions])];
    localStorage.setItem('istqb_fails', JSON.stringify(merged));

    // Group by chapter
    const byChapter = {};
    questions.forEach((q, i) => {
      if (!byChapter[q.chapter]) byChapter[q.chapter] = { correct: 0, total: 0 };
      byChapter[q.chapter].total++;
      if (answers[i] === q.correctAnswer) byChapter[q.chapter].correct++;
    });

    return (
      <div className="exam-results">
        <div className={`exam-verdict ${passed ? 'verdict-pass' : 'verdict-fail'}`}>
          {passed ? '✅ APROBADO' : '❌ SUSPENSO'}
        </div>
        <div className="exam-score-big">{correct} / {EXAM_TOTAL}</div>
        <div className="exam-score-pct">{Math.round(score * 100)}% — Mínimo: 65%</div>
        {answered < EXAM_TOTAL && (
          <p className="exam-unanswered">⚠️ {EXAM_TOTAL - answered} preguntas sin responder (cuentan como fallo)</p>
        )}

        <h3 className="exam-section-title">Resultado por Capítulo</h3>
        <div className="exam-chapter-grid">
          {Object.entries(byChapter).map(([ch, data]) => (
            <div key={ch} className="exam-chapter-item">
              <span>Cap. {ch}</span>
              <span className={data.correct / data.total >= 0.65 ? 'chap-ok' : 'chap-fail'}>
                {data.correct}/{data.total}
              </span>
            </div>
          ))}
        </div>

        <h3 className="exam-section-title">Preguntas Falladas</h3>
        <div className="exam-fails-list">
          {questions.map((q, i) => {
            const ok = answers[i] === q.correctAnswer;
            if (ok) return null;
            return (
              <div key={i} className="exam-fail-item">
                <p className="fail-question">❌ {i + 1}. {q.question}</p>
                <p className="fail-your-answer">Tu respuesta: {q.options[answers[i]] ?? '(sin responder)'}</p>
                <p className="fail-correct-answer">Correcta: {q.options[q.correctAnswer]}</p>
                <p className="fail-explanation">💡 {q.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="exam-actions">
          <button className="exam-retry-btn" onClick={startExam}>Nuevo Examen</button>
          <button className="exam-close-btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  }

  // ── EXAM ─────────────────────────────────────────────────────────────────────
  const q = questions[currentIndex];
  const isFlagged = flagged.has(currentIndex);
  const isAnswered = answers[currentIndex] !== undefined;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / EXAM_TOTAL) * 100;
  const timeWarning = secondsLeft < 300; // last 5 min

  return (
    <div className="exam-container">
      {/* HUD */}
      <div className="exam-hud">
        <span className="exam-hud-q">Pregunta {currentIndex + 1} / {EXAM_TOTAL}</span>
        <span className={`exam-hud-timer ${timeWarning ? 'timer-warning' : ''}`}>
          ⏱ {formatTime(secondsLeft)}
        </span>
        <span className="exam-hud-answered">{answeredCount}/{EXAM_TOTAL} respondidas</span>
      </div>

      {/* Progress bar */}
      <div className="exam-progress-track">
        <div className="exam-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      <div className="exam-question-box">
        <div className="exam-question-meta">
          Cap. {q.chapter} | {q.topic}
          <button
            className={`exam-flag-btn ${isFlagged ? 'flagged' : ''}`}
            onClick={toggleFlag}
            title="Marcar para revisar"
          >
            {isFlagged ? '🚩 Marcada' : '🏳️ Marcar'}
          </button>
        </div>
        <p className="exam-question-text">{q.question}</p>
      </div>

      {/* Options */}
      <div className="exam-options">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={`exam-option ${answers[currentIndex] === i ? 'exam-option-selected' : ''}`}
            onClick={() => handleAnswer(i)}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="exam-nav">
        <button
          className="exam-nav-btn"
          onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
        >
          ← Anterior
        </button>

        {/* Question map */}
        <div className="exam-q-map">
          {questions.map((_, i) => (
            <button
              key={i}
              className={`exam-q-dot ${answers[i] !== undefined ? 'q-answered' : ''} ${flagged.has(i) ? 'q-flagged' : ''} ${i === currentIndex ? 'q-current' : ''}`}
              onClick={() => setCurrentIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {currentIndex < EXAM_TOTAL - 1 ? (
          <button
            className="exam-nav-btn"
            onClick={() => setCurrentIndex(i => Math.min(EXAM_TOTAL - 1, i + 1))}
          >
            Siguiente →
          </button>
        ) : (
          <button className="exam-nav-btn exam-submit-btn" onClick={endExam}>
            Entregar ✔
          </button>
        )}
      </div>

      {/* Flagged summary */}
      {flagged.size > 0 && (
        <div className="exam-flagged-bar">
          🚩 Marcadas: {[...flagged].sort((a,b)=>a-b).map(i => i+1).join(', ')}
        </div>
      )}
    </div>
  );
}
