import React, { useState, useEffect } from 'react';

const TABS = ['sobre', 'privacidad'];

const LegalPage = ({ onClose, initialTab = 'sobre' }) => {
  const [tab, setTab] = useState(initialTab);

  useEffect(() => {
    const handler = () => setTab('privacidad');
    document.addEventListener('open-privacy', handler);
    return () => document.removeEventListener('open-privacy', handler);
  }, []);

  return (
    <div className="legal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="legal-modal">
        <div className="legal-header">
          <div className="legal-tabs">
            <button
              className={`legal-tab ${tab === 'sobre' ? 'active' : ''}`}
              onClick={() => setTab('sobre')}
            >
              Sobre el proyecto
            </button>
            <button
              className={`legal-tab ${tab === 'privacidad' ? 'active' : ''}`}
              onClick={() => setTab('privacidad')}
            >
              Privacidad
            </button>
          </div>
          <button className="legal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="legal-body">
          {tab === 'sobre' && (
            <div className="legal-content">
              <h2>¿Qué es ISTQBeasy?</h2>
              <p>
                <strong>ISTQBeasy</strong> es una plataforma de estudio gratuita para preparar el examen de certificación
                <strong> ISTQB CTFL v4.0</strong> (Certified Tester Foundation Level), el estándar internacional de
                calidad en pruebas de software.
              </p>

              <h3>¿Qué incluye?</h3>
              <ul className="legal-features-list">
                <li><strong>+357 preguntas</strong> tipo test con explicaciones detalladas</li>
                <li>Disponible en <strong>Español, Inglés y Francés</strong></li>
                <li><strong>Modo examen oficial</strong> (40 preguntas, 65 minutos)</li>
                <li><strong>Apuntes</strong> de los 6 capítulos del syllabus CTFL v4.0</li>
                <li><strong>Minijuego</strong> de conexión de conceptos</li>
                <li><strong>Estadísticas</strong> de tu progreso</li>
                <li>Modo oscuro y diseño adaptado a móvil</li>
              </ul>

              <h3>¿Por qué es gratis?</h3>
              <p>
                Porque creemos que el conocimiento debe ser accesible para todos. La preparación oficial para el ISTQB
                puede costar cientos de euros; aquí tienes una alternativa de calidad sin coste.
              </p>
              <p>
                Si la app te ha sido útil y quieres apoyar el proyecto para que siga creciendo, puedes invitarnos a un café:
              </p>
              <a
                href="https://buymeacoffee.com/manuelmc"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-bmc-btn"
              >
                Buy Me a Coffee
              </a>

              <h3>¿Quién lo ha creado?</h3>
              <p>
                ISTQBeasy es un proyecto independiente desarrollado por un profesional del sector tecnológico
                con experiencia en pruebas de software y certificaciones ISTQB.
              </p>

              <h3>Descargo de responsabilidad</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ISTQBeasy es un proyecto independiente y no está afiliado ni respaldado oficialmente por el ISTQB®
                (International Software Testing Qualifications Board). Las preguntas están basadas en el syllabus público
                CTFL v4.0 con fines exclusivamente educativos.
              </p>
            </div>
          )}

          {tab === 'privacidad' && (
            <div className="legal-content">
              <h2>Política de Privacidad</h2>
              <p><em>Última actualización: junio de 2026</em></p>

              <h3>1. Responsable del tratamiento</h3>
              <p>
                El responsable de este sitio web es el titular del dominio <strong>istqbeasy.com</strong>.
                Para cualquier consulta relacionada con la privacidad o para ejercer tus derechos, puedes
                escribir al correo de contacto del sitio.
              </p>

              <h3>2. Datos que recopilamos</h3>
              <p>Este sitio web <strong>no requiere registro</strong> ni recopila datos personales identificables directamente. Sin embargo, pueden recopilarse datos de forma indirecta a través de:</p>
              <ul>
                <li><strong>Cookies de sesión propias:</strong> para guardar tu progreso, preferencias de idioma y modo oscuro en tu navegador (localStorage). Estos datos permanecen en tu dispositivo y no se envían a ningún servidor.</li>
                <li><strong>Google AdSense:</strong> mostramos anuncios de Google, que puede usar cookies para personalizar los anuncios según tus intereses. Consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Google</a>.</li>
                <li><strong>Google Analytics:</strong> usamos GA4 para analizar el tráfico de forma anónima (páginas visitadas, país, dispositivo). No se recopilan datos personales identificables.</li>
              </ul>

              <h3>3. Finalidad del tratamiento</h3>
              <ul>
                <li>Mejorar la experiencia del usuario y el funcionamiento de la plataforma.</li>
                <li>Analizar el uso del sitio para añadir nuevo contenido y funcionalidades.</li>
                <li>Mostrar publicidad relevante para financiar el mantenimiento gratuito del servicio.</li>
              </ul>

              <h3>4. Base legal</h3>
              <p>
                El tratamiento de datos se basa en el <strong>consentimiento del usuario</strong> (Art. 6.1.a RGPD),
                otorgado mediante la aceptación del banner de cookies al acceder al sitio.
              </p>

              <h3>5. Tus derechos</h3>
              <p>Como usuario, tienes derecho a:</p>
              <ul>
                <li><strong>Acceder</strong> a tus datos almacenados (puedes verlos en localStorage de tu navegador).</li>
                <li><strong>Eliminar</strong> tus datos en cualquier momento borrando los datos del sitio en la configuración de tu navegador.</li>
                <li><strong>Retirar el consentimiento</strong> de cookies de terceros borrando las cookies del sitio.</li>
                <li><strong>Reclamar</strong> ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</li>
              </ul>

              <h3>6. Cookies</h3>
              <table className="legal-table">
                <thead>
                  <tr><th>Cookie</th><th>Tipo</th><th>Finalidad</th><th>Duración</th></tr>
                </thead>
                <tbody>
                  <tr><td>istqb_cookies_accepted</td><td>Propia</td><td>Guardar tu preferencia de cookies</td><td>1 año</td></tr>
                  <tr><td>istqb-dark</td><td>Propia</td><td>Modo oscuro/claro</td><td>Permanente</td></tr>
                  <tr><td>istqb_wrong_questions</td><td>Propia</td><td>Guardar preguntas falladas</td><td>Permanente</td></tr>
                  <tr><td>_ga, _gid</td><td>Google Analytics</td><td>Análisis de tráfico anónimo</td><td>2 años / 24h</td></tr>
                  <tr><td>Cookies de Google Ads</td><td>Terceros</td><td>Publicidad personalizada</td><td>Variable</td></tr>
                </tbody>
              </table>

              <h3>7. Cambios en esta política</h3>
              <p>
                Podemos actualizar esta política ocasionalmente. Cualquier cambio significativo será notificado
                mediante un aviso en el sitio web.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
