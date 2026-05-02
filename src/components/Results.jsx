import React from 'react';

const Results = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassing = percentage >= 65; // ISTQB passing score is 65% (26/40)

  return (
    <div className="results-container">
      <div style={{ fontSize: '48px', margin: '0 auto', color: isPassing ? "var(--os-success)" : "var(--os-error)" }}>
        {isPassing ? '☻' : '☹'}
      </div>
      
      <h2 className="question-text" style={{ marginTop: '1rem' }}>
        {isPassing ? '¡Felicidades, Aprobado!' : 'No Aprobado, Sigue Practicando'}
      </h2>
      
      <div className={`score-display ${isPassing ? '' : 'low'}`}>
        {percentage}%
      </div>

      <div className="results-stats">
        <div className="stat-item">
          <span className="stat-value">{score}</span>
          <span className="stat-label">Correctas</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{totalQuestions - score}</span>
          <span className="stat-label">Incorrectas</span>
        </div>
      </div>

      <p style={{ color: "var(--text-muted)", marginBottom: '2rem', fontSize: '0.9rem' }}>
        El porcentaje necesario para aprobar el examen ISTQB Foundation Level es del 65%.
      </p>

      <button className="btn" onClick={onRestart}>
        [ Reintentar ]
      </button>
    </div>
  );
};

export default Results;
