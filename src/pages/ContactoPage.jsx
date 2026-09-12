import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE } from '../site.config';

const REASONS = [
  'Error en una pregunta o explicación',
  'Sugerencia de contenido',
  'Duda sobre las certificaciones',
  'Privacidad y datos',
  'Colaboración o prensa',
  'Otro',
];

const ContactoPage = () => {
  const endpoint = SITE.contact.formEndpoint;
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!endpoint) return;
    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      });
      setStatus(response.ok ? 'ok' : 'error');
      if (response.ok) event.target.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page page-article">
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Contacto' }]} />

      <header className="page-header">
        <h1>Contacto</h1>
        <p className="page-lede">
          Este es el canal directo con quien mantiene el sitio. Lo más útil que puedes escribir es
          un error concreto: si una pregunta está mal planteada o una explicación no cuadra con el
          syllabus, dime cuál y por qué, y se corrige. Respuesta habitual en{' '}
          {SITE.contact.responseTime}.
        </p>
      </header>

      <section className="section">
        <h2>Formulario</h2>

        {!endpoint && (
          <div className="notice notice-warning">
            <strong>Formulario pendiente de configuración.</strong> Falta pegar la URL del servicio
            de formularios en <code>src/site.config.js</code> (campo{' '}
            <code>contact.formEndpoint</code>). Mientras esté vacío, el envío está desactivado.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" required autoComplete="name" />
          </div>

          <div className="form-row">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
            <p className="form-hint">Solo se usa para responderte. No se añade a ninguna lista.</p>
          </div>

          <div className="form-row">
            <label htmlFor="motivo">Motivo</label>
            <select id="motivo" name="motivo" defaultValue={REASONS[0]}>
              {REASONS.map((reason) => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows={7} required
              placeholder="Si es un error en una pregunta, indica el capítulo y el enunciado para poder localizarla." />
          </div>

          <div className="form-row form-check">
            <input id="acepto" name="acepto" type="checkbox" required />
            <label htmlFor="acepto">
              He leído la <Link to="/privacidad">política de privacidad</Link> y acepto que se
              traten mis datos para responder a este mensaje.
            </label>
          </div>

          <button className="btn btn-primary" type="submit" disabled={!endpoint || status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>

          {status === 'ok' && (
            <p className="notice notice-success" role="status">
              Mensaje enviado. Gracias: se responde en {SITE.contact.responseTime}.
            </p>
          )}
          {status === 'error' && (
            <p className="notice notice-error" role="alert">
              No se ha podido enviar el mensaje. Inténtalo de nuevo en unos minutos.
            </p>
          )}
        </form>
      </section>

      <section className="section section-quiet">
        <h2>Antes de escribir, quizá ya está resuelto</h2>
        <ul className="link-list">
          <li><Link to="/sobre">Cómo se elabora el contenido y quién está detrás</Link></li>
          <li><Link to="/privacidad">Qué datos se tratan y cómo ejercer tus derechos</Link></li>
          <li><Link to="/certificaciones/ctfl">Estructura del examen CTFL v4.0</Link></li>
          <li><Link to="/certificaciones/ctal-tae">Estructura del examen CTAL-TAE v2.0</Link></li>
        </ul>
        <p className="muted">
          Para inscribirte al examen oficial, gestionar tu certificado o descargar los syllabus,
          el canal correcto es el{' '}
          <a href={SITE.official.istqb} target="_blank" rel="noopener noreferrer nofollow">
            ISTQB
          </a>{' '}
          o el proveedor de examen de tu país: este sitio no gestiona convocatorias.
        </p>
      </section>
    </div>
  );
};

export default ContactoPage;
