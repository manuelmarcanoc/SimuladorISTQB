import React, { useState, useEffect } from 'react';
import legalData from '../data/legal_data';

const LegalPage = ({ onClose, initialTab = 'sobre', language = 'es' }) => {
  const [tab, setTab] = useState(initialTab);

  useEffect(() => {
    const handler = () => setTab('privacidad');
    document.addEventListener('open-privacy', handler);
    return () => document.removeEventListener('open-privacy', handler);
  }, []);

  const content = legalData[language] || legalData['es'];

  return (
    <div className="legal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="legal-modal">
        <div className="legal-header">
          <div className="legal-tabs">
            <button
              className={`legal-tab ${tab === 'sobre' ? 'active' : ''}`}
              onClick={() => setTab('sobre')}
            >
              {content.tabAbout}
            </button>
            <button
              className={`legal-tab ${tab === 'privacidad' ? 'active' : ''}`}
              onClick={() => setTab('privacidad')}
            >
              {content.tabPrivacy}
            </button>
          </div>
          <button className="legal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="legal-body">
          {tab === 'sobre' && (
            <div className="legal-content animate-in">
              <h2>{content.aboutTitle}</h2>
              <p>
                <strong>ISTQBeasy</strong> {content.aboutIntro1}
                <strong> {content.aboutIntro2} </strong>
                {content.aboutIntro3}
              </p>

              <h3>{content.includesTitle}</h3>
              <ul className="legal-features-list">
                {content.includesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3>{content.whyFreeTitle}</h3>
              <p>{content.whyFree1}</p>
              <p>{content.whyFree2}</p>
              <a
                href="https://buymeacoffee.com/manuelmc"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-bmc-btn"
              >
                {content.coffeeBtn}
              </a>

              <h3>{content.whoCreatedTitle}</h3>
              <p>{content.whoCreated}</p>

              <h3>{content.disclaimerTitle}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {content.disclaimer}
              </p>
            </div>
          )}

          {tab === 'privacidad' && (
            <div className="legal-content animate-in">
              <h2>{content.privacyTitle}</h2>
              <p><em>{content.privacyUpdate}</em></p>

              {content.privacySections.map((section, index) => (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <p>{section.content}</p>
                </div>
              ))}

              <h3>Cookies</h3>
              <table className="legal-table">
                <thead>
                  <tr><th>Cookie</th><th>Type</th><th>Purpose</th><th>Duration</th></tr>
                </thead>
                <tbody>
                  <tr><td>istqb_cookies_accepted</td><td>Local</td><td>Save cookie preferences</td><td>1 year</td></tr>
                  <tr><td>istqb-dark</td><td>Local</td><td>Dark mode preference</td><td>Permanent</td></tr>
                  <tr><td>istqb_wrong_questions</td><td>Local</td><td>Save failed questions</td><td>Permanent</td></tr>
                  <tr><td>_ga, _gid</td><td>Analytics</td><td>Anonymous traffic analysis</td><td>2 years / 24h</td></tr>
                  <tr><td>Google Ads</td><td>Third-party</td><td>Ads personalization</td><td>Variable</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
