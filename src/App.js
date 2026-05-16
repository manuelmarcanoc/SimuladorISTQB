import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import StudyNotes from './components/StudyNotes';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [isQuizOpen, setIsQuizOpen] = useState(true);
  const [isApuntesOpen, setIsApuntesOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState('retro');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={`desktop theme-${theme}`}>
      <div className="desktop-wallpaper-text">
        SIMULADOR ISTQB<br />FOUNDATION
      </div>

      {/* Desktop Icons */}
      <div className="desktop-icons">
        <div className="icon" onDoubleClick={() => setIsQuizOpen(true)}>
          <div className="icon-img">💻</div>
          <span>Simulador</span>
        </div>
        <div className="icon" onDoubleClick={() => setIsNotesOpen(true)}>
          <div className="icon-img">📝</div>
          <span>Apuntes</span>
        </div>
        <div className="icon" onDoubleClick={() => setIsApuntesOpen(true)}>
          <div className="icon-img">🗂️</div>
          <span>Syllabus PDF</span>
        </div>
        <div className="icon" onDoubleClick={() => setIsSettingsOpen(true)}>
          <div className="icon-img">⚙️</div>
          <span>Ajustes</span>
        </div>
      </div>

      {/* Quiz Window */}
      {isQuizOpen && (
        <div className="quiz-wrapper" style={{ zIndex: 30 }}>
          <Quiz onClose={() => setIsQuizOpen(false)} />
        </div>
      )}

      {isNotesOpen && (
        <div style={{
          position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)',
          width: 'min(700px, 95vw)', height: '85vh',
          zIndex: 40, display: 'flex', flexDirection: 'column',
        }}>
          <div className="retro-window" style={{ height: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="title-bar">
              <div className="title-bar-text">📝 Apuntes_ISTQB — Resumen por Capítulo</div>
              <div className="title-bar-controls">
                <button className="title-bar-btn" onClick={() => setIsNotesOpen(false)}>_</button>
                <button className="title-bar-btn">□</button>
                <button className="title-bar-btn" onClick={() => setIsNotesOpen(false)}>X</button>
              </div>
            </div>
            <div className="window-body" style={{ overflowY: 'auto', flexGrow: 1, fontFamily: 'inherit' }}>
              <StudyNotes onClose={() => setIsNotesOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* PDF Window */}
      {isApuntesOpen && (
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 'min(500px, 95vw)', zIndex: 40 }}>
          <div className="retro-window">
            <div className="title-bar">
              <div className="title-bar-text">C:\Syllabus_ISTQB_v4.0</div>
              <div className="title-bar-controls">
                <button className="title-bar-btn" onClick={() => setIsApuntesOpen(false)}>_</button>
                <button className="title-bar-btn">□</button>
                <button className="title-bar-btn" onClick={() => setIsApuntesOpen(false)}>X</button>
              </div>
            </div>
            <div className="window-body" style={{ display: 'flex', gap: '20px', backgroundColor: 'var(--os-window-inner, #ffffff)', minHeight: '120px' }}>
              <a href={process.env.PUBLIC_URL + '/Apuntes_ISTQB.pdf'} download="Syllabus_ISTQB_v4.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="icon" style={{ width: '80px' }}>
                  <div className="icon-img">📄</div>
                  <span style={{ background: 'transparent' }}>Syllabus_Oficial.pdf</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Settings Window */}
      {isSettingsOpen && (
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 'min(350px, 95vw)', zIndex: 50 }}>
          <div className="retro-window">
            <div className="title-bar">
              <div className="title-bar-text">Panel de Control</div>
              <div className="title-bar-controls">
                <button className="title-bar-btn" onClick={() => setIsSettingsOpen(false)}>X</button>
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
              <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <button className="btn" onClick={() => setIsSettingsOpen(false)} style={{ width: 'auto' }}>Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="taskbar">
        <button className="start-btn">
          <span className="win-logo">❖</span> Inicio
        </button>
        <div className="taskbar-apps">
          {isQuizOpen && (
            <div className="taskbar-app active" onClick={() => setIsQuizOpen(true)}>
              Simulador_ISTQB.exe
            </div>
          )}
          {isNotesOpen && (
            <div className="taskbar-app" onClick={() => setIsNotesOpen(true)}>
              Apuntes.txt
            </div>
          )}
          {isApuntesOpen && (
            <div className="taskbar-app" onClick={() => setIsApuntesOpen(true)}>
              C:\Syllabus
            </div>
          )}
          {isSettingsOpen && (
            <div className="taskbar-app" onClick={() => setIsSettingsOpen(true)}>
              Panel de Control
            </div>
          )}
        </div>
        <div className="taskbar-tray">
          <span className="time-text">{time}</span>
        </div>
      </div>
    </main>
  );
}

export default App;
