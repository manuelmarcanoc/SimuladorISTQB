import React from 'react';
import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import Breadcrumbs from '../components/Breadcrumbs';
import { useSite } from '../App';
import { getCert } from '../certs';


const SimuladorPage = () => {
  const { lang, cert } = useSite();
  const info = getCert(cert);

  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Simulador' }]} />

      <header className="page-header">
        <h1>Simulador de examen {info.label}</h1>
        <p className="page-lede">
          {info.questionCount} preguntas con explicación razonada, filtro por capítulo y modo examen
          oficial con el temporizador real: {info.exam.questions} preguntas en{' '}
          {info.exam.minutes} minutos, con un {info.exam.passPct}% para aprobar. Las respuestas se
          corrigen al instante y las que falles quedan guardadas para repasarlas después.
        </p>
      </header>

      <Quiz language={lang} cert={cert} />

      <section className="section section-quiet">
        <h2>Cómo sacarle partido</h2>
        <ul className="prose-list">
          <li>
            Empieza por capítulos sueltos de 10 preguntas mientras estudias los{' '}
            <Link to="/apuntes">apuntes</Link>: acertar con el material fresco fija mucho mejor que
            hacer simulacros completos desde el primer día.
          </li>
          <li>
            Lee la explicación también cuando aciertes. Buena parte del examen se decide en
            distinguir dos opciones parecidas, y ahí es donde está el matiz.
          </li>
          <li>
            Usa <em>repasar errores</em> antes de cada sesión nueva. Son pocas preguntas y es donde
            está tu margen real de mejora.
          </li>
          <li>
            Deja los simulacros completos con temporizador para la última semana, y hazlos de una
            sentada, sin pausas: el cansancio de lectura es parte de lo que se entrena.
          </li>
        </ul>
        <p>
          Si vas a por el {info.key === 'ctfl' ? 'Foundation Level' : 'nivel avanzado de automatización'}, en la{' '}
          <Link to={`/certificaciones/${info.slug}`}>guía del {info.code}</Link> tienes la
          estructura del examen, el temario capítulo por capítulo y un plan de estudio.
        </p>
      </section>
    </div>
  );
};

export default SimuladorPage;
