import React, { useState, useEffect } from 'react';

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
          <strong>Usamos cookies</strong>
          <span>
            Este sitio usa cookies propias (para guardar tu progreso y preferencias) y de terceros (Google Ads y Analytics).{' '}
            <button className="cookie-link-btn" onClick={() => document.dispatchEvent(new CustomEvent('open-privacy'))}>
              Política de privacidad
            </button>
          </span>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-reject" onClick={reject}>Solo esenciales</button>
          <button className="cookie-btn-accept" onClick={accept}>Aceptar todo</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
