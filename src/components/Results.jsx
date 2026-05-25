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
      <div className="animate-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="card-title" style={{ margin: 0 }}>Revisión de Errores</h2>
          <button className="btn btn-secondary" style={{ width: 'auto', padding: '8px 16px' }} onClick={() => setShowReview(false)}>
            Volver a Resultados
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {wrongQuestions.map(({ q, i, answer }) => (
            <div key={i} className="explanation-box" style={{ borderLeft: '4px solid var(--error)' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                P{i + 1}: {q.question}
              </p>
              <p style={{ color: 'var(--error)', marginBottom: '0.5rem', fontWeight: '500' }}>
                ✗ Tu respuesta: {q.options[answer.selectedOption]}
              </p>
              <p style={{ color: 'var(--success)', marginBottom: '1rem', fontWeight: '500' }}>
                ✓ Correcta: {q.options[q.correctAnswer]}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>Explicación:</strong> {q.explanation}
              </p>
            </div>
          ))}
          {wrongQuestions.length === 0 && (
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--success)', fontWeight: '600' }}>
              🎉 ¡Sin errores! Excelente trabajo.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="results-card animate-in">
      <div style={{ fontSize: '72px', margin: '0 auto', color: isPassing ? 'var(--success)' : 'var(--error)' }}>
        {isPassing ? '🎓' : '📚'}
      </div>

      <h2 className="card-title" style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        {isPassing ? '¡Felicidades, Aprobado!' : 'No Aprobado — Sigue Practicando'}
      </h2>
      
      <div className={`score-display ${isPassing ? '' : 'low'}`}>{percentage}%</div>

      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1rem', fontWeight: '500' }}>
        Mínimo requerido para aprobar ISTQB: 65%
      </p>

      <div className="results-stats">
        <div className="stat-item">
          <span className="stat-value" style={{ color: 'var(--success)' }}>{score}</span>
          <span className="stat-label">Correctas</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{ color: 'var(--error)' }}>{totalQuestions - score}</span>
          <span className="stat-label">Incorrectas</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{totalQuestions}</span>
          <span className="stat-label">Total</span>
        </div>
      </div>

      {/* Chapter breakdown */}
      <div style={{ margin: '2rem auto', textAlign: 'left', maxWidth: '600px', background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <p style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-main)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>Desglose por Capítulo</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {Object.entries(chapterStats).sort(([a], [b]) => a - b).map(([ch, st]) => {
            const pct = Math.round((st.correct / st.total) * 100);
            return (
              <div key={ch} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Cap. {ch} — {CHAPTER_NAMES[ch]}</span>
                <span style={{ 
                  color: pct >= 65 ? 'var(--success)' : 'var(--error)', 
                  fontWeight: '700',
                  background: pct >= 65 ? 'var(--success-bg)' : 'var(--error-bg)',
                  padding: '4px 12px',
                  borderRadius: '99px'
                }}>
                  {st.correct}/{st.total} ({pct}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '3rem' }}>
        <button className="btn" onClick={onRestart} style={{ minWidth: '200px' }}>
          Nueva Simulación
        </button>
        {wrongQuestions.length > 0 && (
          <button className="btn btn-secondary" onClick={() => setShowReview(true)} style={{ minWidth: '200px' }}>
            Ver {wrongQuestions.length} Errores
          </button>
        )}
      </div>
    </div>
  );
};

export default Results;
