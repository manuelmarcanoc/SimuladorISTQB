import React, { useState } from 'react';
import Quiz from './components/Quiz';
import StudyNotes from './components/StudyNotes';
import ConceptMatch from './components/ConceptMatch';
import StatsPanel from './components/StatsPanel';
import AdComponent from './components/AdComponent';
import CookieBanner from './components/CookieBanner';
import LegalPage from './components/LegalPage';
import { setLanguage, t } from './i18n';

const BMC_URL = 'https://buymeacoffee.com/manuelmc';
const SHARE_URL = 'https://istqbeasy.com';
const SHARE_TEXT = '🎓 Simulador ISTQB CTFL v4.0 gratuito con más de 357 preguntas en ES/EN/FR. ¡Os lo recomiendo para preparar la certificación!';

function App() {
  const [activeTab, setActiveTab] = useState('simulador');
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('istqb-dark') === 'true';
  });
  const [showLegal, setShowLegal] = useState(false);
  const [legalTab, setLegalTab] = useState('sobre');

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('istqb-dark', String(next));
  };

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    setLanguage(newLang);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'simulador':
        return <Quiz language={lang} />;
      case 'apuntes':
        return <StudyNotes language={lang} />;
      case 'conecta':
        return <ConceptMatch language={lang} />;
      case 'stats':
        return <StatsPanel language={lang} />;
      default:
        return <Quiz language={lang} />;
    }
  };

  return (
    <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
      <header className="app-header">
        <div className="app-title">
          <span className="brand-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </span>
          <span className="brand-text">ISTQB<span className="brand-accent">easy</span></span>
        </div>
        <nav className="nav-links">
          <button 
            className={`nav-btn ${activeTab === 'simulador' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulador')}
          >
            {t('simulator')}
          </button>
          <button 
            className={`nav-btn ${activeTab === 'apuntes' ? 'active' : ''}`}
            onClick={() => setActiveTab('apuntes')}
          >
            {t('notes')}
          </button>
          <button 
            className={`nav-btn ${activeTab === 'conecta' ? 'active' : ''}`}
            onClick={() => setActiveTab('conecta')}
          >
            {t('minigame')}
          </button>
          <button 
            className={`nav-btn ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            {t('stats')}
          </button>
        </nav>
        <div className="header-actions">
          <div className="lang-selector">
            {['es', 'en', 'fr'].map(l => (
              <button
                key={l}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => handleLanguageChange(l)}
              >
                {l}
              </button>
            ))}
          </div>
        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          className="dark-toggle"
          aria-label="Toggle dark mode"
          title={darkMode ? 'Modo claro' : 'Modo oscuro'}
        >
          {darkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        </div>
      </header>

      <div className="layout-wrapper">
        <aside className="ad-sidebar left-ad">
          <AdComponent adSlot="6641167211" />
        </aside>

        <main className="main-content">
          {renderContent()}
        </main>

        <aside className="ad-sidebar right-ad">
          <AdComponent adSlot="6641167211" />
        </aside>
      </div>

      <footer className="app-footer">
        <a
          className="bmc-btn"
          href={BMC_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
          Buy me a coffee
        </a>
        <button
          className="share-footer-btn"
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'ISTQBeasy', text: SHARE_TEXT, url: SHARE_URL });
            } else {
              navigator.clipboard.writeText(SHARE_URL);
              alert('¡Enlace copiado! Compártelo en foros y grupos 🚀');
            }
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Compartir
        </button>
        <p>Created by <strong>ISTQBeasy</strong> · <a href={BMC_URL} target="_blank" rel="noopener noreferrer" style={{color:'var(--primary)', textDecoration:'none'}}>Apóyanos ☕</a></p>
        
        <div className="footer-links">
          <button className="footer-link-btn" onClick={() => { setLegalTab('sobre'); setShowLegal(true); }}>
            Sobre el proyecto
          </button>
          <span className="footer-dot">•</span>
          <button className="footer-link-btn" onClick={() => { setLegalTab('privacidad'); setShowLegal(true); }}>
            Política de Privacidad
          </button>
        </div>
      </footer>

      {/* Floating Buy Me a Coffee button */}
      <a
        href={BMC_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bmc-float"
        title="¿Te ha ayudado? ¡Invítame a un café!"
      >
        ☕
      </a>

      <CookieBanner />
      {showLegal && <LegalPage onClose={() => setShowLegal(false)} initialTab={legalTab} />}
    </div>
  );
}

export default App;
