import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Blocks } from '../components/ArticleBlocks';
import { LEGAL_DOCS } from '../data/legal_docs';

const LegalTextPage = ({ doc }) => {
  const document_ = LEGAL_DOCS[doc];

  if (!document_) {
    return (
      <div className="page page-narrow">
        <h1>Documento no encontrado</h1>
        <p><Link to="/">Volver a la portada</Link></p>
      </div>
    );
  }

  return (
    <div className="page page-article page-legal">
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: document_.title }]} />

      <article>
        <header className="page-header">
          <h1>{document_.title}</h1>
          <p className="page-lede">{document_.lede}</p>
          <p className="article-meta">Última revisión: {document_.updated}</p>
        </header>

        {document_.sections.map((section) => (
          <section className="ga-section" key={section.heading}>
            <h2 className="ga-section-heading">{section.heading}</h2>
            <Blocks blocks={section.content} />
          </section>
        ))}
      </article>

      <nav className="section section-quiet">
        <h2>Otros documentos</h2>
        <ul className="link-list">
          <li><Link to="/aviso-legal">Aviso legal y condiciones de uso</Link></li>
          <li><Link to="/privacidad">Política de privacidad</Link></li>
          <li><Link to="/cookies">Política de cookies</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LegalTextPage;
