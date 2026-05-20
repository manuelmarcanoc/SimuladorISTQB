import React, { useState, useEffect } from 'react';

const ACHIEVEMENTS_CONFIG = [
  {
    id: 'first_answer',
    icon: '🎯',
    title: 'Primera Respuesta',
    description: 'Respondiste tu primera pregunta.',
    check: (stats) => stats.totalAnswered >= 1,
  },
  {
    id: 'first_pass',
    icon: '✅',
    title: '¡Aprobado!',
    description: 'Superaste el 65% por primera vez.',
    check: (stats) => stats.passedExams >= 1,
  },
  {
    id: 'streak_5',
    icon: '🔥',
    title: 'Racha de 5',
    description: 'Acertaste 5 preguntas seguidas.',
    check: (stats) => stats.bestStreak >= 5,
  },
  {
    id: 'streak_10',
    icon: '⚡',
    title: 'Racha de 10',
    description: 'Acertaste 10 preguntas seguidas. ¡Imparable!',
    check: (stats) => stats.bestStreak >= 10,
  },
  {
    id: 'hundred',
    icon: '💯',
    title: '100 Preguntas',
    description: 'Respondiste 100 preguntas en total.',
    check: (stats) => stats.totalAnswered >= 100,
  },
  {
    id: 'five_hundred',
    icon: '🚀',
    title: '500 Preguntas',
    description: 'Respondiste 500 preguntas. ¡Eres un experto!',
    check: (stats) => stats.totalAnswered >= 500,
  },
  {
    id: 'perfect',
    icon: '🏆',
    title: 'Perfección',
    description: 'Obtuviste el 100% en un examen.',
    check: (stats) => stats.perfectExams >= 1,
  },
  {
    id: 'flashmaster',
    icon: '🃏',
    title: 'Flash Master',
    description: 'Completaste un mazo de Flashcards.',
    check: (stats) => stats.flashcardsCompleted >= 1,
  },
  {
    id: 'consistent',
    icon: '📅',
    title: 'Constante',
    description: 'Estudiaste durante 3 días seguidos.',
    check: (stats) => stats.studyStreak >= 3,
  },
  {
    id: 'examinator',
    icon: '🎓',
    title: 'Examinador',
    description: 'Completaste 10 simulaciones.',
    check: (stats) => stats.totalExams >= 10,
  },
];

const STORAGE_KEY_STATS = 'istqb_stats';
const STORAGE_KEY_ACHIEVEMENTS = 'istqb_achievements';

export function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS);
    return raw ? JSON.parse(raw) : getDefaultStats();
  } catch {
    return getDefaultStats();
  }
}

export function getDefaultStats() {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    passedExams: 0,
    perfectExams: 0,
    totalExams: 0,
    bestStreak: 0,
    flashcardsCompleted: 0,
    studyStreak: 0,
    lastStudyDate: null,
    examHistory: [],
  };
}

export function saveStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
  } catch {}
}

export function loadAchievements() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAchievements(list) {
  try {
    localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(list));
  } catch {}
}

export function checkAndUnlockAchievements(stats, currentUnlocked) {
  const newlyUnlocked = [];
  const allUnlocked = [...currentUnlocked];
  for (const ach of ACHIEVEMENTS_CONFIG) {
    if (!allUnlocked.includes(ach.id) && ach.check(stats)) {
      allUnlocked.push(ach.id);
      newlyUnlocked.push(ach);
    }
  }
  return { allUnlocked, newlyUnlocked };
}

/* ────────────────────────────────────────────────────────── */

const Achievements = ({ onClose }) => {
  const [stats] = useState(() => loadStats());
  const [unlocked] = useState(() => loadAchievements());

  return (
    <div className="app-container quiz-main-container" style={{ alignItems: 'flex-start', paddingTop: '20px' }}>
      <div className="retro-window quiz-window">
        <div className="title-bar">
          <div className="title-bar-text">🏆 Logros — Simulador ISTQB</div>
          <div className="title-bar-controls">
            <button className="title-bar-btn">_</button>
            <button className="title-bar-btn">□</button>
            <button className="title-bar-btn" onClick={onClose}>X</button>
          </div>
        </div>
        <div className="window-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 className="question-text" style={{ margin: 0 }}>Mis Logros</h2>
            <span style={{ fontSize: '1rem', color: '#555' }}>
              {unlocked.length}/{ACHIEVEMENTS_CONFIG.length} desbloqueados
            </span>
          </div>

          <div className="achievements-grid">
            {ACHIEVEMENTS_CONFIG.map((ach) => {
              const isUnlocked = unlocked.includes(ach.id);
              return (
                <div key={ach.id} className={`achievement-card ${isUnlocked ? 'achievement-unlocked' : 'achievement-locked'}`}>
                  <div className="achievement-icon">{isUnlocked ? ach.icon : '🔒'}</div>
                  <div className="achievement-info">
                    <div className="achievement-title">{ach.title}</div>
                    <div className="achievement-desc">{isUnlocked ? ach.description : '???'}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid #aaa', paddingTop: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1rem' }}>Estadísticas Globales:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.95rem' }}>
              <span>Total respondidas:</span><span><strong>{stats.totalAnswered}</strong></span>
              <span>Total correctas:</span><span><strong>{stats.totalCorrect}</strong></span>
              <span>Simulaciones:</span><span><strong>{stats.totalExams}</strong></span>
              <span>Aprobadas:</span><span><strong>{stats.passedExams}</strong></span>
              <span>Perfectas (100%):</span><span><strong>{stats.perfectExams}</strong></span>
              <span>Mejor racha:</span><span><strong>{stats.bestStreak} ⚡</strong></span>
              <span>Flashcards completadas:</span><span><strong>{stats.flashcardsCompleted}</strong></span>
            </div>
          </div>

          <button className="btn" style={{ marginTop: '1rem' }} onClick={onClose}>[ Cerrar ]</button>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────── Achievement Popup ──────────────────────────── */

export const AchievementPopup = ({ achievements, onDismiss }) => {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!achievements || achievements.length === 0) return;
    const timer = setTimeout(() => {
      if (current < achievements.length - 1) {
        setCurrent(c => c + 1);
      } else {
        setVisible(false);
        onDismiss && onDismiss();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [current, achievements, onDismiss]);

  if (!visible || !achievements || achievements.length === 0) return null;
  const ach = achievements[current];

  return (
    <div className="achievement-popup" onClick={() => {
      if (current < achievements.length - 1) setCurrent(c => c + 1);
      else { setVisible(false); onDismiss && onDismiss(); }
    }}>
      <div className="achievement-popup-icon">{ach.icon}</div>
      <div className="achievement-popup-text">
        <div className="achievement-popup-title">¡Logro Desbloqueado!</div>
        <div className="achievement-popup-name">{ach.title}</div>
        <div className="achievement-popup-desc">{ach.description}</div>
      </div>
    </div>
  );
};

export { ACHIEVEMENTS_CONFIG };
export default Achievements;
