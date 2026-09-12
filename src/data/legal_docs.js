// ============================================================
//  Textos legales del sitio.
//  Estructura: cada documento tiene título, fecha de revisión y
//  secciones con bloques tipados (los mismos que los artículos).
//
//  IMPORTANTE: la LSSI y el RGPD obligan a identificar al titular
//  del sitio. Completa SITE.author y los datos de titularidad del
//  aviso legal con tu nombre o razón social antes de publicar.
// ============================================================

import { SITE } from '../site.config';

const updated = SITE.legal.lastUpdatedLabel;

export const LEGAL_DOCS = {
  privacidad: {
    title: 'Política de privacidad',
    updated,
    lede:
      'Esta política explica qué datos se tratan cuando visitas ISTQBeasy, con qué finalidad, con qué base jurídica, quién más interviene y cómo puedes ejercer tus derechos.',
    sections: [
      {
        heading: '1. Quién es el responsable',
        content: [
          {
            type: 'p',
            text: `El responsable del tratamiento es el titular del dominio ${SITE.domain}, un particular que mantiene este proyecto de forma independiente. Puedes contactar por cualquier cuestión relacionada con la privacidad a través del formulario de la página de contacto, indicando en el mensaje que se trata de una solicitud de protección de datos.`,
          },
        ],
      },
      {
        heading: '2. Qué datos se tratan',
        content: [
          {
            type: 'p',
            text: 'ISTQBeasy no tiene registro de usuarios ni área privada. No se pide correo electrónico, nombre ni ningún dato para usar el simulador, los apuntes o las guías.',
          },
          {
            type: 'ul',
            items: [
              'Datos que guarda tu propio navegador: tu progreso en los simulacros, las preguntas que has fallado, tus logros, tu idioma, tu tema claro u oscuro y tu elección de cookies. Se almacenan en el almacenamiento local de tu dispositivo, no se envían a ningún servidor y desaparecen si borras los datos del sitio.',
              'Datos que envías voluntariamente: si escribes a través del formulario de contacto, se tratan el nombre, el correo electrónico y el mensaje que facilitas, con la única finalidad de responderte.',
              'Datos técnicos de navegación: el proveedor de alojamiento y los proveedores de publicidad pueden registrar la dirección IP, el tipo de navegador y la página visitada por motivos de seguridad, estadística y publicidad.',
            ],
          },
        ],
      },
      {
        heading: '3. Con qué finalidad y base jurídica',
        content: [
          {
            type: 'table',
            headers: ['Tratamiento', 'Finalidad', 'Base jurídica'],
            rows: [
              ['Almacenamiento local de tu progreso', 'Que puedas continuar donde lo dejaste y ver tus estadísticas', 'Interés legítimo en prestar la funcionalidad solicitada; son datos que no salen de tu dispositivo'],
              ['Formulario de contacto', 'Atender tu consulta o corregir un error que reportas', 'Consentimiento, al enviar el mensaje'],
              ['Publicidad de Google AdSense', 'Financiar el mantenimiento del sitio', 'Consentimiento para cookies y tratamientos publicitarios'],
              ['Registros del alojamiento', 'Seguridad y funcionamiento del servicio', 'Interés legítimo'],
            ],
          },
        ],
      },
      {
        heading: '4. Terceros que intervienen',
        content: [
          {
            type: 'ul',
            items: [
              'GitHub Pages (GitHub, Inc.): alojamiento del sitio. Procesa registros técnicos de acceso.',
              'Google AdSense (Google Ireland Limited): publicidad. Puede utilizar cookies e identificadores para mostrar anuncios y medir su rendimiento. Si aceptas las cookies de publicidad, los anuncios pueden ser personalizados; si no, se limitan a anuncios no personalizados.',
              'Buy Me a Coffee: solo si decides hacer una donación, y en ese caso el tratamiento se rige por la política de privacidad de ese servicio.',
              'Formspree u otro proveedor de formularios: si utilizas el formulario de contacto, tu mensaje se transmite a través de ese servicio para que llegue al correo del responsable.',
            ],
          },
          {
            type: 'p',
            text: 'Algunos de estos proveedores están ubicados fuera del Espacio Económico Europeo. En esos casos, las transferencias internacionales se amparan en las decisiones de adecuación de la Comisión Europea o en cláusulas contractuales tipo, según lo que declare cada proveedor en su propia política.',
          },
        ],
      },
      {
        heading: '5. Cuánto tiempo se conservan',
        content: [
          {
            type: 'ul',
            items: [
              'Los datos del almacenamiento local permanecen en tu navegador hasta que los borras tú.',
              'Los mensajes de contacto se conservan mientras sea necesario para atender la consulta y, después, durante el plazo legal aplicable a posibles reclamaciones.',
              'Los datos tratados por terceros se rigen por los plazos de conservación que cada uno declare.',
            ],
          },
        ],
      },
      {
        heading: '6. Tus derechos',
        content: [
          {
            type: 'p',
            text: 'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento en cualquier momento. Para hacerlo, escribe a través del formulario de contacto.',
          },
          {
            type: 'p',
            text: 'Para eliminar de inmediato todo lo que este sitio guarda sobre ti, basta con borrar los datos del sitio en tu navegador: no hay copia en ningún servidor. Si consideras que tus derechos no han sido atendidos, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).',
          },
        ],
      },
      {
        heading: '7. Menores',
        content: [
          {
            type: 'p',
            text: 'El sitio está dirigido a personas que preparan una certificación profesional y no está orientado a menores de 14 años. No se recaban datos de forma intencionada de personas de esa edad.',
          },
        ],
      },
      {
        heading: '8. Cambios en esta política',
        content: [
          {
            type: 'p',
            text: `Si cambian los servicios utilizados o la normativa aplicable, esta política se actualizará y se indicará la nueva fecha de revisión. La versión vigente es la de ${updated}.`,
          },
        ],
      },
    ],
  },

  cookies: {
    title: 'Política de cookies',
    updated,
    lede:
      'Qué cookies y almacenamiento local utiliza ISTQBeasy, para qué sirven y cómo cambiar tu decisión cuando quieras.',
    sections: [
      {
        heading: '1. Qué son y cómo se usan aquí',
        content: [
          {
            type: 'p',
            text: 'Una cookie es un pequeño archivo que un sitio guarda en tu dispositivo. ISTQBeasy usa además el almacenamiento local del navegador, que funciona de forma parecida pero no se envía en cada petición. En la práctica, hay dos grupos: lo que hace falta para que la aplicación funcione y recuerde tus preferencias, y lo que utiliza Google para mostrar publicidad.',
          },
        ],
      },
      {
        heading: '2. Detalle de lo que se guarda',
        content: [
          {
            type: 'table',
            headers: ['Nombre', 'Tipo', 'Finalidad', 'Duración'],
            rows: [
              ['istqb_stats, istqb_stats_tae', 'Propia (almacenamiento local)', 'Guardar tus resultados y estadísticas por certificación', 'Hasta que borres los datos del sitio'],
              ['istqb_wrong_questions', 'Propia (almacenamiento local)', 'Recordar las preguntas falladas para el modo de repaso', 'Hasta que borres los datos del sitio'],
              ['istqb_achievements', 'Propia (almacenamiento local)', 'Logros desbloqueados', 'Hasta que borres los datos del sitio'],
              ['istqb-cert, istqb-dark', 'Propia (almacenamiento local)', 'Recordar la certificación activa y el tema claro u oscuro', 'Hasta que borres los datos del sitio'],
              ['istqb_consent_v2', 'Propia (almacenamiento local)', 'Recordar tu elección sobre cookies', 'Hasta que borres los datos del sitio'],
              ['Cookies de Google AdSense', 'Terceros', 'Mostrar y medir anuncios; limitar la frecuencia; prevenir fraude', 'Según la política de Google'],
            ],
          },
        ],
      },
      {
        heading: '3. Cómo cambiar tu elección',
        content: [
          {
            type: 'p',
            text: 'En el pie de página tienes el enlace "Cambiar preferencias de cookies", que vuelve a mostrar el aviso para que elijas de nuevo. También puedes bloquear o borrar cookies desde la configuración de tu navegador; si bloqueas el almacenamiento local, el sitio seguirá funcionando pero no recordará tu progreso ni tus preferencias.',
          },
          {
            type: 'p',
            text: 'Si rechazas las cookies de publicidad, seguirás viendo anuncios, pero no serán personalizados en función de tu actividad.',
          },
        ],
      },
      {
        heading: '4. Publicidad y consentimiento',
        content: [
          {
            type: 'p',
            text: 'Este sitio utiliza Google AdSense y transmite tu elección a Google mediante el mecanismo de consentimiento de Google (Consent Mode). Puedes consultar cómo utiliza Google la información de los sitios que usan sus servicios en policies.google.com/technologies/partner-sites.',
          },
        ],
      },
    ],
  },

  'aviso-legal': {
    title: 'Aviso legal y condiciones de uso',
    updated,
    lede:
      'Información sobre la titularidad de este sitio, las condiciones en que puedes usarlo y los derechos de propiedad intelectual implicados.',
    sections: [
      {
        heading: '1. Titularidad del sitio',
        content: [
          {
            type: 'p',
            text: `Este sitio web, accesible en ${SITE.url}, lo mantiene un particular con carácter independiente y sin ánimo de lucro comercial más allá de cubrir sus costes mediante publicidad y donaciones voluntarias. Para cualquier comunicación puedes usar el formulario de la página de contacto.`,
          },
        ],
      },
      {
        heading: '2. Condiciones de uso',
        content: [
          {
            type: 'ul',
            items: [
              'El acceso y uso del sitio es libre y gratuito, y no requiere registro.',
              'Puedes utilizar el material para tu estudio personal. No está permitido reproducirlo de forma sistemática, revenderlo ni presentarlo como propio.',
              'No está permitido el uso automatizado que degrade el servicio (extracción masiva de contenido, ataques, sobrecarga deliberada).',
              'El sitio se ofrece "tal cual": se cuida su exactitud, pero no se garantiza que esté libre de errores ni disponible de forma ininterrumpida.',
            ],
          },
        ],
      },
      {
        heading: '3. Naturaleza del contenido y descargo de responsabilidad',
        content: [
          {
            type: 'p',
            text: 'ISTQBeasy es un proyecto independiente y NO está afiliado, asociado, autorizado ni respaldado por el ISTQB® (International Software Testing Qualifications Board) ni por ninguno de sus miembros nacionales o proveedores de examen. ISTQB® y los nombres de sus certificaciones son marcas de sus respectivos titulares y se utilizan aquí únicamente con finalidad descriptiva e informativa.',
          },
          {
            type: 'p',
            text: 'El contenido se elabora a partir de los syllabus públicos y del glosario oficial, con fines educativos. Las preguntas de práctica son de elaboración propia y no reproducen los exámenes oficiales. Practicar aquí no garantiza aprobar ningún examen: la fuente autorizada es siempre la documentación oficial del ISTQB.',
          },
          {
            type: 'p',
            text: 'Este sitio no aloja copias de los syllabus ni de los exámenes de muestra oficiales. Cuando se necesitan, se enlaza a la descarga gratuita en istqb.org.',
          },
        ],
      },
      {
        heading: '4. Propiedad intelectual',
        content: [
          {
            type: 'p',
            text: 'Los textos, apuntes, preguntas, código y diseño de este sitio son obra de su autor y están protegidos por la normativa de propiedad intelectual. Si consideras que algún contenido vulnera derechos de terceros, escribe por el formulario de contacto describiendo el contenido concreto: se revisará y, si procede, se retirará.',
          },
        ],
      },
      {
        heading: '5. Enlaces externos y publicidad',
        content: [
          {
            type: 'p',
            text: 'El sitio incluye enlaces a páginas de terceros (ISTQB, glosario oficial, servicios de donación) sobre cuyos contenidos no se ejerce control. También muestra publicidad servida por Google AdSense: los anuncios los selecciona Google y su contenido no implica recomendación por parte de este sitio.',
          },
        ],
      },
      {
        heading: '6. Legislación aplicable',
        content: [
          {
            type: 'p',
            text: 'Estas condiciones se rigen por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales del domicilio del titular, sin perjuicio de los derechos que correspondan a los consumidores por normativa imperativa.',
          },
        ],
      },
    ],
  },
};

export default LEGAL_DOCS;
