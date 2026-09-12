import React from 'react';

/** Renderiza los bloques tipados de un artículo (p, ul, ol, tip, table, img). */
export const Block = ({ block }) => {
  switch (block.type) {
    case 'p':
      return <p className="ga-p">{block.text}</p>;
    case 'h3':
      return <h3 className="ga-h3">{block.text}</h3>;
    case 'img':
      return (
        <figure className="ga-figure">
          <img src={block.src} alt={block.alt} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'ul':
      return <ul className="ga-ul">{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
    case 'ol':
      return <ol className="ga-ol">{block.items.map((item, i) => <li key={i}>{item}</li>)}</ol>;
    case 'tip':
      return <aside className="ga-tip"><span>{block.text}</span></aside>;
    case 'code':
      return <pre className="ga-code"><code>{block.text}</code></pre>;
    case 'table':
      return (
        <div className="ga-table-wrap">
          <table className="ga-table">
            <thead><tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
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

export const Blocks = ({ blocks }) => blocks.map((b, i) => <Block key={i} block={b} />);

export default Blocks;
