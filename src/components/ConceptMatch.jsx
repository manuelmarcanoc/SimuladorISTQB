import React, { useState, useEffect, useCallback } from 'react';
import conceptsData from '../data/concepts.json';
import { loadStats, saveStats, loadAchievements, saveAchievements, checkAndUnlockAchievements } from './Achievements';

function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

const ConceptMatch = ({ onClose, onNewAchievements }) => {
  const [roundTerms, setRoundTerms] = useState([]);
  const [roundDefs, setRoundDefs] = useState([]);
  const [matchedIds, setMatchedIds] = useState(new Set());
  
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedDef, setSelectedDef] = useState(null);
  const [errorPair, setErrorPair] = useState(null); // {termId, defId}
  
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [roundComplete, setRoundComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const startNewRound = useCallback(() => {
    // Pick 5 random concepts
    const shuffledConcepts = shuffleArray(conceptsData).slice(0, 5);
    
    // Assign IDs for matching logic
    const roundData = shuffledConcepts.map((item, index) => ({
      ...item,
      id: index
    }));

    // Split into terms and defs, then shuffle independently
    const terms = shuffleArray(roundData.map(item => ({ id: item.id, text: item.term })));
    const defs = shuffleArray(roundData.map(item => ({ id: item.id, text: item.definition })));

    setRoundTerms(terms);
    setRoundDefs(defs);
    setMatchedIds(new Set());
    setSelectedTerm(null);
    setSelectedDef(null);
    setErrorPair(null);
    setRoundComplete(false);
    setIsStarted(true);
  }, []);

  const handleTermClick = (id) => {
    if (matchedIds.has(id)) return;
    if (selectedTerm === id) {
      setSelectedTerm(null);
      return;
    }
    setSelectedTerm(id);
  };

  const handleDefClick = (id) => {
    if (matchedIds.has(id)) return;
    if (selectedDef === id) {
      setSelectedDef(null);
      return;
    }
    setSelectedDef(id);
  };

  // Evaluate matches
  useEffect(() => {
    if (selectedTerm !== null && selectedDef !== null) {
      if (selectedTerm === selectedDef) {
        // Correct match
        setMatchedIds(prev => new Set(prev).add(selectedTerm));
        setScore(s => s + 10 + (streak * 2));
        setStreak(s => s + 1);
        setSelectedTerm(null);
        setSelectedDef(null);
      } else {
        // Wrong match
        setStreak(0);
        setErrorPair({ termId: selectedTerm, defId: selectedDef });
        
        // Clear error after animation
        setTimeout(() => {
          setErrorPair(null);
          setSelectedTerm(null);
          setSelectedDef(null);
        }, 600);
      }
    }
  }, [selectedTerm, selectedDef, streak]);

  // Check round complete
  useEffect(() => {
    if (isStarted && matchedIds.size === 5 && !roundComplete) {
      setRoundComplete(true);
      // Update global stats for achievements
      const stats = loadStats();
      const updatedStats = { ...stats, flashcardsCompleted: (stats.flashcardsCompleted || 0) + 1 };
      saveStats(updatedStats);
      const currentUnlocked = loadAchievements();
      const { allUnlocked, newlyUnlocked } = checkAndUnlockAchievements(updatedStats, currentUnlocked);
      if (newlyUnlocked.length > 0) {
        saveAchievements(allUnlocked);
        if (onNewAchievements) onNewAchievements(newlyUnlocked);
      }
    }
  }, [matchedIds.size, isStarted, roundComplete, onNewAchievements]);

  return (
    <div className="retro-window flashcard-window-frame">
      <div className="title-bar">
        <div className="title-bar-text">
          Conecta.exe — {isStarted ? `Puntos: ${score}` : 'Minijuego ISTQB'}
          {streak >= 3 && <span style={{ color: '#ffcc00' }}> 🔥 Racha x{streak}</span>}
        </div>
        <div className="title-bar-controls">
          <button className="title-bar-btn">_</button>
          <button className="title-bar-btn">□</button>
          <button className="title-bar-btn" onClick={onClose}>X</button>
        </div>
      </div>

      <div className="window-body flashcard-window-body" style={{ display: 'flex', flexDirection: 'column' }}>
        {!isStarted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <h2>🔗 Conecta Conceptos</h2>
            <p style={{ margin: '1rem 0', color: '#555', lineHeight: '1.5' }}>
              El examen ISTQB requiere conocer a la perfección su terminología.<br/>
              Empareja cada <strong>término</strong> con su <strong>definición</strong> correcta.<br/>
              ¡Gana más puntos por hacer combos sin fallar!
            </p>
            <button className="btn" style={{ marginTop: '1.5rem', padding: '8px 20px', fontSize: '1.1rem' }} onClick={startNewRound}>
              [ Empezar Juego ]
            </button>
          </div>
        ) : roundComplete ? (
          <div className="results-container" style={{ flexGrow: 1, justifyContent: 'center' }}>
            <div style={{ fontSize: '3rem' }}>🏆</div>
            <h2 className="question-text">¡Ronda Completada!</h2>
            <div className="score-display">{score} pts</div>
            <p style={{ marginBottom: '2rem' }}>¡Excelente! Has emparejado todos los conceptos correctamente.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn" onClick={startNewRound}>[ Jugar Siguiente Ronda ]</button>
              <button className="btn" onClick={onClose}>[ Cerrar ]</button>
            </div>
          </div>
        ) : (
          <div className="match-board">
            <div className="match-column">
              <h3 className="match-col-title">Términos</h3>
              {roundTerms.map(t => {
                const isMatched = matchedIds.has(t.id);
                const isSelected = selectedTerm === t.id;
                const isError = errorPair?.termId === t.id;
                return (
                  <button
                    key={`term-${t.id}`}
                    className={`match-item ${isSelected ? 'match-selected' : ''} ${isMatched ? 'match-correct' : ''} ${isError ? 'match-wrong' : ''}`}
                    onClick={() => handleTermClick(t.id)}
                    disabled={isMatched}
                  >
                    {t.text}
                  </button>
                );
              })}
            </div>
            
            <div className="match-column">
              <h3 className="match-col-title">Definiciones</h3>
              {roundDefs.map(d => {
                const isMatched = matchedIds.has(d.id);
                const isSelected = selectedDef === d.id;
                const isError = errorPair?.defId === d.id;
                return (
                  <button
                    key={`def-${d.id}`}
                    className={`match-item match-def ${isSelected ? 'match-selected' : ''} ${isMatched ? 'match-correct' : ''} ${isError ? 'match-wrong' : ''}`}
                    onClick={() => handleDefClick(d.id)}
                    disabled={isMatched}
                  >
                    {d.text}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConceptMatch;
