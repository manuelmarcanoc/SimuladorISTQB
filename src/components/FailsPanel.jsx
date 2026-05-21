import React, { useState, useMemo } from 'react';
import allQuestions from '../data/questions.json';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CHAPTER_NAMES = {
  1: 'Fundamentos del Testing',
  2: 'Pruebas a lo largo del SDLC',
  3: 'Pruebas Estáticas',
  4: 'Análisis y Diseño de Pruebas',
  5: 'Gestión de Pruebas',
  6: 'Herramientas de Prueba',
};

export default function FailsPanel({ onClose }) {
  const [mode, setMode] = useState('overview'); // overview | quiz
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [solved, setSolved] = useState(0);
  const [cleared, setCleared] = useState(0);

  const failIds = useMemo(() => {
    return JSON.parse(localStorage.getItem('istqb_fails') || '[]');
  }, [cleared]); // eslint-disable-line react-hooks/exhaustive-deps

  const failQuestions = useMemo(() => {
    return allQuestions.filter(q => failIds.includes(q.id));
  }, [failIds]);

  // Group by chapter
  const byChapter = useMemo(() => {
    const groups = {};
    failQuestions.forEach(q => {
      if (!groups[q.chapter]) groups[q.chapter] = [];
      groups[q.chapter].push(q);
    });
    return groups;
  }, [failQuestions]);

  const startQuiz = (questions) => {
    setQuizQuestions(shuffle(questions));
    setQuizIndex(0);
    setSelected(null);
    setSolved(0);
    setMode('quiz');
  };

  const clearFails = () => {
    localStorage.removeItem('istqb_fails');
    setCleared(c => c + 1);
  };

  const removeFail = (id) => {
    const current = JSON.parse(localStorage.getItem('istqb_fails') || '[]');
    localStorage.setItem('istqb_fails', JSON.stringify(current.filter(x => x !== id)));
    setCleared(c => c + 1);
  };

  const handleAnswer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    const q = quizQuestions[quizIndex];
    if (i === q.correctAnswer) {
      setSolved(s => s + 1);
      // Remove from fails
      removeFail(q.id);
    }
  };

  const nextQuestion = () => {
    if (quizIndex + 1 >= quizQuestions.length) {
      setMode('overview');
      setCleared(c => c + 1);
    } else {
      setQuizIndex(i => i + 1);
      setSelected(null);
    }
  };

  // ── QUIZ MODE ────────────────────────────────────────────────────────────────
  if (mode === 'quiz') {
    if (quizQuestions.length === 0) {
      return (
        <div className="fails-empty">
          <p>🎉 ¡No tienes fallos pendientes en este capítulo!</p>
          <button className="fails-btn" onClick={() => setMode('overview')}>Volver</button>
        </div>
      );
    }

    const q = quizQuestions[quizIndex];
    const done = selected !== null;
    const isCorrect = selected === q.correctAnswer;

    return (
      <div className="fails-quiz-container">
        <div className="fails-quiz-hud">
          <span>🔁 Repasando fallos</span>
          <span>{quizIndex + 1} / {quizQuestions.length} | ✅ {solved} resueltas</span>
          <button className="fails-small-btn" onClick={() => setMode('overview')}>Salir</button>
        </div>
        <div className="fails-quiz-question">
          <p className="fails-q-meta">Cap. {q.chapter} — {q.topic}</p>
          <p className="fails-q-text">{q.question}</p>
        </div>
        <div className="fails-quiz-options">
          {q.options.map((opt, i) => {
            let cls = 'fails-option';
            if (done) {
              if (i === q.correctAnswer) cls += ' fails-opt-correct';
              else if (i === selected && !isCorrect) cls += ' fails-opt-wrong';
            } else if (selected === i) {
              cls += ' fails-opt-selected';
            }
            return (
              <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={done}>
                {opt}
              </button>
            );
          })}
        </div>
        {done && (
          <div className={`fails-feedback ${isCorrect ? 'fb-correct' : 'fb-wrong'}`}>
            <p>{isCorrect ? '✅ ¡Correcto! Esta pregunta se elimina de tus fallos.' : '❌ Sigue practicando. La respuesta correcta está marcada.'}</p>
            <p className="fails-explanation">💡 {q.explanation}</p>
            <button className="fails-btn" onClick={nextQuestion}>
              {quizIndex + 1 < quizQuestions.length ? 'Siguiente →' : 'Terminar'}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── OVERVIEW ─────────────────────────────────────────────────────────────────
  return (
    <div className="fails-container">
      <div className="fails-header">
        <h2 className="fails-title">📋 Mis Fallos</h2>
        <span className="fails-total">{failQuestions.length} preguntas pendientes</span>
      </div>

      {failQuestions.length === 0 ? (
        <div className="fails-empty">
          <p>🎉 ¡No tienes fallos guardados!</p>
          <p>Los fallos del <strong>Simulador</strong> y del <strong>Modo Examen</strong> aparecerán aquí automáticamente.</p>
        </div>
      ) : (
        <>
          <div className="fails-actions-bar">
            <button className="fails-btn fails-btn-all" onClick={() => startQuiz(failQuestions)}>
              ▶ Repasar todos ({failQuestions.length})
            </button>
            <button className="fails-btn fails-btn-clear" onClick={clearFails}>
              🗑 Borrar todos
            </button>
          </div>

          {Object.entries(byChapter).sort(([a],[b]) => a-b).map(([ch, qs]) => (
            <div key={ch} className="fails-chapter-block">
              <div className="fails-chapter-header">
                <div>
                  <span className="fails-ch-num">Cap. {ch}</span>
                  <span className="fails-ch-name">{CHAPTER_NAMES[ch]}</span>
                </div>
                <div className="fails-ch-actions">
                  <span className="fails-ch-count">{qs.length} fallos</span>
                  <button className="fails-small-btn" onClick={() => startQuiz(qs)}>
                    ▶ Repasar
                  </button>
                </div>
              </div>
              <div className="fails-question-list">
                {qs.map(q => (
                  <div key={q.id} className="fails-q-item">
                    <p className="fails-q-preview">{q.question}</p>
                    <button className="fails-remove-btn" onClick={() => removeFail(q.id)} title="Eliminar de fallos">✕</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
