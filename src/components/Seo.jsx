import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../site.config';
import { metaFor } from '../routes';

/**
 * Mantiene sincronizados título, descripción, canonical y datos
 * estructurados al navegar por la SPA.
 *
 * En el HTML prerenderizado estas mismas etiquetas se inyectan en
 * el <head> durante el build (scripts/prerender.mjs), a partir del
 * mismo mapa de rutas: aquí solo se actualizan en la navegación
 * cliente.
 */
const upsertMeta = (selector, attrs) => {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.tag || 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'tag' || v == null) return;
    el.setAttribute(k, v);
  });
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaFor(pathname);
    const canonical = `${SITE.url}${pathname === '/' ? '' : pathname.replace(/\/$/, '')}`;

    document.title = meta.title;
    upsertMeta('meta[name="description"]', { tag: 'meta', name: 'description', content: meta.description });
    upsertMeta('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: canonical });
    upsertMeta('meta[name="robots"]', {
      tag: 'meta',
      name: 'robots',
      content: meta.noindex ? 'noindex, follow' : 'index, follow',
    });
    upsertMeta('meta[property="og:title"]', { tag: 'meta', property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { tag: 'meta', property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:url"]', { tag: 'meta', property: 'og:url', content: canonical });

    // Datos estructurados de la ruta actual
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove());
    (meta.jsonld || []).forEach((block) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', '');
      script.textContent = JSON.stringify(block);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
};

export default Seo;
