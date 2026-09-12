// ============================================================
//  Prerenderizado estático + sitemap
//
//  Genera un index.html real por ruta con su HTML ya renderizado
//  y sus metadatos en el <head>, para que buscadores, revisores
//  de AdSense y visitantes sin JavaScript reciban contenido de
//  verdad en la primera respuesta.
//
//  Se ejecuta después de:
//    vite build                (cliente -> dist/)
//    vite build --ssr ...      (servidor -> dist-ssr/)
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, SITEMAP, META_BY_PATH, NOT_FOUND_ROUTE, SITE } = await import(pathToFileURL(ssrEntry).href);
const NOT_FOUND_META = NOT_FOUND_ROUTE.meta;

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

const esc = (str = '') =>
  String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headFor(routePath, meta) {
  const canonical = `${SITE.url}${routePath === '/' ? '/' : routePath}`;
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<meta name="author" content="${esc(SITE.author.name)}" />`,
    `<meta property="og:type" content="${routePath.startsWith('/guias/') || routePath.startsWith('/apuntes/') ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${SITE.ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${SITE.ogImage}" />`,
  ];
  for (const block of meta.jsonld || []) {
    tags.push(
      `<script type="application/ld+json" data-seo-jsonld>${JSON.stringify(block).replace(/</g, '\\u003c')}</script>`
    );
  }
  return tags.join('\n    ');
}

async function writePage(routePath, meta, html) {
  const page = template
    .replace('<!--app-head-->', headFor(routePath, meta))
    .replace('<!--app-html-->', html);

  const outPath =
    routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, routePath.replace(/^\//, ''), 'index.html');

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, page, 'utf8');
  return { outPath, bytes: Buffer.byteLength(page), textLength: html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length };
}

/* ── Páginas ─────────────────────────────────────────────── */

const results = [];
for (const route of SITEMAP) {
  const meta = META_BY_PATH[route.path];
  let html = '';
  try {
    html = render(route.path);
  } catch (error) {
    console.error(`\n✖ Error renderizando ${route.path}:\n`, error);
    process.exitCode = 1;
    continue;
  }
  const info = await writePage(route.path, meta, html);
  results.push({ path: route.path, ...info });
}

/* ── 404 para GitHub Pages ───────────────────────────────── */

const notFoundHtml = render('/__404__');
const notFoundPage = template
  .replace('<!--app-head-->', headFor('/404', NOT_FOUND_META))
  .replace('<!--app-html-->', notFoundHtml);
await fs.writeFile(path.join(distDir, '404.html'), notFoundPage, 'utf8');

/* ── sitemap.xml ─────────────────────────────────────────── */

const urls = SITEMAP.filter((r) => !r.noindex)
  .map(
    (r) => `  <url>
    <loc>${SITE.url}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n');

await fs.writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  'utf8'
);

/* ── robots.txt ──────────────────────────────────────────── */

await fs.writeFile(
  path.join(distDir, 'robots.txt'),
  `# ${SITE.name} — ${SITE.url}
User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`,
  'utf8'
);

/* ── Resumen ─────────────────────────────────────────────── */

const thin = results.filter((r) => r.textLength < 900);
console.log(`\n✔ Prerenderizadas ${results.length} rutas + 404.html`);
console.log(`✔ sitemap.xml con ${SITEMAP.filter((r) => !r.noindex).length} URLs`);
console.log(`✔ robots.txt con la línea Sitemap`);
console.log(
  `\nTexto renderizado por página (caracteres):\n` +
    results
      .slice()
      .sort((a, b) => a.textLength - b.textLength)
      .map((r) => `  ${String(r.textLength).padStart(6)}  ${r.path}`)
      .join('\n')
);
if (thin.length) {
  console.log(`\n⚠ ${thin.length} página(s) con menos de 900 caracteres de texto: ${thin.map((t) => t.path).join(', ')}`);
}
