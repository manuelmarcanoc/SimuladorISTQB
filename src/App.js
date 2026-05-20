import React, { useState, useEffect, useCallback } from 'react';
import Quiz from './components/Quiz';
import StudyNotes from './components/StudyNotes';
import Flashcards from './components/Flashcards';
import Achievements from './components/Achievements';
import StatsPanel from './components/StatsPanel';
import { AchievementPopup } from './components/Achievements';

const ICONS = {
  simulador: process.env.PUBLIC_URL + '/icons/simulador.png',
  apuntes: process.env.PUBLIC_URL + '/icons/apuntes.png',
  pdf: process.env.PUBLIC_URL + '/icons/pdf.webp',
};

function DesktopIcon({ src, label, onOpen, children }) {
  return (
    <div className="icon" onClick={onOpen} onDoubleClick={onOpen} role="button" tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen()}>
      {src
        ? <img src={src} alt="" className="icon-img vintage-icon" draggable={false} />
        : <div className="icon-img icon-img-settings" aria-hidden="true">{children}</div>
      }
      <span>{label}</span>
    </div>
  );
}

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [isQuizOpen, setIsQuizOpen] = useState(true);
  const [isApuntesOpen, setIsApuntesOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('istqb_theme') || 'retro');
  const [pendingAchievements, setPendingAchievements] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('istqb_theme', theme);
  }, [theme]);

  const handleNewAchievements = useCallback((achievements) => {
    if (achievements && achievements.length > 0) {
      setPendingAchievements(achievements);
    }
  }, []);

  return (
    <main className={`desktop theme-${theme}`}>
      <div className="desktop-wallpaper-text">
        SIMULADOR ISTQB<br />FOUNDATION
      </div>

      <div className="desktop-icons">
        <DesktopIcon src={ICONS.simulador} label="Simulador" onOpen={() => setIsQuizOpen(true)} />
        <DesktopIcon src={ICONS.apuntes} label="Apuntes" onOpen={() => setIsNotesOpen(true)} />
        <DesktopIcon src={ICONS.pdf} label="Syllabus PDF" onOpen={() => setIsApuntesOpen(true)} />

        {/* Flashcards icon */}
        <DesktopIcon src={null} label="Flashcards" onOpen={() => setIsFlashcardsOpen(true)}>
          <svg viewBox="0 0 32 32" width="40" height="40" fill="currentColor" style={{ color: '#c0c0c0' }}>
            <rect x="4" y="8" width="20" height="14" rx="2" fill="#fff" stroke="#000" strokeWidth="2"/>
            <rect x="8" y="4" width="20" height="14" rx="2" fill="#c0c0c0" stroke="#000" strokeWidth="2"/>
            <text x="14" y="16" fontSize="8" textAnchor="middle" fill="#000080" fontWeight="bold">A?</text>
          </svg>
        </DesktopIcon>

        {/* Achievements icon */}
        <DesktopIcon src={null} label="Logros" onOpen={() => setIsAchievementsOpen(true)}>
          <svg viewBox="0 0 32 32" width="40" height="40" fill="currentColor" style={{ color: '#c0c0c0' }}>
            <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
          </svg>
        </DesktopIcon>

        {/* Stats icon */}
        <DesktopIcon src={null} label="Stats" onOpen={() => setIsStatsOpen(true)}>
          <svg viewBox="0 0 32 32" width="40" height="40" fill="currentColor" style={{ color: '#c0c0c0' }}>
            <rect x="4" y="18" width="5" height="10" fill="#000080"/>
            <rect x="11" y="12" width="5" height="16" fill="#000080"/>
            <rect x="18" y="6" width="5" height="22" fill="#000080"/>
            <rect x="25" y="14" width="4" height="14" fill="#000080"/>
            <line x1="3" y1="28" x2="30" y2="28" stroke="#000" strokeWidth="2"/>
          </svg>
        </DesktopIcon>

        {/* Settings icon */}
        <div className="icon" onClick={() => setIsSettingsOpen(true)} onDoubleClick={() => setIsSettingsOpen(true)} role="button" tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setIsSettingsOpen(true)}>
          <div className="icon-img icon-img-settings" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
              <path d="M14 4h4l1 3.5 2.8-.8 2 3.5-2.3 2.3.8 2.8-3.5 2-2.3 2.3L18 22.5 17 26h-2l-1-3.5-2.8.8-2-3.5 2.3-2.3-.8-2.8 3.5-2 2.3-2.3L14 7.5 14 4zm2 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
            </svg>
          </div>
          <span>Ajustes</span>
        </div>
      </div>

      <div className="vibbe-credit">
        Created by <strong>Vibbe Labs</strong>
      </div>

      {/* Achievement Popup */}
      {pendingAchievements.length > 0 && (
        <AchievementPopup
          achievements={pendingAchievements}
          onDismiss={() => setPendingAchievements([])}
        />
      )}

      {/* Quiz Window */}
      {isQuizOpen && (
        <div className="quiz-wrapper window-open-anim" style={{ zIndex: 30 }}>
          <Quiz onClose={() => setIsQuizOpen(false)} onNewAchievements={handleNewAchievements} />
        </div>
      )}

      {/* Flashcards Window */}
      {isFlashcardsOpen && (
        <div className="quiz-wrapper window-open-anim" style={{ zIndex: 31 }}>
          <Flashcards onClose={() => setIsFlashcardsOpen(false)} onNewAchievements={handleNewAchievements} />
        </div>
      )}

      {/* Achievements Window */}
      {isAchievementsOpen && (
        <div className="quiz-wrapper window-open-anim" style={{ zIndex: 32 }}>
          <Achievements onClose={() => setIsAchievementsOpen(false)} />
        </div>
      )}

      {/* Stats Window */}
      {isStatsOpen && (
        <div className="quiz-wrapper window-open-anim" style={{ zIndex: 33 }}>
          <StatsPanel onClose={() => setIsStatsOpen(false)} />
        </div>
      )}

      {/* Notes Window */}
      {isNotesOpen && (
        <div className="desktop-window desktop-window-notes window-open-anim">
          <div className="retro-window desktop-window-inner">
            <div className="title-bar">
              <div className="title-bar-text">Apuntes_ISTQB — Resumen por Capítulo</div>
              <div className="title-bar-controls">
                <button type="button" className="title-bar-btn" onClick={() => setIsNotesOpen(false)}>_</button>
                <button type="button" className="title-bar-btn">□</button>
                <button type="button" className="title-bar-btn" onClick={() => setIsNotesOpen(false)}>X</button>
              </div>
            </div>
            <div className="window-body window-body-scroll">
              <StudyNotes />
            </div>
          </div>
        </div>
      )}

      {/* PDF Window */}
      {isApuntesOpen && (
        <div className="desktop-window desktop-window-pdf window-open-anim">
          <div className="retro-window">
            <div className="title-bar">
              <div className="title-bar-text">C:\Syllabus_ISTQB_v4.0</div>
              <div className="title-bar-controls">
                <button type="button" className="title-bar-btn" onClick={() => setIsApuntesOpen(false)}>_</button>
                <button type="button" className="title-bar-btn">□</button>
                <button type="button" className="title-bar-btn" onClick={() => setIsApuntesOpen(false)}>X</button>
              </div>
            </div>
            <div className="window-body pdf-window-body">
              <a href={process.env.PUBLIC_URL + '/Apuntes_ISTQB.pdf'} download="Syllabus_ISTQB_v4.pdf" className="pdf-download-link">
                <div className="icon pdf-file-icon">
                  <img src={ICONS.pdf} alt="" className="icon-img vintage-icon" draggable={false} />
                  <span className="pdf-file-label">Syllabus_Oficial.pdf</span>
                </div>
              </a>
              <p className="pdf-hint">Descarga el syllabus oficial ISTQB CTFL v4.0 para consultar durante el estudio.</p>
            </div>
          </div>
        </div>
      )}

      {/* Settings Window */}
      {isSettingsOpen && (
        <div className="desktop-window desktop-window-settings window-open-anim">
          <div className="retro-window">
            <div className="title-bar">
              <div className="title-bar-text">Panel de Control</div>
              <div className="title-bar-controls">
                <button type="button" className="title-bar-btn" onClick={() => setIsSettingsOpen(false)}>X</button>
              </div>
            </div>
            <div className="window-body">
              <h3 style={{ marginTop: 0 }}>Apariencia</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="theme" value="retro" checked={theme === 'retro'} onChange={() => setTheme('retro')} />
                  Estilo Retro (Windows 95)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="theme" value="modern" checked={theme === 'modern'} onChange={() => setTheme('modern')} />
                  Estilo Moderno (Limpio)
                </label>
              </div>
              <p className="settings-about">
                Simulador ISTQB Foundation Level v4.0<br />
                Desarrollado por <strong>Vibbe Labs</strong>
              </p>
              <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <button type="button" className="btn" onClick={() => setIsSettingsOpen(false)} style={{ width: 'auto' }}>Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="taskbar">
        <button type="button" className="start-btn">
          <span className="win-logo" aria-hidden="true">&#9670;</span> Inicio
        </button>
        <div className="taskbar-apps">
          {isQuizOpen && (
            <div className="taskbar-app active" onClick={() => setIsQuizOpen(true)} role="button" tabIndex={0}>
              Simulador_ISTQB.exe
            </div>
          )}
          {isFlashcardsOpen && (
            <div className="taskbar-app" onClick={() => setIsFlashcardsOpen(true)} role="button" tabIndex={0}>
              Flashcards.exe
            </div>
          )}
          {isAchievementsOpen && (
            <div className="taskbar-app" onClick={() => setIsAchievementsOpen(true)} role="button" tabIndex={0}>
              Logros.exe
            </div>
          )}
          {isStatsOpen && (
            <div className="taskbar-app" onClick={() => setIsStatsOpen(true)} role="button" tabIndex={0}>
              Stats.exe
            </div>
          )}
          {isNotesOpen && (
            <div className="taskbar-app" onClick={() => setIsNotesOpen(true)} role="button" tabIndex={0}>
              Apuntes.txt
            </div>
          )}
          {isApuntesOpen && (
            <div className="taskbar-app" onClick={() => setIsApuntesOpen(true)} role="button" tabIndex={0}>
              C:\Syllabus
            </div>
          )}
          {isSettingsOpen && (
            <div className="taskbar-app" onClick={() => setIsSettingsOpen(true)} role="button" tabIndex={0}>
              Panel de Control
            </div>
          )}
        </div>
        <div className="taskbar-tray">
          <span className="vibbe-credit-taskbar">Vibbe Labs</span>
          <span className="time-text">{time}</span>
        </div>
      </div>
    </main>
  );
}

export default App;
