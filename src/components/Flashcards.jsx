import React, { useState, useCallback, useEffect, useRef } from 'react';
import questionsData from '../data/questions.json';
import {
  loadStats, saveStats, loadAchievements, saveAchievements,
  checkAndUnlockAchievements,
} from './Achievements';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CHAPTER_NAMES = {
  1: 'Cap.1 - Fundamentos',
  2: 'Cap.2 - SDLC',
  3: 'Cap.3 - Est\u00e1ticas',
  4: 'Cap.4 - An\u00e1lisis',
  5: 'Cap.5 - Gesti\u00f3n',
  6: 'Cap.6 - Herramientas',
};

const DIFF_COLORS = {
  easy: '#a8f5a8',
  medium: '#ffe8a8',
  hard: '#f5a8a8',
};

const Flashcards = ({ onClose, onNewAchievements }) => {
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [unknown, setUnknown] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [done, setDone] = useState(false);
  const [chapterFilter, setChapterFilter] = useState('all');
  const [started, setStarted] = useState(false);
  const [animDir, setAnimDir] = useState(null); // 'right' | 'left'
  const cardRef = useRef(null);

  const startDeck = useCallback((filter) => {
    let filtered = [...questionsData];
    if (filter !== 'all') filtered = filtered.filter(q => q.chapter === parseInt(filter, 10));
    const shuffled = shuffle(filtered);
    setDeck(shuffled);
    setIndex(0);
    setFlipped(false);
    setKnown(0);
    setUnknown(0);
    setStreak(0);
    setDone(false);
    setStarted(true);
  }, []);

  const handleFlip = useCallback(() => {
    setFlipped(f => !f);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (!started || done) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!flipped) { setFlipped(true); return; }
      }
      if (flipped) {
        if (e.key === 'ArrowRight' || e.key === 'k') handleKnown();
        if (e.key === 'ArrowLeft' || e.key === 'u') handleUnknown();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, done, flipped, index]);

  const advance = useCallback((wasKnown) => {
    setAnimDir(wasKnown ? 'right' : 'left');
    setTimeout(() => {
      setAnimDir(null);
      setFlipped(false);
      if (index + 1 >= deck.length) {
        // Save flashcard completion stats
        const stats = loadStats();
        const updatedStats = {
          ...stats,
          flashcardsCompleted: (stats.flashcardsCompleted || 0) + 1,
        };
        saveStats(updatedStats);
        const currentUnlocked = loadAchievements();
        const { allUnlocked, newlyUnlocked } = checkAndUnlockAchievements(updatedStats, currentUnlocked);
        if (newlyUnlocked.length > 0) {
          saveAchievements(allUnlocked);
          onNewAchievements && onNewAchievements(newlyUnlocked);
        }
        setDone(true);
      } else {
        setIndex(i => i + 1);
      }
    }, 350);
  }, [index, deck.length, onNewAchievements]);

  const handleKnown = useCallback(() => {
    setKnown(k => k + 1);
    const newStreak = streak + 1;
    setStreak(newStreak);
    setBestStreak(b => Math.max(b, newStreak));
    advance(true);
  }, [streak, advance]);

  const handleUnknown = useCallback(() => {
    setUnknown(u => u + 1);
    setStreak(0);
    advance(false);
  }, [advance]);

  const currentCard = deck[index];
  const progress = deck.length > 0 ? Math.round(((known + unknown) / deck.length) * 100) : 0;

  if (!started) {
    return (
      <div className="app-container quiz-main-container" style={{ alignItems: 'flex-start', paddingTop: '20px' }}>
        <div className="retro-window quiz-window">
          <div className="title-bar">
            <div className="title-bar-text">Flashcards.exe — Memoriza Conceptos ISTQB</div>
            <div className="title-bar-controls">
              <button className="title-bar-btn">_</button>
              <button className="title-bar-btn">□</button>
              <button className="title-bar-btn" onClick={onClose}>X</button>
            </div>
          </div>
          <div className="window-body">
            <h2 className="question-text" style={{ textAlign: 'center' }}>🃏 Modo Flashcards</h2>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1rem', color: '#555' }}>
              Repasa los conceptos clave volteando tarjetas. Marca si lo sabías o no.
            </p>
            <div className="setup-group" style={{ marginBottom: '1.2rem' }}>
              <label>Filtrar por Capítulo:</label>
              <select className="setup-select" value={chapterFilter} onChange={e => setChapterFilter(e.target.value)}>
                <option value="all">Todos los Capítulos ({questionsData.length} tarjetas)</option>
                {Object.entries(CHAPTER_NAMES).map(([v, label]) => (
                  <option key={v} value={v}>{label} ({questionsData.filter(q => q.chapter === parseInt(v, 10)).length})</option>
                ))}
              </select>
            </div>
            <div className="flashcard-hint-box">
              <strong>Controles:</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                <li><kbd>Espacio / Enter</kbd> — Voltear tarjeta</li>
                <li><kbd>→ / K</kbd> — Lo supe ✓</li>
                <li><kbd>← / U</kbd> — No lo supe ✗</li>
              </ul>
            </div>
            <button className="btn" style={{ marginTop: '1.2rem' }} onClick={() => startDeck(chapterFilter)}>
              [ Empezar Flashcards ]
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (done) {
    const pct = deck.length > 0 ? Math.round((known / deck.length) * 100) : 0;
    return (
      <div className="app-container quiz-main-container" style={{ alignItems: 'flex-start', paddingTop: '20px' }}>
        <div className="retro-window quiz-window">
          <div className="title-bar">
            <div className="title-bar-text">Flashcards.exe — Resultados</div>
            <div className="title-bar-controls">
              <button className="title-bar-btn" onClick={onClose}>X</button>
            </div>
          </div>
          <div className="window-body results-container">
            <div style={{ fontSize: '3rem', margin: '0.5rem 0' }}>{pct >= 70 ? '🏆' : '📚'}</div>
            <h2 className="question-text">¡Mazo Completado!</h2>
            <div className={`score-display ${pct < 70 ? 'low' : ''}`}>{pct}%</div>
            <div className="results-stats">
              <div className="stat-item">
                <span className="stat-value" style={{ color: 'green' }}>{known}</span>
                <span className="stat-label">Lo supe ✓</span>
              </div>
              <div className="stat-item">
                <span className="stat-value" style={{ color: 'red' }}>{unknown}</span>
                <span className="stat-label">No supe ✗</span>
              </div>
              <div className="stat-item">
                <span className="stat-value" style={{ color: '#00a' }}>{bestStreak}</span>
                <span className="stat-label">Mejor Racha</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="btn" style={{ flex: 1 }} onClick={() => startDeck(chapterFilter)}>
                [ Repetir Mazo ]
              </button>
              <button className="btn" style={{ flex: 1 }} onClick={() => setStarted(false)}>
                [ Cambiar Capítulo ]
              </button>
              <button className="btn" style={{ flex: 1 }} onClick={onClose}>
                [ Cerrar ]
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container quiz-main-container" style={{ alignItems: 'flex-start', paddingTop: '20px' }}>
      <div className="retro-window quiz-window">
        <div className="title-bar">
          <div className="title-bar-text">
            Flashcards.exe [{index + 1}/{deck.length}]
            {streak >= 3 && <span style={{ color: '#ffcc00' }}> 🔥 Racha: {streak}</span>}
          </div>
          <div className="title-bar-controls">
            <button className="title-bar-btn">_</button>
            <button className="title-bar-btn">□</button>
            <button className="title-bar-btn" onClick={onClose}>X</button>
          </div>
        </div>
        <div className="window-body">
          {/* Progress bar */}
          <div className="flashcard-progress-bar-track">
            <div className="flashcard-progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.8rem', color: '#555' }}>
            <span style={{ color: 'green' }}>✓ {known}</span>
            <span>{index + 1} / {deck.length}</span>
            <span style={{ color: 'red' }}>✗ {unknown}</span>
          </div>

          {/* Flashcard */}
          <div
            ref={cardRef}
            className={`flashcard-scene ${animDir ? `flashcard-exit-${animDir}` : ''}`}
            onClick={handleFlip}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === ' ' && handleFlip()}
            aria-label={flipped ? 'Tarjeta volteada. Pulsa espacio para voltear.' : 'Pulsa para voltear la tarjeta'}
          >
            <div className={`flashcard-inner ${flipped ? 'is-flipped' : ''}`}>
              {/* Front */}
              <div className="flashcard-face flashcard-front">
                <div className="flashcard-header">
                  <span className="topic-badge">
                    {CHAPTER_NAMES[currentCard.chapter] || `Cap.${currentCard.chapter}`}
                  </span>
                  <span
                    className="topic-badge"
                    style={{ background: DIFF_COLORS[currentCard.difficulty] || '#eee', color: '#000' }}
                  >
                    {currentCard.difficulty || 'normal'}
                  </span>
                </div>
                <div className="flashcard-question">{currentCard.question}</div>
                <div className="flashcard-hint">[ Click o Espacio para voltear ]</div>
              </div>

              {/* Back */}
              <div className="flashcard-face flashcard-back">
                <div className="flashcard-header">
                  <span style={{ color: '#008000', fontWeight: 'bold', fontSize: '1.1rem' }}>✓ Respuesta Correcta</span>
                </div>
                <div className="flashcard-answer">{currentCard.options[currentCard.correctAnswer]}</div>
                {currentCard.explanation && (
                  <div className="flashcard-explanation">{currentCard.explanation}</div>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          {flipped && (
            <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
              <button
                className="btn flashcard-btn-unknown"
                onClick={handleUnknown}
                style={{ flex: 1, background: '#f5a8a8' }}
              >
                [ ✗ No lo supe ]
              </button>
              <button
                className="btn flashcard-btn-known"
                onClick={handleKnown}
                style={{ flex: 1, background: '#a8f5a8' }}
              >
                [ ✓ Lo supe ]
              </button>
            </div>
          )}
          {!flipped && (
            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
              ↑ Click en la tarjeta para ver la respuesta ↑
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
