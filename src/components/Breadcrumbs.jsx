import React from 'react';
import { Link } from 'react-router-dom';

/** Migas de pan. El JSON-LD equivalente lo inyecta el mapa de rutas. */
const Breadcrumbs = ({ items }) => (
  <nav className="breadcrumbs" aria-label="Ruta de navegación">
    <ol>
      {items.map((item, i) => (
        <li key={item.path || item.name}>
          {i < items.length - 1 && item.path ? (
            <Link to={item.path}>{item.name}</Link>
          ) : (
            <span aria-current="page">{item.name}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
