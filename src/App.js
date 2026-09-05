import React, { useState } from 'react';
import Quiz from './components/Quiz';
import StudyNotes from './components/StudyNotes';
import ConceptMatch from './components/ConceptMatch';
import StatsPanel from './components/StatsPanel';
import AdComponent from './components/AdComponent';
import GuiasPage from './components/GuiasPage';
import CookieBanner from './components/CookieBanner';
import LegalPage from './components/LegalPage';
import { setLanguage, t } from './i18n';

const BMC_URL = 'https://buymeacoffee.com/manuelmc';
const SHARE_URL = 'https://istqbeasy.com';

function App() {
  const [activeTab, setActiveTab] = useState('simulador');
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('istqb-dark') === 'true';
  });
  const [showLegal, setShowLegal] = useState(false);
  const [legalTab, setLegalTab] = useState('sobre');
  const [flagFx, setFlagFx] = useState({ lang: null, key: 0 });

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('istqb-dark', String(next));
  };

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    setLanguage(newLang);
    setFlagFx((f) => ({ lang: newLang, key: f.key + 1 }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'simulador':
        return <Quiz language={lang} />;
      case 'apuntes':
        return <StudyNotes language={lang} darkMode={darkMode} />;
      case 'conecta':
        return <ConceptMatch language={lang} />;
      case 'stats':
        return <StatsPanel language={lang} />;
      case 'guias':
        return <GuiasPage />;
      default:
        return <Quiz language={lang} />;
    }
  };

  return (
    <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
      <header className="app-header">
        <div className="app-title" onClick={() => window.location.reload()} style={{ cursor: 'pointer' }} title={t('simulator')}>
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
          <button 
            className={`nav-btn ${activeTab === 'guias' ? 'active' : ''}`}
            onClick={() => setActiveTab('guias')}
          >
            {t('guides')}
          </button>
        </nav>
        <div className="header-actions">
          <div className="lang-selector">
            {flagFx.lang && (
              <span key={flagFx.key} className={`flag-sweep flag-${flagFx.lang}`} aria-hidden="true" />
            )}
            {['es', 'en', 'fr', 'pt'].map(l => (
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

      <div className="seo-about-bar">
        Simulador gratuito para la certificación <strong>ISTQB CTFL v4.0</strong> &mdash; 394 preguntas en ES / EN / FR / PT
        &nbsp;&middot;&nbsp; Capítulos 1&ndash;6 del syllabus oficial &nbsp;&middot;&nbsp;
        Modo examen, repaso de errores y estadísticas de progreso
      </div>

      <footer className="app-footer">
        <button
          className="share-footer-btn"
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'ISTQBeasy', text: t('shareText'), url: SHARE_URL });
            } else {
              navigator.clipboard.writeText(SHARE_URL);
              alert('¡Enlace copiado! / Link copied!');
            }
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          {t('shareBtn')}
        </button>
        <a
          href={BMC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bmc-official"
          aria-label="Buy me a coffee"
        >
          <span className="bmc-ico" aria-hidden="true">☕</span>
          <span className="bmc-txt">Buy me a coffee</span>
        </a>

        <div className="footer-links">
          <button className="footer-link-btn" onClick={() => { setLegalTab('sobre'); setShowLegal(true); }}>
            {t('aboutProject')}
          </button>
          <span className="footer-dot">•</span>
          <button className="footer-link-btn" onClick={() => { setLegalTab('privacidad'); setShowLegal(true); }}>
            {t('privacyPolicy')}
          </button>
        </div>
      </footer>

      <CookieBanner />
      {showLegal && <LegalPage onClose={() => setShowLegal(false)} initialTab={legalTab} language={lang} />}
    </div>
  );
}

export default App;
