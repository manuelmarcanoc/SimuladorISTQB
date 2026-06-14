import React, { useState, useEffect, useCallback } from 'react';
import { t } from '../i18n';
import { loadStats, saveStats, loadAchievements, saveAchievements, checkAndUnlockAchievements } from './Achievements';

function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

const ConceptMatch = ({ language, onClose, onNewAchievements }) => {
  const [roundTerms, setRoundTerms] = useState([]);
  const [roundDefs, setRoundDefs] = useState([]);
  const [matchedIds, setMatchedIds] = useState(new Set());
  
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedDef, setSelectedDef] = useState(null);
  const [errorPair, setErrorPair] = useState(null); 
  
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [roundComplete, setRoundComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const startNewRound = useCallback(() => {
    import(`../data/concepts${language === 'es' ? '' : '_' + language}.json`)
      .then((module) => {
        const conceptsData = module.default;
        const shuffledConcepts = shuffleArray(conceptsData).slice(0, 5);
        
        const roundData = shuffledConcepts.map((item, index) => ({
          ...item,
          id: index
        }));

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
      })
      .catch(err => console.error("Error loading concepts:", err));
  }, [language]);

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

  useEffect(() => {
    if (selectedTerm !== null && selectedDef !== null) {
      if (selectedTerm === selectedDef) {
        setMatchedIds(prev => new Set(prev).add(selectedTerm));
        setScore(s => s + 10 + (streak * 2));
        setStreak(s => s + 1);
        setSelectedTerm(null);
        setSelectedDef(null);
      } else {
        setStreak(0);
        setErrorPair({ termId: selectedTerm, defId: selectedDef });
        
        setTimeout(() => {
          setErrorPair(null);
          setSelectedTerm(null);
          setSelectedDef(null);
        }, 600);
      }
    }
  }, [selectedTerm, selectedDef, streak]);

  useEffect(() => {
    if (isStarted && matchedIds.size === 5 && !roundComplete) {
      setRoundComplete(true);
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
    <div className="card animate-in" style={{ padding: '0', overflow: 'hidden' }}>
      <div className="card-header" style={{ margin: 0, padding: '1.5rem 2rem', background: 'var(--primary-light)', borderBottom: '1px solid var(--primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="card-title" style={{ color: 'var(--primary-hover)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          {t('connectConcepts')}
        </div>
        {isStarted && (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: '600' }}>
            <span style={{ color: 'var(--text-main)' }}>{t('scoreLabel')} <span style={{ color: 'var(--primary)' }}>{score}</span></span>
            {streak > 1 && <span style={{ color: 'var(--warning)', background: 'var(--warning-bg)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.9rem' }}>🔥 x{streak}</span>}
          </div>
        )}
      </div>

      <div style={{ padding: '2rem' }}>
        {!isStarted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }} className="animate-in">
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <h2 className="question-text" style={{ marginBottom: '1rem' }}>{t('dominate')}</h2>
            <p style={{ margin: '0 auto 2rem auto', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', fontSize: '1.1rem' }}>
              {t('dominateText')}
            </p>
            <button className="btn" style={{ padding: '12px 32px', fontSize: '1.1rem' }} onClick={startNewRound}>
              {t('start')}
            </button>
          </div>
        ) : roundComplete ? (
          <div className="results-card animate-in" style={{ padding: '2rem 0' }}>
            <div style={{ color: 'var(--warning)', margin: '0 auto' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h2 className="card-title" style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>{t('roundComplete')}</h2>
            <div className="score-display" style={{ color: 'var(--primary)', margin: '1rem 0' }}>{score} pts</div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              {t('matchedAll')}
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button className="btn" onClick={startNewRound}>{t('playAgain')}</button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }} className="animate-in">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.5rem', textAlign: 'center' }}>{t('terms')}</h3>
              {roundTerms.map(term => {
                const isMatched = matchedIds.has(term.id);
                const isSelected = selectedTerm === term.id;
                const isError = errorPair?.termId === term.id;
                
                let btnClass = 'option-btn';
                if (isSelected) btnClass += ' selected';
                if (isMatched) btnClass += ' correct';
                if (isError) btnClass += ' incorrect';

                return (
                  <button
                    key={`term-${term.id}`}
                    className={btnClass}
                    style={{
                      opacity: isMatched ? 0.5 : 1,
                      transform: isMatched ? 'scale(0.98)' : 'none',
                      boxShadow: isMatched ? 'none' : undefined,
                      textAlign: 'center',
                      justifyContent: 'center',
                      fontWeight: '600'
                    }}
                    onClick={() => handleTermClick(term.id)}
                    disabled={isMatched}
                  >
                    {term.text}
                  </button>
                );
              })}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.5rem', textAlign: 'center' }}>{t('definitions')}</h3>
              {roundDefs.map(d => {
                const isMatched = matchedIds.has(d.id);
                const isSelected = selectedDef === d.id;
                const isError = errorPair?.defId === d.id;
                
                let btnClass = 'option-btn';
                if (isSelected) btnClass += ' selected';
                if (isMatched) btnClass += ' correct';
                if (isError) btnClass += ' incorrect';

                return (
                  <button
                    key={`def-${d.id}`}
                    className={btnClass}
                    style={{ 
                      opacity: isMatched ? 0.5 : 1, 
                      transform: isMatched ? 'scale(0.98)' : 'none',
                      boxShadow: isMatched ? 'none' : undefined,
                      fontSize: '0.95rem'
                    }}
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
