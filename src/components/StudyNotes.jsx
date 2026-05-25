import React, { useState } from 'react';

const CHAPTERS = [
  {
    id: 1,
    title: 'Cap. 1 — Fundamentos de Pruebas',
    color: '#000080',
    sections: [
      {
        heading: '¿Qué es el Testing?',
        items: [
          'El testing evalúa la calidad y reduce el riesgo — NO garantiza ausencia de defectos.',
          'Error (Equivocación humana) → Defecto (Bug en el código) → Falla (Comportamiento incorrecto al ejecutar).',
          'Testing estático (revisiones, análisis sin ejecutar) vs. Dinámico (ejecución del software).',
          'Diferencia clave: QA (Aseguramiento de Calidad) se enfoca en el PROCESO para prevenir defectos. QC (Control de Calidad / Testing) se enfoca en el PRODUCTO para detectar defectos.',
        ],
      },
      {
        heading: '7 Principios — LO MÁS PREGUNTADO',
        items: [
          '1. Testing muestra presencia de defectos, no ausencia.',
          '2. Testing exhaustivo es imposible → usa riesgos y prioridades para decidir qué probar.',
          '3. Testing temprano ahorra tiempo y dinero (Shift-left).',
          '4. Agrupamiento de defectos: el 80% suele estar en el 20% del código (Principio de Pareto).',
          '5. Paradoja del pesticida: los mismos tests dejan de encontrar bugs → rota, modifica y revisa los tests.',
          '6. Testing depende del contexto (software médico ≠ app de juegos).',
          '7. Falacia de ausencia de defectos: software sin bugs puede ser inútil si no cumple las necesidades del usuario.',
        ],
        exam: 'Te darán una situación (ej. "Encontramos casi todos los bugs en el módulo de pagos") y debes elegir el principio (Agrupamiento de defectos).',
      },
      {
        heading: 'Actividades de Testing',
        items: [
          '1. Planificación: Define objetivos y enfoque.',
          '2. Monitorización y Control: Comparar progreso real vs planificado.',
          '3. Análisis: "QUÉ" probar. Se revisa la base de prueba para definir las Condiciones de Prueba.',
          '4. Diseño: "CÓMO" probar. Crear casos de prueba de alto nivel.',
          '5. Implementación: Crear scripts, preparar entorno y datos, agrupar en Procedimientos de Prueba.',
          '6. Ejecución: Correr los tests manual/automáticamente y reportar defectos.',
          '7. Finalización: Archivar testware, lecciones aprendidas.',
          'Trazabilidad: vincular requisitos con casos de prueba (permite evaluar cobertura y análisis de impacto).',
        ],
        exam: 'Diferenciar claramente entre Análisis (Condiciones) y Diseño (Casos de prueba).',
      },
      {
        heading: 'Roles y Psicología',
        items: [
          'Tester: Diseña, ejecuta tests, reporta defectos, automatiza.',
          'Test Manager: Planifica, gestiona recursos, reporta avance y métricas al negocio.',
          'Independencia: Desde el autor (baja independencia) hasta testers externos o subcontratados (alta independencia). Más independencia = sesgos diferentes.',
          'Sesgo de confirmación: Tendencia a confirmar creencias propias en lugar de buscar fallos.',
          'Enfoque Whole-team: Toda la célula ágil es responsable de la calidad, no solo el tester.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Cap. 2 — Testing a lo Largo del SDLC',
    color: '#006400',
    sections: [
      {
        heading: 'Modelos de Desarrollo y Testing',
        items: [
          'Secuencial (Cascada/Modelo V): Fases separadas. Testing suele ir al final. Muy caro corregir bugs tardíos. Modelo V empareja niveles de prueba con fases de desarrollo.',
          'Iterativo/Incremental (Ágil): Testing continuo en sprints cortos. Feedback rápido.',
          'Regla de oro: Sea cual sea el modelo, SIEMPRE hay una actividad de test correspondiente a cada actividad de desarrollo.',
        ],
        exam: 'Preguntan características de integración continua o en qué modelo se encuentra el defecto más tarde.',
      },
      {
        heading: 'Niveles de Prueba',
        items: [
          'Pruebas de Componente (Unitarias): Evalúan funciones/clases individuales. Usa stubs/mocks. Típicamente hechas por devs.',
          'Integración de Componentes: Evalúan interfaces e interacciones entre módulos.',
          'Integración de Sistemas: Evalúan interfaces con sistemas externos (ej. pasarelas de pago, APIs).',
          'Pruebas de Sistema: Evalúan el comportamiento integral contra los requisitos o historias de usuario.',
          'Pruebas de Aceptación (UAT): Validan que el sistema satisface las necesidades del negocio/usuario. Hechas por el cliente/usuario final.',
          'Aceptación Operacional (OAT): Backup, restauración, instalación, seguridad. Hecho por Admins/Ops.',
        ],
        exam: 'Saber identificar quién suele hacer la UAT (usuarios de negocio) y qué valida la OAT.',
      },
      {
        heading: 'Tipos de Prueba',
        items: [
          'Funcional: Evalúa QUÉ hace el sistema (comportamiento, reglas de negocio).',
          'No Funcional: Evalúa CÓMO lo hace (rendimiento, seguridad, usabilidad, fiabilidad).',
          'Caja Negra: Pruebas basadas en la especificación, sin ver el código interno.',
          'Caja Blanca: Pruebas basadas en la arquitectura o estructura del código.',
          'Prueba de Confirmación (Re-test): Volver a ejecutar el test que falló tras reparar el defecto para verificar la corrección.',
          'Prueba de Regresión: Volver a ejecutar pruebas pasadas para asegurar que un cambio no rompió partes que ya funcionaban.',
        ],
        exam: 'Te pedirán clasificar un test. Ej: "Probar la velocidad de carga de una web" -> No Funcional.',
      },
      {
        heading: 'Enfoques de Prueba Primero',
        items: [
          'TDD (Test-Driven Development): Se escriben tests unitarios ANTES de programar la funcionalidad.',
          'BDD (Behaviour-Driven Development): Tests escritos en lenguaje natural (Given/When/Then) para mejorar la comunicación (Gherkin).',
          'ATDD (Acceptance Test-Driven Development): Crear pruebas de aceptación junto al cliente ANTES del desarrollo para definir qué se debe construir.',
        ],
      },
      {
        heading: 'Pruebas de Mantenimiento',
        items: [
          'Se realizan tras desplegar el software por: modificaciones (mejoras), migración, o retiro del sistema.',
          'Análisis de Impacto: Evaluar cómo un cambio afectará al sistema existente para decidir cuánta prueba de regresión es necesaria.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Cap. 3 — Pruebas Estáticas',
    color: '#8B0000',
    sections: [
      {
        heading: 'Testing Estático vs Análisis Estático',
        items: [
          'Testing Estático (Revisiones): Examen manual de requisitos, diseños, historias de usuario o código SIN ejecutar.',
          'Análisis Estático: Examen automatizado del código fuente mediante herramientas (linters) para detectar código muerto, variables sin usar o vulnerabilidades.',
          'Ventajas comunes: Encuentran defectos (no fallas), son baratos porque se aplican muy temprano (shift-left).',
          'Limitaciones: No encuentran problemas dinámicos como fugas de memoria o cuellos de botella de rendimiento en ejecución.',
        ],
        exam: 'Saber distinguir qué NO puede encontrar el análisis estático (ej. tiempos de respuesta reales).',
      },
      {
        heading: 'Tipos de Revisión',
        items: [
          'Informal: Sin proceso, no requiere documentación. (Ej. Pair programming).',
          'Walkthrough (Revisión Guiada): El AUTOR lidera la reunión. Fomenta el aprendizaje y consenso. Puede haber un Escriba.',
          'Revisión Técnica: Liderada por un moderador o experto técnico. Se buscan defectos y evaluar alternativas. Participan pares técnicos.',
          'Inspección: La más formal. Dirigida por un Moderador entrenado (no el autor). Se usan checklists, métricas, y análisis de causa raíz. Reglas estrictas de entrada/salida.',
        ],
        exam: 'Te darán un escenario y debes identificar el tipo. Si el Autor lidera -> Walkthrough. Si hay un Moderador oficial y métricas estrictas -> Inspección.',
      },
      {
        heading: 'Roles en una Revisión Formal',
        items: [
          'Autor: Crea el producto y corrige los defectos hallados.',
          'Moderador (Líder de Revisión): Planifica, dirige la reunión, asegura un ambiente seguro.',
          'Líder (Manager): Decide qué se revisa y provee el tiempo/recursos. No suele estar en la reunión.',
          'Revisores: Analizan el producto y detectan defectos.',
          'Escriba (Recorder): Toma nota de los defectos descubiertos durante la reunión.',
        ],
      },
      {
        heading: 'Factores de Éxito',
        items: [
          'Tener objetivos claros, usar listas de comprobación (checklists).',
          'Preparación INDIVIDUAL antes de la reunión.',
          'Ambiente de confianza: se critica al producto, no al autor. La revisión no debe usarse para evaluar el desempeño laboral de la persona.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Cap. 4 — Análisis y Diseño de Pruebas',
    color: '#4B0082',
    sections: [
      {
        heading: 'Partición de Equivalencia (EP)',
        items: [
          'Divide entradas/salidas en clases VÁLIDAS e INVÁLIDAS donde el software se comportará igual.',
          'Regla: Un único valor de prueba es suficiente para cubrir toda la partición.',
          'Ejemplo: Password 5-10 caracteres. Inválida1 < 5, Válida 5-10, Inválida2 > 10. Cobertura total = 3 casos.',
        ],
        exam: 'Dada una regla, calcular cuántas particiones existen (sumando válidas e inválidas).',
      },
      {
        heading: 'Análisis de Valores Límite (BVA)',
        items: [
          'Se basa en que los errores suelen ocurrir en los extremos de las particiones de equivalencia.',
          'BVA de 2 valores: Evalúa el límite exacto y el valor adyacente más cercano de la otra partición.',
          'BVA de 3 valores: Evalúa el límite, justo antes del límite y justo después del límite.',
          'Ejemplo BVA 2 val (rango 10-20): 9, 10, 20, 21.',
        ],
        exam: 'Cálculo de valores BVA. Recuerda revisar bien si piden de 2 o 3 valores.',
      },
      {
        heading: 'Tablas de Decisión',
        items: [
          'Ideales para reglas de negocio complejas y combinaciones lógicas de condiciones booleanas (V/F).',
          'Ayudan a detectar combinaciones que los requisitos no especificaron.',
          'Regla colapsada / Regla Imposible: Si una condición de entrada es lógicamente imposible dada otra condición (ej. ser menor de 18 y estar jubilado).',
        ],
        exam: 'Te darán una tabla y un escenario real, deberás deducir en qué "Regla" (Columna) encaja el usuario y qué Acción (Fila inferior) le toca.',
      },
      {
        heading: 'Transición de Estado',
        items: [
          'Modela sistemas que dependen del historial de eventos (ej. bloqueo tras 3 pines incorrectos).',
          'Estados (nodos), Transiciones (flechas), Eventos (causa), Acciones (efecto).',
          'Cobertura de todos los estados: Visitar cada nodo al menos una vez.',
          'Cobertura de transiciones válidas (0-switch): Recorrer todas las flechas permitidas.',
        ],
        exam: 'Ver un diagrama y responder cuál es el número mínimo de pruebas para cubrir todos los estados, o identificar una transición inválida.',
      },
      {
        heading: 'Técnicas de Caja Blanca (Estructura)',
        items: [
          'Cobertura de Sentencias: % de líneas/instrucciones ejecutables que han corrido en test. La métrica más débil.',
          'Cobertura de Decisión (Ramas): % de resultados booleanos evaluados como True y False (los caminos if/else).',
          'Importante: El 100% de cobertura de decisión GARANTIZA el 100% de cobertura de sentencia. A la inversa no se cumple.',
        ],
        exam: 'Te darán código if-else simple. Tendrás que calcular cuántos tests se necesitan para 100% sentencia vs 100% decisión.',
      },
      {
        heading: 'Técnicas Basadas en la Experiencia',
        items: [
          'Error Guessing (Predicción de Errores): El tester usa su intuición y experiencia previa para adivinar dónde programaron mal.',
          'Testing Exploratorio: Diseño, ejecución, análisis y aprendizaje simultáneos usando time-boxes. Muy útil si los requisitos son pobres o el tiempo es escaso.',
          'Basado en Listas de Comprobación (Checklists): Lista de validaciones de alto nivel sin pasos detallados a seguir.',
        ],
        exam: 'Reconocer que el testing exploratorio y el error guessing complementan (NO reemplazan) a las pruebas de caja negra/blanca.',
      },
    ],
  },
  {
    id: 5,
    title: 'Cap. 5 — Gestión de Actividades de Prueba',
    color: '#8B4513',
    sections: [
      {
        heading: 'Planificación de Pruebas',
        items: [
          'El Plan de Pruebas es dinámico y debe actualizarse. Documenta alcance, recursos, presupuesto, riesgos, estrategia.',
          'Estrategias de prueba: Analítica (basada en riesgo), Metódica (listas estándar), Reactiva (exploratoria), Consultiva (preguntar a expertos), Basada en modelos.',
          'Criterios de Entrada (Entry Criteria): ¿Cuándo podemos empezar? (Ej. entorno disponible, código compilado).',
          'Criterios de Salida (Exit Criteria): ¿Cuándo terminamos? (Ej. 100% riesgos cubiertos, presupuesto agotado, sin bugs severos abiertos).',
        ],
        exam: 'Diferenciar entre estrategia Analítica (riesgos) vs Reactiva (testing exploratorio/dinámico).',
      },
      {
        heading: 'Estimación y Priorización',
        items: [
          'Estimación basada en métricas: Datos históricos de proyectos anteriores o métricas como Puntos de Función.',
          'Estimación basada en expertos: Planning Poker en equipos ágiles o Delphi de banda ancha.',
          'Priorización de pruebas: ¿Qué ejecutar primero? Según riesgo, valor de negocio o dependencias lógicas. En Ágil, priorizan las historias de usuario de mayor valor.',
        ],
      },
      {
        heading: 'Pirámide de Pruebas',
        items: [
          'Modelo que promueve tener muchísimas pruebas unitarias en la base (rápidas, baratas, aisladas).',
          'Menos pruebas en la capa media de integración/API.',
          'Muy pocas pruebas de UI (Interfaz de Usuario) en la punta, por ser frágiles, lentas y caras de mantener.',
        ],
        exam: 'Si un equipo tiene demasiados tests de interfaz gráfica, el consejo ISTQB es bajar la lógica a la base de la pirámide (unitarias/API).',
      },
      {
        heading: 'Gestión de Riesgos',
        items: [
          'Nivel de Riesgo = Probabilidad × Impacto.',
          'Riesgo de Producto (Calidad): Funciones que fallan, vulnerabilidades de seguridad, la app crashea, mal rendimiento.',
          'Riesgo de Proyecto (Proceso): Falta de presupuesto, testers enfermos, retrasos del entorno, problemas de herramientas.',
          'El Testing es una forma primordial de mitigar los riesgos de PRODUCTO.',
        ],
        exam: 'Debes poder clasificar ejemplos como riesgo de producto (un bug posible) vs riesgo de proyecto (un proveedor retrasa la entrega).',
      },
      {
        heading: 'Reportes e Información de Defectos',
        items: [
          'Tipos de reporte: Progreso (durante la iteración) y Resumen (al final).',
          'Métricas comunes: Cobertura de requisitos, progreso de ejecución, tiempo promedio de reparación.',
          'Un reporte de defecto debe incluir: ID, título, severidad/prioridad, pasos detallados para reproducir, resultado esperado vs actual, y logs/capturas.',
          'Severidad (impacto técnico) ≠ Prioridad (importancia de negocio). Un defecto cosmético en el logo puede ser Severidad Baja pero Prioridad Alta.',
        ],
        exam: 'Identificar qué campos son vitales para ayudar a un dev a arreglar un fallo (pasos para reproducir, entorno exacto).',
      },
      {
        heading: 'Gestión de la Configuración',
        items: [
          'Garantiza la trazabilidad e integridad de todos los artefactos.',
          'Asegura que probemos la versión 1.2 del software con la base de datos 1.2 y el test plan v2.',
          'Sin gestión de configuración, los testers podrían probar versiones antiguas del código por error.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Cap. 6 — Herramientas de Prueba',
    color: '#006666',
    sections: [
      {
        heading: 'Propósito y Beneficios',
        items: [
          'Mejoran eficiencia (automatizando repetición).',
          'Mejoran fiabilidad (sin fallos humanos en tareas aburridas).',
          'Proveen métricas objetivas (ej. % de cobertura de ramas).',
        ],
      },
      {
        heading: 'Riesgos de las Herramientas',
        items: [
          'Expectativas irreales (pensar que la herramienta lo resolverá todo mágicamente).',
          'Subestimar el esfuerzo de adopción inicial, capacitación y mantenimiento de los scripts de prueba.',
          'Dependencia de la herramienta o del soporte del proveedor (vendor lock-in).',
        ],
        exam: 'Diferenciar beneficios de riesgos. "Alto mantenimiento" = Riesgo. "Consistencia" = Beneficio.',
      },
      {
        heading: 'Clasificación de Herramientas',
        items: [
          'Gestión de pruebas: Trazabilidad, ALM, JIRA.',
          'Análisis Estático: SonarQube, linters. Apoyan a los desarrolladores antes de compilar.',
          'Ejecución / Automatización: Selenium, Cypress. Ejecutan tests de regresión.',
          'Herramientas de Rendimiento / Carga: JMeter. Simulan tráfico o volumen masivo que no se podría probar manualmente.',
          'Herramientas de Preparación de Datos: Extraen, anonimizan y cargan datos masivos para pruebas. Apoyan la fase de Implementación/Ejecución.',
        ],
        exam: 'Pregunta clásica: "Queremos probar si el sistema soporta 1000 usuarios a la vez. ¿Qué herramienta usamos?" -> Rendimiento.',
      },
      {
        heading: 'Introducción de una Herramienta en la Organización',
        items: [
          'Paso 1: Evaluar la madurez de la organización.',
          'Paso 2: Evaluación y Selección de opciones en el mercado.',
          'Paso 3: Realizar una Prueba de Concepto (PoC) para validar compatibilidad técnica.',
          'Paso 4: Proyecto piloto para establecer estándares, medir ROI y obtener lecciones.',
          'Paso 5: Despliegue progresivo al resto del equipo con guías y formación.',
        ],
        exam: 'Identificar cuál es el propósito de un Proyecto Piloto o Prueba de Concepto.',
      },
    ],
  },
  {
    id: 7,
    title: 'Cap. 7 — Fórmulas y Cálculos (Cheat Sheet)',
    color: '#D2691E',
    sections: [
      {
        heading: 'Cobertura de Sentencias',
        items: [
          'Fórmula: (Sentencias ejecutadas / Total de sentencias) * 100',
          'Ejemplo: El código tiene 50 sentencias. Pruebas cubren 45. Cobertura = (45 / 50) * 100 = 90%.',
        ],
        exam: 'Pregunta directa de cálculo de porcentajes.',
      },
      {
        heading: 'Cobertura de Ramas',
        items: [
          'Fórmula: (Ramas ejecutadas / Total de ramas) * 100',
          'Importante: Si te dan el total de sentencias ejecutadas y el total de ramas ejecutadas para calcular la cobertura de RAMAS, ignora completamente las sentencias.',
          'Ejemplo: 100 sentencias, 12 ramas. Ejecutaste 90 sentencias y 9 ramas. Cobertura ramas = (9 / 12) * 100 = 75%.',
        ],
        exam: 'Te darán sentencias para despistarte, céntrate solo en las ramas.',
      },
      {
        heading: 'Estimación de Tres Puntos (PERT)',
        items: [
          'Fórmula: E = (Optimista + 4 * Más Probable + Pesimista) / 6',
          'Ejemplo: Optimista = 5, Probable = 7, Pesimista = 15. E = (5 + 28 + 15) / 6 = 48 / 6 = 8 días.',
        ],
      },
      {
        heading: 'Extrapolación',
        items: [
          'Regla: Se calcula usando el promedio de iteraciones pasadas.',
          'Ejemplo: Sprint 1 (45 días), Sprint 2 (52 días). Sprint 3 estimado = (45 + 52) / 2 = 48.5 días.',
        ],
      },
      {
        heading: 'Cobertura de Transiciones de Estado',
        items: [
          'Fórmula: (Transiciones ejecutadas / Total de transiciones válidas) * 100',
          'El 100% de transiciones válidas GARANTIZA el 100% de los estados.',
          'Menos del 100% de transiciones NO garantiza el 100% de los estados (puede que sí o que no).',
        ],
        exam: 'Lee bien si piden garantía. Solo 100% de transiciones asegura 100% de estados.',
      },
    ],
  },
];

const EXAM_OVERVIEW = [
  '40 preguntas de opción múltiple, 65 minutos, puntuación mínima 65% (26 aciertos).',
  'No hay penalización por fallar: responde todas las preguntas.',
  'Lee el enunciado completo antes de mirar las opciones; muchas trampas están en el detalle.',
  'Si dudas entre dos opciones, descarta primero las claramente incorrectas.',
  'Los capítulos 1, 4 y 5 suelen concentrar más preguntas: priorízalos en el repaso.',
];

const StudyNotes = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapter = CHAPTERS.find(c => c.id === selectedChapter);

  return (
    <div className="notes-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Chapter selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem', flexShrink: 0 }}>
        {CHAPTERS.map(c => (
          <button
            key={c.id}
            className="btn"
            onClick={() => setSelectedChapter(selectedChapter === c.id ? null : c.id)}
            style={{
              width: 'auto',
              padding: '4px 10px',
              fontSize: '0.9rem',
              background: selectedChapter === c.id ? c.color : undefined,
              color: selectedChapter === c.id ? 'white' : undefined,
            }}
          >
            Cap. {c.id}
          </button>
        ))}
      </div>

      <div style={{ overflowY: 'auto', flexGrow: 1, paddingRight: '4px' }}>
        <div className="notes-intro-panel">
          <h3>Examen ISTQB Foundation Level v4.0</h3>
          <ul>
            {EXAM_OVERVIEW.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        {!chapter && (
          <div className="notes-empty-state">
            <p>Selecciona un capítulo para ver los apuntes clave del syllabus.</p>
            <p className="notes-sub">
              Cada sección incluye conceptos esenciales y un bloque <strong>En el examen</strong> con lo que más suele evaluarse.
            </p>
          </div>
        )}

        {chapter && (
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: chapter.color, borderBottom: `2px solid ${chapter.color}`, paddingBottom: '4px' }}>
              {chapter.title}
            </h2>
          {chapter.sections.map((section, si) => (
            <div key={si} style={{ marginBottom: '1.2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '6px', background: '#e8e8e8', padding: '4px 8px', borderLeft: `4px solid ${chapter.color}` }}>
                {section.heading}
              </h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {section.items.map((item, ii) => (
                  <li key={ii} style={{ fontSize: '0.9rem', marginBottom: '4px', lineHeight: '1.4' }}>
                    {item}
                  </li>
                ))}
              </ul>
              {section.exam && (
                <div className="notes-exam-tip">
                  <strong>En el examen:</strong> {section.exam}
                </div>
              )}
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default StudyNotes;
