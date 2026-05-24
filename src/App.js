import React, { useState } from 'react';
import Quiz from './components/Quiz';
import StudyNotes from './components/StudyNotes';
import ConceptMatch from './components/ConceptMatch';
import ScenarioAdventure from './components/ScenarioAdventure';
import StatsPanel from './components/StatsPanel';

function App() {
  const [activeTab, setActiveTab] = useState('simulador');

  const renderContent = () => {
    switch (activeTab) {
      case 'simulador':
        return <Quiz />;
      case 'apuntes':
        return <StudyNotes />;
      case 'conecta':
        return <ConceptMatch />;
      case 'quest':
        return <ScenarioAdventure />;
      case 'stats':
        return <StatsPanel />;
      default:
        return <Quiz />;
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
          Simulador ISTQB
        </div>
        <nav className="nav-links">
          <button 
            className={`nav-btn ${activeTab === 'simulador' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulador')}
          >
            Simulador
          </button>
          <button 
            className={`nav-btn ${activeTab === 'apuntes' ? 'active' : ''}`}
            onClick={() => setActiveTab('apuntes')}
          >
            Apuntes
          </button>
          <button 
            className={`nav-btn ${activeTab === 'conecta' ? 'active' : ''}`}
            onClick={() => setActiveTab('conecta')}
          >
            Minijuego
          </button>
          <button 
            className={`nav-btn ${activeTab === 'quest' ? 'active' : ''}`}
            onClick={() => setActiveTab('quest')}
          >
            Aventura
          </button>
          <button 
            className={`nav-btn ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Estadísticas
          </button>
        </nav>
      </header>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
