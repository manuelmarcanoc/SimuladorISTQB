import React from 'react';
import { Link } from 'react-router-dom';
import StatsPanel from '../components/StatsPanel';
import Breadcrumbs from '../components/Breadcrumbs';
import { useSite } from '../App';
import { getCert } from '../certs';

const EstadisticasPage = () => {
  const { lang, cert } = useSite();
  const info = getCert(cert);

  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Inicio', path: '/' }, { name: 'Estadísticas' }]} />
      <header className="page-header">
        <h1>Tu progreso en {info.code}</h1>
        <p className="page-lede">
          Aciertos por capítulo, histórico de simulacros y racha de estudio. Cada certificación
          lleva sus propias estadísticas y todo se guarda únicamente en este navegador: no hay
          cuenta ni servidor donde consultarlo.
        </p>
      </header>
      <StatsPanel language={lang} cert={cert} />

      <section className="section section-quiet">
        <h2>Cómo interpretar estos números</h2>
        <ul className="prose-list">
          <li>
            <strong>Porcentaje global:</strong> útil como tendencia, no como predicción. Un 70%
            haciendo tandas de cinco preguntas por capítulo no equivale a un 70% en un examen
            completo con temporizador.
          </li>
          <li>
            <strong>Aciertos por capítulo:</strong> es el dato que decide tu próxima sesión de
            estudio. Si un capítulo va veinte puntos por debajo del resto, ahí está tu margen.
          </li>
          <li>
            <strong>Histórico de simulacros:</strong> mira la serie, no el último resultado. Dos
            simulacros completos por encima del 80% dicen bastante más que un 95% en una tanda de
            diez preguntas del capítulo que mejor llevas.
          </li>
          <li>
            <strong>Racha de estudio:</strong> media hora al día durante dos semanas rinde mucho más
            que seis horas el domingo, porque el examen premia el reconocimiento rápido de patrones.
          </li>
        </ul>
        <p>
          Cuando un capítulo se te resiste, el circuito corto es leer sus{' '}
          <Link to="/apuntes">apuntes</Link>, hacer diez preguntas de ese capítulo en el{' '}
          <Link to="/simulador">simulador</Link> y volver a los apuntes con los fallos delante.
        </p>
        <p className="muted">
          Todo esto se guarda en el almacenamiento local de tu navegador y no viaja a ningún
          servidor: si cambias de dispositivo o borras los datos del sitio, empiezas de cero. El
          detalle está en la <Link to="/privacidad">política de privacidad</Link>.
        </p>
      </section>
    </div>
  );
};

export default EstadisticasPage;
