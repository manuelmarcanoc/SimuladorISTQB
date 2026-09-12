// ============================================================
//  Mapa de rutas del sitio.
//  Es la única fuente de verdad: la usan el router del cliente,
//  el prerenderizado estático y el generador de sitemap.
// ============================================================

import React from 'react';
import { SITE } from './site.config';
import { CERT_LIST, getCert } from './certs';
import { ARTICLES } from './data/articles';
import { chaptersOf } from './notes';
import { FAQ } from './data/faq_data';

import HomePage from './pages/HomePage';
import SimuladorPage from './pages/SimuladorPage';
import ApuntesIndexPage from './pages/ApuntesIndexPage';
import CapituloPage from './pages/CapituloPage';
import GuiasIndexPage from './pages/GuiasIndexPage';
import ArticuloPage from './pages/ArticuloPage';
import CertificacionPage from './pages/CertificacionPage';
import MinijuegoPage from './pages/MinijuegoPage';
import EstadisticasPage from './pages/EstadisticasPage';
import SobrePage from './pages/SobrePage';
import ContactoPage from './pages/ContactoPage';
import LegalTextPage from './pages/LegalTextPage';
import NotFoundPage from './pages/NotFoundPage';

const org = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo512.png`,
};

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

/* ── Rutas estáticas ─────────────────────────────────────── */

const staticRoutes = [
  {
    path: '/',
    element: <HomePage />,
    priority: '1.0',
    meta: {
      title: 'ISTQBeasy — Simuladores gratuitos de certificación ISTQB (CTFL y CTAL-TAE)',
      description:
        'Practica gratis para el ISTQB CTFL v4.0 y el CTAL-TAE v2.0: 478 preguntas con explicación, apuntes de los 14 capítulos, guías y estadísticas de progreso. Sin registro.',
      jsonld: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE.name,
          url: SITE.url,
          description: SITE.description,
          inLanguage: 'es',
          publisher: org,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
      ],
    },
  },
  {
    path: '/simulador',
    element: <SimuladorPage />,
    priority: '0.9',
    meta: {
      title: 'Simulador de examen ISTQB — CTFL v4.0 y CTAL-TAE v2.0 | ISTQBeasy',
      description:
        'Simulador de examen ISTQB con temporizador real, 478 preguntas con explicación, filtro por capítulo, repaso de errores y modo examen oficial. Gratis y sin registro.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Simulador', path: '/simulador' }])],
    },
  },
  {
    path: '/apuntes',
    element: <ApuntesIndexPage />,
    priority: '0.9',
    meta: {
      title: 'Apuntes ISTQB por capítulo — CTFL v4.0 y CTAL-TAE v2.0 | ISTQBeasy',
      description:
        'Apuntes de estudio de los 14 capítulos del syllabus ISTQB: conceptos clave, tablas comparativas y un bloque "En el examen" con lo que más se evalúa en cada sección.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Apuntes', path: '/apuntes' }])],
    },
  },
  {
    path: '/guias',
    element: <GuiasIndexPage />,
    priority: '0.9',
    meta: {
      title: 'Guías de testing de software y certificación ISTQB | ISTQBeasy',
      description:
        'Artículos sobre certificación ISTQB, técnicas de diseño de pruebas, testing estático y automatización: qué estudiar, cómo aprobar y cómo aplicarlo en el trabajo real.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Guías', path: '/guias' }])],
    },
  },
  {
    path: '/minijuego',
    element: <MinijuegoPage />,
    priority: '0.6',
    meta: {
      title: 'Minijuego de terminología ISTQB — empareja conceptos | ISTQBeasy',
      description:
        'Repasa el glosario ISTQB emparejando cada término con su definición. Rondas rápidas de cinco conceptos para fijar la terminología del examen.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Minijuego', path: '/minijuego' }])],
    },
  },
  {
    path: '/estadisticas',
    element: <EstadisticasPage />,
    priority: '0.5',
    meta: {
      title: 'Tus estadísticas de progreso ISTQB | ISTQBeasy',
      description:
        'Consulta tu progreso por capítulo, tu histórico de simulacros y tus puntos débiles. Los datos se guardan solo en tu navegador.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Estadísticas', path: '/estadisticas' }])],
    },
  },
  {
    path: '/sobre',
    element: <SobrePage />,
    priority: '0.7',
    meta: {
      title: 'Sobre ISTQBeasy — quién está detrás y por qué es gratis',
      description:
        'Qué es ISTQBeasy, quién lo mantiene, cómo se elabora el contenido, por qué es gratuito y cuál es su relación (ninguna) con el ISTQB.',
      jsonld: [
        breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Sobre el proyecto', path: '/sobre' }]),
        { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'Sobre ISTQBeasy', url: `${SITE.url}/sobre` },
      ],
    },
  },
  {
    path: '/contacto',
    element: <ContactoPage />,
    priority: '0.7',
    meta: {
      title: 'Contacto — reportar un error o sugerir contenido | ISTQBeasy',
      description:
        'Escríbenos para reportar un error en una pregunta, sugerir contenido, resolver dudas sobre privacidad o proponer una colaboración.',
      jsonld: [
        breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Contacto', path: '/contacto' }]),
        { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contacto', url: `${SITE.url}/contacto` },
      ],
    },
  },
  {
    path: '/privacidad',
    element: <LegalTextPage doc="privacidad" />,
    priority: '0.4',
    meta: {
      title: 'Política de privacidad | ISTQBeasy',
      description:
        'Qué datos trata ISTQBeasy, con qué finalidad y base jurídica, qué terceros intervienen y cómo ejercer tus derechos de protección de datos.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Privacidad', path: '/privacidad' }])],
    },
  },
  {
    path: '/cookies',
    element: <LegalTextPage doc="cookies" />,
    priority: '0.4',
    meta: {
      title: 'Política de cookies | ISTQBeasy',
      description:
        'Cookies propias y de terceros que utiliza ISTQBeasy, para qué sirven, cuánto duran y cómo cambiar tu consentimiento en cualquier momento.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Cookies', path: '/cookies' }])],
    },
  },
  {
    path: '/aviso-legal',
    element: <LegalTextPage doc="aviso-legal" />,
    priority: '0.4',
    meta: {
      title: 'Aviso legal y condiciones de uso | ISTQBeasy',
      description:
        'Titularidad del sitio, condiciones de uso, propiedad intelectual, marcas de terceros y descargo de responsabilidad respecto al ISTQB®.',
      jsonld: [breadcrumb([{ name: 'Inicio', path: '/' }, { name: 'Aviso legal', path: '/aviso-legal' }])],
    },
  },
];

/* ── Fichas de certificación ─────────────────────────────── */

const certRoutes = CERT_LIST.map((cert) => ({
  path: `/certificaciones/${cert.slug}`,
  element: <CertificacionPage certKey={cert.key} />,
  priority: '0.9',
  meta: {
    title: `${cert.fullName}: examen, temario y cómo prepararlo | ISTQBeasy`,
    description: `Todo sobre el ${cert.label}: estructura del examen (${cert.exam.questions} preguntas, ${cert.exam.minutes} minutos, ${cert.exam.passPct}% para aprobar), capítulos del syllabus, requisitos previos y plan de estudio con material gratuito.`,
    jsonld: [
      breadcrumb([
        { name: 'Inicio', path: '/' },
        { name: 'Certificaciones', path: `/certificaciones/${cert.slug}` },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: `Preparación ${cert.label}`,
        description: cert.summary,
        provider: org,
        educationalLevel: cert.level,
        teaches: cert.fullName,
        inLanguage: cert.hasTranslations ? ['es', 'en', 'fr', 'pt'] : ['es'],
        isAccessibleForFree: true,
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: `PT${Math.round((cert.exam.questions * cert.exam.timePerQuestion) / 60)}M`,
        },
      },
    ],
  },
}));

/* ── Apuntes por capítulo ────────────────────────────────── */

const chapterRoutes = CERT_LIST.flatMap((cert) =>
  chaptersOf(cert.key).map((chapter) => ({
    path: `/apuntes/${cert.slug}/capitulo-${chapter.id}`,
    element: <CapituloPage certKey={cert.key} chapterId={chapter.id} />,
    priority: '0.8',
    meta: {
      title: `${chapter.title.replace(/^Cap\.\s*\d+\s*—\s*/, '')} — Apuntes ${cert.code} (capítulo ${chapter.id}) | ISTQBeasy`,
      description: `Apuntes del capítulo ${chapter.id} del syllabus ${cert.label}: ${chapter.sections
        .slice(0, 3)
        .map((s) => s.heading.toLowerCase())
        .join(', ')}. Con los puntos que más se preguntan en el examen.`,
      jsonld: [
        breadcrumb([
          { name: 'Inicio', path: '/' },
          { name: 'Apuntes', path: '/apuntes' },
          { name: cert.code, path: `/certificaciones/${cert.slug}` },
          { name: `Capítulo ${chapter.id}`, path: `/apuntes/${cert.slug}/capitulo-${chapter.id}` },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: chapter.title,
          learningResourceType: 'Apuntes de estudio',
          educationalLevel: cert.level,
          teaches: chapter.sections.map((s) => s.heading),
          inLanguage: 'es',
          isAccessibleForFree: true,
          provider: org,
        },
      ],
    },
  }))
);

/* ── Guías ───────────────────────────────────────────────── */

const articleRoutes = ARTICLES.map((article) => ({
  path: `/guias/${article.id}`,
  element: <ArticuloPage slug={article.id} />,
  priority: '0.8',
  lastmod: article.date,
  meta: {
    title: `${article.title} | ISTQBeasy`,
    description: article.description,
    jsonld: [
      breadcrumb([
        { name: 'Inicio', path: '/' },
        { name: 'Guías', path: '/guias' },
        { name: article.title, path: `/guias/${article.id}` },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.updated || article.date,
        inLanguage: 'es',
        author: { '@type': 'Person', name: SITE.author.name },
        publisher: org,
        mainEntityOfPage: `${SITE.url}/guias/${article.id}`,
      },
    ],
  },
}));

export const ROUTES = [...staticRoutes, ...certRoutes, ...chapterRoutes, ...articleRoutes];

export const NOT_FOUND_ROUTE = {
  path: '*',
  element: <NotFoundPage />,
  meta: {
    title: 'Página no encontrada | ISTQBeasy',
    description: 'La página que buscas no existe o ha cambiado de dirección.',
    noindex: true,
  },
};

// Rutas para el router (incluye el comodín al final)
export const ROUTER_ROUTES = [...ROUTES, NOT_FOUND_ROUTE].map(({ path, element }) => ({ path, element }));

// Metadatos por ruta, para el <Seo> del cliente
export const META_BY_PATH = ROUTES.reduce((acc, r) => {
  acc[r.path] = r.meta;
  return acc;
}, {});

export function metaFor(pathname) {
  const clean = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return META_BY_PATH[clean] || NOT_FOUND_ROUTE.meta;
}

// Lista para sitemap y prerenderizado
export const SITEMAP = ROUTES.map((r) => ({
  path: r.path,
  priority: r.priority || '0.6',
  lastmod: r.lastmod || SITE.legal.lastUpdated,
  noindex: !!r.meta.noindex,
}));

export { getCert, chaptersOf };
