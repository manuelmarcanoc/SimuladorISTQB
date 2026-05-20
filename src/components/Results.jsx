import React, { useState } from 'react';

const CHAPTER_NAMES = {
  1: 'Fundamentos',
  2: 'SDLC',
  3: 'Pruebas Estáticas',
  4: 'Análisis y Diseño',
  5: 'Gestión',
  6: 'Herramientas',
};

const Results = ({ score, totalQuestions, userAnswers, questions, onRestart }) => {
  const [showReview, setShowReview] = useState(false);
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const isPassing = percentage >= 65;

  // Stats by chapter
  const chapterStats = {};
  questions.forEach((q, i) => {
    const ch = q.chapter;
    if (!chapterStats[ch]) chapterStats[ch] = { correct: 0, total: 0 };
    chapterStats[ch].total++;
    if (userAnswers[i]?.isCorrect) chapterStats[ch].correct++;
  });

  const wrongQuestions = questions
    .map((q, i) => ({ q, i, answer: userAnswers[i] }))
    .filter(({ answer }) => answer && !answer.isCorrect);

  if (showReview) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="question-text" style={{ margin: 0 }}>Revisión de Errores</h2>
          <button className="btn" style={{ width: 'auto', padding: '4px 12px' }} onClick={() => setShowReview(false)}>
            [ Volver ]
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {wrongQuestions.map(({ q, i, answer }) => (
            <div key={i} className="explanation-box" style={{ borderLeft: '4px solid red' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                P{i + 1}: {q.question}
              </p>
              <p style={{ color: 'red', marginBottom: '0.3rem' }}>
                Tu respuesta: {q.options[answer.selectedOption]}
              </p>
              <p style={{ color: 'green', marginBottom: '0.3rem' }}>
                Correcta: {q.options[q.correctAnswer]}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#333' }}>
                <strong>Explicación:</strong> {q.explanation}
              </p>
            </div>
          ))}
          {wrongQuestions.length === 0 && (
            <p style={{ textAlign: 'center' }}>¡Sin errores! Excelente trabajo.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="results-container">
      <div style={{ fontSize: '48px', margin: '0 auto', color: isPassing ? 'var(--os-success)' : 'var(--os-error)' }}>
        {isPassing ? '☻' : '☹'}
      </div>

      <h2 className="question-text" style={{ marginTop: '1rem' }}>
        {isPassing ? '¡Felicidades, Aprobado!' : 'No Aprobado — Sigue Practicando'}
      </h2>

      <div className={`score-display ${isPassing ? '' : 'low'}`}>{percentage}%</div>

      <div className="results-stats">
        <div className="stat-item">
          <span className="stat-value" style={{ color: 'green' }}>{score}</span>
          <span className="stat-label">Correctas</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{ color: 'red' }}>{totalQuestions - score}</span>
          <span className="stat-label">Incorrectas</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{totalQuestions}</span>
          <span className="stat-label">Total</span>
        </div>
      </div>

      {/* Chapter breakdown */}
      <div style={{ margin: '1rem 0', textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.4rem', fontSize: '1rem' }}>Resultados por Capítulo:</p>
        {Object.entries(chapterStats).sort(([a], [b]) => a - b).map(([ch, st]) => {
          const pct = Math.round((st.correct / st.total) * 100);
          return (
            <div key={ch} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '2px 0', borderBottom: '1px dotted #ccc' }}>
              <span>Cap. {ch} — {CHAPTER_NAMES[ch]}</span>
              <span style={{ color: pct >= 65 ? 'green' : 'red', fontWeight: 'bold' }}>
                {st.correct}/{st.total} ({pct}%)
              </span>
            </div>
          );
        })}
      </div>

      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
        Mínimo para aprobar ISTQB Foundation Level: 65%
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button className="btn" onClick={onRestart} style={{ flex: 1 }}>
          [ Nueva Simulación ]
        </button>
        {wrongQuestions.length > 0 && (
          <button className="btn" onClick={() => setShowReview(true)} style={{ flex: 1 }}>
            [ Ver {wrongQuestions.length} Errores ]
          </button>
        )}
      </div>
    </div>
  );
};

export default Results;
