import React from 'react';
import { Link } from 'react-router-dom';
import { CERT_LIST, TOTAL_QUESTIONS } from '../certs';
import { ARTICLES } from '../data/articles';
import { SITE } from '../site.config';
import { chaptersOf } from '../notes';
import { FAQ } from '../data/faq_data';

const TOTAL_CHAPTERS = CERT_LIST.reduce((acc, c) => acc + chaptersOf(c.key).length, 0);

const HomePage = () => (
  <div className="page home">
    <section className="hero">
      <p className="hero-eyebrow">Preparación gratuita de certificaciones ISTQB</p>
      <h1 className="hero-title">
        Practica para tu examen ISTQB hasta que aprobarlo sea lo previsible
      </h1>
      <p className="hero-lede">
        {TOTAL_QUESTIONS} preguntas con explicación razonada, apuntes de los {TOTAL_CHAPTERS} capítulos
        de los syllabus, simulacros con el temporizador oficial y estadísticas que te dicen qué
        capítulo tienes flojo. Sin registro y sin coste.
      </p>
      <div className="hero-actions">
        <Link className="btn btn-primary" to="/simulador">Empezar un simulacro</Link>
        <Link className="btn btn-secondary" to="/apuntes">Ver los apuntes</Link>
      </div>

      <dl className="stat-row">
        <div className="stat">
          <dt>Preguntas con explicación</dt>
          <dd className="tabular">{TOTAL_QUESTIONS}</dd>
        </div>
        <div className="stat">
          <dt>Certificaciones</dt>
          <dd className="tabular">{CERT_LIST.length}</dd>
        </div>
        <div className="stat">
          <dt>Capítulos de apuntes</dt>
          <dd className="tabular">{TOTAL_CHAPTERS}</dd>
        </div>
        <div className="stat">
          <dt>Idiomas</dt>
          <dd className="tabular">4</dd>
        </div>
      </dl>
    </section>

    <section className="section">
      <h2>Elige tu certificación</h2>
      <div className="cert-cards">
        {CERT_LIST.map((cert) => (
          <article className="cert-card" key={cert.key}>
            <p className="cert-card-level">{cert.level}</p>
            <h3>
              <Link to={`/certificaciones/${cert.slug}`}>{cert.label}</Link>
            </h3>
            <p className="cert-card-summary">{cert.summary}</p>
            <ul className="cert-card-facts">
              <li>
                <span>Examen</span>
                <strong className="tabular">{cert.exam.questions} preguntas · {cert.exam.minutes} min</strong>
              </li>
              <li>
                <span>Para aprobar</span>
                <strong className="tabular">{cert.exam.passPct}% ({cert.exam.passPoints}/{cert.exam.points} puntos)</strong>
              </li>
              <li>
                <span>Requisitos</span>
                <strong>{cert.key === 'ctfl' ? 'Ninguno' : 'CTFL + experiencia'}</strong>
              </li>
            </ul>
            <p className="cert-card-links">
              <Link to={`/certificaciones/${cert.slug}`}>Guía de la certificación</Link>
              <Link to="/simulador">Practicar ahora</Link>
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="section">
      <h2>Cómo se estudia aquí</h2>
      <ol className="steps">
        <li>
          <h3>Lee el capítulo</h3>
          <p>
            Los apuntes resumen cada sección del syllabus en frases accionables y cierran con un
            bloque <em>En el examen</em> que dice qué se pregunta de ahí y con qué trampas.
          </p>
        </li>
        <li>
          <h3>Practica ese capítulo</h3>
          <p>
            Filtra el simulador por capítulo y haz tandas cortas. Cada respuesta trae la
            justificación completa, así que un fallo se convierte en algo aprendido en el momento.
          </p>
        </li>
        <li>
          <h3>Repite lo que fallaste</h3>
          <p>
            El modo <em>repasar errores</em> reúne las preguntas que has fallado. Es la parte del
            estudio con mejor retorno: casi siempre son cuatro conceptos, no cuarenta.
          </p>
        </li>
        <li>
          <h3>Simula el examen completo</h3>
          <p>
            40 preguntas con el temporizador real de tu certificación. Acostumbrarte al reloj y a
            la fatiga de lectura es la mitad de la preparación.
          </p>
        </li>
      </ol>
    </section>

    <section className="section">
      <h2>Guías recientes</h2>
      <div className="teaser-grid">
        {ARTICLES.slice(0, 3).map((article) => (
          <article className="teaser" key={article.id}>
            <h3><Link to={`/guias/${article.id}`}>{article.title}</Link></h3>
            <p>{article.description}</p>
            <p className="teaser-meta">{article.readTime} de lectura</p>
          </article>
        ))}
      </div>
      <p className="section-more"><Link to="/guias">Todas las guías →</Link></p>
    </section>

    <section className="section">
      <h2>Preguntas frecuentes</h2>
      <div className="faq">
        {FAQ.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>

    <section className="section section-quiet">
      <h2>Sobre este proyecto</h2>
      <p>
        ISTQBeasy lo mantiene {SITE.author.name}, {SITE.author.role}. Nació de una preparación
        propia: había material de pago y bancos de preguntas dudosos, pero poca práctica gratuita,
        en español y con explicaciones que enseñaran algo. Puedes leer{' '}
        <Link to="/sobre">cómo se elabora el contenido</Link> o{' '}
        <Link to="/contacto">escribirme</Link> si encuentras un error.
      </p>
      <p className="disclaimer-inline">
        ISTQBeasy es independiente y no está afiliado al ISTQB®. Los syllabus oficiales y los
        exámenes de muestra se descargan gratuitamente desde{' '}
        <a href={SITE.official.istqb} target="_blank" rel="noopener noreferrer nofollow">istqb.org</a>.
      </p>
    </section>
  </div>
);

export default HomePage;
