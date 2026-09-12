import { ROUTES, SITEMAP, META_BY_PATH, metaFor, NOT_FOUND_ROUTE } from './routes';
import { SITE } from './site.config';
import { CERT_LIST } from './certs';
import { chaptersOf } from './notes';
import { ARTICLES } from './data/articles';

describe('mapa de rutas', () => {
  test('no hay rutas duplicadas', () => {
    const paths = ROUTES.map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  test('todas las rutas son absolutas y sin barra final', () => {
    ROUTES.forEach((r) => {
      expect(r.path.startsWith('/')).toBe(true);
      if (r.path !== '/') expect(r.path.endsWith('/')).toBe(false);
    });
  });

  test('existe una página por capítulo de cada certificación', () => {
    CERT_LIST.forEach((cert) => {
      chaptersOf(cert.key).forEach((chapter) => {
        expect(META_BY_PATH[`/apuntes/${cert.slug}/capitulo-${chapter.id}`]).toBeDefined();
      });
    });
  });

  test('existe una página por artículo y por certificación', () => {
    ARTICLES.forEach((a) => expect(META_BY_PATH[`/guias/${a.id}`]).toBeDefined());
    CERT_LIST.forEach((c) => expect(META_BY_PATH[`/certificaciones/${c.slug}`]).toBeDefined());
  });

  test('las páginas obligatorias para monetizar existen', () => {
    ['/', '/sobre', '/contacto', '/privacidad', '/cookies', '/aviso-legal'].forEach((p) => {
      expect(META_BY_PATH[p]).toBeDefined();
    });
  });
});

describe('metadatos de cada ruta', () => {
  test('todas tienen título y descripción con longitud razonable para buscadores', () => {
    ROUTES.forEach((r) => {
      expect(r.meta.title.length).toBeGreaterThan(20);
      expect(r.meta.title.length).toBeLessThanOrEqual(120);
      expect(r.meta.description.length).toBeGreaterThanOrEqual(70);
      expect(r.meta.description.length).toBeLessThanOrEqual(300);
    });
  });

  test('los títulos son únicos', () => {
    const titles = ROUTES.map((r) => r.meta.title);
    const duplicados = titles.filter((t, i) => titles.indexOf(t) !== i);
    expect(duplicados).toEqual([]);
  });

  test('las descripciones son únicas', () => {
    const descriptions = ROUTES.map((r) => r.meta.description);
    const duplicadas = descriptions.filter((d, i) => descriptions.indexOf(d) !== i);
    expect(duplicadas).toEqual([]);
  });

  test('los datos estructurados son serializables y declaran @type', () => {
    ROUTES.forEach((r) => {
      (r.meta.jsonld || []).forEach((block) => {
        expect(block['@type']).toBeTruthy();
        expect(() => JSON.stringify(block)).not.toThrow();
      });
    });
  });

  test('metaFor tolera la barra final y devuelve el 404 para rutas desconocidas', () => {
    expect(metaFor('/guias/')).toEqual(META_BY_PATH['/guias']);
    expect(metaFor('/no-existe')).toEqual(NOT_FOUND_ROUTE.meta);
    expect(NOT_FOUND_ROUTE.meta.noindex).toBe(true);
  });
});

describe('sitemap', () => {
  test('incluye todas las rutas indexables y ninguna con noindex', () => {
    expect(SITEMAP.length).toBe(ROUTES.length);
    expect(SITEMAP.some((r) => r.noindex)).toBe(false);
  });

  test('cada entrada tiene prioridad y fecha válidas', () => {
    SITEMAP.forEach((r) => {
      expect(Number(r.priority)).toBeGreaterThan(0);
      expect(Number(r.priority)).toBeLessThanOrEqual(1);
      expect(r.lastmod).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  test('la portada es la de mayor prioridad', () => {
    const home = SITEMAP.find((r) => r.path === '/');
    expect(Number(home.priority)).toBe(1);
  });
});

describe('configuración del sitio', () => {
  test('la URL canónica no acaba en barra', () => {
    expect(SITE.url.endsWith('/')).toBe(false);
  });

  test('el identificador de AdSense y el slot están configurados', () => {
    expect(SITE.adsensePublisherId).toMatch(/^ca-pub-\d+$/);
    expect(SITE.adSlot).toMatch(/^\d+$/);
  });
});
