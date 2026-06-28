import React from 'react';

// Inline SVG diagrams for each study-notes chapter.
// Strokes/text use currentColor (adapts to light/dark). `accent` = chapter color.

const LBL = {
  es: {
    c1: { error: 'Error', errorSub: '(equivocación)', defect: 'Defecto', defectSub: '(en el código)', failure: 'Fallo', failureSub: '(en ejecución)', cap: 'Una persona comete un error → introduce un defecto → puede provocar un fallo' },
    c2: { req: 'Requisitos', design: 'Diseño', code: 'Código', comp: 'P. de componente', integ: 'P. de integración', sys: 'P. de sistema', acc: 'P. de aceptación', dev: 'Desarrollo', test: 'Pruebas', cap: 'Cada nivel de prueba (derecha) valida su fase de desarrollo (izquierda)' },
    c3: { title: 'Formalidad de las revisiones', informal: 'Informal', walk: 'Walkthrough', tech: 'Técnica', insp: 'Inspección', less: '– formal', more: '+ formal' },
    c4: { title: 'Partición de equivalencia + valores límite (edad 18–65)', inv: 'Inválida', val: 'Válida', cap: '1 valor por partición + los límites (17·18 / 65·66)' },
    c5: { top: 'Sistema / E2E', mid: 'Integración', base: 'Componente / unitarias', fast: 'rápidas · baratas · muchas', slow: 'lentas · caras · pocas' },
    c6: { commit: 'Código', build: 'Build', test: 'Pruebas auto.', deploy: 'Despliegue', cap: 'CI/CD: herramientas de gestión, estáticas, ejecución y DevOps' },
  },
  en: {
    c1: { error: 'Error', errorSub: '(human mistake)', defect: 'Defect', defectSub: '(in the code)', failure: 'Failure', failureSub: '(at runtime)', cap: 'A person makes an error → introduces a defect → may cause a failure' },
    c2: { req: 'Requirements', design: 'Design', code: 'Code', comp: 'Component testing', integ: 'Integration testing', sys: 'System testing', acc: 'Acceptance testing', dev: 'Development', test: 'Testing', cap: 'Each test level (right) validates its development phase (left)' },
    c3: { title: 'Review formality', informal: 'Informal', walk: 'Walkthrough', tech: 'Technical', insp: 'Inspection', less: '– formal', more: '+ formal' },
    c4: { title: 'Equivalence partitioning + boundary values (age 18–65)', inv: 'Invalid', val: 'Valid', cap: '1 value per partition + the boundaries (17·18 / 65·66)' },
    c5: { top: 'System / E2E', mid: 'Integration', base: 'Component / unit', fast: 'fast · cheap · many', slow: 'slow · costly · few' },
    c6: { commit: 'Code', build: 'Build', test: 'Auto tests', deploy: 'Deploy', cap: 'CI/CD: management, static, execution & DevOps tools' },
  },
  fr: {
    c1: { error: 'Erreur', errorSub: '(humaine)', defect: 'Défaut', defectSub: '(dans le code)', failure: 'Défaillance', failureSub: "(à l'exécution)", cap: 'Une personne commet une erreur → introduit un défaut → peut provoquer une défaillance' },
    c2: { req: 'Exigences', design: 'Conception', code: 'Code', comp: 'Tests de composant', integ: "Tests d'intégration", sys: 'Tests système', acc: "Tests d'acceptation", dev: 'Développement', test: 'Tests', cap: 'Chaque niveau de test (droite) valide sa phase de développement (gauche)' },
    c3: { title: 'Formalité des revues', informal: 'Informelle', walk: 'Walkthrough', tech: 'Technique', insp: 'Inspection', less: '– formelle', more: '+ formelle' },
    c4: { title: "Partitions d'équivalence + valeurs limites (âge 18–65)", inv: 'Invalide', val: 'Valide', cap: '1 valeur par partition + les limites (17·18 / 65·66)' },
    c5: { top: 'Système / E2E', mid: 'Intégration', base: 'Composant / unitaire', fast: 'rapides · peu coûteux · nombreux', slow: 'lents · coûteux · peu nombreux' },
    c6: { commit: 'Code', build: 'Build', test: 'Tests auto.', deploy: 'Déploiement', cap: 'CI/CD : outils de gestion, statiques, exécution & DevOps' },
  },
  pt: {
    c1: { error: 'Erro', errorSub: '(engano humano)', defect: 'Defeito', defectSub: '(no código)', failure: 'Falha', failureSub: '(em execução)', cap: 'Uma pessoa comete um erro → introduz um defeito → pode provocar uma falha' },
    c2: { req: 'Requisitos', design: 'Projeto', code: 'Código', comp: 'Testes de componente', integ: 'Testes de integração', sys: 'Testes de sistema', acc: 'Testes de aceitação', dev: 'Desenvolvimento', test: 'Testes', cap: 'Cada nível de teste (direita) valida sua fase de desenvolvimento (esquerda)' },
    c3: { title: 'Formalidade das revisões', informal: 'Informal', walk: 'Walkthrough', tech: 'Técnica', insp: 'Inspeção', less: '– formal', more: '+ formal' },
    c4: { title: 'Partição de equivalência + valores limite (idade 18–65)', inv: 'Inválida', val: 'Válida', cap: '1 valor por partição + os limites (17·18 / 65·66)' },
    c5: { top: 'Sistema / E2E', mid: 'Integração', base: 'Componente / unitários', fast: 'rápidos · baratos · muitos', slow: 'lentos · caros · poucos' },
    c6: { commit: 'Código', build: 'Build', test: 'Testes auto.', deploy: 'Implantação', cap: 'CI/CD: ferramentas de gestão, estáticas, execução e DevOps' },
  },
};

