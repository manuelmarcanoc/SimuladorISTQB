import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
  const [isQuizOpen, setIsQuizOpen] = useState(true);
  const [isApuntesOpen, setIsApuntesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState('retro'); // 'retro' | 'modern'

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={`desktop theme-${theme}`}>
      <div className="desktop-wallpaper-text">
        SIMULADOR ISTQB<br/>FOUNDATION
      </div>
      
      <div className="desktop-icons">
        <div className="icon" onDoubleClick={() => setIsQuizOpen(true)}>
          <div className="icon-img">💻</div>
          <span>Simulador</span>
        </div>
        <div className="icon" onDoubleClick={() => setIsApuntesOpen(true)}>
          <div className="icon-img">🗂️</div>
          <span>Apuntes</span>
        </div>
        <div className="icon" onDoubleClick={() => setIsSettingsOpen(true)}>
          <div className="icon-img">⚙️</div>
          <span>Ajustes</span>
        </div>
      </div>
      
      {isQuizOpen && (
        <div className="quiz-wrapper" style={{ zIndex: isQuizOpen ? 30 : 10 }}>
          <Quiz onClose={() => setIsQuizOpen(false)} />
        </div>
      )}

      {isApuntesOpen && (
        <div className="quiz-wrapper" style={{ zIndex: isApuntesOpen ? 40 : 10, position: 'absolute', top: '10%', left: '20%', width: '500px' }}>
          <div className="retro-window">
            <div className="title-bar">
              <div className="title-bar-text">C:\Apuntes_ISTQB</div>
              <div className="title-bar-controls">
                <button className="title-bar-btn" onClick={() => setIsApuntesOpen(false)}>_</button>
                <button className="title-bar-btn">□</button>
                <button className="title-bar-btn" onClick={() => setIsApuntesOpen(false)}>X</button>
              </div>
            </div>
            <div className="window-body" style={{ display: 'flex', gap: '20px', backgroundColor: 'var(--os-window-inner, #ffffff)', minHeight: '200px' }}>
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

      {isSettingsOpen && (
        <div className="quiz-wrapper" style={{ zIndex: isSettingsOpen ? 50 : 10, position: 'absolute', top: '20%', left: '30%', width: '350px' }}>
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

      <div className="taskbar">
        <button className="start-btn">
          <span className="win-logo">❖</span> Inicio
        </button>
        <div className="taskbar-apps">
          {isQuizOpen && (
            <div className={`taskbar-app active`} onClick={() => setIsQuizOpen(true)}>
              Simulador_ISTQB.exe
            </div>
          )}
          {isApuntesOpen && (
            <div className={`taskbar-app`} onClick={() => setIsApuntesOpen(true)}>
              C:\Apuntes
            </div>
          )}
          {isSettingsOpen && (
            <div className={`taskbar-app`} onClick={() => setIsSettingsOpen(true)}>
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
