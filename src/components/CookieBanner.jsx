import React, { useState, useEffect } from 'react';
import { t } from '../i18n';

const COOKIE_KEY = 'istqb_cookies_accepted';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner-content">
        <div className="cookie-text">
          <strong>{t('cookieTitle')}</strong>
          <span>
            {t('cookieDesc')}
            <button className="cookie-link-btn" onClick={() => document.dispatchEvent(new CustomEvent('open-privacy'))}>
              {t('cookiePrivacy')}
            </button>
          </span>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-reject" onClick={reject}>{t('cookieEssential')}</button>
          <button className="cookie-btn-accept" onClick={accept}>{t('cookieAcceptAll')}</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
