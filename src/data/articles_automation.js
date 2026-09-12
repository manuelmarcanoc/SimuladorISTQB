// articles_automation.js — Guías sobre automatización de pruebas y CTAL-TAE
// Mismo formato de bloques tipados que articles_data.js (p, h3, ul, ol, tip, table, code)

export const AUTOMATION_ARTICLES = [
  {
    id: 'que-es-ctal-tae',
    emoji: '',
    title: 'CTAL-TAE v2.0: qué es, para quién es y cómo prepararlo',
    description:
      'La certificación ISTQB de ingeniería de automatización explicada sin marketing: qué evalúa cada capítulo, qué nivel de experiencia asume y cómo estudiarla si vienes del Foundation Level.',
    date: '2026-09-10',
    readTime: '9 min',
    tag: 'Certificación',
    sections: [
      {
        heading: 'Qué certifica exactamente el CTAL-TAE',
        content: [
          { type: 'p', text: 'El Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE, antes CT-TAE) es la certificación del ISTQB dedicada a la ingeniería de la automatización de pruebas. No certifica que sepas usar una herramienta concreta: certifica que sabes diseñar, implementar, verificar y mantener una solución de automatización completa dentro de una organización real.' },
          { type: 'p', text: 'Esa distinción es la que más confusión genera. Quien llega esperando preguntas de sintaxis de Selenium o de Playwright se encuentra con escenarios del tipo "esta suite tarda seis horas, falla la mitad de las veces y nadie la arregla: ¿qué haces primero?". El examen mide criterio de ingeniería, no memoria de API.' },
          { type: 'p', text: 'La versión 2.0 del syllabus, publicada en 2024, reorganizó el contenido en ocho capítulos e incorporó temas que en la versión anterior no existían o eran marginales: integración en pipelines de CI/CD, pruebas de contrato entre servicios, uso de técnicas de inteligencia artificial y aprendizaje automático en el análisis de logs, y una insistencia mucho mayor en la mantenibilidad como característica de calidad dominante.' },
        ],
      },
      {
        heading: 'Estructura del examen',
        content: [
          {
            type: 'table',
            headers: ['Aspecto', 'Dato'],
            rows: [
              ['Preguntas', '40 de opción múltiple'],
              ['Duración', '90 minutos'],
              ['Puntos', '66 en total; las preguntas valen 1, 2 o 3 puntos'],
              ['Para aprobar', '43 puntos (65%)'],
              ['Niveles cognitivos', 'K2 (comprender), K3 (aplicar) y K4 (analizar)'],
              ['Requisitos previos', 'Foundation Level v4.0 o anterior, más experiencia práctica'],
            ],
          },
          { type: 'p', text: 'El reparto de puntos importa más de lo que parece. Con 19 preguntas de un punto, 15 de dos y 6 de tres, hay una diferencia real entre acertar las fáciles y acertar las que pesan. Si te encuentras atascado en una pregunta de un punto, déjala marcada y sigue: perder cinco minutos ahí puede costarte una de tres puntos al final del examen.' },
          { type: 'tip', text: 'Cuatro de los ocho capítulos están íntegramente en nivel K4. Eso significa que no basta con reconocer definiciones: hay que analizar una situación y decidir qué medida la resuelve.' },
        ],
      },
      {
        heading: 'Los ocho capítulos, y qué esperar de cada uno',
        content: [
          {
            type: 'ol',
            items: [
              'Introducción y objetivos (45 min de estudio, K2): ventajas, desventajas y límites de la automatización, su encaje en distintos ciclos de vida y cómo la arquitectura del sistema bajo prueba condiciona la elección de herramienta.',
              'Preparación para la automatización (180 min, K4): factores del sistema, diseño para la testabilidad, entornos y datos de prueba, criterios de selección y evaluación de herramientas.',
              'Arquitectura de automatización (210 min, K3): la gTAA y sus capas, enfoques de scripting, principios de diseño y patrones como Page Object o los adaptadores.',
              'Implementación (150 min, K4): proyecto piloto, riesgos de despliegue y contingencias, mantenibilidad del código y tratamiento de las pruebas inestables.',
              'Estrategias de implementación y despliegue (90 min, K3): CI/CD, niveles de prueba, gestión de configuración del testware, stubs, mocks y pruebas de contrato.',
              'Informes y métricas (150 min, K4): recogida de datos durante la ejecución, métricas útiles frente a métricas vanidosas, análisis de fallos y comunicación con los interesados.',
              'Verificación de la solución (135 min, K3): comprobar el entorno, verificar que los tests fallan cuando deben y analizar la calidad del propio código de automatización.',
              'Mejora continua (210 min, K4): identificar oportunidades con datos, mejorar casos y arquitectura, consolidar entre equipos y ampliar el alcance de la automatización.',
            ],
          },
          { type: 'p', text: 'Sumando los tiempos de estudio recomendados salen 21 horas de instrucción. Es una referencia de curso presencial: preparándolo por tu cuenta, con experiencia previa, cuatro o cinco semanas a ritmo de una hora diaria es un plan realista.' },
        ],
      },
      {
        heading: 'Qué nivel de experiencia asume',
        content: [
          { type: 'p', text: 'El syllabus da por sabido que has visto una suite de automatización de cerca. No hace falta haber diseñado un framework desde cero, pero sí entender por qué duele un cambio de interfaz, qué significa que un test sea inestable o por qué un entorno compartido arruina los resultados.' },
          { type: 'p', text: 'Si tu experiencia es solo de pruebas manuales, el examen es aprobable estudiando, pero muchas respuestas te parecerán arbitrarias porque no habrás sufrido el problema que describen. En ese caso, merece la pena montar una pequeña suite propia —diez pruebas de API y tres de interfaz sobre cualquier aplicación de ejemplo— antes de estudiar: el temario se ordena solo cuando has visto el desorden.' },
        ],
      },
      {
        heading: 'Los cinco conceptos que más caen',
        content: [
          {
            type: 'ul',
            items: [
              'La distinción entre TAA (la arquitectura, el diseño), TAF (el framework reutilizable) y TAS (la solución completa desplegada, con su testware).',
              'Las cuatro capas de la gTAA y qué responsabilidad vive en cada una, especialmente la capa de adaptación como aislante frente a los cambios del sistema bajo prueba.',
              'Observabilidad frente a controlabilidad: ver el estado interno frente a poder provocar el estado que quieres probar.',
              'Falso positivo (el test falla sin defecto real) frente a falso negativo (el test pasa habiendo defecto), con enunciados deliberadamente enrevesados.',
              'Qué hacer con las pruebas inestables: cuarentena con plazo y análisis de causa raíz, nunca subir el número de reintentos.',
            ],
          },
          { type: 'tip', text: 'Regla práctica para los escenarios: la respuesta correcta casi siempre es la que ataca la causa estructural (arquitectura, datos, nivel de prueba) y no la que compra tiempo (más reintentos, más máquinas, más espera).' },
        ],
      },
      {
        heading: 'Cómo prepararlo con este sitio',
        content: [
          { type: 'p', text: 'En ISTQBeasy tienes los apuntes de los ocho capítulos con un bloque "En el examen" por sección y un banco de preguntas de práctica escritas contra los objetivos de aprendizaje del syllabus, con el mismo reparto de puntos que el examen real y una explicación que justifica la correcta y descarta las demás.' },
          { type: 'p', text: 'El orden que mejor funciona: lee el capítulo, practica ese capítulo en el simulador, repasa lo que hayas fallado y solo al final haz simulacros completos de 40 preguntas en 90 minutos. Y ten el syllabus oficial a mano: es gratuito y es la única fuente autorizada.' },
        ],
      },
    ],
  },

  {
    id: 'piramide-de-pruebas-automatizacion',
    emoji: '',
    title: 'La pirámide de pruebas: cómo repartir tu automatización sin acabar con una suite inservible',
    description:
      'Por qué las suites de extremo a extremo se vuelven lentas y frágiles, qué comprobación pertenece a cada nivel y cómo bajar de nivel las pruebas que están en el sitio equivocado.',
    date: '2026-09-08',
    readTime: '8 min',
    tag: 'Automatización',
    sections: [
      {
        heading: 'El problema que resuelve la pirámide',
        content: [
          { type: 'p', text: 'Casi todas las suites de automatización que envejecen mal comparten la misma forma: cientos de pruebas de interfaz de usuario, unas pocas de servicio y casi ninguna unitaria. Es el antipatrón que se conoce como cono de helado, y produce un resultado predecible: la suite tarda horas, falla por motivos que no tienen que ver con el producto y acaba desconectada de la pipeline "hasta que la arreglemos".' },
          { type: 'p', text: 'La pirámide de pruebas no es una regla estética: es una consecuencia del coste. Cada nivel tiene un precio distinto por prueba, y no solo al escribirla, sino al ejecutarla y sobre todo al mantenerla.' },
          {
            type: 'table',
            headers: ['Nivel', 'Qué comprueba', 'Velocidad', 'Coste de mantenimiento'],
            rows: [
              ['Unitario', 'Lógica de una función o clase aislada', 'Milisegundos', 'Bajo: cambia con el código que prueba'],
              ['Integración / API', 'Contrato y comportamiento entre componentes', 'Decenas de milisegundos a segundos', 'Medio: estable si el contrato es estable'],
              ['Sistema / E2E', 'Un flujo completo por la interfaz real', 'Segundos a minutos', 'Alto: cualquier cambio visual puede romperla'],
            ],
          },
        ],
      },
      {
        heading: 'La pregunta correcta no es "qué nivel", es "qué riesgo"',
        content: [
          { type: 'p', text: 'La forma útil de decidir el nivel de una prueba es preguntarse qué se rompería si esa comprobación no existiera, y dónde vive ese riesgo. El cálculo de un recargo por descubierto es lógica: prueba unitaria. Que el servicio de pagos devuelva un error 409 cuando el pedido ya está pagado es un contrato: prueba de API. Que un cliente pueda completar la compra desde el catálogo hasta el correo de confirmación es un flujo de negocio: eso sí merece una prueba de extremo a extremo.' },
          { type: 'p', text: 'El error clásico consiste en comprobar reglas de negocio a través de la interfaz porque "así se prueba como el usuario". Se paga tres veces: la prueba tarda más, se rompe con cada rediseño y, cuando falla, no dice qué regla se ha incumplido.' },
          { type: 'tip', text: 'Si una prueba de interfaz falla y para diagnosticarla tienes que leer un log de servidor, esa prueba estaba en el nivel equivocado.' },
        ],
      },
      {
        heading: 'Cómo bajar de nivel una suite ya escrita',
        content: [
          {
            type: 'ol',
            items: [
              'Mide primero: duración total, duración por prueba y número de fallos por causa durante un mes. Sin esos datos, cualquier reorganización es una opinión.',
              'Agrupa las pruebas de interfaz por la regla que verifican. Verás que muchas comprueban variaciones de la misma lógica con distintos datos.',
              'Quédate con un solo camino feliz por flujo en la interfaz y traslada las variaciones al nivel de API o unitario.',
              'Reescribe la preparación de datos: crear el estado por servicio en lugar de navegando por pantallas suele recortar más tiempo que cualquier optimización de infraestructura.',
              'Borra lo redundante. Una suite más pequeña y fiable vale más que una grande que nadie mira.',
            ],
          },
          { type: 'p', text: 'Este trabajo se justifica con números, no con principios: si el coste de adaptar la suite a cada cambio del producto crece mes a mes y el tiempo de análisis de fallos se come las mañanas, la reorganización se paga sola.' },
        ],
      },
      {
        heading: 'Matices que la pirámide no cubre',
        content: [
          { type: 'p', text: 'La pirámide es un heurístico, no una ley. Hay contextos donde la forma cambia con razón. En una arquitectura de microservicios con equipos independientes, la capa de contrato crece hasta ser la más importante. En una aplicación cuyo valor está casi todo en la interfaz —un editor visual, un juego— hay más pruebas de interfaz de las que la pirámide sugeriría, y está bien. En sistemas embebidos, gran parte del esfuerzo se va a pruebas de integración con hardware simulado.' },
          { type: 'p', text: 'Lo que no cambia es el principio de fondo: pon cada comprobación en el nivel más barato y más estable que pueda detectar el problema. Todo lo demás son detalles del contexto.' },
        ],
      },
      {
        heading: 'En el examen CTAL-TAE',
        content: [
          { type: 'p', text: 'Este tema aparece en el capítulo 5 del syllabus, y casi siempre como escenario: una suite de extremo a extremo enorme y lenta, y cuatro opciones de las que solo una ataca la estructura. Las tentadoras suelen ser "paralelizar más" o "ejecutarla solo por la noche": ambas alivian el síntoma y dejan el problema intacto.' },
        ],
      },
    ],
  },

  {
    id: 'page-object-model-mantenible',
    emoji: '',
    title: 'Page Object Model: cómo escribir automatización que sobreviva a un rediseño',
    description:
      'El patrón que separa qué se prueba de cómo se pulsa, con los errores habituales al aplicarlo y cuándo conviene dar el salto a un modelo de tareas tipo Screenplay.',
    date: '2026-09-06',
    readTime: '8 min',
    tag: 'Automatización',
    sections: [
      {
        heading: 'El síntoma que lo justifica',
        content: [
          { type: 'p', text: 'Hay una anécdota que se repite en todas las organizaciones que automatizan sin arquitectura: alguien cambia el formulario de acceso y hay que modificar ciento ochenta scripts. Ese es el momento en que se descubre, tarde, que los detalles de la interfaz estaban copiados en cada prueba.' },
          { type: 'p', text: 'El Page Object Model resuelve exactamente eso. Cada pantalla —o cada componente reutilizable— se encapsula en una clase que expone acciones con lenguaje de negocio y guarda dentro los localizadores y las esperas. Si cambia la interfaz, se corrige en un único sitio.' },
        ],
      },
      {
        heading: 'Cómo se ve la diferencia',
        content: [
          { type: 'h3', text: 'Sin abstracción' },
          {
            type: 'code',
            text: `await page.fill('#user_email_input', 'ana@example.com');
await page.fill('#user_pwd_input', 'secreto');
await page.click('.btn-primary.submit-lg');
await page.waitForTimeout(3000);
expect(await page.textContent('.dashboard-greeting')).toContain('Ana');`,
          },
          { type: 'h3', text: 'Con Page Object' },
          {
            type: 'code',
            text: `const login = new LoginPage(page);
const dashboard = await login.iniciarSesionComo(usuarios.ana);
await expect(dashboard.saludo()).toHaveText('Hola, Ana');`,
          },
          { type: 'p', text: 'La segunda versión no es más corta por gusto estético: es que el caso de prueba ya no sabe nada de selectores ni de esperas. Se lee como una especificación y, cuando falla, el mensaje habla del negocio y no del DOM.' },
        ],
      },
      {
        heading: 'Reglas que evitan que el patrón se degrade',
        content: [
          {
            type: 'ul',
            items: [
              'El objeto de página expone acciones y consultas de negocio ("iniciar sesión", "saldo mostrado"), no métodos que reproducen clics uno a uno.',
              'Las aserciones viven en el test, no dentro del objeto de página: si el objeto afirma, deja de ser reutilizable.',
              'Nada de esperas fijas. La espera es responsabilidad del objeto de página y debe ser explícita, basada en una condición observable.',
              'Los localizadores se declaran en un solo lugar y usan atributos pensados para pruebas, acordados con desarrollo, en lugar de rutas posicionales del DOM.',
              'Una acción que navega a otra pantalla devuelve el objeto de esa pantalla: así el flujo del test se lee sin ambigüedad.',
              'Los datos de prueba se construyen con factorías o builders, no se incrustan en el objeto de página.',
            ],
          },
          { type: 'tip', text: 'Si tus objetos de página tienen métodos llamados clickBoton1 o rellenarCampo3, tienes la sintaxis del patrón pero no su beneficio: la abstracción sigue estando en el test.' },
        ],
      },
      {
        heading: 'Los límites del patrón',
        content: [
          { type: 'p', text: 'Con suites grandes, el POM tiende a producir clases enormes que acumulan todo lo que se puede hacer en una pantalla, y flujos que atraviesan seis pantallas se convierten en cadenas difíciles de reutilizar. Ahí entra el modelo de tareas, popularizado como Screenplay: en lugar de pantallas con métodos, se modelan actores que ejecutan tareas y hacen preguntas. La unidad de reutilización pasa a ser la tarea de negocio, que es la que de verdad se repite entre pruebas.' },
          { type: 'p', text: 'No es una migración obligatoria. Con una suite de cincuenta pruebas, el POM bien aplicado es suficiente y más fácil de enseñar al equipo. Con quinientas y varios equipos compartiendo componentes, el modelo de tareas se paga.' },
        ],
      },
      {
        heading: 'Y el punto que se olvida: los wrappers de la herramienta',
        content: [
          { type: 'p', text: 'El POM te protege de los cambios del producto. No te protege de los cambios de la herramienta. Si cada objeto de página llama directamente a la API de tu librería de automatización, una migración futura te obliga a tocar toda la suite.' },
          { type: 'p', text: 'La solución es una capa propia delgada —lo que el syllabus del CTAL-TAE llama capa de adaptación— que envuelva las operaciones que realmente usas: abrir, escribir, pulsar, esperar condición, leer texto. Es media tarde de trabajo y convierte un cambio de herramienta en un problema localizado en lugar de un proyecto.' },
        ],
      },
    ],
  },

  {
    id: 'tests-flaky-como-eliminarlos',
    emoji: '',
    title: 'Tests inestables: por qué aparecen y cómo eliminarlos de verdad',
    description:
      'Las causas reales de los tests que pasan y fallan sin motivo, cómo diagnosticarlas por orden de probabilidad y por qué añadir reintentos es la peor solución posible.',
    date: '2026-09-04',
    readTime: '7 min',
    tag: 'Automatización',
    sections: [
      {
        heading: 'Qué es exactamente un test inestable',
        content: [
          { type: 'p', text: 'Un test inestable, o flaky, es el que produce resultados distintos en ejecuciones sucesivas sin que hayan cambiado ni el sistema bajo prueba ni el propio test. No es un test lento, ni uno que falla siempre por un defecto conocido: es uno cuyo resultado no es determinista.' },
          { type: 'p', text: 'Su coste no está en el tiempo que hace perder, sino en lo que destruye: la confianza. En cuanto un equipo aprende que un fallo rojo "probablemente sea el test", empieza a reejecutar sin mirar, y el día que el rojo era un defecto real llega a producción sin que nadie lo haya leído.' },
        ],
      },
      {
        heading: 'Causas por orden de probabilidad',
        content: [
          {
            type: 'ol',
            items: [
              'Sincronización: el test actúa antes de que la aplicación esté lista. Es la causa número uno, y se manifiesta más en máquinas de integración continua, que suelen ir más lentas que el portátil donde se escribió la prueba.',
              'Datos compartidos: dos pruebas usan el mismo usuario, el mismo pedido o el mismo saldo. Al ejecutarse en paralelo, o en otro orden, se pisan entre ellas.',
              'Dependencia del orden: una prueba deja un estado del que otra depende sin decirlo. Funciona en la secuencia habitual y se rompe en cualquier otra.',
              'Entorno: servicios que tardan en levantar, versiones de navegador o driver que cambian, discos llenos, husos horarios, idiomas del sistema.',
              'Dependencias externas: servicios de terceros con cuota, latencia variable o disponibilidad irregular.',
              'Aleatoriedad y tiempo: datos generados al azar sin semilla fija, o lógica que depende de la fecha y falla el día uno de mes o en el cambio de hora.',
            ],
          },
          { type: 'tip', text: 'Si toda la suite falla a la vez, no busques flakiness: mira el entorno, el despliegue o los datos base. La inestabilidad se manifiesta en pruebas concretas, no en bloque.' },
        ],
      },
      {
        heading: 'El diagnóstico, paso a paso',
        content: [
          {
            type: 'ol',
            items: [
              'Mide la tasa de inestabilidad por prueba: qué porcentaje de ejecuciones falla sobre el mismo commit. Sin ese dato no puedes priorizar.',
              'Ejecuta la prueba sospechosa veinte veces en aislamiento. Si nunca falla, el problema es de interacción con otras pruebas: datos u orden.',
              'Ejecútala en paralelo con el resto. Si falla ahí, ya tienes localizada la colisión.',
              'Revisa cada espera del test. Cualquier pausa fija es sospechosa por definición.',
              'Comprueba las evidencias del fallo: captura, log y petición. Si no las tienes, ese es el primer arreglo, porque sin ellas cada diagnóstico empieza de cero.',
            ],
          },
        ],
      },
      {
        heading: 'Arreglos que funcionan',
        content: [
          {
            type: 'table',
            headers: ['Causa', 'Arreglo correcto', 'Parche que la esconde'],
            rows: [
              ['Sincronización', 'Espera explícita por condición observable', 'Aumentar el sleep'],
              ['Datos compartidos', 'Datos propios por ejecución, creados y limpiados por el test', 'Ejecutar en serie para que no colisionen'],
              ['Dependencia del orden', 'Setup y teardown completos en cada prueba', 'Fijar el orden de ejecución'],
              ['Entorno', 'Entorno reproducible con versiones fijadas y comprobación de arranque', 'Reejecutar hasta que salga verde'],
              ['Servicio externo', 'Doble de prueba o virtualización, con contrato verificado aparte', 'Reintentos indefinidos'],
            ],
          },
          { type: 'p', text: 'Los reintentos automáticos merecen un párrafo propio. Son útiles como medida temporal y trazada: reintento contado, marcado en el informe y con fecha de revisión. Convertidos en política permanente son un mecanismo para ocultar defectos reales del producto, incluidos los de concurrencia, que son precisamente los que más caros salen en producción.' },
        ],
      },
      {
        heading: 'La cuarentena bien hecha',
        content: [
          { type: 'p', text: 'Cuando una prueba inestable bloquea la pipeline y no hay tiempo de arreglarla en el momento, la respuesta correcta es la cuarentena: se saca del conjunto que corta la entrega, pero se sigue ejecutando y midiendo, se le asigna un responsable y se le pone una fecha límite. Sin esas tres condiciones, la cuarentena es un cajón donde las pruebas van a morir.' },
          { type: 'p', text: 'Y conviene vigilar el tamaño de ese cajón como una métrica más: si crece mes a mes, el problema no son las pruebas, es que la solución de automatización se está degradando más rápido de lo que se mantiene.' },
        ],
      },
    ],
  },

  {
    id: 'automatizacion-en-ci-cd',
    emoji: '',
    title: 'Cómo integrar pruebas automatizadas en CI/CD sin frenar al equipo',
    description:
      'Cómo repartir las pruebas por etapas, qué debe cortar una entrega y qué no, y cómo mantener el primer feedback en minutos cuando la suite crece.',
    date: '2026-09-02',
    readTime: '8 min',
    tag: 'Automatización',
    sections: [
      {
        heading: 'La regla que ordena todo lo demás',
        content: [
          { type: 'p', text: 'En una pipeline, las pruebas se ordenan por coste y velocidad: lo barato y rápido primero, lo caro y lento después. No es una preferencia, es aritmética. Si una build va a fallar, quieres que falle en los primeros noventa segundos y no después de cuarenta minutos de pruebas de interfaz.' },
          {
            type: 'table',
            headers: ['Etapa', 'Qué se ejecuta', 'Objetivo de tiempo', '¿Corta la entrega?'],
            rows: [
              ['Commit', 'Análisis estático, unitarias, de componente', 'Menos de 5 minutos', 'Sí'],
              ['Integración', 'API, contratos, integración con dobles de prueba', '5 a 15 minutos', 'Sí'],
              ['Sistema', 'Flujos críticos de extremo a extremo en entorno desplegado', '15 a 30 minutos', 'Sí, para los flujos críticos'],
              ['Nocturna', 'Suite completa, rendimiento, compatibilidad, accesibilidad', 'Horas', 'No, pero genera trabajo priorizado'],
            ],
          },
        ],
      },
      {
        heading: 'Qué debe cortar la entrega',
        content: [
          { type: 'p', text: 'Un criterio de calidad que corta la entrega solo tiene sentido si el equipo se lo cree. Si la pipeline se pone roja por motivos que nadie considera graves, la gente aprende a saltárselo y el mecanismo pierde su función.' },
          {
            type: 'ul',
            items: [
              'Cortan: fallos de compilación, pruebas unitarias y de API en rojo, contratos incumplidos, vulnerabilidades críticas de dependencias, flujos críticos de negocio caídos.',
              'No cortan, pero se registran y se priorizan: pruebas en cuarentena, avisos de estilo, degradaciones leves de rendimiento, fallos de compatibilidad en navegadores minoritarios.',
              'Nunca deberían cortar: pruebas conocidas como inestables. Si una prueba no es fiable, o se arregla o se saca del camino crítico; dejarla ahí es entrenar al equipo para ignorar el rojo.',
            ],
          },
        ],
      },
      {
        heading: 'Cuando la primera etapa se pasa de tiempo',
        content: [
          { type: 'p', text: 'El primer reflejo suele ser añadir máquinas y paralelizar. Ayuda, pero tiene techo y cuesta dinero. Lo que de verdad devuelve el feedback a minutos es reducir lo que se ejecuta en esa etapa.' },
          {
            type: 'ol',
            items: [
              'Paraleliza y reparte por lotes equilibrados, no por orden alfabético de fichero.',
              'Selecciona por impacto: ejecuta primero las pruebas relacionadas con los ficheros que ha tocado el commit y deja el resto para la etapa siguiente.',
              'Reutiliza sesiones y estado: iniciar sesión por interfaz en cada prueba es tiempo regalado; hazlo por API una vez.',
              'Cachea dependencias y artefactos de build con claves estables.',
              'Mueve al nivel inferior las comprobaciones que no necesitan la interfaz. Suele ser el mayor ahorro y el más duradero.',
            ],
          },
          { type: 'tip', text: 'Vigila el tiempo hasta el primer resultado como una métrica de producto. Si supera los diez minutos, los desarrolladores dejan de esperarlo y la pipeline se convierte en un trámite posterior.' },
        ],
      },
      {
        heading: 'Entornos, datos y configuración',
        content: [
          { type: 'p', text: 'Una pipeline fiable necesita entornos reproducibles: infraestructura declarada como código, versiones fijadas de navegadores y drivers, y una comprobación de arranque que verifique que el sistema está en pie y con datos base antes de ejecutar una sola prueba. Ese smoke de infraestructura ahorra horas de diagnóstico, porque distingue "el entorno no estaba listo" de "el producto tiene un defecto".' },
          { type: 'p', text: 'La configuración va fuera del código, por entorno, y los secretos en un gestor de secretos: nunca en el repositorio, donde quedan en el historial para siempre. Y el testware se versiona con trazabilidad hacia la versión del sistema que prueba, para poder reproducir mañana una ejecución de hoy.' },
        ],
      },
      {
        heading: 'Informes que alguien lee',
        content: [
          { type: 'p', text: 'Cada ejecución debe publicar automáticamente su resultado donde el equipo ya trabaja, con las evidencias enganchadas: log, captura, petición y respuesta. Y con tendencia, no solo la foto de la última ejecución: la duración y la tasa de fallos falsos a lo largo de las semanas son las dos señales que avisan de que la suite se está degradando antes de que sea grave.' },
        ],
      },
    ],
  },

  {
    id: 'metricas-automatizacion-pruebas',
    emoji: '',
    title: 'Métricas de automatización que sí dicen algo (y las que solo hacen ruido)',
    description:
      'Qué medir para saber si tu automatización aporta valor, qué indicadores engañan a la dirección y cómo montar un informe distinto para cada audiencia.',
    date: '2026-08-30',
    readTime: '7 min',
    tag: 'Automatización',
    sections: [
      {
        heading: 'La métrica que todo el mundo pide y casi nadie debería usar',
        content: [
          { type: 'p', text: 'El "porcentaje de casos de prueba automatizados" es el indicador favorito de los comités y uno de los peores que existen. Sube automatizando lo fácil, no dice nada sobre el riesgo cubierto y premia exactamente el comportamiento que hace insostenible una suite: añadir pruebas sin criterio.' },
          { type: 'p', text: 'Ocurre lo mismo con el número de scripts o de ejecuciones: miden actividad, no resultado. Y como toda métrica que se convierte en objetivo, acaban optimizándose a costa de lo que de verdad importaba.' },
        ],
      },
      {
        heading: 'Qué medir, según lo que quieras saber',
        content: [
          {
            type: 'table',
            headers: ['Pregunta', 'Métrica útil'],
            rows: [
              ['¿La suite es fiable?', 'Tasa de fallos falsos y tasa de inestabilidad por prueba'],
              ['¿Cuánto cuesta mantenerla?', 'Tiempo medio de reparación de un test roto y horas dedicadas a mantenimiento por sprint'],
              ['¿Da feedback a tiempo?', 'Tiempo hasta el primer resultado y duración por etapa'],
              ['¿Detecta algo?', 'Defectos encontrados por la suite y defectos escapados a producción'],
              ['¿Cubre lo importante?', 'Riesgos de producto cubiertos por pruebas automatizadas'],
              ['¿Merece la pena?', 'Coste de creación y mantenimiento frente a ejecuciones ahorradas'],
            ],
          },
          { type: 'tip', text: 'Dos métricas bien elegidas y vigiladas en el tiempo valen más que un cuadro de mando con veinte cifras que nadie interpreta.' },
        ],
      },
      {
        heading: 'La tendencia importa más que el valor absoluto',
        content: [
          { type: 'p', text: 'Un 8% de fallos falsos no es bueno ni malo por sí solo: lo relevante es si hace dos meses era del 2%. Una duración de 50 minutos tampoco dice mucho hasta que ves que crece un 10% cada semana. Las dos señales juntas —tiempo que sube y fiabilidad que baja— describen una solución que se está degradando, y avisan mucho antes de que el equipo empiece a desactivar pruebas.' },
          { type: 'p', text: 'Por eso el informe útil es el que muestra series temporales y no la foto de la última ejecución, y por eso conviene guardar de cada ejecución su versión del sistema, su entorno, sus datos y sus evidencias: sin ese contexto, la serie no se puede interpretar.' },
        ],
      },
      {
        heading: 'Un informe por audiencia',
        content: [
          {
            type: 'ul',
            items: [
              'Para el equipo: detalle por prueba, evidencias del fallo, agrupación por causa y qué está en cuarentena. Publicado automáticamente tras cada ejecución.',
              'Para la gestión del proyecto: estado de los flujos críticos, riesgo abierto, tendencia de duración y qué bloquea la entrega. Sin trazas de excepción.',
              'Para la dirección: dos o tres cifras con su tendencia y una conclusión explícita sobre si se puede publicar y con qué riesgo.',
            ],
          },
          { type: 'p', text: 'Y una regla de honestidad que ahorra disgustos: si hay pruebas excluidas o en cuarentena, el informe lo dice. Un verde que oculta veinte pruebas desactivadas es peor que un rojo, porque genera decisiones basadas en información falsa.' },
        ],
      },
      {
        heading: 'Análisis de fallos: agrupar antes de investigar',
        content: [
          { type: 'p', text: 'Cuando una ejecución nocturna deja ciento veinte pruebas en rojo, el impulso es abrir un informe de defecto por cada una. Casi siempre es un error: lo eficaz es agrupar por causa aparente y comprobar primero si comparten una sola —un despliegue a medias, un servicio caído, los datos base borrados—. En suites grandes, esa agrupación elimina la mayor parte del trabajo de análisis.' },
          { type: 'p', text: 'Es también donde las técnicas de aprendizaje automático empiezan a resultar útiles de verdad: agrupar fallos similares, detectar anomalías en los logs y priorizar qué ejecutar primero. El syllabus del CTAL-TAE v2.0 lo recoge de forma explícita, con el matiz importante de que la herramienta sugiere y la decisión sigue siendo del ingeniero.' },
        ],
      },
    ],
  },
];

export default AUTOMATION_ARTICLES;
