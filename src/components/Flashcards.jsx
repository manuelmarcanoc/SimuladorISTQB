import React, { useState, useEffect } from 'react';

export default function Flashcards({ onClose, language = 'es' }) {
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  const [known, setKnown] = useState(0);
  const [dontKnow, setDontKnow] = useState([]);
  const [filterChapter, setFilterChapter] = useState(0); // 0 = all
  const [isLoading, setIsLoading] = useState(true);

  // Load the appropriate language flashcards
  useEffect(() => {
    import(`../data/flashcards${language === 'es' ? '' : '_' + language}.json`)
      .then((module) => {
        const flashcards = module.default;
        const arr = [...flashcards];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setDeck(arr);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load flashcards for language:", language, err);
        setIsLoading(false);
      });
  }, [language]);

  if (isLoading) {
    return <div className="flashcards-container"><div className="fc-header">Cargando...</div></div>;
  }

  if (deck.length === 0) {
    return <div className="flashcards-container"><div className="fc-header">Error loading flashcards.</div></div>;
  }

  const filtered = filterChapter === 0 ? deck : deck.filter(c => c.chapter === filterChapter);
  const card = filtered.length > 0 ? filtered[index % filtered.length] : null;

  const handleKnow = () => {
    setKnown(k => k + 1);
    setIndex(i => i + 1);
  };
  const handleDontKnow = () => {
    if (card) {
      setDontKnow(d => [...d, card]);
      setIndex(i => i + 1);
    }
  };
  const reviewDontKnow = () => {
    if (dontKnow.length === 0) return;
    setDeck([...dontKnow]);
    setDontKnow([]);
    setKnown(0);
    setIndex(0);
  };
  const restartAll = () => {
    import(`../data/flashcards${language === 'es' ? '' : '_' + language}.json`)
      .then((module) => {
        const flashcards = module.default;
        const arr = [...flashcards];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setDeck(arr);
        setKnown(0);
        setDontKnow([]);
        setIndex(0);
        setFilterChapter(0);
      });
  };

  const currentPos = filtered.length > 0 ? index % filtered.length : 0;
  const laps = filtered.length > 0 ? Math.floor(index / filtered.length) : 0;

  return (
    <div className="flashcards-container">
      {/* Header */}
      <div className="fc-header">
        <h2 className="fc-title">🃏 Flashcards ISTQB</h2>
        <div className="fc-stats">
          <span className="fc-stat fc-stat-known">✅ {known}</span>
          <span className="fc-stat fc-stat-nope">❌ {dontKnow.length}</span>
          <span className="fc-stat">{currentPos + 1}/{filtered.length}</span>
        </div>
      </div>

      {/* Chapter filter */}
      <div className="fc-filter">
        {[0,1,2,3,4,5,6].map(ch => (
          <button
            key={ch}
            className={`fc-filter-btn ${filterChapter === ch ? 'fc-filter-active' : ''}`}
            onClick={() => { setFilterChapter(ch); setIndex(0); }}
          >
            {ch === 0 ? 'All' : `Cap.${ch}`}
          </button>
        ))}
      </div>

      {/* Card */}
      {card ? (
        <FlipCard key={`${index}-${filterChapter}`} card={card} onKnow={handleKnow} onDontKnow={handleDontKnow} language={language} />
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center' }}>No cards in this chapter.</div>
      )}

      {/* Bottom actions */}
      <div className="fc-bottom">
        {dontKnow.length > 0 && (
          <button className="fc-action-btn fc-review-btn" onClick={reviewDontKnow}>
            🔁 {dontKnow.length}
          </button>
        )}
        <button className="fc-action-btn" onClick={restartAll}>
          🔀
        </button>
        {laps > 0 && <span className="fc-lap">Lap {laps + 1}</span>}
      </div>
    </div>
  );
}

function FlipCard({ card, onKnow, onDontKnow, language }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flashcard-scene" onClick={() => setFlipped(f => !f)}>
      <div className={`flashcard-card ${flipped ? 'is-flipped' : ''}`}>
        <div className="flashcard-face flashcard-front">
          <span className="flashcard-chapter">Cap. {card.chapter}</span>
          <p className="flashcard-term">{card.front}</p>
          <span className="flashcard-hint">Tap</span>
        </div>
        <div className="flashcard-face flashcard-back">
          <span className="flashcard-chapter">Cap. {card.chapter}</span>
          <p className="flashcard-definition">{card.back}</p>
        </div>
      </div>
      {flipped && (
        <div className="flashcard-actions" onClick={e => e.stopPropagation()}>
          <button className="fc-btn fc-no" onClick={onDontKnow}>❌</button>
          <button className="fc-btn fc-yes" onClick={onKnow}>✅</button>
        </div>
      )}
    </div>
  );
}
