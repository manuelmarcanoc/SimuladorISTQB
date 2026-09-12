# ISTQBeasy — simuladores gratuitos de certificación ISTQB

Sitio de preparación para las certificaciones **ISTQB CTFL v4.0** (Foundation Level) y
**ISTQB CTAL-TAE v2.0** (Test Automation Engineering), publicado en
[istqbeasy.com](https://istqbeasy.com).

478 preguntas con explicación razonada, apuntes de los 15 capítulos de ambos syllabus,
guías de fondo, minijuego de terminología y estadísticas de progreso. Sin registro.

## Stack

- **Vite + React 19** (migrado desde Create React App, que está sin mantenimiento)
- **react-router** con una ruta por sección, definidas en `src/routes.jsx`
- **Prerenderizado estático** en el build: cada ruta genera su propio `index.html` con el
  HTML ya renderizado y sus metadatos, más `sitemap.xml` y `robots.txt`
- **Vitest + Testing Library** para los tests
- Despliegue en **GitHub Pages** (`npm run deploy`, con CNAME propio)

## Comandos

```bash
npm install        # una sola vez
npm run dev        # servidor de desarrollo
npm run build      # build + prerenderizado + sitemap (salida en dist/)
npm run preview    # previsualiza el build
npm run test       # tests en modo watch
npm run test:ci    # tests una sola vez
npm run deploy     # build y publicación en GitHub Pages
```

## Estructura

```
src/
  site.config.js        Identidad del sitio, contacto, enlaces oficiales
  certs.js              Registro de certificaciones (añadir una = una entrada aquí)
  routes.jsx            Mapa de rutas + metadatos + datos estructurados
  notes.js              Acceso a los apuntes por certificación
  App.jsx               Armazón: cabecera, navegación, pie, consentimiento
  pages/                Una página por ruta
  components/           Simulador, minijuego, estadísticas y piezas comunes
  data/                 Bancos de preguntas, apuntes, guías, glosario y textos legales
scripts/
  prerender.mjs         Genera el HTML estático, el sitemap y el robots.txt
  patch_tae.py          Registro del parche que introdujo la segunda certificación
```

## Añadir una certificación nueva

1. Añade su entrada en `src/certs.js` (código, capítulos, datos del examen, contadores).
2. Añade sus ficheros en `src/data/`: `questions_<sufijo>.json`, `notes_<sufijo>_data.js`,
   `concepts_<sufijo>.json`, `flashcards_<sufijo>.json`.
3. Regístrala en `NOTES_BY_CERT` (`src/notes.js`).
4. `npm run test:ci` valida el formato del banco y que las rutas y metadatos cuadren.

## Contenido y licencia

Las preguntas son de elaboración propia a partir de los objetivos de aprendizaje de los
syllabus públicos del ISTQB. El sitio **no aloja** copias de los syllabus ni de los exámenes
de muestra oficiales: enlaza a las descargas gratuitas de [istqb.org](https://istqb.org).

ISTQBeasy es un proyecto independiente y no está afiliado ni respaldado por el ISTQB®.
