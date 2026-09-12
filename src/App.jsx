import React, { useState, useEffect, useMemo, useCallback, createContext, useContext } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { SITE } from './site.config';
import { CERT_LIST, DEFAULT_CERT } from './certs';
import { setLanguage, t } from './i18n';
import AdComponent from './components/AdComponent';
import CookieBanner from './components/CookieBanner';
import Seo from './components/Seo';

/* ── Contexto del sitio ──────────────────────────────────── */

const SiteContext = createContext({ lang: 'es', cert: DEFAULT_CERT, darkMode: false });
export const useSite = () => useContext(SiteContext);

const readStored = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
};

const APP_PATHS = ['/simulador', '/apuntes', '/minijuego', '/estadisticas'];

/* ── Enlaces de navegación ───────────────────────────────── */

const NAV = [
  { to: '/simulador', label: 'Simulador' },
  { to: '/apuntes', label: 'Apuntes' },
  { to: '/guias', label: 'Guías' },
  { to: '/minijuego', label: 'Minijuego' },
  { to: '/estadisticas', label: 'Estadísticas' },
];

function App() {
  const location = useLocation();
  const [lang, setLang] = useState('es');
  const [cert, setCert] = useState(() => readStored('istqb-cert', DEFAULT_CERT));
  const [darkMode, setDarkMode] = useState(() => readStored('istqb-dark', 'false') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // Al navegar: cerrar el menú móvil y subir al principio
  useEffect(() => {
    setMenuOpen(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const toggleDark = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('istqb-dark', String(next));
      } catch {}
      return next;
    });
  }, []);

  const handleLanguageChange = useCallback((newLang) => {
    setLang(newLang);
    setLanguage(newLang);
  }, []);

  const handleCertChange = useCallback((newCert) => {
    setCert(newCert);
    try {
      localStorage.setItem('istqb-cert', newCert);
    } catch {}
  }, []);

  const showCertBar = APP_PATHS.some((p) => location.pathname.startsWith(p));
  const ctx = useMemo(() => ({ lang, cert, darkMode, setCert: handleCertChange }), [lang, cert, darkMode, handleCertChange]);

  return (
    <SiteContext.Provider value={ctx}>
      <Seo />
      <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>

        <header className="app-header">
          <Link to="/" className="app-title" title={SITE.name}>
            <span className="brand-mark" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </span>
            <span className="brand-text">ISTQB<span className="brand-accent">easy</span></span>
          </Link>

          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-principal"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menú</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>

          <nav id="nav-principal" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Navegación principal">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <div className="lang-selector" role="group" aria-label="Idioma">
              {['es', 'en', 'fr', 'pt'].map((l) => (
                <button
                  key={l}
                  className={`lang-btn ${lang === l ? 'active' : ''}`}
                  aria-pressed={lang === l}
                  onClick={() => handleLanguageChange(l)}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={toggleDark}
              className="dark-toggle"
              aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={darkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {darkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {showCertBar && (
          <div className="cert-bar" role="tablist" aria-label="Certificación">
            {CERT_LIST.map((c) => (
              <button
                key={c.key}
                role="tab"
                aria-selected={cert === c.key}
                className={`cert-btn ${cert === c.key ? 'active' : ''}`}
                onClick={() => handleCertChange(c.key)}
              >
                <span className="cert-code">{c.code}</span>
                <span className="cert-name">{c.name}</span>
              </button>
            ))}
          </div>
        )}

        <main className="main-content" id="contenido">
          <Outlet />
        </main>

        <div className="ad-footer-slot">
          <AdComponent adSlot={SITE.adSlot} />
        </div>

        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-col">
              <h2 className="footer-title">Estudiar</h2>
              <Link to="/simulador">Simulador de examen</Link>
              <Link to="/apuntes">Apuntes por capítulo</Link>
              <Link to="/guias">Guías y artículos</Link>
              <Link to="/minijuego">Minijuego de terminología</Link>
              <Link to="/estadisticas">Mis estadísticas</Link>
            </div>
            <div className="footer-col">
              <h2 className="footer-title">Certificaciones</h2>
              {CERT_LIST.map((c) => (
                <Link key={c.key} to={`/certificaciones/${c.slug}`}>{c.label}</Link>
              ))}
              <a href={SITE.official.istqb} target="_blank" rel="noopener noreferrer nofollow">
                Sitio oficial del ISTQB ↗
              </a>
              <a href={SITE.official.glossary} target="_blank" rel="noopener noreferrer nofollow">
                Glosario oficial ISTQB ↗
              </a>
            </div>
            <div className="footer-col">
              <h2 className="footer-title">Proyecto</h2>
              <Link to="/sobre">Sobre ISTQBeasy</Link>
              <Link to="/contacto">Contacto</Link>
              <a href={SITE.bmcUrl} target="_blank" rel="noopener noreferrer">Invítame a un café ☕</a>
            </div>
            <div className="footer-col">
              <h2 className="footer-title">Legal</h2>
              <Link to="/aviso-legal">Aviso legal</Link>
              <Link to="/privacidad">Política de privacidad</Link>
              <Link to="/cookies">Política de cookies</Link>
              <button
                type="button"
                className="footer-linklike"
                onClick={() => document.dispatchEvent(new CustomEvent('open-consent'))}
              >
                Cambiar preferencias de cookies
              </button>
            </div>
          </div>

          <p className="footer-disclaimer">
            ISTQBeasy es un proyecto independiente y no está afiliado ni respaldado por el ISTQB®
            (International Software Testing Qualifications Board). ISTQB® es una marca registrada de
            su titular. El contenido se elabora a partir de los syllabus públicos con fines
            educativos. Última revisión: {SITE.legal.lastUpdatedLabel}.
          </p>
          <p className="footer-copy">
            © {SITE.founded}–{new Date().getFullYear()} {SITE.name} · Creado por vibbelabs
          </p>
        </footer>

        <CookieBanner />
      </div>
    </SiteContext.Provider>
  );
}

export { t };
export default App;
