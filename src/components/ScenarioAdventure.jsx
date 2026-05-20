import React, { useState, useEffect } from 'react';
import scenariosData from '../data/scenarios.json';

const RPG_AVATARS = {
  dev: process.env.PUBLIC_URL + '/avatars/dev.png',
  pm: process.env.PUBLIC_URL + '/avatars/pm.png',
  client: process.env.PUBLIC_URL + '/avatars/client.png'
};

const ScenarioAdventure = ({ onClose }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [prestige, setPrestige] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const scenario = scenariosData[currentScenarioIndex];

  // Typing effect
  useEffect(() => {
    if (!scenario || isGameOver || feedback) return;
    
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    const speed = 30; // ms per char
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + scenario.dialogue.charAt(i));
      i++;
      if (i >= scenario.dialogue.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentScenarioIndex, scenario, isGameOver, feedback]);

  const handleOptionClick = (option) => {
    if (isTyping) return; // Prevent clicking while typing
    
    setFeedback({
      text: option.feedback,
      isCorrect: option.isCorrect
    });
    
    if (option.isCorrect) {
      setPrestige(prev => prev + 100);
    } else {
      setPrestige(prev => prev - 50);
    }
  };

  const handleNext = () => {
    setFeedback(null);
    if (currentScenarioIndex + 1 < scenariosData.length) {
      setCurrentScenarioIndex(prev => prev + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentScenarioIndex(0);
    setPrestige(0);
    setFeedback(null);
    setIsGameOver(false);
  };

  if (isGameOver) {
    return (
      <div className="rpg-container game-over-screen">
        <h2 className="rpg-title">¡Fin del Día Laboral!</h2>
        <div className="rpg-score-final">Prestigio Final: {prestige}</div>
        <p className="rpg-desc">
          {prestige >= 500 ? '¡Eres un QA Legendario! Todo el equipo confía en tu criterio y la calidad del software es excelente.' 
            : prestige >= 200 ? 'Eres un Tester decente, pero a veces te dejas llevar por la presión. ¡Sigue estudiando el ISTQB!'
            : '¡Te han despedido! Has cedido ante la presión y lanzado software con bugs críticos. Repasa tus apuntes.'}
        </p>
        <button className="rpg-btn-primary" onClick={restartGame}>Volver a jugar</button>
      </div>
    );
  }

  return (
    <div className="rpg-container">
      {/* Header / HUD */}
      <div className="rpg-hud">
        <span className="rpg-title">Aventura ISTQB</span>
        <span className="rpg-score">Prestigio QA: {prestige}</span>
      </div>

      {/* Main Scene */}
      <div className="rpg-scene">
        <div className="rpg-character-area">
          <img 
            src={RPG_AVATARS[scenario.character]} 
            alt={scenario.characterName} 
            className={`rpg-avatar ${feedback && !feedback.isCorrect ? 'shake-anim' : ''}`} 
          />
          <div className="rpg-character-name">{scenario.characterName}</div>
        </div>

        {/* Dialog Box */}
        <div className="rpg-dialog-box">
          {!feedback ? (
            <p className="rpg-dialog-text">{displayedText}</p>
          ) : (
            <div className={`rpg-feedback ${feedback.isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
              <p>{feedback.text}</p>
              <button className="rpg-btn-next" onClick={handleNext}>Siguiente ➔</button>
            </div>
          )}
        </div>
      </div>

      {/* Options */}
      {!feedback && (
        <div className={`rpg-options ${isTyping ? 'options-hidden' : 'options-visible'}`}>
          {scenario.options.map((opt, i) => (
            <button 
              key={i} 
              className="rpg-option-btn" 
              onClick={() => handleOptionClick(opt)}
              disabled={isTyping}
            >
              ▶ {opt.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScenarioAdventure;
