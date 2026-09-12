import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ChapterDiagram from '../components/ChapterDiagram';
import { getCert } from '../certs';
import { chaptersOf, chapterOf, notesFor } from '../notes';
import { SITE } from '../site.config';

const cleanTitle = (title) => title.replace(/^Cap\.\s*\d+\s*—\s*/, '');

const CapituloPage = ({ certKey, chapterId }) => {
  const cert = getCert(certKey);
  const chapter = chapterOf(certKey, chapterId);
  const notes = notesFor(certKey);
  const all = chaptersOf(certKey);

  if (!chapter) {
    return (
      <div className="page page-narrow">
        <h1>Capítulo no encontrado</h1>
        <p>
          Vuelve al <Link to="/apuntes">índice de apuntes</Link> para ver los capítulos disponibles.
        </p>
      </div>
    );
  }

  const index = all.findIndex((c) => c.id === chapter.id);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const hasQuestions = cert.chapters.includes(chapter.id);

  return (
    <div className="page page-article">
      <Breadcrumbs
        items={[
          { name: 'Inicio', path: '/' },
          { name: 'Apuntes', path: '/apuntes' },
          { name: cert.code, path: `/certificaciones/${cert.slug}` },
          { name: `Capítulo ${chapter.id}` },
        ]}
      />

      <article>
        <header className="page-header">
          <p className="article-eyebrow">
            {cert.label} · Capítulo {chapter.id} de {all.length}
          </p>
          <h1>{cleanTitle(chapter.title)}</h1>
          {chapter.subtitle && <p className="article-meta">{chapter.subtitle}</p>}
          <p className="page-lede">
            Apuntes del capítulo {chapter.id} del syllabus {cert.code}, con{' '}
            {chapter.sections.length} bloques de contenido y los puntos que más se preguntan en el
            examen.
          </p>
        </header>

        {cert.hasDiagrams && <ChapterDiagram chapterId={chapter.id} color="var(--primary)" language="es" />}

        {chapter.sections.map((section) => (
          <section className="notes-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <ul className="prose-list">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {section.exam && (
              <aside className="notes-exam-tip">
                <strong>{notes.examLabel || 'En el examen:'}</strong> {section.exam}
              </aside>
            )}
          </section>
        ))}

        <section className="section section-quiet">
          <h2>Siguiente paso</h2>
          {hasQuestions ? (
            <p>
              Ahora toca comprobar si se ha quedado: entra en el{' '}
              <Link to="/simulador">simulador</Link>, filtra por el capítulo {chapter.id} y haz una
              tanda de diez preguntas. Cada respuesta incluye la justificación completa.
            </p>
          ) : (
            <p>
              Este capítulo es material de repaso y no tiene preguntas propias en el banco. Para
              practicar, entra en el <Link to="/simulador">simulador</Link> y elige cualquiera de
              los capítulos del syllabus.
            </p>
          )}
          <p>
            El syllabus oficial completo del {cert.code} se descarga gratis desde{' '}
            <a href={cert.syllabusUrl} target="_blank" rel="noopener noreferrer nofollow">
              istqb.org
            </a>
            , y los términos están definidos en el{' '}
            <a href={SITE.official.glossary} target="_blank" rel="noopener noreferrer nofollow">
              glosario oficial
            </a>
            .
          </p>
        </section>

        <nav className="article-nav" aria-label="Navegación entre capítulos">
          {prev ? (
            <Link className="article-nav-prev" to={`/apuntes/${cert.slug}/capitulo-${prev.id}`}>
              ← Capítulo {prev.id}: {cleanTitle(prev.title)}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link className="article-nav-next" to={`/apuntes/${cert.slug}/capitulo-${next.id}`}>
              Capítulo {next.id}: {cleanTitle(next.title)} →
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
};

export default CapituloPage;
