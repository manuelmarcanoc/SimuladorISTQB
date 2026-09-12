import React from 'react';
import { Link } from 'react-router-dom';
import ConceptMatch from '../components/ConceptMatch';
import Breadcrumbs from '../components/Breadcrumbs';
import { useSite } from '../App';
import { getCert } from '../certs';

const MinijuegoPage = () => {
  const { lang, cert } = useSite();
  const info = getCert(cert);

  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Minijuego' }]} />
      <header className="page-header">
        <h1>Minijuego de terminología {info.code}</h1>
        <p className="page-lede">
          El examen ISTQB se juega en el vocabulario: buena parte de las preguntas se resuelven
          sabiendo exactamente qué significa cada término. Empareja cada concepto con su definición
          en rondas de cinco y verás cuáles se te resisten.
        </p>
      </header>
      <ConceptMatch language={lang} cert={cert} />

      <section className="section section-quiet">
        <h2>Por qué el vocabulario decide el examen</h2>
        <p>
          El ISTQB define su terminología en un glosario propio y redacta las preguntas con esa
          precisión. Muchas opciones incorrectas son afirmaciones que suenan razonables pero usan un
          término en el sentido coloquial en lugar del sentido del syllabus: error, defecto y fallo
          no son sinónimos; verificación y validación responden a preguntas distintas; una prueba de
          confirmación y una de regresión no persiguen lo mismo.
        </p>
        <p>
          Este minijuego trabaja exactamente esa capa. Cada ronda te presenta cinco términos y sus
          cinco definiciones desordenadas; emparejarlos obliga a distinguir matices que en una
          lectura pasiva se pasan por alto. Es un formato corto a propósito: funciona mejor en
          sesiones de cinco minutos, repetidas, que en tandas largas.
        </p>
        <p>
          Cada certificación tiene su propio mazo de conceptos: el del {info.code} cubre los
          términos que aparecen en su syllabus. Si quieres la definición canónica de cualquier
          término, la fuente es el{' '}
          <a href="https://glossary.istqb.org/" target="_blank" rel="noopener noreferrer nofollow">
            glosario oficial del ISTQB
          </a>
          , y en los <Link to="/apuntes">apuntes por capítulo</Link> tienes cada concepto explicado
          dentro de su contexto.
        </p>
      </section>
    </div>
  );
};

export default MinijuegoPage;
