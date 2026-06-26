import React, { useState } from 'react';
import { t, tl, getLanguage } from '../i18n';

const Results = ({ score, totalQuestions, userAnswers, questions, onRestart }) => {
  const [showReview, setShowReview] = useState(false);
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const isPassing = percentage >= 65;
  const chapterShort = tl(getLanguage(), 'chapterShort');

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <h2 className="card-title" style={{ margin: 0 }}>{t('errorReview')}</h2>
          <button className="btn btn-secondary" style={{ width: 'auto', padding: '8px 16px' }} onClick={() => setShowReview(false)}>
            {t('backToResults')}
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {wrongQuestions.map(({ q, i, answer }) => (
            <div key={i} className="explanation-box" style={{ borderLeft: '4px solid var(--error)' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                P{i + 1}: {q.question}
              </p>
              <p style={{ color: 'var(--error)', marginBottom: '0.5rem', fontWeight: '500' }}>
                ✗ {t('yourAnswer')} {q.options[answer.selectedOption]}
              </p>
              <p style={{ color: 'var(--success)', marginBottom: '1rem', fontWeight: '500' }}>
                ✓ {t('correctLabel')} {q.options[q.correctAnswer]}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', background: 'var(--surface-solid)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <strong>{t('explanation')}</strong> {q.explanation}
              </p>
            </div>
          ))}
          {wrongQuestions.length === 0 && (
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--success)', fontWeight: '600' }}>
              🎉 {t('noErrors')}
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
        {isPassing ? t('congratsPassed') : t('notPassed')}
      </h2>

      <div className={`score-display ${isPassing ? '' : 'low'}`}>{percentage}%</div>

      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1rem', fontWeight: '500' }}>
        {t('minRequired')}
      </p>

      <div className="results-stats">
        <div className="stat-item">
          <span className="stat-value" style={{ color: 'var(--success)' }}>{score}</span>
          <span className="stat-label">{t('correct')}</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{ color: 'var(--error)' }}>{totalQuestions - score}</span>
          <span className="stat-label">{t('incorrect')}</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{totalQuestions}</span>
          <span className="stat-label">{t('total')}</span>
        </div>
      </div>

      {/* Chapter breakdown */}
      <div style={{ margin: '2rem auto', textAlign: 'left', maxWidth: '600px', background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <p style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-main)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>{t('chapterBreakdown')}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {Object.entries(chapterStats).sort(([a], [b]) => a - b).map(([ch, st]) => {
            const pct = Math.round((st.correct / st.total) * 100);
            return (
              <div key={ch} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>{t('chapter')} {ch} — {chapterShort[ch]}</span>
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

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
        <button className="btn" onClick={onRestart} style={{ minWidth: '200px' }}>
          {t('newSimulation')}
        </button>
        {wrongQuestions.length > 0 && (
          <button className="btn btn-secondary" onClick={() => setShowReview(true)} style={{ minWidth: '200px' }}>
            {t('viewErrors', { n: wrongQuestions.length })}
          </button>
        )}
      </div>

      {/* Buy Me a Coffee banner */}
      <div className="bmc-results-banner">
        <span className="bmc-results-emoji">☕</span>
        <div className="bmc-results-text">
          <strong>{isPassing ? '¡Enhorabuena! ¿Te ha sido útil?' : '¡Sigue practicando! ¿La app te está ayudando?'}</strong>
          <span>Es gratis y siempre lo será. Si quieres apoyar el proyecto, invítame a un café 🙏</span>
        </div>
        <a
          href="https://buymeacoffee.com/manuelmc"
          target="_blank"
          rel="noopener noreferrer"
          className="bmc-results-btn"
        >
          ☕ Donar
        </a>
      </div>
    </div>
  );
};

export default Results;
