// ============================================================
//  Configuración del sitio — un único lugar para los datos
//  públicos del proyecto (identidad, contacto, redes).
// ============================================================

export const SITE = {
  name: 'ISTQBeasy',
  domain: 'istqbeasy.com',
  url: 'https://istqbeasy.com',
  tagline: 'Simuladores gratuitos de certificación ISTQB',
  description:
    'Simuladores gratuitos para las certificaciones ISTQB: CTFL v4.0 (Foundation Level) y CTAL-TAE v2.0 (Test Automation Engineering). Preguntas con explicación, apuntes por capítulo, guías y estadísticas de progreso.',
  locale: 'es_ES',
  lang: 'es',
  ogImage: 'https://istqbeasy.com/og-image.png',
  founded: '2026',
  adsensePublisherId: 'ca-pub-8724519668955265',
  adSlot: '6641167211',
  bmcUrl: 'https://buymeacoffee.com/manuelmc',

  // ── Autoría ──────────────────────────────────────────────
  // Rellena authorLinkedIn y authorBio con tus datos reales:
  // una autoría identificable es uno de los factores que más
  // peso tiene en la revisión de AdSense y en la confianza del
  // visitante.
  author: {
    name: 'Manuel Marcano',
    role: 'QA y automatización de pruebas',
    bio: 'Profesional del sector tecnológico dedicado a pruebas de software y automatización. Creé ISTQBeasy mientras preparaba mi propia certificación, al no encontrar material de práctica gratuito y en español que estuviera a la altura del examen.',
    linkedIn: 'https://www.linkedin.com/in/manuelmarcano/', // p. ej. 'https://www.linkedin.com/in/tu-perfil/'
  },

  // ── Contacto ─────────────────────────────────────────────
  // El formulario se envía por POST a este endpoint. Crea un
  // formulario gratuito en https://formspree.io (o Basin, Getform)
  // y pega aquí la URL que te den: mientras esté vacío, la página
  // de contacto muestra el aviso de "formulario no configurado".
  contact: {
    formEndpoint: 'https://formspree.io/f/istqbeasy',
    responseTime: '2-3 días laborables',
  },

  // ── Datos legales ────────────────────────────────────────
  legal: {
    lastUpdated: '2026-09-10',
    lastUpdatedLabel: 'septiembre de 2026',
  },

  // ── Fuentes oficiales (enlazamos, no alojamos) ───────────
  official: {
    istqb: 'https://istqb.org',
    ctflSyllabus: 'https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/',
    ctflSamples: 'https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/#sample-exams',
    taeSyllabus: 'https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/',
    glossary: 'https://glossary.istqb.org/',
  },
};

export default SITE;
