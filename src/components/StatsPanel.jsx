import React, { useState } from 'react';
import { loadStats } from './Achievements';

const CHAPTER_NAMES = {
  1: 'Fundamentos',
  2: 'SDLC',
  3: 'Est\u00e1ticas',
  4: 'An\u00e1lisis',
  5: 'Gesti\u00f3n',
  6: 'Herramientas',
};

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

const StatsPanel = ({ onClose }) => {
  const [stats] = useState(() => loadStats());
  const history = stats.examHistory || [];
  const totalPct = stats.totalAnswered > 0
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
    : 0;

  // Calculate per-chapter accuracy from exam history
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
    <div className="retro-window" style={{ display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
      <div className="title-bar">
        <div className="title-bar-text">📊 Estadísticas — Simulador ISTQB</div>
        <div className="title-bar-controls">
          <button className="title-bar-btn">_</button>
          <button className="title-bar-btn">□</button>
          <button className="title-bar-btn" onClick={onClose}>X</button>
        </div>
      </div>
      <div className="window-body" style={{ overflowY: 'auto', flex: 1 }}>

        {/* Resumen global */}
        <div className="stats-summary-grid">
          <div className="stats-summary-card">
            <div className="stats-summary-value">{stats.totalAnswered}</div>
            <div className="stats-summary-label">Preguntas respondidas</div>
          </div>
          <div className="stats-summary-card">
            <div className="stats-summary-value" style={{ color: totalPct >= 65 ? 'green' : 'inherit' }}>{totalPct}%</div>
            <div className="stats-summary-label">Acierto global</div>
          </div>
          <div className="stats-summary-card">
            <div className="stats-summary-value">{stats.totalExams}</div>
            <div className="stats-summary-label">Simulaciones</div>
          </div>
          <div className="stats-summary-card">
            <div className="stats-summary-value" style={{ color: 'green' }}>{stats.passedExams}</div>
            <div className="stats-summary-label">Aprobadas</div>
          </div>
          <div className="stats-summary-card">
            <div className="stats-summary-value" style={{ color: '#00a' }}>{stats.bestStreak}</div>
            <div className="stats-summary-label">Mejor racha ⚡</div>
          </div>
          <div className="stats-summary-card">
            <div className="stats-summary-value">{stats.perfectExams}</div>
            <div className="stats-summary-label">Exámenes perfectos 🏆</div>
          </div>
        </div>

        {/* Gráfica por capítulo */}
        {Object.keys(chapterAcc).length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.7rem' }}>Acierto por Capítulo (histórico):</p>
            <div className="stats-chart">
              {Object.entries(chapterAcc).sort(([a], [b]) => a - b).map(([ch, st]) => {
                const pct = Math.round((st.correct / st.total) * 100);
                const barColor = pct >= 65 ? '#4caf50' : pct >= 45 ? '#ff9800' : '#f44336';
                return (
                  <div key={ch} className="stats-chart-row">
                    <span className="stats-chart-label">Cap.{ch} — {CHAPTER_NAMES[ch]}</span>
                    <div className="stats-chart-bar-track">
                      <div className="stats-chart-bar-fill" style={{ width: `${pct}%`, background: barColor }} />
                    </div>
                    <span className="stats-chart-pct" style={{ color: barColor }}>{pct}%</span>
                  </div>
                );
              })}
              <div className="stats-chart-row" style={{ marginTop: '4px', opacity: 0.6 }}>
                <span className="stats-chart-label"></span>
                <div className="stats-chart-bar-track" style={{ background: 'transparent' }}>
                  <div style={{ position: 'absolute', left: '65%', top: 0, bottom: 0, width: '2px', background: '#000080', opacity: 0.5 }} />
                </div>
                <span className="stats-chart-pct" style={{ fontSize: '0.8rem', color: '#000080' }}>65%</span>
              </div>
            </div>
          </div>
        )}

        {/* Historial de simulaciones */}
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Últimas {Math.min(history.length, 10)} simulaciones:
          </p>
          {history.length === 0 ? (
            <p style={{ color: '#666', fontSize: '0.95rem', textAlign: 'center', padding: '1rem' }}>
              Aún no hay simulaciones registradas. ¡Empieza un examen!
            </p>
          ) : (
            <div className="stats-history-table">
              <div className="stats-history-header">
                <span>Fecha</span>
                <span>Preguntas</span>
                <span>Correctas</span>
                <span>%</span>
                <span>Estado</span>
              </div>
              {[...history].reverse().slice(0, 10).map((exam, i) => {
                const pct = Math.round((exam.correct / exam.total) * 100);
                return (
                  <div key={i} className={`stats-history-row ${pct >= 65 ? 'history-pass' : 'history-fail'}`}>
                    <span>{formatDate(exam.date)}</span>
                    <span>{exam.total}</span>
                    <span>{exam.correct}</span>
                    <span style={{ fontWeight: 'bold', color: pct >= 65 ? 'green' : 'red' }}>{pct}%</span>
                    <span>{pct >= 65 ? '✅ OK' : '❌ No'}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button className="btn" style={{ marginTop: '1rem' }} onClick={onClose}>[ Cerrar ]</button>
      </div>
    </div>
  );
};

export default StatsPanel;
