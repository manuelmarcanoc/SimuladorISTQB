// ============================================================
//  ISTQB Study Notes — multi-language content
//  Languages: es | en | fr
// ============================================================

const notesData = {

  // ─────────────────────────────────────────────────────────────
  //  ESPAÑOL
  // ─────────────────────────────────────────────────────────────
  es: {
    examOverview: [
      '40 preguntas de opción múltiple, 65 minutos, puntuación mínima 65% (26 aciertos).',
      'No hay penalización por fallar: responde todas las preguntas.',
      'Lee el enunciado completo antes de mirar las opciones; muchas trampas están en el detalle.',
      'Si dudas entre dos opciones, descarta primero las claramente incorrectas.',
      'Los capítulos 1, 4 y 5 suelen concentrar más preguntas: priorízalos en el repaso.',
    ],
    emptyState: 'Selecciona un capítulo para ver los apuntes clave del syllabus.',
    emptyStateSub: 'Cada sección incluye conceptos esenciales y un bloque "En el examen" con lo que más suele evaluarse.',
    examLabel: 'En el examen:',
    chapters: [
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
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  ENGLISH
  // ─────────────────────────────────────────────────────────────
  en: {
    examOverview: [
      '40 multiple-choice questions, 65 minutes, minimum pass score 65% (26 correct answers).',
      'No penalty for wrong answers: answer every question.',
      'Read the full question before looking at the options; many traps are in the detail.',
      'When unsure between two options, eliminate the clearly wrong ones first.',
      'Chapters 1, 4 and 5 tend to have the most questions: prioritise them in revision.',
    ],
    emptyState: 'Select a chapter to view the key syllabus notes.',
    emptyStateSub: 'Each section includes essential concepts and an "In the exam" block with the most commonly tested points.',
    examLabel: 'In the exam:',
    chapters: [
      {
        id: 1,
        title: 'Ch. 1 — Fundamentals of Testing',
        color: '#000080',
        sections: [
          {
            heading: 'What is Testing?',
            items: [
              'Testing evaluates quality and reduces risk — it does NOT guarantee the absence of defects.',
              'Error (human mistake) → Defect (bug in the code) → Failure (incorrect behaviour when executed).',
              'Static testing (reviews, analysis without running code) vs. Dynamic testing (executing the software).',
              'Key difference: QA (Quality Assurance) focuses on the PROCESS to prevent defects. QC (Quality Control / Testing) focuses on the PRODUCT to detect defects.',
            ],
          },
          {
            heading: '7 Principles — MOST TESTED',
            items: [
              '1. Testing shows the presence of defects, not their absence.',
              '2. Exhaustive testing is impossible → use risks and priorities to decide what to test.',
              '3. Early testing saves time and money (Shift-left).',
              '4. Defect clustering: 80% of bugs tend to be found in 20% of the code (Pareto Principle).',
              '5. Pesticide paradox: the same tests stop finding new bugs → rotate, modify and review tests.',
              '6. Testing is context-dependent (medical software ≠ gaming app).',
              '7. Absence-of-defects fallacy: bug-free software can be useless if it does not meet user needs.',
            ],
            exam: 'You will be given a scenario (e.g. "We found almost all bugs in the payments module") and must identify the principle (Defect clustering).',
          },
          {
            heading: 'Testing Activities',
            items: [
              '1. Planning: Define objectives and approach.',
              '2. Monitoring & Control: Compare actual progress vs plan.',
              '3. Analysis: "WHAT" to test. Review the test basis to define Test Conditions.',
              '4. Design: "HOW" to test. Create high-level test cases.',
              '5. Implementation: Create scripts, prepare environment and data, group into Test Procedures.',
              '6. Execution: Run tests manually/automatically and report defects.',
              '7. Completion: Archive testware, document lessons learned.',
              'Traceability: linking requirements to test cases (enables coverage evaluation and impact analysis).',
            ],
            exam: 'Clearly distinguish between Analysis (Conditions) and Design (Test cases).',
          },
          {
            heading: 'Roles and Psychology',
            items: [
              'Tester: Designs, executes tests, reports defects, automates.',
              'Test Manager: Plans, manages resources, reports progress and metrics to the business.',
              'Independence: From the author (low independence) to external or outsourced testers (high independence). More independence = different biases.',
              'Confirmation bias: Tendency to confirm own beliefs rather than look for failures.',
              'Whole-team approach: The entire agile team is responsible for quality, not just the tester.',
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Ch. 2 — Testing Throughout the SDLC',
        color: '#006400',
        sections: [
          {
            heading: 'Development Models and Testing',
            items: [
              'Sequential (Waterfall/V-Model): Separate phases. Testing usually comes at the end. Very costly to fix late bugs. The V-Model pairs test levels with development phases.',
              'Iterative/Incremental (Agile): Continuous testing in short sprints. Fast feedback.',
              'Golden rule: Regardless of the model, there is ALWAYS a testing activity corresponding to each development activity.',
            ],
            exam: 'Questions about continuous integration characteristics or which model finds defects latest.',
          },
          {
            heading: 'Test Levels',
            items: [
              'Component Testing (Unit): Tests individual functions/classes. Uses stubs/mocks. Typically done by devs.',
              'Component Integration: Tests interfaces and interactions between modules.',
              'System Integration: Tests interfaces with external systems (e.g. payment gateways, APIs).',
              'System Testing: Tests overall behaviour against requirements or user stories.',
              'Acceptance Testing (UAT): Validates the system meets business/user needs. Done by client/end user.',
              'Operational Acceptance (OAT): Backup, restore, installation, security. Done by Admins/Ops.',
            ],
            exam: 'Know who usually does UAT (business users) and what OAT validates.',
          },
          {
            heading: 'Test Types',
            items: [
              'Functional: Evaluates WHAT the system does (behaviour, business rules).',
              'Non-Functional: Evaluates HOW it does it (performance, security, usability, reliability).',
              'Black Box: Specification-based tests, without seeing internal code.',
              'White Box: Tests based on the architecture or code structure.',
              'Confirmation Testing (Re-test): Re-running the test that failed after fixing the defect to verify the fix.',
              'Regression Testing: Re-running past tests to ensure a change did not break previously working parts.',
            ],
            exam: 'You will be asked to classify a test. E.g: "Testing page load speed" -> Non-Functional.',
          },
          {
            heading: 'Test-First Approaches',
            items: [
              'TDD (Test-Driven Development): Unit tests are written BEFORE coding the functionality.',
              'BDD (Behaviour-Driven Development): Tests written in natural language (Given/When/Then) to improve communication (Gherkin).',
              'ATDD (Acceptance Test-Driven Development): Create acceptance tests with the client BEFORE development to define what needs to be built.',
            ],
          },
          {
            heading: 'Maintenance Testing',
            items: [
              'Performed after deploying software for: modifications (improvements), migration, or system retirement.',
              'Impact Analysis: Evaluate how a change affects the existing system to decide how much regression testing is needed.',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Ch. 3 — Static Testing',
        color: '#8B0000',
        sections: [
          {
            heading: 'Static Testing vs Static Analysis',
            items: [
              'Static Testing (Reviews): Manual examination of requirements, designs, user stories or code WITHOUT executing it.',
              'Static Analysis: Automated examination of source code using tools (linters) to detect dead code, unused variables or vulnerabilities.',
              'Common advantages: Find defects (not failures), are cheap because applied very early (shift-left).',
              'Limitations: Cannot find dynamic issues such as memory leaks or runtime performance bottlenecks.',
            ],
            exam: 'Know what static analysis CANNOT find (e.g. actual response times).',
          },
          {
            heading: 'Review Types',
            items: [
              'Informal: No process, no documentation required. (E.g. Pair programming).',
              'Walkthrough: The AUTHOR leads the meeting. Promotes learning and consensus. A Scribe may be present.',
              'Technical Review: Led by a moderator or technical expert. Looks for defects and evaluates alternatives. Peers participate.',
              'Inspection: The most formal. Led by a trained Moderator (not the author). Uses checklists, metrics, and root-cause analysis. Strict entry/exit criteria.',
            ],
            exam: 'Given a scenario, identify the type. If the Author leads -> Walkthrough. If there is an official Moderator and strict metrics -> Inspection.',
          },
          {
            heading: 'Roles in a Formal Review',
            items: [
              'Author: Creates the product and fixes defects found.',
              'Moderator (Review Leader): Plans, chairs the meeting, ensures a safe environment.',
              'Manager: Decides what is reviewed and provides time/resources. Usually not in the meeting.',
              'Reviewers: Analyse the product and detect defects.',
              'Scribe (Recorder): Takes note of defects found during the meeting.',
            ],
          },
          {
            heading: 'Success Factors',
            items: [
              'Clear objectives, use of checklists.',
              'INDIVIDUAL preparation before the meeting.',
              'Trust environment: the product is criticised, not the author. Reviews must not be used to evaluate personal performance.',
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Ch. 4 — Test Analysis and Design',
        color: '#4B0082',
        sections: [
          {
            heading: 'Equivalence Partitioning (EP)',
            items: [
              'Divides inputs/outputs into VALID and INVALID classes where the software behaves the same.',
              'Rule: A single test value is enough to cover an entire partition.',
              'Example: Password 5-10 characters. Invalid1 < 5, Valid 5-10, Invalid2 > 10. Full coverage = 3 cases.',
            ],
            exam: 'Given a rule, calculate how many partitions exist (adding valid and invalid ones).',
          },
          {
            heading: 'Boundary Value Analysis (BVA)',
            items: [
              'Based on the fact that errors tend to occur at the extremes of equivalence partitions.',
              '2-value BVA: Test the exact boundary and the nearest adjacent value from the other partition.',
              '3-value BVA: Test the boundary, just before it, and just after it.',
              'BVA 2-val example (range 10-20): 9, 10, 20, 21.',
            ],
            exam: 'BVA value calculation. Remember to check whether 2 or 3 values are requested.',
          },
          {
            heading: 'Decision Tables',
            items: [
              'Ideal for complex business rules and logical combinations of Boolean conditions (T/F).',
              'Help detect combinations not specified in the requirements.',
              'Collapsed / Impossible Rule: When an input condition is logically impossible given another condition (e.g. being under 18 and retired).',
            ],
            exam: 'You will be given a table and a real scenario; deduce which "Rule" (column) the user falls into and what Action (bottom row) applies.',
          },
          {
            heading: 'State Transition',
            items: [
              'Models systems that depend on event history (e.g. lockout after 3 wrong PINs).',
              'States (nodes), Transitions (arrows), Events (cause), Actions (effect).',
              'All-states coverage: Visit every node at least once.',
              'Valid transitions coverage (0-switch): Cover every permitted arrow.',
            ],
            exam: 'View a diagram and answer the minimum number of tests to cover all states, or identify an invalid transition.',
          },
          {
            heading: 'White Box Techniques (Structure)',
            items: [
              'Statement Coverage: % of executable lines/statements run in tests. The weakest metric.',
              'Decision Coverage (Branch): % of Boolean outcomes evaluated as True and False (if/else paths).',
              'Important: 100% decision coverage GUARANTEES 100% statement coverage. The reverse is not true.',
            ],
            exam: 'Given simple if-else code, calculate how many tests are needed for 100% statement vs 100% decision coverage.',
          },
          {
            heading: 'Experience-Based Techniques',
            items: [
              'Error Guessing: The tester uses intuition and past experience to guess where developers coded incorrectly.',
              'Exploratory Testing: Simultaneous design, execution, analysis and learning using time-boxes. Very useful when requirements are poor or time is short.',
              'Checklist-Based Testing: High-level validation list without detailed steps to follow.',
            ],
            exam: 'Recognise that exploratory testing and error guessing complement (NOT replace) black-box/white-box techniques.',
          },
        ],
      },
      {
        id: 5,
        title: 'Ch. 5 — Managing Test Activities',
        color: '#8B4513',
        sections: [
          {
            heading: 'Test Planning',
            items: [
              'The Test Plan is dynamic and must be updated. It documents scope, resources, budget, risks, strategy.',
              'Test strategies: Analytical (risk-based), Methodical (standard lists), Reactive (exploratory), Consultative (ask experts), Model-based.',
              'Entry Criteria: When can we start? (E.g. environment available, code compiled).',
              'Exit Criteria: When do we finish? (E.g. 100% risks covered, budget spent, no severe bugs open).',
            ],
            exam: 'Distinguish between Analytical strategy (risks) vs Reactive (exploratory/dynamic testing).',
          },
          {
            heading: 'Estimation and Prioritisation',
            items: [
              'Metrics-based estimation: Historical data from past projects or metrics such as Function Points.',
              'Expert-based estimation: Planning Poker in agile teams or Wide-Band Delphi.',
              'Test prioritisation: What to run first? Based on risk, business value or logical dependencies. In Agile, highest-value user stories are prioritised.',
            ],
          },
          {
            heading: 'Testing Pyramid',
            items: [
              'Model promoting many unit tests at the base (fast, cheap, isolated).',
              'Fewer tests at the middle integration/API layer.',
              'Very few UI tests at the top, as they are brittle, slow and expensive to maintain.',
            ],
            exam: 'If a team has too many UI tests, the ISTQB advice is to push logic down to the pyramid base (unit/API).',
          },
          {
            heading: 'Risk Management',
            items: [
              'Risk Level = Probability × Impact.',
              'Product Risk (Quality): Features that fail, security vulnerabilities, app crashes, poor performance.',
              'Project Risk (Process): Lack of budget, sick testers, environment delays, tool problems.',
              'Testing is a primary way to mitigate PRODUCT risks.',
            ],
            exam: 'Classify examples as product risk (a possible bug) vs project risk (a supplier delays delivery).',
          },
          {
            heading: 'Reports and Defect Information',
            items: [
              'Report types: Progress (during the iteration) and Summary (at the end).',
              'Common metrics: Requirements coverage, execution progress, average repair time.',
              'A defect report must include: ID, title, severity/priority, detailed steps to reproduce, expected vs actual result, and logs/screenshots.',
              'Severity (technical impact) ≠ Priority (business importance). A cosmetic logo defect can be Low Severity but High Priority.',
            ],
            exam: 'Identify which fields are vital to help a dev fix a failure (steps to reproduce, exact environment).',
          },
          {
            heading: 'Configuration Management',
            items: [
              'Guarantees traceability and integrity of all artefacts.',
              'Ensures we test software version 1.2 with database 1.2 and test plan v2.',
              'Without configuration management, testers could accidentally test old code versions.',
            ],
          },
        ],
      },
      {
        id: 6,
        title: 'Ch. 6 — Test Tools',
        color: '#006666',
        sections: [
          {
            heading: 'Purpose and Benefits',
            items: [
              'Improve efficiency (automating repetition).',
              'Improve reliability (no human errors in boring tasks).',
              'Provide objective metrics (e.g. % branch coverage).',
            ],
          },
          {
            heading: 'Tool Risks',
            items: [
              'Unrealistic expectations (thinking the tool will magically solve everything).',
              'Underestimating initial adoption effort, training and test script maintenance.',
              'Dependence on the tool or vendor support (vendor lock-in).',
            ],
            exam: 'Distinguish benefits from risks. "High maintenance" = Risk. "Consistency" = Benefit.',
          },
          {
            heading: 'Tool Classification',
            items: [
              'Test management: Traceability, ALM, JIRA.',
              'Static Analysis: SonarQube, linters. Support developers before compilation.',
              'Execution / Automation: Selenium, Cypress. Run regression tests.',
              'Performance / Load Tools: JMeter. Simulate traffic or massive volume that cannot be tested manually.',
              'Test Data Preparation Tools: Extract, anonymise and load mass data for tests. Support the Implementation/Execution phase.',
            ],
            exam: 'Classic question: "We want to test if the system handles 1000 simultaneous users. Which tool?" -> Performance.',
          },
          {
            heading: 'Introducing a Tool in the Organisation',
            items: [
              'Step 1: Assess organisational maturity.',
              'Step 2: Evaluation and selection of market options.',
              'Step 3: Proof of Concept (PoC) to validate technical compatibility.',
              'Step 4: Pilot project to establish standards, measure ROI and gather lessons.',
              'Step 5: Progressive rollout to the rest of the team with guides and training.',
            ],
            exam: 'Identify the purpose of a Pilot Project or Proof of Concept.',
          },
        ],
      },
      {
        id: 7,
        title: 'Ch. 7 — Formulas and Calculations (Cheat Sheet)',
        color: '#D2691E',
        sections: [
          {
            heading: 'Statement Coverage',
            items: [
              'Formula: (Statements executed / Total statements) × 100',
              'Example: Code has 50 statements. Tests cover 45. Coverage = (45 / 50) × 100 = 90%.',
            ],
            exam: 'Direct percentage calculation question.',
          },
          {
            heading: 'Branch Coverage',
            items: [
              'Formula: (Branches executed / Total branches) × 100',
              'Important: If given total statements executed and total branches executed to calculate BRANCH coverage, ignore the statements entirely.',
              'Example: 100 statements, 12 branches. Ran 90 statements and 9 branches. Branch coverage = (9 / 12) × 100 = 75%.',
            ],
            exam: 'Statements are given to distract you — focus only on the branches.',
          },
          {
            heading: 'Three-Point Estimation (PERT)',
            items: [
              'Formula: E = (Optimistic + 4 × Most Likely + Pessimistic) / 6',
              'Example: Optimistic = 5, Most Likely = 7, Pessimistic = 15. E = (5 + 28 + 15) / 6 = 48 / 6 = 8 days.',
            ],
          },
          {
            heading: 'Extrapolation',
            items: [
              'Rule: Calculated using the average of past iterations.',
              'Example: Sprint 1 (45 days), Sprint 2 (52 days). Sprint 3 estimate = (45 + 52) / 2 = 48.5 days.',
            ],
          },
          {
            heading: 'State Transition Coverage',
            items: [
              'Formula: (Transitions executed / Total valid transitions) × 100',
              '100% valid transitions GUARANTEES 100% of states.',
              'Less than 100% transitions does NOT guarantee 100% of states (may or may not).',
            ],
            exam: 'Read carefully whether a guarantee is asked for. Only 100% transitions ensures 100% states.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  FRANÇAIS
  // ─────────────────────────────────────────────────────────────
  fr: {
    examOverview: [
      '40 questions à choix multiples, 65 minutes, score minimum de réussite 65 % (26 bonnes réponses).',
      'Pas de pénalité pour les mauvaises réponses : répondez à toutes les questions.',
      'Lisez l\'intégralité de l\'énoncé avant de regarder les options ; beaucoup de pièges se cachent dans les détails.',
      'En cas de doute entre deux options, éliminez d\'abord les clairement incorrectes.',
      'Les chapitres 1, 4 et 5 concentrent le plus de questions : priorisez-les lors de la révision.',
    ],
    emptyState: 'Sélectionnez un chapitre pour afficher les notes clés du syllabus.',
    emptyStateSub: 'Chaque section comprend des concepts essentiels et un bloc « À l\'examen » avec les points les plus souvent testés.',
    examLabel: 'À l\'examen :',
    chapters: [
      {
        id: 1,
        title: 'Chap. 1 — Fondamentaux des Tests',
        color: '#000080',
        sections: [
          {
            heading: 'Qu\'est-ce que le Test ?',
            items: [
              'Le test évalue la qualité et réduit le risque — il ne garantit PAS l\'absence de défauts.',
              'Erreur (faute humaine) → Défaut (bug dans le code) → Défaillance (comportement incorrect lors de l\'exécution).',
              'Test statique (revues, analyse sans exécuter) vs. Dynamique (exécution du logiciel).',
              'Différence clé : l\'AQ (Assurance Qualité) se concentre sur le PROCESSUS pour prévenir les défauts. Le CQ (Contrôle Qualité / Test) se concentre sur le PRODUIT pour détecter les défauts.',
            ],
          },
          {
            heading: '7 Principes — LES PLUS TESTÉS',
            items: [
              '1. Le test montre la présence de défauts, pas leur absence.',
              '2. Le test exhaustif est impossible → utiliser les risques et priorités pour décider quoi tester.',
              '3. Le test précoce économise du temps et de l\'argent (Shift-left).',
              '4. Regroupement des défauts : 80 % des bugs se trouvent dans 20 % du code (Principe de Pareto).',
              '5. Paradoxe du pesticide : les mêmes tests cessent de trouver de nouveaux bugs → faites tourner, modifiez et révisez les tests.',
              '6. Le test dépend du contexte (logiciel médical ≠ application de jeux).',
              '7. Fallacieuse absence de défauts : un logiciel sans bug peut être inutile s\'il ne répond pas aux besoins de l\'utilisateur.',
            ],
            exam: 'Un scénario vous sera donné (ex. « Nous avons trouvé presque tous les bugs dans le module de paiement ») et vous devez choisir le principe (Regroupement des défauts).',
          },
          {
            heading: 'Activités de Test',
            items: [
              '1. Planification : définir les objectifs et l\'approche.',
              '2. Suivi et contrôle : comparer la progression réelle au plan.',
              '3. Analyse : « QUOI » tester. Réviser la base de test pour définir les Conditions de Test.',
              '4. Conception : « COMMENT » tester. Créer des cas de test de haut niveau.',
              '5. Implémentation : créer des scripts, préparer l\'environnement et les données, regrouper en Procédures de Test.',
              '6. Exécution : exécuter les tests manuellement/automatiquement et signaler les défauts.',
              '7. Clôture : archiver le testware, leçons apprises.',
              'Traçabilité : lier les exigences aux cas de test (permet d\'évaluer la couverture et l\'analyse d\'impact).',
            ],
            exam: 'Distinguer clairement l\'Analyse (Conditions) de la Conception (Cas de test).',
          },
          {
            heading: 'Rôles et Psychologie',
            items: [
              'Testeur : conçoit, exécute les tests, signale les défauts, automatise.',
              'Responsable des tests : planifie, gère les ressources, rapporte l\'avancement et les métriques à l\'entreprise.',
              'Indépendance : de l\'auteur (faible indépendance) aux testeurs externes ou sous-traités (forte indépendance). Plus d\'indépendance = biais différents.',
              'Biais de confirmation : tendance à confirmer ses propres convictions plutôt que de chercher des défauts.',
              'Approche toute-équipe : toute la cellule agile est responsable de la qualité, pas seulement le testeur.',
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Chap. 2 — Tests Tout au Long du SDLC',
        color: '#006400',
        sections: [
          {
            heading: 'Modèles de Développement et Tests',
            items: [
              'Séquentiel (Cascade/Modèle en V) : phases séparées. Les tests viennent généralement à la fin. Très coûteux de corriger les bugs tardifs. Le modèle en V associe les niveaux de test aux phases de développement.',
              'Itératif/Incrémental (Agile) : tests continus dans des sprints courts. Retour rapide.',
              'Règle d\'or : quel que soit le modèle, il y a TOUJOURS une activité de test correspondant à chaque activité de développement.',
            ],
            exam: 'Questions sur les caractéristiques de l\'intégration continue ou dans quel modèle on trouve les défauts le plus tard.',
          },
          {
            heading: 'Niveaux de Test',
            items: [
              'Tests de composants (Unitaires) : testent des fonctions/classes individuelles. Utilise des stubs/mocks. Généralement effectués par les développeurs.',
              'Intégration de composants : teste les interfaces et interactions entre modules.',
              'Intégration de systèmes : teste les interfaces avec des systèmes externes (ex. passerelles de paiement, API).',
              'Tests système : testent le comportement global par rapport aux exigences ou aux user stories.',
              'Tests d\'acceptation (UAT) : valident que le système répond aux besoins métier/utilisateur. Réalisés par le client/utilisateur final.',
              'Acceptation opérationnelle (OAT) : sauvegarde, restauration, installation, sécurité. Réalisé par les admins/ops.',
            ],
            exam: 'Savoir identifier qui fait généralement la UAT (utilisateurs métier) et ce que valide l\'OAT.',
          },
          {
            heading: 'Types de Test',
            items: [
              'Fonctionnel : évalue CE QUE fait le système (comportement, règles métier).',
              'Non fonctionnel : évalue COMMENT il le fait (performance, sécurité, utilisabilité, fiabilité).',
              'Boîte noire : tests basés sur la spécification, sans voir le code interne.',
              'Boîte blanche : tests basés sur l\'architecture ou la structure du code.',
              'Test de confirmation (Re-test) : ré-exécuter le test ayant échoué après correction du défaut pour vérifier la correction.',
              'Test de régression : ré-exécuter des tests passés pour s\'assurer qu\'une modification n\'a pas cassé des parties déjà fonctionnelles.',
            ],
            exam: 'On vous demandera de classer un test. Ex. : « Tester la vitesse de chargement d\'une page web » -> Non fonctionnel.',
          },
          {
            heading: 'Approches Test-First',
            items: [
              'TDD (Test-Driven Development) : les tests unitaires sont écrits AVANT de coder la fonctionnalité.',
              'BDD (Behaviour-Driven Development) : tests écrits en langage naturel (Donné/Quand/Alors) pour améliorer la communication (Gherkin).',
              'ATDD (Acceptance Test-Driven Development) : créer des tests d\'acceptation avec le client AVANT le développement pour définir ce qui doit être construit.',
            ],
          },
          {
            heading: 'Tests de Maintenance',
            items: [
              'Effectués après le déploiement du logiciel pour : modifications (améliorations), migration, ou retrait du système.',
              'Analyse d\'impact : évaluer comment une modification affecte le système existant pour décider de l\'ampleur des tests de régression nécessaires.',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Chap. 3 — Tests Statiques',
        color: '#8B0000',
        sections: [
          {
            heading: 'Tests Statiques vs Analyse Statique',
            items: [
              'Tests statiques (Revues) : examen manuel des exigences, conceptions, user stories ou code SANS l\'exécuter.',
              'Analyse statique : examen automatisé du code source par des outils (linters) pour détecter le code mort, les variables inutilisées ou les vulnérabilités.',
              'Avantages communs : trouvent des défauts (pas des défaillances), sont bon marché car appliqués très tôt (shift-left).',
              'Limitations : ne trouvent pas les problèmes dynamiques comme les fuites mémoire ou les goulots d\'étranglement de performance à l\'exécution.',
            ],
            exam: 'Savoir distinguer ce que l\'analyse statique NE PEUT PAS trouver (ex. temps de réponse réels).',
          },
          {
            heading: 'Types de Revue',
            items: [
              'Informelle : sans processus, sans documentation. (Ex. Pair programming).',
              'Walkthrough (Revue guidée) : l\'AUTEUR dirige la réunion. Favorise l\'apprentissage et le consensus. Un scribe peut être présent.',
              'Revue technique : animée par un modérateur ou un expert technique. Recherche de défauts et évaluation d\'alternatives. Les pairs participent.',
              'Inspection : la plus formelle. Dirigée par un Modérateur formé (pas l\'auteur). Utilise des listes de vérification, des métriques et une analyse des causes racines. Critères d\'entrée/sortie stricts.',
            ],
            exam: 'Un scénario vous est donné, identifiez le type. Si l\'Auteur dirige -> Walkthrough. S\'il y a un Modérateur officiel et des métriques strictes -> Inspection.',
          },
          {
            heading: 'Rôles dans une Revue Formelle',
            items: [
              'Auteur : crée le produit et corrige les défauts trouvés.',
              'Modérateur (Responsable de revue) : planifie, préside la réunion, assure un environnement sûr.',
              'Manager : décide ce qui est révisé et fournit le temps/ressources. N\'assiste généralement pas à la réunion.',
              'Réviseurs : analysent le produit et détectent les défauts.',
              'Scribe (Enregistreur) : note les défauts découverts pendant la réunion.',
            ],
          },
          {
            heading: 'Facteurs de Succès',
            items: [
              'Avoir des objectifs clairs, utiliser des listes de vérification (checklists).',
              'Préparation INDIVIDUELLE avant la réunion.',
              'Environnement de confiance : c\'est le produit qui est critiqué, pas l\'auteur. La revue ne doit pas être utilisée pour évaluer la performance de la personne.',
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Chap. 4 — Analyse et Conception des Tests',
        color: '#4B0082',
        sections: [
          {
            heading: 'Partitionnement en Classes d\'Équivalence (EP)',
            items: [
              'Divise les entrées/sorties en classes VALIDES et INVALIDES où le logiciel se comportera de la même façon.',
              'Règle : une seule valeur de test suffit pour couvrir toute la partition.',
              'Exemple : mot de passe 5-10 caractères. Invalide1 < 5, Valide 5-10, Invalide2 > 10. Couverture totale = 3 cas.',
            ],
            exam: 'Étant donné une règle, calculer combien de partitions existent (en ajoutant les valides et les invalides).',
          },
          {
            heading: 'Analyse des Valeurs Limites (BVA)',
            items: [
              'Basé sur le fait que les erreurs surviennent souvent aux extrêmes des partitions d\'équivalence.',
              'BVA à 2 valeurs : tester la limite exacte et la valeur adjacente la plus proche de l\'autre partition.',
              'BVA à 3 valeurs : tester la limite, juste avant et juste après.',
              'Exemple BVA 2 val (plage 10-20) : 9, 10, 20, 21.',
            ],
            exam: 'Calcul de valeurs BVA. Vérifiez bien si on demande 2 ou 3 valeurs.',
          },
          {
            heading: 'Tables de Décision',
            items: [
              'Idéales pour les règles métier complexes et les combinaisons logiques de conditions booléennes (V/F).',
              'Aident à détecter des combinaisons non spécifiées dans les exigences.',
              'Règle réduite / Règle impossible : si une condition d\'entrée est logiquement impossible étant donné une autre condition (ex. avoir moins de 18 ans et être à la retraite).',
            ],
            exam: 'Une table et un scénario réel vous seront donnés ; déduisez dans quelle « Règle » (colonne) l\'utilisateur se trouve et quelle Action (ligne inférieure) lui correspond.',
          },
          {
            heading: 'Transition d\'État',
            items: [
              'Modélise des systèmes qui dépendent de l\'historique des événements (ex. verrouillage après 3 mauvais PINs).',
              'États (nœuds), Transitions (flèches), Événements (cause), Actions (effet).',
              'Couverture de tous les états : visiter chaque nœud au moins une fois.',
              'Couverture des transitions valides (0-switch) : parcourir toutes les flèches permises.',
            ],
            exam: 'Voir un diagramme et répondre quel est le nombre minimum de tests pour couvrir tous les états, ou identifier une transition invalide.',
          },
          {
            heading: 'Techniques Boîte Blanche (Structure)',
            items: [
              'Couverture des instructions : % des lignes/instructions exécutables ayant été exécutées en test. La métrique la plus faible.',
              'Couverture des décisions (Branches) : % des résultats booléens évalués comme Vrai et Faux (chemins if/else).',
              'Important : 100 % de couverture de décision GARANTIT 100 % de couverture d\'instructions. L\'inverse n\'est pas vrai.',
            ],
            exam: 'Un code if-else simple vous sera donné. Calculer combien de tests sont nécessaires pour 100 % instructions vs 100 % décisions.',
          },
          {
            heading: 'Techniques Basées sur l\'Expérience',
            items: [
              'Prédiction des erreurs (Error Guessing) : le testeur utilise son intuition et son expérience passée pour deviner où les développeurs ont mal codé.',
              'Tests exploratoires : conception, exécution, analyse et apprentissage simultanés en time-boxes. Très utile si les exigences sont pauvres ou le temps est limité.',
              'Basé sur des listes de vérification (Checklists) : liste de validations de haut niveau sans étapes détaillées.',
            ],
            exam: 'Reconnaître que les tests exploratoires et la prédiction des erreurs complètent (ne remplacent PAS) les techniques boîte noire/blanche.',
          },
        ],
      },
      {
        id: 5,
        title: 'Chap. 5 — Gestion des Activités de Test',
        color: '#8B4513',
        sections: [
          {
            heading: 'Planification des Tests',
            items: [
              'Le Plan de Test est dynamique et doit être mis à jour. Il documente la portée, les ressources, le budget, les risques, la stratégie.',
              'Stratégies de test : Analytique (basée sur les risques), Méthodique (listes standard), Réactive (exploratoire), Consultative (demander aux experts), Basée sur des modèles.',
              'Critères d\'entrée : Quand peut-on commencer ? (Ex. environnement disponible, code compilé).',
              'Critères de sortie : Quand terminons-nous ? (Ex. 100 % des risques couverts, budget épuisé, aucun bug grave ouvert).',
            ],
            exam: 'Distinguer la stratégie Analytique (risques) de la Réactive (tests exploratoires/dynamiques).',
          },
          {
            heading: 'Estimation et Priorisation',
            items: [
              'Estimation basée sur les métriques : données historiques de projets passés ou métriques telles que les points de fonction.',
              'Estimation basée sur les experts : Planning Poker dans les équipes agiles ou Delphi à large bande.',
              'Priorisation des tests : quoi exécuter en premier ? Selon le risque, la valeur métier ou les dépendances logiques. En Agile, on priorise les user stories à plus grande valeur.',
            ],
          },
          {
            heading: 'Pyramide des Tests',
            items: [
              'Modèle promouvant de nombreux tests unitaires à la base (rapides, bon marché, isolés).',
              'Moins de tests au niveau intermédiaire intégration/API.',
              'Très peu de tests d\'interface utilisateur (UI) au sommet, car ils sont fragiles, lents et coûteux à maintenir.',
            ],
            exam: 'Si une équipe a trop de tests d\'interface graphique, le conseil ISTQB est de redescendre la logique à la base de la pyramide (unitaires/API).',
          },
          {
            heading: 'Gestion des Risques',
            items: [
              'Niveau de risque = Probabilité × Impact.',
              'Risque produit (Qualité) : fonctionnalités défaillantes, vulnérabilités de sécurité, crash de l\'application, mauvaise performance.',
              'Risque projet (Processus) : manque de budget, testeurs malades, retards d\'environnement, problèmes d\'outils.',
              'Le Test est un moyen primordial pour atténuer les risques PRODUIT.',
            ],
            exam: 'Classifier les exemples comme risque produit (un bug possible) vs risque projet (un fournisseur retarde la livraison).',
          },
          {
            heading: 'Rapports et Informations sur les Défauts',
            items: [
              'Types de rapport : Progression (pendant l\'itération) et Résumé (à la fin).',
              'Métriques courantes : couverture des exigences, progression de l\'exécution, temps moyen de correction.',
              'Un rapport de défaut doit inclure : ID, titre, sévérité/priorité, étapes détaillées pour reproduire, résultat attendu vs réel, et logs/captures.',
              'Sévérité (impact technique) ≠ Priorité (importance métier). Un défaut cosmétique sur le logo peut être Sévérité Faible mais Priorité Haute.',
            ],
            exam: 'Identifier les champs vitaux pour aider un développeur à corriger un bug (étapes de reproduction, environnement exact).',
          },
          {
            heading: 'Gestion de la Configuration',
            items: [
              'Garantit la traçabilité et l\'intégrité de tous les artefacts.',
              'Assure que nous testons la version 1.2 du logiciel avec la base de données 1.2 et le plan de test v2.',
              'Sans gestion de configuration, les testeurs pourraient tester des versions obsolètes du code par erreur.',
            ],
          },
        ],
      },
      {
        id: 6,
        title: 'Chap. 6 — Outils de Test',
        color: '#006666',
        sections: [
          {
            heading: 'Objectif et Avantages',
            items: [
              'Améliorent l\'efficacité (automatisation des répétitions).',
              'Améliorent la fiabilité (pas d\'erreurs humaines sur des tâches répétitives).',
              'Fournissent des métriques objectives (ex. % de couverture de branches).',
            ],
          },
          {
            heading: 'Risques des Outils',
            items: [
              'Attentes irréalistes (penser que l\'outil va tout résoudre magiquement).',
              'Sous-estimer l\'effort d\'adoption initial, la formation et la maintenance des scripts de test.',
              'Dépendance à l\'outil ou au support du fournisseur (vendor lock-in).',
            ],
            exam: 'Distinguer les avantages des risques. « Maintenance élevée » = Risque. « Cohérence » = Avantage.',
          },
          {
            heading: 'Classification des Outils',
            items: [
              'Gestion des tests : traçabilité, ALM, JIRA.',
              'Analyse statique : SonarQube, linters. Soutiennent les développeurs avant la compilation.',
              'Exécution / Automatisation : Selenium, Cypress. Exécutent des tests de régression.',
              'Outils de performance / charge : JMeter. Simulent du trafic ou un volume massif qui ne pourrait pas être testé manuellement.',
              'Outils de préparation des données : extraient, anonymisent et chargent des données massives pour les tests. Soutiennent la phase d\'implémentation/exécution.',
            ],
            exam: 'Question classique : « Nous voulons tester si le système supporte 1000 utilisateurs simultanément. Quel outil ? » -> Performance.',
          },
          {
            heading: 'Introduction d\'un Outil dans l\'Organisation',
            items: [
              'Étape 1 : évaluer la maturité de l\'organisation.',
              'Étape 2 : évaluation et sélection des options du marché.',
              'Étape 3 : Preuve de concept (PoC) pour valider la compatibilité technique.',
              'Étape 4 : Projet pilote pour établir des standards, mesurer le ROI et obtenir des leçons.',
              'Étape 5 : Déploiement progressif au reste de l\'équipe avec guides et formation.',
            ],
            exam: 'Identifier l\'objectif d\'un projet pilote ou d\'une Preuve de Concept.',
          },
        ],
      },
      {
        id: 7,
        title: 'Chap. 7 — Formules et Calculs (Aide-Mémoire)',
        color: '#D2691E',
        sections: [
          {
            heading: 'Couverture des Instructions',
            items: [
              'Formule : (Instructions exécutées / Total des instructions) × 100',
              'Exemple : le code a 50 instructions. Les tests couvrent 45. Couverture = (45 / 50) × 100 = 90 %.',
            ],
            exam: 'Question directe de calcul de pourcentages.',
          },
          {
            heading: 'Couverture des Branches',
            items: [
              'Formule : (Branches exécutées / Total des branches) × 100',
              'Important : si on vous donne le total des instructions exécutées et le total des branches exécutées pour calculer la couverture de BRANCHES, ignorez complètement les instructions.',
              'Exemple : 100 instructions, 12 branches. Exécuté 90 instructions et 9 branches. Couverture branches = (9 / 12) × 100 = 75 %.',
            ],
            exam: 'Les instructions sont données pour vous distraire — concentrez-vous uniquement sur les branches.',
          },
          {
            heading: 'Estimation en Trois Points (PERT)',
            items: [
              'Formule : E = (Optimiste + 4 × Plus probable + Pessimiste) / 6',
              'Exemple : Optimiste = 5, Probable = 7, Pessimiste = 15. E = (5 + 28 + 15) / 6 = 48 / 6 = 8 jours.',
            ],
          },
          {
            heading: 'Extrapolation',
            items: [
              'Règle : calculé en utilisant la moyenne des itérations passées.',
              'Exemple : Sprint 1 (45 jours), Sprint 2 (52 jours). Sprint 3 estimé = (45 + 52) / 2 = 48,5 jours.',
            ],
          },
          {
            heading: 'Couverture des Transitions d\'État',
            items: [
              'Formule : (Transitions exécutées / Total des transitions valides) × 100',
              '100 % des transitions valides GARANTIT 100 % des états.',
              'Moins de 100 % des transitions ne GARANTIT PAS 100 % des états (peut-être oui ou non).',
            ],
            exam: 'Lisez attentivement si une garantie est demandée. Seul 100 % de transitions assure 100 % des états.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  PORTUGUÊS (BR)
  // ─────────────────────────────────────────────────────────────
  pt: {
    examOverview: [
      '40 questões de múltipla escolha, 65 minutos, nota mínima de 65% (26 acertos).',
      'Não há penalidade por errar: responda todas as questões.',
      'Leia o enunciado completo antes de olhar as opções; muitas pegadinhas estão no detalhe.',
      'Se ficar em dúvida entre duas opções, descarte primeiro as claramente incorretas.',
      'Os capítulos 1, 4 e 5 costumam concentrar mais questões: priorize-os na revisão.',
    ],
    emptyState: 'Selecione um capítulo para ver as anotações-chave do programa.',
    emptyStateSub: 'Cada seção inclui conceitos essenciais e um bloco "No exame" com o que mais costuma ser avaliado.',
    examLabel: 'No exame:',
    chapters: [
      {
        id: 1,
        title: 'Cap. 1 — Fundamentos de Testes',
        color: '#000080',
        sections: [
          {
            heading: 'O que é Teste?',
            items: [
              'O teste avalia a qualidade e reduz o risco — NÃO garante ausência de defeitos.',
              'Erro (engano humano) → Defeito (bug no código) → Falha (comportamento incorreto na execução).',
              'Teste estático (revisões, análise sem executar) vs. Dinâmico (execução do software).',
              'Diferença-chave: QA (Garantia da Qualidade) foca no PROCESSO para prevenir defeitos. QC (Controle da Qualidade / Teste) foca no PRODUTO para detectar defeitos.',
            ],
          },
          {
            heading: '7 Princípios — O MAIS COBRADO',
            items: [
              '1. O teste mostra a presença de defeitos, não a ausência.',
              '2. Teste exaustivo é impossível → use riscos e prioridades para decidir o que testar.',
              '3. Testar cedo economiza tempo e dinheiro (Shift-left).',
              '4. Agrupamento de defeitos: 80% costuma estar em 20% do código (Princípio de Pareto).',
              '5. Paradoxo do pesticida: os mesmos testes deixam de encontrar bugs → varie, modifique e revise os testes.',
              '6. O teste depende do contexto (software médico ≠ app de jogos).',
              '7. Ilusão da ausência de defeitos: um software sem bugs pode ser inútil se não atende às necessidades do usuário.',
            ],
            exam: 'Vão te dar uma situação (ex.: "Encontramos quase todos os bugs no módulo de pagamentos") e você deve escolher o princípio (Agrupamento de defeitos).',
          },
          {
            heading: 'Atividades de Teste',
            items: [
              '1. Planejamento: Define objetivos e abordagem.',
              '2. Monitoramento e Controle: Comparar o progresso real vs. o planejado.',
              '3. Análise: "O QUE" testar. Revisa-se a base de teste para definir as Condições de Teste.',
              '4. Modelagem (Design): "COMO" testar. Criar casos de teste de alto nível.',
              '5. Implementação: Criar scripts, preparar ambiente e dados, agrupar em Procedimentos de Teste.',
              '6. Execução: Rodar os testes manual/automaticamente e reportar defeitos.',
              '7. Conclusão: Arquivar o testware, lições aprendidas.',
              'Rastreabilidade: vincular requisitos a casos de teste (permite avaliar a cobertura e a análise de impacto).',
            ],
            exam: 'Diferenciar claramente entre Análise (Condições) e Modelagem (Casos de teste).',
          },
          {
            heading: 'Papéis e Psicologia',
            items: [
              'Testador: Modela, executa testes, reporta defeitos, automatiza.',
              'Gerente de Testes (Test Manager): Planeja, gerencia recursos, reporta progresso e métricas ao negócio.',
              'Independência: Do autor (baixa independência) até testadores externos ou terceirizados (alta independência). Mais independência = vieses diferentes.',
              'Viés de confirmação: Tendência a confirmar as próprias crenças em vez de procurar falhas.',
              'Abordagem Whole-team: Toda a célula ágil é responsável pela qualidade, não só o testador.',
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Cap. 2 — Testes ao Longo do SDLC',
        color: '#006400',
        sections: [
          {
            heading: 'Modelos de Desenvolvimento e Teste',
            items: [
              'Sequencial (Cascata/Modelo V): Fases separadas. O teste costuma vir no fim. Muito caro corrigir bugs tardios. O Modelo V associa níveis de teste a fases de desenvolvimento.',
              'Iterativo/Incremental (Ágil): Teste contínuo em sprints curtos. Feedback rápido.',
              'Regra de ouro: Seja qual for o modelo, SEMPRE há uma atividade de teste correspondente a cada atividade de desenvolvimento.',
            ],
            exam: 'Costumam perguntar características de integração contínua ou em qual modelo o defeito é encontrado mais tarde.',
          },
          {
            heading: 'Níveis de Teste',
            items: [
              'Testes de Componente (Unitários): Avaliam funções/classes individuais. Usa stubs/mocks. Normalmente feitos por devs.',
              'Integração de Componentes: Avaliam interfaces e interações entre módulos.',
              'Integração de Sistemas: Avaliam interfaces com sistemas externos (ex.: gateways de pagamento, APIs).',
              'Testes de Sistema: Avaliam o comportamento integral em relação aos requisitos ou histórias de usuário.',
              'Testes de Aceitação (UAT): Validam que o sistema atende às necessidades do negócio/usuário. Feitos pelo cliente/usuário final.',
              'Aceitação Operacional (OAT): Backup, restauração, instalação, segurança. Feito por Admins/Ops.',
            ],
            exam: 'Saber identificar quem costuma fazer a UAT (usuários de negócio) e o que a OAT valida.',
          },
          {
            heading: 'Tipos de Teste',
            items: [
              'Funcional: Avalia O QUE o sistema faz (comportamento, regras de negócio).',
              'Não Funcional: Avalia COMO ele faz (desempenho, segurança, usabilidade, confiabilidade).',
              'Caixa-Preta: Testes baseados na especificação, sem ver o código interno.',
              'Caixa-Branca: Testes baseados na arquitetura ou estrutura do código.',
              'Teste de Confirmação (Re-teste): Reexecutar o teste que falhou após corrigir o defeito para verificar a correção.',
              'Teste de Regressão: Reexecutar testes anteriores para garantir que uma mudança não quebrou partes que já funcionavam.',
            ],
            exam: 'Vão pedir para classificar um teste. Ex.: "Testar a velocidade de carregamento de um site" -> Não Funcional.',
          },
          {
            heading: 'Abordagens Test-First',
            items: [
              'TDD (Test-Driven Development): Escrevem-se testes unitários ANTES de programar a funcionalidade.',
              'BDD (Behaviour-Driven Development): Testes escritos em linguagem natural (Given/When/Then) para melhorar a comunicação (Gherkin).',
              'ATDD (Acceptance Test-Driven Development): Criar testes de aceitação junto ao cliente ANTES do desenvolvimento para definir o que deve ser construído.',
            ],
          },
          {
            heading: 'Testes de Manutenção',
            items: [
              'Realizados após implantar o software por: modificações (melhorias), migração ou desativação do sistema.',
              'Análise de Impacto: Avaliar como uma mudança afetará o sistema existente para decidir quanto teste de regressão é necessário.',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Cap. 3 — Testes Estáticos',
        color: '#8B0000',
        sections: [
          {
            heading: 'Teste Estático vs. Análise Estática',
            items: [
              'Teste Estático (Revisões): Exame manual de requisitos, projetos, histórias de usuário ou código SEM executar.',
              'Análise Estática: Exame automatizado do código-fonte por ferramentas (linters) para detectar código morto, variáveis não usadas ou vulnerabilidades.',
              'Vantagens comuns: Encontram defeitos (não falhas), são baratos por se aplicarem muito cedo (shift-left).',
              'Limitações: Não encontram problemas dinâmicos como vazamentos de memória ou gargalos de desempenho em execução.',
            ],
            exam: 'Saber distinguir o que a análise estática NÃO pode encontrar (ex.: tempos de resposta reais).',
          },
          {
            heading: 'Tipos de Revisão',
            items: [
              'Informal: Sem processo, não exige documentação. (Ex.: Pair programming).',
              'Walkthrough (Revisão Guiada): O AUTOR conduz a reunião. Fomenta o aprendizado e o consenso. Pode haver um Escriba.',
              'Revisão Técnica: Conduzida por um moderador ou especialista técnico. Busca defeitos e avalia alternativas. Participam pares técnicos.',
              'Inspeção: A mais formal. Dirigida por um Moderador treinado (não o autor). Usam-se checklists, métricas e análise de causa raiz. Regras rígidas de entrada/saída.',
            ],
            exam: 'Vão te dar um cenário e você deve identificar o tipo. Se o Autor conduz -> Walkthrough. Se há um Moderador oficial e métricas rígidas -> Inspeção.',
          },
          {
            heading: 'Papéis em uma Revisão Formal',
            items: [
              'Autor: Cria o produto e corrige os defeitos encontrados.',
              'Moderador (Líder da Revisão): Planeja, conduz a reunião, garante um ambiente seguro.',
              'Gerente (Manager): Decide o que se revisa e provê tempo/recursos. Geralmente não participa da reunião.',
              'Revisores: Analisam o produto e detectam defeitos.',
              'Escriba (Recorder): Anota os defeitos descobertos durante a reunião.',
            ],
          },
          {
            heading: 'Fatores de Sucesso',
            items: [
              'Ter objetivos claros, usar listas de verificação (checklists).',
              'Preparação INDIVIDUAL antes da reunião.',
              'Ambiente de confiança: critica-se o produto, não o autor. A revisão não deve ser usada para avaliar o desempenho profissional da pessoa.',
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Cap. 4 — Análise e Modelagem de Testes',
        color: '#4B0082',
        sections: [
          {
            heading: 'Partição de Equivalência (EP)',
            items: [
              'Divide entradas/saídas em classes VÁLIDAS e INVÁLIDAS onde o software se comportará igual.',
              'Regra: Um único valor de teste é suficiente para cobrir toda a partição.',
              'Exemplo: Senha de 5 a 10 caracteres. Inválida1 < 5, Válida 5-10, Inválida2 > 10. Cobertura total = 3 casos.',
            ],
            exam: 'Dada uma regra, calcular quantas partições existem (somando válidas e inválidas).',
          },
          {
            heading: 'Análise de Valor Limite (BVA)',
            items: [
              'Baseia-se no fato de que os erros costumam ocorrer nos extremos das partições de equivalência.',
              'BVA de 2 valores: Avalia o limite exato e o valor adjacente mais próximo da outra partição.',
              'BVA de 3 valores: Avalia o limite, logo antes do limite e logo depois do limite.',
              'Exemplo BVA 2 val (faixa 10-20): 9, 10, 20, 21.',
            ],
            exam: 'Cálculo de valores BVA. Lembre-se de verificar bem se pedem 2 ou 3 valores.',
          },
          {
            heading: 'Tabelas de Decisão',
            items: [
              'Ideais para regras de negócio complexas e combinações lógicas de condições booleanas (V/F).',
              'Ajudam a detectar combinações que os requisitos não especificaram.',
              'Regra colapsada / Regra Impossível: Se uma condição de entrada é logicamente impossível dada outra condição (ex.: ter menos de 18 anos e estar aposentado).',
            ],
            exam: 'Vão te dar uma tabela e um cenário real; você deverá deduzir em qual "Regra" (Coluna) o usuário se encaixa e qual Ação (Linha inferior) se aplica.',
          },
          {
            heading: 'Transição de Estado',
            items: [
              'Modela sistemas que dependem do histórico de eventos (ex.: bloqueio após 3 PINs incorretos).',
              'Estados (nós), Transições (setas), Eventos (causa), Ações (efeito).',
              'Cobertura de todos os estados: Visitar cada nó pelo menos uma vez.',
              'Cobertura de transições válidas (0-switch): Percorrer todas as setas permitidas.',
            ],
            exam: 'Ver um diagrama e responder qual é o número mínimo de testes para cobrir todos os estados, ou identificar uma transição inválida.',
          },
          {
            heading: 'Técnicas de Caixa-Branca (Estrutura)',
            items: [
              'Cobertura de Instruções: % de linhas/instruções executáveis que rodaram em teste. A métrica mais fraca.',
              'Cobertura de Decisão (Ramos): % de resultados booleanos avaliados como True e False (os caminhos if/else).',
              'Importante: 100% de cobertura de decisão GARANTE 100% de cobertura de instruções. O inverso não é verdadeiro.',
            ],
            exam: 'Vão te dar um código if-else simples. Você terá que calcular quantos testes são necessários para 100% de instruções vs. 100% de decisão.',
          },
          {
            heading: 'Técnicas Baseadas na Experiência',
            items: [
              'Suposição de Erros (Error Guessing): O testador usa sua intuição e experiência prévia para adivinhar onde programaram errado.',
              'Teste Exploratório: Modelagem, execução, análise e aprendizado simultâneos usando time-boxes. Muito útil se os requisitos são pobres ou o tempo é escasso.',
              'Baseado em Listas de Verificação (Checklists): Lista de validações de alto nível sem passos detalhados a seguir.',
            ],
            exam: 'Reconhecer que o teste exploratório e a suposição de erros complementam (NÃO substituem) os testes de caixa-preta/branca.',
          },
        ],
      },
      {
        id: 5,
        title: 'Cap. 5 — Gestão das Atividades de Teste',
        color: '#8B4513',
        sections: [
          {
            heading: 'Planejamento de Testes',
            items: [
              'O Plano de Testes é dinâmico e deve ser atualizado. Documenta escopo, recursos, orçamento, riscos, estratégia.',
              'Estratégias de teste: Analítica (baseada em risco), Metódica (listas padrão), Reativa (exploratória), Consultiva (perguntar a especialistas), Baseada em modelos.',
              'Critérios de Entrada (Entry Criteria): Quando podemos começar? (Ex.: ambiente disponível, código compilado).',
              'Critérios de Saída (Exit Criteria): Quando terminamos? (Ex.: 100% dos riscos cobertos, orçamento esgotado, sem bugs graves em aberto).',
            ],
            exam: 'Diferenciar a estratégia Analítica (riscos) vs. Reativa (teste exploratório/dinâmico).',
          },
          {
            heading: 'Estimativa e Priorização',
            items: [
              'Estimativa baseada em métricas: Dados históricos de projetos anteriores ou métricas como Pontos de Função.',
              'Estimativa baseada em especialistas: Planning Poker em equipes ágeis ou Delphi de banda larga.',
              'Priorização de testes: O que executar primeiro? Conforme risco, valor de negócio ou dependências lógicas. No Ágil, priorizam-se as histórias de usuário de maior valor.',
            ],
          },
          {
            heading: 'Pirâmide de Testes',
            items: [
              'Modelo que promove ter muitíssimos testes unitários na base (rápidos, baratos, isolados).',
              'Menos testes na camada intermediária de integração/API.',
              'Pouquíssimos testes de UI (Interface do Usuário) no topo, por serem frágeis, lentos e caros de manter.',
            ],
            exam: 'Se uma equipe tem testes de interface gráfica demais, o conselho ISTQB é descer a lógica para a base da pirâmide (unitários/API).',
          },
          {
            heading: 'Gestão de Riscos',
            items: [
              'Nível de Risco = Probabilidade × Impacto.',
              'Risco de Produto (Qualidade): Funções que falham, vulnerabilidades de segurança, o app trava, desempenho ruim.',
              'Risco de Projeto (Processo): Falta de orçamento, testadores doentes, atrasos do ambiente, problemas de ferramentas.',
              'O Teste é uma forma primordial de mitigar os riscos de PRODUTO.',
            ],
            exam: 'Você deve conseguir classificar exemplos como risco de produto (um bug possível) vs. risco de projeto (um fornecedor atrasa a entrega).',
          },
          {
            heading: 'Relatórios e Informação de Defeitos',
            items: [
              'Tipos de relatório: Progresso (durante a iteração) e Resumo (no fim).',
              'Métricas comuns: Cobertura de requisitos, progresso de execução, tempo médio de correção.',
              'Um relatório de defeito deve incluir: ID, título, severidade/prioridade, passos detalhados para reproduzir, resultado esperado vs. real, e logs/capturas.',
              'Severidade (impacto técnico) ≠ Prioridade (importância de negócio). Um defeito cosmético no logo pode ter Severidade Baixa mas Prioridade Alta.',
            ],
            exam: 'Identificar quais campos são vitais para ajudar um dev a corrigir uma falha (passos para reproduzir, ambiente exato).',
          },
          {
            heading: 'Gestão da Configuração',
            items: [
              'Garante a rastreabilidade e a integridade de todos os artefatos.',
              'Assegura que testemos a versão 1.2 do software com o banco de dados 1.2 e o plano de testes v2.',
              'Sem gestão de configuração, os testadores poderiam testar versões antigas do código por engano.',
            ],
          },
        ],
      },
      {
        id: 6,
        title: 'Cap. 6 — Ferramentas de Teste',
        color: '#006666',
        sections: [
          {
            heading: 'Propósito e Benefícios',
            items: [
              'Melhoram a eficiência (automatizando a repetição).',
              'Melhoram a confiabilidade (sem falhas humanas em tarefas tediosas).',
              'Fornecem métricas objetivas (ex.: % de cobertura de ramos).',
            ],
          },
          {
            heading: 'Riscos das Ferramentas',
            items: [
              'Expectativas irreais (achar que a ferramenta resolverá tudo magicamente).',
              'Subestimar o esforço de adoção inicial, treinamento e manutenção dos scripts de teste.',
              'Dependência da ferramenta ou do suporte do fornecedor (vendor lock-in).',
            ],
            exam: 'Diferenciar benefícios de riscos. "Alta manutenção" = Risco. "Consistência" = Benefício.',
          },
          {
            heading: 'Classificação de Ferramentas',
            items: [
              'Gestão de testes: Rastreabilidade, ALM, JIRA.',
              'Análise Estática: SonarQube, linters. Apoiam os desenvolvedores antes de compilar.',
              'Execução / Automação: Selenium, Cypress. Executam testes de regressão.',
              'Ferramentas de Desempenho / Carga: JMeter. Simulam tráfego ou volume massivo que não daria para testar manualmente.',
              'Ferramentas de Preparação de Dados: Extraem, anonimizam e carregam dados massivos para testes. Apoiam a fase de Implementação/Execução.',
            ],
            exam: 'Pergunta clássica: "Queremos testar se o sistema suporta 1000 usuários ao mesmo tempo. Que ferramenta usamos?" -> Desempenho.',
          },
          {
            heading: 'Introdução de uma Ferramenta na Organização',
            items: [
              'Passo 1: Avaliar a maturidade da organização.',
              'Passo 2: Avaliação e Seleção de opções no mercado.',
              'Passo 3: Realizar uma Prova de Conceito (PoC) para validar a compatibilidade técnica.',
              'Passo 4: Projeto piloto para estabelecer padrões, medir o ROI e obter lições.',
              'Passo 5: Implantação progressiva para o restante da equipe com guias e treinamento.',
            ],
            exam: 'Identificar qual é o propósito de um Projeto Piloto ou Prova de Conceito.',
          },
        ],
      },
      {
        id: 7,
        title: 'Cap. 7 — Fórmulas e Cálculos (Cheat Sheet)',
        color: '#D2691E',
        sections: [
          {
            heading: 'Cobertura de Instruções',
            items: [
              'Fórmula: (Instruções executadas / Total de instruções) * 100',
              'Exemplo: O código tem 50 instruções. Os testes cobrem 45. Cobertura = (45 / 50) * 100 = 90%.',
            ],
            exam: 'Pergunta direta de cálculo de porcentagens.',
          },
          {
            heading: 'Cobertura de Ramos',
            items: [
              'Fórmula: (Ramos executados / Total de ramos) * 100',
              'Importante: Se te derem o total de instruções executadas e o total de ramos executados para calcular a cobertura de RAMOS, ignore completamente as instruções.',
              'Exemplo: 100 instruções, 12 ramos. Você executou 90 instruções e 9 ramos. Cobertura de ramos = (9 / 12) * 100 = 75%.',
            ],
            exam: 'Vão te dar instruções para te despistar; concentre-se só nos ramos.',
          },
          {
            heading: 'Estimativa de Três Pontos (PERT)',
            items: [
              'Fórmula: E = (Otimista + 4 * Mais Provável + Pessimista) / 6',
              'Exemplo: Otimista = 5, Provável = 7, Pessimista = 15. E = (5 + 28 + 15) / 6 = 48 / 6 = 8 dias.',
            ],
          },
          {
            heading: 'Extrapolação',
            items: [
              'Regra: Calcula-se usando a média das iterações passadas.',
              'Exemplo: Sprint 1 (45 dias), Sprint 2 (52 dias). Sprint 3 estimado = (45 + 52) / 2 = 48,5 dias.',
            ],
          },
          {
            heading: 'Cobertura de Transições de Estado',
            items: [
              'Fórmula: (Transições executadas / Total de transições válidas) * 100',
              '100% das transições válidas GARANTE 100% dos estados.',
              'Menos de 100% das transições NÃO garante 100% dos estados (pode ser que sim ou que não).',
            ],
            exam: 'Leia bem se pedem garantia. Só 100% das transições assegura 100% dos estados.',
          },
        ],
      },
    ],
  },
};

export default notesData;