const svgStyle = { width: '100%', height: 'auto', display: 'block' };
const FONT = "'Inter', sans-serif";

function Diagram1({ a, L }) {
  // Error -> Defect -> Failure
  const box = (x, main, sub) => (
    <g>
      <rect x={x} y={28} width={128} height={54} rx={8} fill={a} fillOpacity={0.12} stroke="currentColor" strokeWidth={1.5} />
      <text x={x + 64} y={50} textAnchor="middle" fontFamily={FONT} fontSize={15} fontWeight={700} fill="currentColor">{main}</text>
      <text x={x + 64} y={68} textAnchor="middle" fontFamily={FONT} fontSize={10.5} fill="currentColor" opacity={0.7}>{sub}</text>
    </g>
  );
  const arrow = (x) => (
    <g stroke={a} strokeWidth={2.2} fill="none">
      <line x1={x} y1={55} x2={x + 34} y2={55} />
      <polyline points={`${x + 26},49 ${x + 34},55 ${x + 26},61`} />
    </g>
  );
  return (
    <svg viewBox="0 0 480 110" style={svgStyle} role="img" aria-label="Error, Defect, Failure">
      {box(8, L.error, L.errorSub)}
      {arrow(136)}
      {box(176, L.defect, L.defectSub)}
      {arrow(304)}
      {box(344, L.failure, L.failureSub)}
      <text x={240} y={100} textAnchor="middle" fontFamily={FONT} fontSize={10.5} fill="currentColor" opacity={0.65}>{a ? L.cap : ''}</text>
    </svg>
  );
}

function Diagram2({ a, L }) {
  // V-model
  const node = (x, y, label, anchor) => (
    <g>
      <circle cx={x} cy={y} r={5} fill={a} stroke="currentColor" strokeWidth={1.2} />
      <text x={anchor === 'end' ? x - 10 : x + 10} y={y + 4} textAnchor={anchor} fontFamily={FONT} fontSize={10.5} fontWeight={600} fill="currentColor">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 480 235" style={svgStyle} role="img" aria-label="V-model">
      {/* V strokes */}
      <line x1={150} y1={35} x2={240} y2={200} stroke={a} strokeWidth={2.4} />
      <line x1={240} y1={200} x2={330} y2={35} stroke={a} strokeWidth={2.4} />
      {/* dashed verification links */}
      <g stroke="currentColor" strokeWidth={1} strokeDasharray="4 4" opacity={0.45}>
        <line x1={168} y1={68} x2={312} y2={68} />
        <line x1={186} y1={101} x2={294} y2={101} />
        <line x1={204} y1={134} x2={276} y2={134} />
      </g>
      {/* left (development) */}
      {node(168, 68, L.req, 'end')}
      {node(186, 101, L.design, 'end')}
      {node(213, 167, L.code, 'end')}
      {/* right (testing) */}
      {node(312, 68, L.acc, 'start')}
      {node(294, 101, L.sys, 'start')}
      {node(276, 134, L.integ, 'start')}
      {node(258, 167, L.comp, 'start')}
      {/* arm captions */}
      <text x={120} y={28} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={700} fill={a}>{L.dev}</text>
      <text x={360} y={28} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={700} fill={a}>{L.test}</text>
      <text x={240} y={228} textAnchor="middle" fontFamily={FONT} fontSize={10} fill="currentColor" opacity={0.65}>{L.cap}</text>
    </svg>
  );
}

