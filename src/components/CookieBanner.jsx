import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'istqb_consent_v2';

const read = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};

const applyConsent = (value) => {
  const granted = value === 'all';
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
    });
  }
};

/**
 * Aviso de cookies con consentimiento granular.
 *
 * Trabaja con el bloque de Consent Mode v2 declarado en index.html:
 * el estado por defecto es "denegado" y aquí se actualiza según la
 * elección del visitante, que queda guardada en su navegador.
 *
 * Nota: para servir anuncios personalizados en el EEE, Reino Unido y
 * Suiza, Google exige además un CMP certificado integrado con el TCF.
 * Una vez aprobada la cuenta de AdSense, actívalo en
 * AdSense → Privacidad y mensajes.
 */
const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = read();
    if (!stored) setVisible(true);
    else applyConsent(stored);

    const open = () => setVisible(true);
    document.addEventListener('open-consent', open);
    return () => document.removeEventListener('open-consent', open);
  }, []);

  const decide = useCallback((value) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    applyConsent(value);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-modal="false" aria-label="Preferencias de cookies">
      <div className="cookie-banner-content">
        <div className="cookie-text">
          <strong>Cookies y privacidad</strong>
          <span>
            Usamos cookies propias para recordar tu progreso, tu idioma y tu tema, y cookies de
            terceros (Google AdSense) para mostrar publicidad que mantiene el sitio gratuito.
            Puedes aceptarlas todas o quedarte solo con las necesarias. Más detalle en la{' '}
            <Link to="/cookies" className="cookie-link">política de cookies</Link> y en la{' '}
            <Link to="/privacidad" className="cookie-link">política de privacidad</Link>.
          </span>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-reject" onClick={() => decide('essential')}>
            Solo necesarias
          </button>
          <button className="cookie-btn-accept" onClick={() => decide('all')}>
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
