import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE } from '../site.config';
import { CERT_LIST, TOTAL_QUESTIONS } from '../certs';
import { chaptersOf } from '../notes';

const TOTAL = TOTAL_QUESTIONS;
const CHAPTERS = CERT_LIST.reduce((acc, c) => acc + chaptersOf(c.key).length, 0);

const SobrePage = () => (
  <div className="page page-article">
    <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Sobre el proyecto' }]} />

    <header className="page-header">
      <h1>Sobre ISTQBeasy</h1>
      <p className="page-lede">
        Un sitio de preparación de certificaciones ISTQB hecho por una persona que pasó por el
        examen y no encontró lo que buscaba: práctica gratuita, en español y con explicaciones que
        enseñaran algo más que la letra correcta.
      </p>
    </header>

    <section className="section">
      <h2>Qué es y qué incluye</h2>
      <p>
        ISTQBeasy es una plataforma de estudio gratuita para dos certificaciones del esquema ISTQB:
        el <Link to="/certificaciones/ctfl">CTFL v4.0</Link> (Foundation Level) y el{' '}
        <Link to="/certificaciones/ctal-tae">CTAL-TAE v2.0</Link> (Test Automation Engineering).
      </p>
      <ul className="prose-list">
        <li>{TOTAL} preguntas de práctica con explicación razonada de la correcta y de por qué fallan las demás.</li>
        <li>Apuntes de los {CHAPTERS} capítulos de ambos syllabus, con un bloque "En el examen" en cada sección.</li>
        <li>Modo examen oficial con el temporizador y la puntuación reales de cada certificación.</li>
        <li>Repaso de errores, estadísticas por capítulo y minijuego de terminología.</li>
        <li>Banco del CTFL disponible en español, inglés, francés y portugués.</li>
        <li>Guías de fondo sobre certificación, técnicas de prueba y automatización.</li>
      </ul>
    </section>

    <section className="section">
      <h2>Quién lo mantiene</h2>
      <p>
        Lo escribe y lo mantiene {SITE.author.name}, {SITE.author.role}. {SITE.author.bio}
      </p>
      {SITE.author.linkedIn && (
        <p>
          <a href={SITE.author.linkedIn} target="_blank" rel="noopener noreferrer">
            Perfil profesional en LinkedIn ↗
          </a>
        </p>
      )}
      <p>
        No hay redacción ni equipo detrás: es un proyecto personal, y eso tiene una consecuencia
        práctica para ti. Si encuentras una pregunta mal planteada o una explicación que no
        convence, <Link to="/contacto">escríbeme</Link> y lo corrijo. Las correcciones que llegan
        por ahí son la principal fuente de mejora del banco.
      </p>
    </section>

    <section className="section">
      <h2>Cómo se elabora el contenido</h2>
      <ol className="plan-list">
        <li>
          <strong>Punto de partida:</strong> los syllabus públicos del ISTQB y su glosario oficial.
          Cada pregunta se escribe contra un objetivo de aprendizaje concreto del temario.
        </li>
        <li>
          <strong>Redacción propia:</strong> las preguntas son originales. No se reproducen los
          exámenes oficiales ni se alojan copias de los PDF del ISTQB: cuando hace falta, se enlaza
          a la descarga gratuita en su web.
        </li>
        <li>
          <strong>Formato del examen real:</strong> se respetan los niveles cognitivos (K1 a K4), el
          reparto de puntos y el estilo de enunciado por escenarios de cada certificación.
        </li>
        <li>
          <strong>Revisión continua:</strong> cuando el ISTQB publica una versión nueva de un
          syllabus, se revisan las preguntas y los apuntes afectados. Cada banco pasa además una
          validación automática de formato antes de publicarse.
        </li>
      </ol>
    </section>

    <section className="section">
      <h2>Por qué es gratis</h2>
      <p>
        Preparar el ISTQB por la vía comercial cuesta cientos de euros entre cursos y simuladores de
        pago, y eso deja fuera a mucha gente que empieza. El coste de mantener este sitio es
        pequeño, así que se cubre con la publicidad de la propia página y con las donaciones
        voluntarias de quien quiere echar una mano.
      </p>
      <p>
        No hay muro de pago, ni preguntas "premium", ni venta de datos: no hay cuenta de usuario que
        vender. Tu progreso se guarda en tu navegador y no sale de tu dispositivo, como explica la{' '}
        <Link to="/privacidad">política de privacidad</Link>.
      </p>
      <p>
        <a href={SITE.bmcUrl} target="_blank" rel="noopener noreferrer">
          Invitar a un café al proyecto ☕
        </a>
      </p>
    </section>

    <section className="section section-quiet">
      <h2>Relación con el ISTQB</h2>
      <p>
        Ninguna. ISTQBeasy es independiente y no está afiliado, autorizado ni respaldado por el
        ISTQB® ni por sus miembros nacionales. ISTQB® es una marca registrada de su titular y se
        menciona aquí de forma descriptiva. La documentación oficial y la inscripción al examen se
        gestionan en{' '}
        <a href={SITE.official.istqb} target="_blank" rel="noopener noreferrer nofollow">
          istqb.org
        </a>
        . El detalle completo está en el <Link to="/aviso-legal">aviso legal</Link>.
      </p>
    </section>
  </div>
);

export default SobrePage;