function Diagram3({ a, L }) {
  // Review formality scale
  const stops = [L.informal, L.walk, L.tech, L.insp];
  const xs = [70, 190, 305, 420];
  return (
    <svg viewBox="0 0 480 120" style={svgStyle} role="img" aria-label="Review formality">
      <text x={240} y={20} textAnchor="middle" fontFamily={FONT} fontSize={12} fontWeight={700} fill="currentColor">{L.title}</text>
      {/* arrow line */}
      <line x1={28} y1={84} x2={452} y2={84} stroke={a} strokeWidth={2.2} />
      <polyline points="444,78 452,84 444,90" fill="none" stroke={a} strokeWidth={2.2} />
      {stops.map((s, i) => (
        <g key={i}>
          <line x1={xs[i]} y1={78} x2={xs[i]} y2={90} stroke="currentColor" strokeWidth={1.5} />
          <rect x={xs[i] - 46} y={40} width={92} height={28} rx={6} fill={a} fillOpacity={0.10 + i * 0.07} stroke="currentColor" strokeWidth={1.2} />
          <text x={xs[i]} y={58} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={600} fill="currentColor">{s}</text>
        </g>
      ))}
      <text x={30} y={108} textAnchor="start" fontFamily={FONT} fontSize={10} fill="currentColor" opacity={0.7}>{L.less}</text>
      <text x={450} y={108} textAnchor="end" fontFamily={FONT} fontSize={10} fill="currentColor" opacity={0.7}>{L.more}</text>
    </svg>
  );
}

function Diagram4({ a, L }) {
  // Equivalence partitions + boundary values on a number line
  const green = '#2f8f5b', red = '#cf3b3b';
  return (
    <svg viewBox="0 0 480 130" style={svgStyle} role="img" aria-label="Equivalence partitioning and boundary values">
      <text x={240} y={20} textAnchor="middle" fontFamily={FONT} fontSize={11.5} fontWeight={700} fill="currentColor">{L.title}</text>
      {/* bands */}
      <rect x={20} y={48} width={130} height={34} fill={red} fillOpacity={0.14} stroke={red} strokeWidth={1.3} />
      <rect x={150} y={48} width={180} height={34} fill={green} fillOpacity={0.16} stroke={green} strokeWidth={1.3} />
      <rect x={330} y={48} width={130} height={34} fill={red} fillOpacity={0.14} stroke={red} strokeWidth={1.3} />
      <text x={85} y={69} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={600} fill="currentColor">{L.inv}</text>
      <text x={240} y={69} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={700} fill="currentColor">{L.val}</text>
      <text x={395} y={69} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={600} fill="currentColor">{L.inv}</text>
      {/* boundary markers */}
      {[[150, '17', '18'], [330, '65', '66']].map(([x, lo, hi], i) => (
        <g key={i}>
          <line x1={x} y1={42} x2={x} y2={94} stroke={a} strokeWidth={2} />
          <circle cx={x - 9} cy={98} r={3} fill={red} />
          <circle cx={x + 9} cy={98} r={3} fill={green} />
          <text x={x - 9} y={116} textAnchor="middle" fontFamily={FONT} fontSize={10} fill="currentColor" opacity={0.8}>{i === 0 ? lo : '65'}</text>
          <text x={x + 9} y={116} textAnchor="middle" fontFamily={FONT} fontSize={10} fill="currentColor" opacity={0.8}>{i === 0 ? '18' : '66'}</text>
        </g>
      ))}
      <text x={240} y={128} textAnchor="middle" fontFamily={FONT} fontSize={9.5} fill="currentColor" opacity={0.65}>{L.cap}</text>
    </svg>
  );
}

