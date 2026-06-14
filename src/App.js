import React, { useState } from 'react';
import Quiz from './components/Quiz';
import StudyNotes from './components/StudyNotes';
import ConceptMatch from './components/ConceptMatch';
import StatsPanel from './components/StatsPanel';
import { setLanguage, t, getLanguage } from './i18n';

function App() {
  const [activeTab, setActiveTab] = useState('simulador');
  const [lang, setLang] = useState('es');

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
    <div className="app-container">
      <header className="app-header">
        <div className="app-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          ISTQB
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
        <div className="lang-selector" style={{ display: 'flex', gap: '5px', background: 'var(--primary-light)', padding: '4px', borderRadius: 'var(--radius-pill)' }}>
          {['es', 'en', 'fr'].map(l => (
            <button 
              key={l}
              onClick={() => handleLanguageChange(l)}
              style={{
                border: 'none',
                background: lang === l ? 'var(--primary)' : 'transparent',
                color: lang === l ? 'white' : 'var(--text-muted)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                cursor: 'pointer',
                fontWeight: '600',
                textTransform: 'uppercase',
                fontSize: '0.85rem'
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      <div className="layout-wrapper">
        <aside className="ad-sidebar left-ad">
          <div className="ad-placeholder">
            <span>Espacio Publicitario</span>
            <small>Apoya el proyecto</small>
          </div>
        </aside>

        <main className="main-content">
          {renderContent()}
        </main>

        <aside className="ad-sidebar right-ad">
          <div className="ad-placeholder">
            <span>Espacio Publicitario</span>
            <small>Apoya el proyecto</small>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
