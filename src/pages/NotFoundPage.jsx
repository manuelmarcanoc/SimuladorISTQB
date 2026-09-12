import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="page page-narrow">
    <header className="page-header">
      <h1>Esta página no existe</h1>
      <p className="page-lede">
        Puede que el enlace esté mal escrito o que la página haya cambiado de dirección.
        Desde aquí puedes seguir por donde ibas:
      </p>
    </header>
    <ul className="link-list">
      <li><Link to="/simulador">Simulador de examen</Link></li>
      <li><Link to="/apuntes">Apuntes por capítulo</Link></li>
      <li><Link to="/guias">Guías y artículos</Link></li>
      <li><Link to="/">Volver a la portada</Link></li>
    </ul>
  </div>
);

export default NotFoundPage;