function Diagram5({ a, L }) {
  // Test pyramid
  return (
    <svg viewBox="0 0 480 205" style={svgStyle} role="img" aria-label="Test pyramid">
      {/* bands as trapezoids/triangle */}
      <polygon points="240,22 290,80 190,80" fill={a} fillOpacity={0.30} stroke="currentColor" strokeWidth={1.4} />
      <polygon points="190,82 290,82 330,140 150,140" fill={a} fillOpacity={0.18} stroke="currentColor" strokeWidth={1.4} />
      <polygon points="150,142 330,142 372,198 108,198" fill={a} fillOpacity={0.10} stroke="currentColor" strokeWidth={1.4} />
      <text x={240} y={66} textAnchor="middle" fontFamily={FONT} fontSize={10.5} fontWeight={600} fill="currentColor">{L.top}</text>
      <text x={240} y={117} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={600} fill="currentColor">{L.mid}</text>
      <text x={240} y={176} textAnchor="middle" fontFamily={FONT} fontSize={11} fontWeight={700} fill="currentColor">{L.base}</text>
      {/* side arrow */}
      <line x1={56} y1={196} x2={56} y2={30} stroke={a} strokeWidth={2} />
      <polyline points="50,38 56,30 62,38" fill="none" stroke={a} strokeWidth={2} />
      <text x={48} y={200} textAnchor="start" fontFamily={FONT} fontSize={9} fill="currentColor" opacity={0.7} transform="rotate(-90 48 200)">{L.fast}</text>
      <text x={48} y={30} textAnchor="end" fontFamily={FONT} fontSize={9} fill="currentColor" opacity={0.7} transform="rotate(-90 48 30)">{L.slow}</text>
    </svg>
  );
}

function Diagram6({ a, L }) {
  // CI/CD pipeline
  const steps = [L.commit, L.build, L.test, L.deploy];
  const W = 100, GAP = 18, X0 = 14, Y = 34, H = 46;
  return (
    <svg viewBox="0 0 480 110" style={svgStyle} role="img" aria-label="CI/CD pipeline">
      {steps.map((s, i) => {
        const x = X0 + i * (W + GAP);
        return (
          <g key={i}>
            <rect x={x} y={Y} width={W} height={H} rx={8} fill={a} fillOpacity={0.12} stroke="currentColor" strokeWidth={1.5} />
            <text x={x + W / 2} y={Y + 28} textAnchor="middle" fontFamily={FONT} fontSize={12} fontWeight={600} fill="currentColor">{s}</text>
            {i < steps.length - 1 && (
              <g stroke={a} strokeWidth={2.2} fill="none">
                <line x1={x + W} y1={Y + H / 2} x2={x + W + GAP} y2={Y + H / 2} />
                <polyline points={`${x + W + GAP - 7},${Y + H / 2 - 5} ${x + W + GAP},${Y + H / 2} ${x + W + GAP - 7},${Y + H / 2 + 5}`} />
              </g>
            )}
          </g>
        );
      })}
      <text x={240} y={98} textAnchor="middle" fontFamily={FONT} fontSize={10} fill="currentColor" opacity={0.65}>{L.cap}</text>
    </svg>
  );
}

const ChapterDiagram = ({ chapterId, color = '#e8852a', language = 'es' }) => {
  const dict = (LBL[language] || LBL.es);
  const a = color;
  const map = {
    1: <Diagram1 a={a} L={dict.c1} />,
    2: <Diagram2 a={a} L={dict.c2} />,
    3: <Diagram3 a={a} L={dict.c3} />,
    4: <Diagram4 a={a} L={dict.c4} />,
    5: <Diagram5 a={a} L={dict.c5} />,
    6: <Diagram6 a={a} L={dict.c6} />,
  };
  const diagram = map[chapterId];
  if (!diagram) return null;
  return <div className="notes-diagram">{diagram}</div>;
};

export default ChapterDiagram;
