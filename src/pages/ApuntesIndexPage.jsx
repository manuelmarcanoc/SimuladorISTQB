import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { CERT_LIST } from '../certs';
import { chaptersOf, notesFor } from '../notes';

const cleanTitle = (title) => title.replace(/^Cap\.\s*\d+\s*—\s*/, '');

const ApuntesIndexPage = () => (
  <div className="page">
    <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Apuntes' }]} />

    <header className="page-header">
      <h1>Apuntes ISTQB por capítulo</h1>
      <p className="page-lede">
        Resumen de estudio de cada capítulo de los syllabus, escrito para repasar: conceptos
        esenciales en frases cortas, las distinciones que se prestan a confusión y un bloque
        <em> En el examen</em> con lo que suele preguntarse de cada sección. Puedes leerlos aquí y
        practicar el mismo capítulo en el simulador.
      </p>
    </header>

    {CERT_LIST.map((cert) => {
      const notes = notesFor(cert.key);
      const chapters = chaptersOf(cert.key);
      return (
        <section className="section" key={cert.key}>
          <h2>
            <Link to={`/certificaciones/${cert.slug}`}>{cert.label}</Link>{' '}
            <span className="section-note">· {cert.level}</span>
          </h2>
          <p className="section-lede">{cert.summary}</p>

          <div className="chapter-grid">
            {chapters.map((chapter) => (
              <article className="chapter-card" key={chapter.id}>
                <p className="chapter-card-num">Capítulo {chapter.id}</p>
                <h3>
                  <Link to={`/apuntes/${cert.slug}/capitulo-${chapter.id}`}>
                    {cleanTitle(chapter.title)}
                  </Link>
                </h3>
                {chapter.subtitle && <p className="chapter-card-meta">{chapter.subtitle}</p>}
                <ul className="chapter-card-sections">
                  {chapter.sections.slice(0, 4).map((section) => (
                    <li key={section.heading}>{section.heading}</li>
                  ))}
                  {chapter.sections.length > 4 && (
                    <li className="muted">y {chapter.sections.length - 4} secciones más</li>
                  )}
                </ul>
              </article>
            ))}
          </div>

          <div className="notes-exam-summary">
            <h3>El examen de {cert.code} en una línea</h3>
            <p>
              {cert.exam.questions} preguntas · {cert.exam.minutes} minutos ·{' '}
              {cert.exam.passPoints} de {cert.exam.points} puntos para aprobar ({cert.exam.passPct}%).
              Requisitos previos: {cert.prerequisites}
            </p>
            <p>
              <Link to="/simulador">Practicar {cert.code} en el simulador →</Link>
            </p>
          </div>

          {notes.examOverview && (
            <div className="notes-intro-panel">
              <h3>Claves para el día del examen</h3>
              <ul>
                {notes.examOverview.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
    })}
  </div>
);

export default ApuntesIndexPage;
