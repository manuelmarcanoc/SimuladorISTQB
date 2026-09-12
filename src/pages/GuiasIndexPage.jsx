import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { ARTICLES } from '../data/articles';

const formatDate = (iso) => {
  if (!iso) return null;
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
};

const GuiasIndexPage = () => (
  <div className="page">
    <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Guías' }]} />

    <header className="page-header">
      <h1>Guías de certificación y testing de software</h1>
      <p className="page-lede">
        Artículos de fondo sobre las certificaciones ISTQB y sobre el trabajo real que hay detrás:
        qué entra en cada examen, cómo se aplican las técnicas de diseño de pruebas y cómo se monta
        una automatización que no se caiga a las tres semanas.
      </p>
    </header>

    <div className="article-list">
      {ARTICLES.map((article) => (
        <article className="article-row" key={article.id}>
          <h2>
            <Link to={`/guias/${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.description}</p>
          <p className="article-row-meta">
            {formatDate(article.date) && <span>{formatDate(article.date)}</span>}
            <span>{article.readTime} de lectura</span>
            {article.tag && <span className="tag">{article.tag}</span>}
          </p>
        </article>
      ))}
    </div>

    <section className="section section-quiet">
      <h2>¿Falta algún tema?</h2>
      <p>
        Las guías se escriben a partir de las dudas que llegan por{' '}
        <Link to="/contacto">contacto</Link>. Si hay algo del syllabus que no encuentras explicado
        en ninguna parte de forma clara, dilo y probablemente sea el próximo artículo.
      </p>
    </section>
  </div>
);

export default GuiasIndexPage;
