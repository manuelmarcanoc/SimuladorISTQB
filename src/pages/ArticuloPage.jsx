import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Blocks } from '../components/ArticleBlocks';
import { ARTICLES } from '../data/articles';
import { SITE } from '../site.config';
import { TOTAL_QUESTIONS } from '../certs';

const formatDate = (iso) => {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
};

const ArticuloPage = ({ slug }) => {
  const article = ARTICLES.find((a) => a.id === slug);
  const related = ARTICLES.filter((a) => a.id !== slug).slice(0, 3);

  if (!article) {
    return (
      <div className="page page-narrow">
        <h1>Artículo no encontrado</h1>
        <p>
          Puedes ver todos los artículos en el <Link to="/guias">índice de guías</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="page page-article">
      <Breadcrumbs
        items={[{ name: 'Inicio', path: '/' }, { name: 'Guías', path: '/guias' }, { name: article.title }]}
      />

      <article>
        <header className="page-header">
          <h1>{article.title}</h1>
          <p className="page-lede">{article.description}</p>
          <p className="article-meta">
            Por {SITE.author.name} · {formatDate(article.date)} · {article.readTime} de lectura
            {article.updated && ` · actualizado en ${formatDate(article.updated)}`}
          </p>
        </header>

        {article.sections.map((section, i) => (
          <section className="ga-section" key={i}>
            {section.heading && <h2 className="ga-section-heading">{section.heading}</h2>}
            <Blocks blocks={section.content} />
          </section>
        ))}
      </article>

      <section className="section section-quiet">
        <h2>Pon a prueba lo que acabas de leer</h2>
        <p>
          El <Link to="/simulador">simulador</Link> tiene {TOTAL_QUESTIONS} preguntas con explicación razonada, y
          los <Link to="/apuntes">apuntes por capítulo</Link> resumen el syllabus entero. Todo
          gratis y sin registro.
        </p>
      </section>

      <section className="section">
        <h2>Seguir leyendo</h2>
        <div className="teaser-grid">
          {related.map((item) => (
            <article className="teaser" key={item.id}>
              <h3><Link to={`/guias/${item.id}`}>{item.title}</Link></h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticuloPage;
