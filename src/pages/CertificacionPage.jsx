import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getCert } from '../certs';
import { chaptersOf, notesFor } from '../notes';
import { SITE } from '../site.config';

const cleanTitle = (title) => title.replace(/^Cap\.\s*\d+\s*—\s*/, '');

const PLANS = {
  ctfl: [
    ['Semana 1', 'Capítulos 1 y 2: fundamentos, principios y el papel de las pruebas en el ciclo de vida. Simulacros de 10 preguntas por capítulo.'],
    ['Semana 2', 'Capítulos 3 y 4: pruebas estáticas y, sobre todo, técnicas de diseño de casos. El capítulo 4 es el que más preguntas aporta: dedícale el doble de tiempo.'],
    ['Semana 3', 'Capítulos 5 y 6: gestión de las actividades de prueba, riesgos, métricas y herramientas. Repaso de la hoja de fórmulas.'],
    ['Semana 4', 'Simulacros completos con temporizador, repaso de errores y relectura de los bloques "En el examen" de cada capítulo.'],
  ],
  tae: [
    ['Semana 1', 'Capítulos 1 y 2: objetivos y límites de la automatización, testabilidad del sistema, entornos, datos y selección de herramientas.'],
    ['Semana 2', 'Capítulo 3 completo: la gTAA y sus capas, enfoques de scripting, principios y patrones de diseño. Es el capítulo más extenso del syllabus.'],
    ['Semana 3', 'Capítulos 4 y 5: piloto, riesgos de despliegue, mantenibilidad, flakiness, CI/CD, gestión de configuración y pruebas de contrato.'],
    ['Semana 4', 'Capítulos 6, 7 y 8: métricas e informes, verificación de la propia solución y mejora continua. Son los tres capítulos con más preguntas de análisis (K4).'],
    ['Semana 5', 'Simulacros completos de 40 preguntas en 90 minutos y repaso de los escenarios que falles.'],
  ],
};

const CertificacionPage = ({ certKey }) => {
  const cert = getCert(certKey);
  const chapters = chaptersOf(cert.key);
  const notes = notesFor(cert.key);
  const plan = PLANS[cert.key] || [];
  const other = cert.key === 'ctfl' ? getCert('tae') : getCert('ctfl');

  return (
    <div className="page page-article">
      <Breadcrumbs
        items={[{ name: 'Inicio', path: '/' }, { name: 'Certificaciones', path: '/apuntes' }, { name: cert.code }]}
      />

      <header className="page-header">
        <p className="article-eyebrow">{cert.level}</p>
        <h1>{cert.fullName}</h1>
        <p className="page-lede">{cert.summary}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/simulador">Practicar {cert.code}</Link>
          <Link className="btn btn-secondary" to="/apuntes">Ver los apuntes</Link>
        </div>
      </header>

      <section className="section">
        <h2>Estructura del examen</h2>
        <div className="ga-table-wrap">
          <table className="ga-table">
            <tbody>
              <tr><th scope="row">Preguntas</th><td className="tabular">{cert.exam.questions} de opción múltiple</td></tr>
              <tr><th scope="row">Duración</th><td className="tabular">{cert.exam.minutes} minutos</td></tr>
              <tr><th scope="row">Puntuación</th><td className="tabular">{cert.exam.points} puntos totales</td></tr>
              <tr><th scope="row">Para aprobar</th><td className="tabular">{cert.exam.passPoints} puntos ({cert.exam.passPct}%)</td></tr>
              <tr><th scope="row">Requisitos previos</th><td>{cert.prerequisites}</td></tr>
              <tr><th scope="row">Idiomas del material aquí</th><td>{cert.hasTranslations ? 'Español, inglés, francés y portugués' : 'Español'}</td></tr>
              <tr><th scope="row">Preguntas de práctica</th><td className="tabular">{cert.questionCount}</td></tr>
            </tbody>
          </table>
        </div>
        <p className="muted">
          Los datos de examen provienen de la documentación pública del ISTQB. Confirma siempre la
          convocatoria concreta con tu proveedor de examen, porque el precio y el tiempo extra para
          quienes no examinan en su lengua materna varían por país.
        </p>
      </section>

      <section className="section">
        <h2>Temario capítulo por capítulo</h2>
        <ol className="chapter-list">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link to={`/apuntes/${cert.slug}/capitulo-${chapter.id}`}>
                {cleanTitle(chapter.title)}
              </Link>
              {chapter.subtitle && <span className="muted"> · {chapter.subtitle}</span>}
              <p className="chapter-list-sections">
                {chapter.sections.map((s) => s.heading).join(' · ')}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Plan de estudio</h2>
        <p className="section-lede">
          Un ritmo realista compaginando con trabajo. Ajusta las semanas a tu disponibilidad, pero
          mantén el orden: los apuntes primero, la práctica del capítulo justo después y los
          simulacros completos al final.
        </p>
        <ol className="plan-list">
          {plan.map(([week, detail]) => (
            <li key={week}>
              <strong>{week}.</strong> {detail}
            </li>
          ))}
        </ol>
      </section>

      {notes.examOverview && (
        <section className="section">
          <h2>Claves del examen</h2>
          <ul className="prose-list">
            {notes.examOverview.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <h2>Material oficial</h2>
        <p>
          El syllabus y los exámenes de muestra los publica el propio ISTQB de forma gratuita. Aquí
          no alojamos copias: enlazamos a la fuente para que descargues siempre la última versión.
        </p>
        <ul className="link-list">
          <li>
            <a href={cert.syllabusUrl} target="_blank" rel="noopener noreferrer nofollow">
              Syllabus oficial {cert.code} en istqb.org ↗
            </a>
          </li>
          <li>
            <a href={SITE.official.glossary} target="_blank" rel="noopener noreferrer nofollow">
              Glosario oficial de términos de testing ↗
            </a>
          </li>
        </ul>
      </section>

      <section className="section section-quiet">
        <h2>¿Y después?</h2>
        <p>
          {cert.key === 'ctfl'
            ? `Con el Foundation Level en la mano, el siguiente paso natural para quien trabaja en automatización es el ${other.code}.`
            : `Si aún no tienes el Foundation Level, es el requisito previo: empieza por el ${other.code}.`}{' '}
          <Link to={`/certificaciones/${other.slug}`}>Ver la guía del {other.code} →</Link>
        </p>
      </section>
    </div>
  );
};

export default CertificacionPage;
