import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}

// El prerenderizador reutiliza el mismo mapa de rutas y metadatos
export { SITEMAP, META_BY_PATH } from './routes';
export { NOT_FOUND_ROUTE as NOT_FOUND } from './routes';
export { SITE } from './site.config';
export { NOT_FOUND_ROUTE } from './routes';
