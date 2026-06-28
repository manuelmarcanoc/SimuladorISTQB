import React, { useState, useEffect } from 'react';
import { t } from '../i18n';

const ACHIEVEMENTS_CONFIG = [
  {
    id: 'first_answer',
    icon: '🎯',
    get title() { return t('ach_first_title'); },
    get description() { return t('ach_first_desc'); },
    check: (stats) => stats.totalAnswered >= 1,
  },
  {
    id: 'first_pass',
    icon: '✅',
    get title() { return t('ach_pass_title'); },
    get description() { return t('ach_pass_desc'); },
    check: (stats) => stats.passedExams >= 1,
  },
  {
    id: 'streak_5',
    icon: '🔥',
    get title() { return t('ach_streak5_title'); },
    get description() { return t('ach_streak5_desc'); },
    check: (stats) => stats.bestStreak >= 5,
  },
  {
    id: 'streak_10',
    icon: '⚡',
    get title() { return t('ach_streak10_title'); },
    get description() { return t('ach_streak10_desc'); },
    check: (stats) => stats.bestStreak >= 10,
  },
  {
    id: 'hundred',
    icon: '💯',
    get title() { return t('ach_100_title'); },
    get description() { return t('ach_100_desc'); },
    check: (stats) => stats.totalAnswered >= 100,
  },
  {
    id: 'five_hundred',
    icon: '🚀',
    get title() { return t('ach_500_title'); },
    get description() { return t('ach_500_desc'); },
    check: (stats) => stats.totalAnswered >= 500,
  },
  {
    id: 'perfect',
    icon: '🏆',
    get title() { return t('ach_perfect_title'); },
    get description() { return t('ach_perfect_desc'); },
    check: (stats) => stats.perfectExams >= 1,
  },
  {
    id: 'flashmaster',
    icon: '🃏',
    get title() { return t('ach_flash_title'); },
    get description() { return t('ach_flash_desc'); },
    check: (stats) => stats.flashcardsCompleted >= 1,
  },
  {
    id: 'consistent',
    icon: '📅',
    get title() { return t('ach_const_title'); },
    get description() { return t('ach_const_desc'); },
    check: (stats) => stats.studyStreak >= 3,
  },
  {
    id: 'examinator',
    icon: '🎓',
    get title() { return t('ach_exam_title'); },
    get description() { return t('ach_exam_desc'); },
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
    <div className="retro-window" style={{ display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
      <div className="title-bar">
        <div className="title-bar-text">{t('achTitle')}</div>
        <div className="title-bar-controls">
          <button className="title-bar-btn">_</button>
          <button className="title-bar-btn">□</button>
          <button className="title-bar-btn" onClick={onClose}>X</button>
        </div>
      </div>
      <div className="window-body" style={{ overflowY: 'auto', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="question-text" style={{ margin: 0 }}>{t('myAchievements')}</h2>
          <span style={{ fontSize: '1rem', color: '#555' }}>
            {unlocked.length}/{ACHIEVEMENTS_CONFIG.length} {t('unlocked')}
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
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1rem' }}>{t('globalStats')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.95rem' }}>
            <span>{t('totalAnswered')}</span><span><strong>{stats.totalAnswered}</strong></span>
            <span>{t('totalCorrect')}</span><span><strong>{stats.totalCorrect}</strong></span>
            <span>{t('simulations')}</span><span><strong>{stats.totalExams}</strong></span>
            <span>{t('passed')}</span><span><strong>{stats.passedExams}</strong></span>
            <span>{t('perfects')}</span><span><strong>{stats.perfectExams}</strong></span>
            <span>{t('bestStreak')}</span><span><strong>{stats.bestStreak} ⚡</strong></span>
            <span>{t('flashcardsCompleted')}</span><span><strong>{stats.flashcardsCompleted}</strong></span>
          </div>
        </div>

        <button className="btn" style={{ marginTop: '1rem' }} onClick={onClose}>{t('closeBtn')}</button>
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
        <div className="achievement-popup-title">{t('achievementUnlocked')}</div>
        <div className="achievement-popup-name">{ach.title}</div>
        <div className="achievement-popup-desc">{ach.description}</div>
      </div>
    </div>
  );
};

export { ACHIEVEMENTS_CONFIG };
export default Achievements;
