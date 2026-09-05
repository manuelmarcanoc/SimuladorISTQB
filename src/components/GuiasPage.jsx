import React, { useState } from 'react';
import { ARTICLES } from '../data/articles_data';
import AdComponent from './AdComponent';

/* ── Renderiza un bloque de contenido tipado ── */
const Block = ({ block, idx }) => {
  switch (block.type) {
    case 'p':
      return <p key={idx} className="ga-p">{block.text}</p>;
    case 'ul':
      return (
        <ul key={idx} className="ga-ul">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="ga-ol">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
    case 'tip':
      return (
        <div key={idx} className="ga-tip">
          <span className="ga-tip-icon">💡</span>
          <span>{block.text}</span>
        </div>
      );
    case 'table':
      return (
        <div key={idx} className="ga-table-wrap">
          <table className="ga-table">
            <thead>
              <tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
};

/* ── Tarjeta de artículo en el listado ── */
const ArticleCard = ({ article, onClick }) => (
  <article className="ga-card" onClick={onClick} role="button" tabIndex={0}
    onKeyDown={e => e.key === 'Enter' && onClick()}>
    <div className="ga-card-emoji" aria-hidden="true">{article.emoji}</div>
    <div className="ga-card-body">
      <h2 className="ga-card-title">{article.title}</h2>
      <p className="ga-card-desc">{article.description}</p>
      <div className="ga-card-meta">
        <span className="ga-read-time">🕐 {article.readTime} de lectura</span>
        <span className="ga-read-link">Leer artículo →</span>
      </div>
    </div>
  </article>
);

/* ── Vista de artículo completo ── */
const ArticleView = ({ article, onBack }) => (
  <div className="ga-article animate-in">
    <button className="btn btn-secondary ga-back-btn" onClick={onBack}>
      ← Volver a Guías
    </button>

    <article>
      <header className="ga-article-header">
        <span className="ga-article-emoji" aria-hidden="true">{article.emoji}</span>
        <h1 className="ga-article-title">{article.title}</h1>
        <p className="ga-article-desc">{article.description}</p>
        <span className="ga-article-meta">🕐 {article.readTime} de lectura</span>
      </header>

      {article.sections.map((section, i) => (
        <section key={i} className="ga-section">
          {section.heading && <h2 className="ga-section-heading">{section.heading}</h2>}
          {section.content.map((block, j) => <Block key={j} block={block} idx={j} />)}
        </section>
      ))}
    </article>

    {/* Anuncio al final del artículo */}
    <div className="ga-ad-wrap">
      <AdComponent adSlot="6641167211" />
    </div>

    <button className="btn btn-secondary ga-back-btn" onClick={onBack}>
      ← Volver a Guías
    </button>
  </div>
);

/* ── Página principal de Guías ── */
const GuiasPage = () => {
  const [selected, setSelected] = useState(null);

  if (selected) {
    const article = ARTICLES.find(a => a.id === selected);
    if (article) return <ArticleView article={article} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="ga-page animate-in">
      <div className="ga-page-header">
        <h1 className="card-title">Guías ISTQB CTFL</h1>
        <p className="ga-page-subtitle">
          Artículos y recursos para preparar tu certificación CTFL v4.0
        </p>
      </div>

      <div className="ga-grid">
        {ARTICLES.map((article, i) => (
          <React.Fragment key={article.id}>
            <ArticleCard article={article} onClick={() => setSelected(article.id)} />
            {/* Anuncio después del segundo artículo */}
            {i === 1 && (
              <div className="ga-ad-between">
                <AdComponent adSlot="6641167211" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GuiasPage;
