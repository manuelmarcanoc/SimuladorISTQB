import React, { useState } from 'react';
import { loadStats } from './Achievements';
import { t, tl, getLanguage } from '../i18n';

function formatDate(dateStr, locale) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

const StatsPanel = ({ language }) => {
  const CHAPTER_NAMES = tl(getLanguage(), 'chapterShort');
  const locale = tl(getLanguage(), 'locale');
  const [stats] = useState(() => loadStats());
  const history = stats.examHistory || [];
  const totalPct = stats.totalAnswered > 0
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
    : 0;

  const chapterAcc = {};
  for (const exam of history) {
    if (!exam.chapterStats) continue;
    for (const [ch, st] of Object.entries(exam.chapterStats)) {
      if (!chapterAcc[ch]) chapterAcc[ch] = { correct: 0, total: 0 };
      chapterAcc[ch].correct += st.correct;
      chapterAcc[ch].total += st.total;
    }
  }

  return (
    <div className="card animate-in" style={{ padding: '0', overflow: 'hidden' }}>
      <div className="card-header" style={{ margin: 0, padding: '1.5rem 2rem', background: 'var(--primary-light)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          {t('stats')}
        </div>
      </div>
      
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.25rem', fontFamily: 'Outfit, sans-serif' }}>{stats.totalAnswered}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('questionsLabel')}</div>
          </div>
          <div style={{ background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: totalPct >= 65 ? 'var(--success)' : 'var(--text-main)', marginBottom: '0.25rem', fontFamily: 'Outfit, sans-serif' }}>{totalPct}%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('globalAccuracy')}</div>
          </div>
          <div style={{ background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.25rem', fontFamily: 'Outfit, sans-serif' }}>{stats.totalExams}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('simulations')}</div>
          </div>
          <div style={{ background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success)', marginBottom: '0.25rem', fontFamily: 'Outfit, sans-serif' }}>{stats.passedExams}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('passedLabel')}</div>
          </div>
          <div style={{ background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '0.25rem', fontFamily: 'Outfit, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              {stats.bestStreak}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('bestStreak')}</div>
          </div>
          <div style={{ background: 'var(--surface-solid)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--warning)', marginBottom: '0.25rem', fontFamily: 'Outfit, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
              {stats.perfectExams}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('perfect')}</div>
          </div>
        </div>

        {Object.keys(chapterAcc).length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>{t('accuracyByChapter')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {Object.entries(chapterAcc).sort(([a], [b]) => a - b).map(([ch, st]) => {
                const pct = Math.round((st.correct / st.total) * 100);
                const barColor = pct >= 65 ? 'var(--success)' : pct >= 45 ? 'var(--warning)' : 'var(--error)';
                return (
                  <div key={ch} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 40px', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>{t('chapter')}{ch} — {CHAPTER_NAMES[ch]}</span>
                    <div style={{ height: '8px', background: 'var(--primary-light)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, background: barColor, height: '100%', borderRadius: '4px' }} />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: barColor, textAlign: 'right' }}>{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>{t('recentSimulations')}</h3>
          {history.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-md)' }}>
              {t('noSimulations')}
            </p>
          ) : (
            <div style={{ background: 'var(--surface-solid)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', padding: '1rem', background: 'var(--primary-light)', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <span>{t('dateLabel')}</span>
                <span>{t('total')}</span>
                <span>{t('correct')}</span>
                <span>%</span>
                <span>{t('statusLabel')}</span>
              </div>
              {[...history].reverse().slice(0, 10).map((exam, i) => {
                const pct = Math.round((exam.correct / exam.total) * 100);
                const isPass = pct >= 65;
                return (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', padding: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.95rem', color: 'var(--text-muted)', alignItems: 'center' }}>
                    <span>{formatDate(exam.date, locale)}</span>
                    <span>{exam.total}</span>
                    <span>{exam.correct}</span>
                    <span style={{ fontWeight: '700', color: isPass ? 'var(--success)' : 'var(--error)' }}>{pct}%</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: isPass ? 'var(--success)' : 'var(--error)', fontWeight: '500' }}>
                      {isPass ? (
                        <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Pass</>
                      ) : (
                        <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Fail</>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
