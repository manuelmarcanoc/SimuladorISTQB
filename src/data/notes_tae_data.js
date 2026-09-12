// ============================================================
//  ISTQB CT-TAE (CTAL-TAE v2.0) — Apuntes de estudio
//  Certificación: Certified Tester Advanced Level
//                 Test Automation Engineering v2.0
//  Examen: 40 preguntas · 66 puntos · 43 para aprobar (65%) · 90 min
//  Idiomas: es  (en | fr | pt hacen fallback a es hasta traducirse)
// ============================================================

const notesTaeData = {

  // ─────────────────────────────────────────────────────────────
  //  ESPAÑOL
  // ─────────────────────────────────────────────────────────────
  es: {
    examOverview: [
      '40 preguntas de opción múltiple, 90 minutos, 66 puntos totales y 43 puntos para aprobar (65%).',
      'Las preguntas valen 1, 2 o 3 puntos según su nivel cognitivo: mira siempre la puntuación antes de invertir tiempo.',
      'Niveles K2 (comprender), K3 (aplicar) y K4 (analizar). Los capítulos 2, 4, 6 y 8 son K4: esperan análisis, no memoria.',
      'Prerrequisito: CTFL v4.0 (o anterior) y experiencia práctica real en automatización.',
      'Los capítulos 3 (arquitectura, 210 min) y 8 (mejora continua, 210 min) son los que más tiempo de estudio piden.',
      'Muchas preguntas son escenarios: primero identifica el problema real (mantenibilidad, flakiness, arquitectura, datos) y luego busca la opción que lo ataca.',
    ],
    emptyState: 'Selecciona un capítulo para ver los apuntes del syllabus CT-TAE v2.0.',
    emptyStateSub: 'Cada sección incluye los conceptos clave y un bloque "En el examen" con lo que más suele evaluarse.',
    examLabel: 'En el examen:',
    chapters: [
      // ══════════════════════════════════════════════════════════
      {
        id: 1,
        title: 'Cap. 1 — Introducción y objetivos de la automatización',
        subtitle: '45 min · K2 · ~3 preguntas',
        color: '#1d4ed8',
        sections: [
          {
            heading: 'Qué es (y qué no es) la automatización de pruebas',
            items: [
              'Automatizar pruebas es usar software para ejecutar o dar soporte a actividades de prueba: ejecución, comparación de resultados, preparación de datos, informes y monitorización.',
              'La automatización NO es una actividad de testing por sí misma: no diseña pruebas ni sustituye al pensamiento crítico ni a las pruebas exploratorias.',
              'El código de automatización es software real: se diseña, se revisa, se versiona y se mantiene con los mismos estándares que el código de producción.',
              'Se automatiza para obtener repetibilidad, feedback rápido y cobertura sostenida, no para "ahorrar testers".',
              'Términos clave: SUT (System Under Test), TAS (Test Automation Solution), TAA (Test Automation Architecture), TAF (Test Automation Framework), testware.',
            ],
            exam: 'Distingue TAA (el diseño), TAF (el entorno/framework reutilizable) y TAS (TAA + framework + testware ya implementado y desplegado).',
          },
          {
            heading: 'Ventajas, desventajas y límites',
            items: [
              'Ventajas: ejecuta más pruebas en menos tiempo, elimina el error humano en tareas repetitivas, permite pruebas imposibles a mano (carga, concurrencia), da feedback temprano en CI y libera a las personas para pruebas de mayor valor.',
              'Desventajas: coste inicial alto, coste de mantenimiento permanente, dependencia de herramientas y de habilidades de programación, riesgo de falsos negativos que erosionan la confianza.',
              'Límite fundamental: la automatización comprueba lo que se le dijo que comprobara. No detecta problemas que nadie previó ni evalúa usabilidad o experiencia de usuario.',
              'Automatizar una prueba mala solo consigue ejecutar más rápido una prueba mala.',
              'El ROI aparece cuando el ahorro acumulado por ejecución supera el coste de desarrollo + mantenimiento; una prueba que se ejecuta dos veces al año rara vez lo alcanza.',
            ],
            exam: 'Pregunta clásica: identificar cuál NO es un beneficio de automatizar. Suelen colar "encontrar más defectos nuevos" o "mejorar la calidad del producto por sí misma".',
          },
          {
            heading: 'La automatización a lo largo del SDLC',
            items: [
              'Modelos secuenciales: la automatización llega tarde, se centra en regresión de sistema y suele sufrir por requisitos ya congelados.',
              'Modelos iterativos/ágiles: la automatización acompaña a cada incremento; se necesita testware que soporte cambios frecuentes de la interfaz.',
              'DevOps y CI/CD: la automatización es el mecanismo de control de calidad de la pipeline; los tiempos de ejecución y la estabilidad pasan a ser requisitos duros.',
              'Shift-left: automatizar unitarias, de componente, de API y de contrato antes que la interfaz de usuario.',
              'Shift-right: monitorización, pruebas en producción, canary releases y observabilidad como complemento, no como sustituto.',
            ],
            exam: 'Relaciona modelo de ciclo de vida con el nivel de test que conviene automatizar primero y con la frecuencia de ejecución esperada.',
          },
          {
            heading: 'Impacto de la arquitectura del SUT en la elección de herramientas',
            items: [
              'La tecnología del SUT condiciona la herramienta: web, móvil nativo, escritorio, embebido, mainframe, API, colas de mensajes o sistemas distribuidos requieren capacidades distintas.',
              'Monolito: pocos puntos de integración pero entornos pesados y despliegues lentos. Microservicios: muchos interfaces, ideal para pruebas de API y de contrato.',
              'Sistemas con interfaces propietarias o sin identificadores estables obligan a wrappers/adaptadores propios o a reconocimiento por imagen (frágil).',
              'Si el SUT no expone puntos de control y observación, la automatización acabará dependiendo de la GUI, la capa más cara y frágil.',
              'La decisión de herramienta debe considerar también el entorno de despliegue: contenedores, cloud, dispositivos reales frente a emuladores.',
            ],
            exam: 'Ante un escenario, la respuesta correcta suele ser la que ataca el interfaz más estable disponible (API/servicio) en lugar de la GUI.',
          },
        ],
      },

      // ══════════════════════════════════════════════════════════
      {
        id: 2,
        title: 'Cap. 2 — Preparación para la automatización',
        subtitle: '180 min · K4 · capítulo con más peso analítico',
        color: '#0f766e',
        sections: [
          {
            heading: 'Factores del SUT que condicionan la automatización',
            items: [
              'Interfaces disponibles: GUI, API/REST, línea de comandos, base de datos, colas de mensajes, ficheros. Cuantos más interfaces estables, mejor.',
              'Estabilidad del SUT: si la interfaz cambia cada sprint, la automatización de GUI se convierte en deuda desde el día uno.',
              'Datos de prueba: disponibilidad, volumen, anonimización, restauración del estado inicial y aislamiento entre ejecuciones.',
              'Dependencias externas: servicios de terceros, pasarelas de pago, hardware. Se resuelven con stubs, mocks o virtualización de servicios.',
              'Tamaño y complejidad: sistemas heredados sin documentación exigen una fase de exploración técnica previa.',
            ],
            exam: 'K4: te darán un contexto y tendrás que decidir qué factor bloquea la automatización y qué medida lo resuelve.',
          },
          {
            heading: 'Diseño para la testabilidad (SUT testability)',
            items: [
              'Observabilidad: poder ver el estado interno — logs estructurados, endpoints de salud, trazas, eventos, códigos de error significativos.',
              'Controlabilidad: poder llevar el sistema a un estado concreto — APIs de setup, creación de datos por servicio, feature flags, inyección de configuración.',
              'Identificadores estables: atributos como data-testid o id propios para automatización, nunca XPaths posicionales dependientes del maquetado.',
              'Test hooks: puntos de enganche pensados para pruebas, acordados con desarrollo y desactivables en producción.',
              'La testabilidad se negocia con el equipo de desarrollo antes de escribir el primer script: es un requisito no funcional del producto.',
            ],
            exam: 'Observabilidad = ver lo que pasa dentro. Controlabilidad = provocar el estado que quieres. Es una distinción muy preguntada.',
          },
          {
            heading: 'Entornos y datos de prueba',
            items: [
              'El entorno de automatización debe ser reproducible: infraestructura como código, contenedores y versiones fijadas.',
              'Aislamiento: cada ejecución debe partir de un estado conocido; los tests que dependen del orden o de residuos previos son una fuente clásica de flakiness.',
              'Estrategias de datos: datos fijos (fixtures), generados, extraídos de producción anonimizados o creados vía API en el propio test.',
              'Los datos sensibles requieren anonimización o sintetización por cumplimiento legal (RGPD).',
              'Un entorno compartido con pruebas manuales o con otros equipos degrada la fiabilidad: conviene entorno dedicado o efímero.',
            ],
            exam: 'Si el escenario menciona resultados distintos en cada ejecución sin cambios en el código, sospecha del entorno o de los datos, no del script.',
          },
          {
            heading: 'Selección y evaluación de herramientas',
            items: [
              'Criterios técnicos: compatibilidad con la tecnología del SUT, soporte de los interfaces necesarios, integración con CI/CD, capacidades de informe, ejecución paralela y multiplataforma.',
              'Criterios organizativos: coste total (licencia, formación, mantenimiento), habilidades del equipo, soporte y comunidad, madurez, vendor lock-in y estrategia de salida.',
              'Comercial frente a open source: la comparación relevante es coste total de propiedad y encaje, no el precio de la licencia.',
              'Prueba de concepto (PoC) o piloto sobre un caso representativo antes de comprometerse: es la única evidencia fiable.',
              'Considerar el ecosistema completo: gestión de casos, reporting, gestión de datos, dispositivos, virtualización de servicios.',
            ],
            exam: 'La opción correcta casi nunca es "la herramienta más popular", sino la que encaja con la tecnología del SUT y las capacidades del equipo.',
          },
          {
            heading: 'Análisis coste-beneficio y expectativas',
            items: [
              'Estimar coste de creación, coste de mantenimiento por cambio y ahorro por ejecución para calcular el punto de equilibrio.',
              'Priorizar por riesgo, frecuencia de ejecución y estabilidad del área del SUT; no por facilidad de automatizar.',
              'Gestionar expectativas de dirección: la automatización no elimina defectos, no sustituye pruebas exploratorias y no da resultados el primer mes.',
              'Objetivos medibles y acordados desde el inicio (tiempo de feedback, cobertura de regresión, tasa de flakiness) evitan la decepción posterior.',
              'Malas métricas de partida — por ejemplo "porcentaje de casos automatizados" — incentivan automatizar lo fácil, no lo valioso.',
            ],
            exam: 'K4: elegir qué casos automatizar primero. Regla: alto riesgo + alta frecuencia de ejecución + zona estable del SUT.',
          },
        ],
      },

      // ══════════════════════════════════════════════════════════
      {
        id: 3,
        title: 'Cap. 3 — Arquitectura de automatización (gTAA)',
        subtitle: '210 min · K3 · el capítulo más extenso',
        color: '#7c3aed',
        sections: [
          {
            heading: 'La gTAA y sus capas',
            items: [
              'La gTAA (generic Test Automation Architecture) es un modelo de referencia en capas para diseñar una solución de automatización mantenible.',
              'Capa de generación de pruebas (Test Generation): da soporte al diseño manual o automático de casos de prueba.',
              'Capa de definición de pruebas (Test Definition): define casos, datos y librerías de forma independiente del SUT y de la herramienta.',
              'Capa de ejecución de pruebas (Test Execution): ejecuta, registra el log y compara resultados esperados y obtenidos.',
              'Capa de adaptación (Test Adaptation): conecta la solución con los interfaces reales del SUT (GUI, API, servicios, hardware) mediante adaptadores.',
              'Transversalmente: gestión de configuración, gestión del proyecto de automatización y reporting.',
            ],
            exam: 'Saber qué responsabilidad vive en cada capa es pregunta segura. Los adaptadores aíslan el cambio tecnológico del SUT.',
          },
          {
            heading: 'Enfoques de scripting',
            items: [
              'Lineal / capture-replay: rápido de crear, imposible de mantener; sirve solo para demos o pruebas de un solo uso.',
              'Estructurado: introduce control de flujo y funciones reutilizables; primer nivel de mantenibilidad.',
              'Data-driven: separa datos de la lógica; un mismo script cubre muchos casos cambiando la tabla de datos.',
              'Keyword-driven: separa además las acciones en palabras clave; permite que personas no programadoras definan casos.',
              'Process-driven / model-based: los casos se derivan de flujos de negocio o de un modelo formal del comportamiento.',
              'BDD: escenarios en lenguaje natural (Gherkin) vinculados a código; su valor real es la conversación y la comprensión compartida, no la sintaxis.',
            ],
            exam: 'Escenario típico: muchos casos iguales con datos distintos → data-driven. Testers de negocio que definen casos sin programar → keyword-driven.',
          },
          {
            heading: 'Principios de diseño aplicados al testware',
            items: [
              'Separación de responsabilidades: casos de prueba, datos, localizadores, acciones de negocio y utilidades técnicas viven en sitios distintos.',
              'DRY: la duplicación de lógica multiplica el coste de cada cambio del SUT.',
              'Abstracción por capas: el caso de prueba habla el lenguaje del negocio ("iniciar sesión"), no el de la herramienta ("click en #btn-submit").',
              'KISS y legibilidad: un test debe leerse como una especificación; la astucia técnica se paga en mantenimiento.',
              'Un test, un objetivo: aserciones claras y fallo con un mensaje que explique qué se esperaba y qué ocurrió.',
              'Sin dependencias entre tests y sin estado compartido: cada test se prepara y se limpia solo.',
            ],
            exam: 'Cuando el escenario habla de "cambió un botón y hubo que tocar 200 scripts", la respuesta es abstracción/POM y eliminación de duplicación.',
          },
          {
            heading: 'Patrones de diseño en automatización',
            items: [
              'Page Object Model: cada pantalla se encapsula en una clase que expone acciones de negocio y oculta los localizadores.',
              'Screenplay / Actor: modela actores, tareas y preguntas; escala mejor que POM en suites grandes y muy reutilizables.',
              'Facade y Adapter: ocultan APIs complejas o cambiantes tras una interfaz estable propia.',
              'Factory y Builder: crean datos y objetos de prueba con valores por defecto sensatos y variaciones explícitas.',
              'Wrappers sobre la herramienta: aislar la librería (driver, cliente HTTP) permite cambiarla sin reescribir la suite.',
              'Fluent interfaces para mejorar la legibilidad de los pasos encadenados.',
            ],
            exam: 'POM = mantenibilidad frente a cambios de interfaz. Adapter/Wrapper = independencia de la herramienta.',
          },
          {
            heading: 'Requisitos de calidad de la solución (TAS)',
            items: [
              'Mantenibilidad: el criterio dominante; determina el coste a lo largo de toda la vida de la suite.',
              'Fiabilidad: resultados deterministas; sincronización explícita en lugar de esperas fijas (sleep).',
              'Rendimiento: tiempo de ejecución compatible con la pipeline; paralelización y selección de pruebas.',
              'Portabilidad: ejecutable en local, en CI y en distintos entornos sin cambios de código.',
              'Seguridad: credenciales fuera del repositorio, en gestores de secretos; nunca datos reales sensibles en logs.',
              'Reusabilidad y escalabilidad: librerías compartidas, convenios de nombres y estructura por dominios.',
            ],
            exam: 'Ante flakiness por tiempos, la respuesta correcta es espera explícita basada en condición, nunca aumentar el sleep.',
          },
        ],
      },

      // ══════════════════════════════════════════════════════════
      {
        id: 4,
        title: 'Cap. 4 — Implementación de la automatización',
        subtitle: '150 min · K4',
        color: '#b45309',
        sections: [
          {
            heading: 'Proyecto piloto',
            items: [
              'El piloto valida herramienta, arquitectura y proceso sobre un alcance pequeño, representativo y con valor real.',
              'Debe tener objetivos medibles, duración acotada y criterios de éxito definidos antes de empezar.',
              'Un buen piloto entrega también la infraestructura mínima: repositorio, integración con CI, informes y convenciones.',
              'Al terminar se decide con datos: continuar, ajustar la arquitectura o cambiar de herramienta.',
              'Elegir un área estable y conocida evita confundir problemas del SUT con problemas de la automatización.',
            ],
            exam: 'El piloto no busca cobertura, busca evidencia. Objetivos y criterios de salida definidos son la clave.',
          },
          {
            heading: 'Despliegue, riesgos y contingencias',
            items: [
              'Despliegue incremental por áreas o equipos; el "big bang" concentra todos los riesgos en un punto.',
              'Riesgos habituales: expectativas irreales, falta de habilidades, entorno inestable, mantenimiento no presupuestado, dependencia de una sola persona.',
              'Contingencias: formación y pairing, documentación, propiedad compartida del código, revisión por pares, presupuesto explícito de mantenimiento.',
              'Gestión del cambio: el equipo debe adoptar la suite; una suite que solo entiende su autor muere con su marcha.',
              'Definir desde el principio quién arregla un test roto y en qué plazo — sin eso, la suite se ignora en semanas.',
            ],
            exam: 'La causa más citada de fracaso no es técnica: expectativas mal gestionadas y mantenimiento sin presupuesto.',
          },
          {
            heading: 'Mantenibilidad del código de automatización',
            items: [
              'Aplicar al testware las prácticas de ingeniería: control de versiones, revisión de código, estándares, análisis estático y refactorización periódica.',
              'Convenciones de nombres consistentes y estructura de carpetas por dominio funcional, no por tipo de fichero.',
              'Documentar el "por qué" (decisiones de arquitectura, workarounds), no el "qué" que ya dice el código.',
              'Evitar la duplicación de localizadores y de datos; centralizar en un único punto de cambio.',
              'Medir y vigilar la deuda técnica del testware igual que la del producto.',
            ],
            exam: 'K4: dado un fragmento o descripción de una suite, identificar qué práctica falta para reducir el coste de mantenimiento.',
          },
          {
            heading: 'Tratamiento del flakiness',
            items: [
              'Un test inestable (flaky) es el que pasa y falla sin cambios en el SUT; destruye la confianza más rápido que un fallo real.',
              'Causas frecuentes: sincronización, datos compartidos, dependencias entre tests, orden de ejecución, entorno y servicios externos.',
              'Medidas: esperas explícitas por condición, aislamiento de datos, reintentos controlados y trazados, cuarentena temporal con fecha límite.',
              'Reintentar sin investigar oculta defectos reales del producto: el reintento es una medida temporal, no la solución.',
              'Medir la tasa de flakiness por test y tratarla como un defecto con prioridad, no como ruido aceptable.',
            ],
            exam: 'Cuarentena + análisis de causa raíz es la respuesta correcta; "aumentar el número de reintentos" casi nunca lo es.',
          },
        ],
      },

      // ══════════════════════════════════════════════════════════
      {
        id: 5,
        title: 'Cap. 5 — Estrategias de implementación y despliegue',
        subtitle: '90 min · K3',
        color: '#be123c',
        sections: [
          {
            heading: 'Integración en CI/CD',
            items: [
              'La pipeline organiza las pruebas por velocidad: unitarias y de componente en cada commit; integración/API después; E2E y no funcionales en etapas más lentas o nocturnas.',
              'Criterios de entrada/salida (quality gates) que detienen la promoción de un artefacto cuando fallan pruebas relevantes.',
              'Feedback rápido: si la primera etapa tarda más de unos minutos, los desarrolladores dejan de esperarla.',
              'Ejecución en paralelo, sharding y selección de pruebas por impacto para mantener los tiempos.',
              'Los resultados deben publicarse de forma automática y accesible: informes, artefactos, capturas y logs asociados a cada ejecución.',
            ],
            exam: 'Ordenar etapas por coste y velocidad es pregunta típica: lo barato y rápido primero, lo caro y lento después.',
          },
          {
            heading: 'Automatización por niveles de prueba',
            items: [
              'Pirámide de pruebas: muchas unitarias, menos de integración/API, pocas E2E de interfaz.',
              'El antipatrón "cono de helado" (mayoría de E2E) produce suites lentas, frágiles y caras.',
              'Cada nivel responde una pregunta distinta; duplicar la misma comprobación en varios niveles es desperdicio.',
              'Las pruebas de API y de contrato dan la mejor relación valor/coste en arquitecturas de microservicios.',
              'Las pruebas de interfaz se reservan para flujos críticos de negocio de extremo a extremo.',
            ],
            exam: 'Si la suite E2E es enorme y lenta, la respuesta correcta es bajar comprobaciones de nivel, no comprar más máquinas.',
          },
          {
            heading: 'Gestión de la configuración del testware',
            items: [
              'El testware se versiona junto al código del producto o en un repositorio con trazabilidad clara de versiones compatibles.',
              'Ramas, etiquetas y artefactos versionados permiten reproducir una ejecución antigua exactamente.',
              'Configuración por entorno externalizada (variables, ficheros de configuración), nunca embebida en los scripts.',
              'Gestión de dependencias con versiones fijadas para evitar que una actualización silenciosa rompa la suite.',
              'Los datos y los scripts deben mantenerse sincronizados con la versión del SUT que prueban.',
            ],
            exam: 'Trazabilidad: versión del SUT ↔ versión del testware ↔ resultados de la ejecución.',
          },
          {
            heading: 'Dependencias, stubs, mocks y contract testing',
            items: [
              'Stub: devuelve respuestas predefinidas. Mock: además verifica las interacciones esperadas. Virtualización de servicios: simula un servicio completo con comportamiento y latencia.',
              'Sustituir dependencias externas hace las pruebas deterministas, rápidas y ejecutables sin terceros.',
              'Riesgo: el doble de prueba puede divergir del servicio real y ocultar incompatibilidades.',
              'Contract testing (dirigido por el consumidor) verifica que proveedor y consumidor comparten el mismo contrato sin levantar todo el sistema.',
              'Los contratos se ejecutan en la pipeline de ambos lados: rompe quien cambia el contrato, no quien lo consume.',
            ],
            exam: 'Microservicios con equipos independientes → contract testing. Servicio de terceros caro o inestable → virtualización.',
          },
        ],
      },

      // ══════════════════════════════════════════════════════════
      {
        id: 6,
        title: 'Cap. 6 — Informes y métricas',
        subtitle: '150 min · K4',
        color: '#0369a1',
        sections: [
          {
            heading: 'Recogida de datos durante la ejecución',
            items: [
              'Registrar por ejecución: identificador, versión del SUT, entorno, datos usados, duración, resultado y evidencias.',
              'Evidencias útiles ante fallo: log estructurado, captura de pantalla, vídeo o traza, petición y respuesta en pruebas de API.',
              'Niveles de log adecuados: demasiado log oculta la señal, muy poco impide diagnosticar.',
              'La recogida debe ser automática y uniforme: si depende de que alguien la active, no existe.',
              'Nunca registrar credenciales ni datos personales en claro.',
            ],
            exam: 'Un fallo sin evidencia suficiente para diagnosticarlo cuesta más que el propio defecto: la trazabilidad es parte del diseño.',
          },
          {
            heading: 'Métricas de automatización',
            items: [
              'De progreso: número de casos automatizados, cobertura de requisitos o de riesgos cubierta por la suite.',
              'De calidad de la suite: tasa de fallos falsos, tasa de flakiness, tiempo medio de reparación de un test roto.',
              'De eficiencia: duración total y por etapa, tiempo hasta el primer feedback, coste por ejecución.',
              'De eficacia: defectos detectados por la suite, defectos escapados a producción, cobertura de código o de ramas cuando aplica.',
              'Métricas vanidosas a evitar: "porcentaje de casos automatizados" o "número de scripts" sin relación con riesgo ni con valor.',
            ],
            exam: 'K4: elegir la métrica que responde a la pregunta del interesado. Dirección quiere valor y riesgo; el equipo quiere estabilidad y tiempos.',
          },
          {
            heading: 'Análisis de fallos y de logs',
            items: [
              'Triaje: clasificar cada fallo como defecto del SUT, defecto del test, problema de entorno, problema de datos o inestabilidad.',
              'El análisis de causa raíz evita el parche repetido; sin él, la suite acumula workarounds.',
              'Agrupar fallos con la misma causa reduce drásticamente el trabajo de análisis en suites grandes.',
              'Técnicas asistidas por IA/ML: agrupación automática de fallos similares, detección de anomalías en los logs y priorización de pruebas.',
              'La IA sugiere; la decisión y la responsabilidad siguen siendo del ingeniero de automatización.',
            ],
            exam: 'Recuerda el uso de IA/ML en el análisis de logs: aparece explícitamente en el syllabus v2.0.',
          },
          {
            heading: 'Comunicación con los interesados',
            items: [
              'Informe adaptado a la audiencia: dirección quiere tendencia y riesgo; el equipo quiere detalle y evidencias.',
              'Dashboards con tendencia temporal, no solo la foto de la última ejecución.',
              'Publicación automática tras cada ejecución en el canal donde la gente ya trabaja.',
              'Un informe debe permitir responder: ¿podemos liberar? ¿qué riesgo asumimos? ¿qué está degradándose?',
              'Los gráficos deben ser honestos: incluir contexto (versión, alcance, entorno) y no ocultar pruebas excluidas o en cuarentena.',
            ],
            exam: 'La opción correcta es la que ajusta el contenido y el nivel de detalle al destinatario del informe.',
          },
        ],
      },

      // ══════════════════════════════════════════════════════════
      {
        id: 7,
        title: 'Cap. 7 — Verificación de la solución (TAS)',
        subtitle: '135 min · K3',
        color: '#4d7c0f',
        sections: [
          {
            heading: 'Verificar el entorno y la infraestructura',
            items: [
              'Antes de confiar en los resultados hay que verificar la propia solución de automatización: entorno, herramientas, versiones y conectividad.',
              'Comprobaciones de arranque (smoke de la infraestructura): SUT accesible, servicios levantados, datos base cargados, credenciales válidas.',
              'Verificar que la instalación y configuración se reproducen desde cero, no solo en la máquina donde funcionó.',
              'Los cambios de versión de navegador, driver, SO o dependencias son causa habitual de fallos masivos.',
              'Un fallo del entorno debe distinguirse del fallo del SUT en el informe: no son el mismo problema.',
            ],
            exam: 'Si toda la suite falla a la vez, la primera hipótesis es entorno o configuración, no un defecto del producto.',
          },
          {
            heading: 'Verificar el comportamiento de los tests',
            items: [
              'Verificar que un test falla cuando debe fallar: una prueba que nunca falla puede no estar comprobando nada.',
              'Falso positivo (falsa alarma): el test falla sin defecto real. Falso negativo: el test pasa habiendo defecto.',
              'Ejecuciones en seco (dry run), pruebas del propio testware y mutación controlada del SUT para validar la capacidad de detección.',
              'Revisar que las aserciones comprueban el resultado esperado y no un efecto colateral trivial.',
              'Comprobar el comportamiento en ejecución paralela y en entornos distintos antes de darlo por válido.',
            ],
            exam: 'Distinción falso positivo / falso negativo: se pregunta con frecuencia y con enunciados enrevesados.',
          },
          {
            heading: 'Análisis estático y revisión del testware',
            items: [
              'Aplicar linters, análisis estático y métricas de complejidad al código de automatización.',
              'Revisión por pares de los scripts, con la misma exigencia que el código de producción.',
              'Detectar código muerto, duplicado, esperas fijas y aserciones ausentes o demasiado débiles.',
              'Ejecutar el análisis en la pipeline para que la calidad del testware no dependa de la disciplina individual.',
              'Cobertura de la propia suite: qué requisitos o riesgos quedan sin cubrir tras el análisis.',
            ],
            exam: 'Verificar la TAS incluye analizar el código de automatización, no solo ejecutar los tests y mirar el resultado.',
          },
        ],
      },

      // ══════════════════════════════════════════════════════════
      {
        id: 8,
        title: 'Cap. 8 — Mejora continua',
        subtitle: '210 min · K4 · máximo tiempo de estudio',
        color: '#9333ea',
        sections: [
          {
            heading: 'Identificar oportunidades de mejora',
            items: [
              'Las mejoras se identifican con datos: métricas de duración, flakiness, fallos por causa y coste de mantenimiento.',
              'Fuentes de mejora: retrospectivas, análisis de defectos escapados, revisión de la suite y feedback de los desarrolladores.',
              'Priorizar por impacto: primero lo que bloquea la pipeline o lo que consume más tiempo de análisis.',
              'La mejora continua es una actividad planificada con tiempo asignado, no un hueco entre sprints.',
              'Cada cambio de mejora debe poder medirse antes y después para saber si funcionó.',
            ],
            exam: 'K4: dado un conjunto de métricas, decidir qué mejora aporta más y por qué.',
          },
          {
            heading: 'Mejorar los casos de prueba automatizados',
            items: [
              'Eliminar casos redundantes, obsoletos o que nunca han detectado nada relevante.',
              'Reforzar aserciones débiles y dividir tests que comprueban demasiadas cosas a la vez.',
              'Reducir el tiempo de ejecución: preparar estado por API en lugar de por interfaz, evitar pasos innecesarios, reutilizar sesiones.',
              'Revisar la cobertura frente a los riesgos actuales del producto, no frente a los de hace dos años.',
              'Borrar tests también es mejorar: una suite más pequeña y fiable vale más que una grande e ignorada.',
            ],
            exam: 'Prepara el estado por la vía más barata y prueba por la interfaz que realmente quieres validar.',
          },
          {
            heading: 'Mejorar la arquitectura y el código',
            items: [
              'Refactorizar hacia capas y patrones cuando el coste de cada cambio del SUT se dispara.',
              'Consolidar librerías y utilidades duplicadas entre equipos en componentes compartidos y versionados.',
              'Actualizar herramientas y dependencias de forma planificada: el retraso acumulado convierte la actualización en un proyecto.',
              'Migrar o sustituir herramientas cuando dejan de encajar; planificar la coexistencia temporal de ambas soluciones.',
              'Reestructurar el testware para permitir paralelización y ejecución selectiva.',
            ],
            exam: 'Consolidar automatización dispersa entre equipos es un tema explícito del capítulo 8.',
          },
          {
            heading: 'Ampliar el alcance de la automatización',
            items: [
              'Usar herramientas para tareas más allá de la ejecución: generación de datos, preparación de entornos, monitorización, análisis de resultados.',
              'Automatizar la gestión del propio proceso: creación de defectos, publicación de informes, etiquetado de ejecuciones.',
              'Incorporar nuevos tipos de prueba: rendimiento, accesibilidad, seguridad básica, pruebas de contrato.',
              'Extender la automatización a nuevos niveles o áreas solo cuando la base existente es estable.',
              'Compartir conocimiento y estándares entre equipos para que la mejora sea organizativa y no local.',
            ],
            exam: 'La automatización de soporte (datos, entornos, informes) suele dar más ahorro que añadir más scripts de ejecución.',
          },
        ],
      },
    ],
  },
};

export default notesTaeData;
