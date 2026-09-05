// articles_data.js — Contenido editorial sobre ISTQB CTFL v4.0 para ISTQBeasy
// Cada articulo tiene secciones con bloques de contenido tipado (p, ul, ol, tip, table)

export const ARTICLES = [
  {
    id: 'que-es-istqb-ctfl',
    emoji: '📋',
    title: '¿Qué es el ISTQB CTFL v4.0? Guía completa',
    description: 'Todo lo que necesitas saber sobre la certificación de testing más reconocida del mundo, actualizada en 2023.',
    date: '2024-09-01',
    readTime: '6 min',
    sections: [
      {
        heading: 'La certificación ISTQB en pocas palabras',
        content: [
          { type: 'p', text: 'El ISTQB (International Software Testing Qualifications Board) es el organismo internacional que define los estándares de certificación en testing de software. Con más de un millón de profesionales certificados en más de 120 países, sus certificaciones son las más reconocidas y valoradas en la industria del software.' },
          { type: 'p', text: 'El CTFL (Certified Tester Foundation Level) es el nivel base de la pirámide de certificaciones ISTQB. Es el punto de entrada para cualquier profesional del testing y sirve como base para certificaciones más avanzadas como CTAL (Advanced Level) o especializaciones como CT-AE (Automation Engineer) o CT-AI (AI Testing).' },
        ]
      },
      {
        heading: '¿Por qué obtener la certificación CTFL?',
        content: [
          { type: 'p', text: 'Más allá del valor curricular, la certificación CTFL aporta beneficios concretos en el día a día profesional:' },
          { type: 'ul', items: [
            'Un marco conceptual sólido y estandarizado sobre testing de software.',
            'Vocabulario común con el resto del equipo y la industria (basado en el glosario ISTQB).',
            'Mayor empleabilidad: muchas ofertas de QA la requieren o la valoran positivamente.',
            'Acceso a roles de mayor responsabilidad en equipos de calidad.',
            'Base para especializaciones: automatización, ágil, seguridad, rendimiento...',
            'Reconocimiento internacional válido en cualquier empresa del sector.'
          ]},
        ]
      },
      {
        heading: 'Qué cambió en la versión 4.0',
        content: [
          { type: 'p', text: 'La versión 4.0, publicada en 2023, supone la mayor actualización del syllabus CTFL en más de una década. Los cambios más relevantes respecto a la v3.1 son:' },
          { type: 'ul', items: [
            'Mayor énfasis en el testing en contextos ágiles y DevOps.',
            'Integración natural del testing en pipelines de CI/CD.',
            'Revisión completa del capítulo 4 de técnicas de diseño de pruebas.',
            'Nuevo enfoque en el análisis de riesgos como guía de las actividades de testing.',
            'Eliminación de contenidos obsoletos y adición de prácticas modernas.',
            'Restructuración del capítulo 6 sobre herramientas de testing.',
            'Nuevo capítulo 2 con mayor cobertura de modelos de desarrollo modernos.'
          ]},
          { type: 'p', text: 'Si ya tienes la certificación en la versión 3.1, no pierdes la validez — las certificaciones ISTQB no caducan. Sin embargo, el mercado laboral valora cada vez más la versión actualizada, y muchas organizaciones están migrando sus requisitos de contratación a la v4.0.' },
        ]
      },
      {
        heading: 'Formato del examen oficial',
        content: [
          { type: 'p', text: 'El examen CTFL v4.0 tiene el siguiente formato oficial:' },
          { type: 'table', headers: ['Parámetro', 'Valor'], rows: [
            ['Número de preguntas', '40 preguntas de opción múltiple'],
            ['Tiempo disponible', '65 minutos (~97 segundos por pregunta)'],
            ['Puntuación mínima', '65% — 26 respuestas correctas'],
            ['Penalización por error', 'Ninguna'],
            ['Formato de respuesta', '4 opciones, 1 correcta'],
            ['Idiomas disponibles', 'Español, inglés, francés, alemán y otros'],
          ]},
          { type: 'tip', text: 'Consejo clave: dado que no hay penalización por respuesta incorrecta, nunca dejes una pregunta en blanco. Si no sabes la respuesta, elimina las opciones claramente incorrectas y elige entre las restantes.' },
        ]
      },
      {
        heading: '¿Cuánto cuesta certificarse?',
        content: [
          { type: 'p', text: 'El precio del examen varía según el país y el proveedor oficial (EXIN, PearsonVUE u otros proveedores locales homologados por ISTQB). En España, el coste del examen ronda los 200-250 €. En Latinoamérica varía entre 80 y 180 USD dependiendo del país y del proveedor.' },
          { type: 'p', text: 'Muchas empresas cubren el coste del examen e incluso del curso preparatorio si está relacionado con el puesto de trabajo. Vale la pena consultarlo con tu empresa o equipo de RR.HH. antes de pagar de tu bolsillo.' },
          { type: 'p', text: 'Para prepararte de forma gratuita, ISTQBeasy pone a tu disposición 394 preguntas reales organizadas por capítulo, estadísticas de progreso, modo examen oficial y tarjetas de repaso — todo sin coste.' },
        ]
      },
    ]
  },

  {
    id: 'capitulos-syllabus-ctfl',
    emoji: '📚',
    title: 'Los 6 capítulos del syllabus CTFL v4.0 explicados',
    description: 'Guía detallada de cada capítulo del temario oficial: contenido, conceptos clave y peso en el examen.',
    date: '2024-09-05',
    readTime: '8 min',
    sections: [
      {
        heading: 'Estructura del syllabus CTFL v4.0',
        content: [
          { type: 'p', text: 'El syllabus oficial del ISTQB CTFL v4.0 está dividido en 6 capítulos que cubren todos los fundamentos del testing de software moderno. Cada capítulo tiene un peso diferente en el examen, determinado por el número de preguntas asignadas.' },
          { type: 'table', headers: ['Capítulo', 'Nombre', 'Preguntas aprox.', 'Peso'], rows: [
            ['1', 'Fundamentos del testing', '8–10', '~22%'],
            ['2', 'Testing a lo largo del SDLC', '6–8', '~17%'],
            ['3', 'Testing estático', '4–5', '~11%'],
            ['4', 'Análisis y diseño de pruebas', '10–12', '~28%'],
            ['5', 'Gestión de las actividades de testing', '8–10', '~20%'],
            ['6', 'Herramientas de testing', '1–2', '~4%'],
          ]},
        ]
      },
      {
        heading: 'Capítulo 1 — Fundamentos del testing',
        content: [
          { type: 'p', text: 'El primer capítulo establece la base conceptual de todo el temario. Cubre el porqué del testing, qué es un error, un defecto y un fallo, y los principios fundamentales que guían las actividades de prueba.' },
          { type: 'ul', items: [
            'Conceptos clave: error, defecto (bug), fallo, causa raíz.',
            'Los 7 principios del testing (ej.: el testing exhaustivo es imposible, el testing depende del contexto...).',
            'Actividades del proceso de testing: planificación, análisis, diseño, implementación, ejecución y finalización.',
            'Psicología del testing: la independencia del tester y el sesgo de confirmación.',
            'Contribución del testing al éxito del proyecto.',
          ]},
          { type: 'tip', text: 'Memoriza los 7 principios del testing: aparecen frecuentemente en el examen con preguntas de reconocimiento.' },
        ]
      },
      {
        heading: 'Capítulo 2 — Testing a lo largo del ciclo de vida',
        content: [
          { type: 'p', text: 'El capítulo 2 conecta el testing con los diferentes modelos de desarrollo de software y explica cómo y cuándo encajan las actividades de prueba en cada fase del ciclo de vida.' },
          { type: 'ul', items: [
            'Modelos de desarrollo: secuencial (cascada, V), iterativo e incremental, ágil.',
            'Niveles de testing: componente, integración, sistema y aceptación.',
            'Tipos de prueba: funcional, no funcional, de caja blanca, relacionadas con el cambio (regresión, confirmación).',
            'Testing en contextos ágiles: shift-left, testing continuo, integración continua.',
            'Diferencias entre testing en desarrollo secuencial vs. ágil.',
          ]},
        ]
      },
      {
        heading: 'Capítulo 3 — Testing estático',
        content: [
          { type: 'p', text: 'El testing estático consiste en examinar productos de trabajo (código, documentos, requisitos) sin ejecutarlos. Es una técnica muy eficaz para encontrar defectos de forma temprana y económica.' },
          { type: 'ul', items: [
            'Diferencias entre testing estático y dinámico.',
            'Beneficios del testing estático: detección temprana, menor coste de corrección.',
            'Tipos de revisión: revisión informal, walkthrough, revisión técnica, inspección.',
            'Roles en una revisión formal: autor, moderador, revisores, escriba, líder de revisión.',
            'Análisis estático con herramientas: linters, analizadores de código, comprobadores de estilo.',
          ]},
        ]
      },
      {
        heading: 'Capítulo 4 — Análisis y diseño de pruebas',
        content: [
          { type: 'p', text: 'El capítulo más amplio y el que más preguntas genera en el examen. Cubre las técnicas sistemáticas para diseñar casos de prueba efectivos.' },
          { type: 'ul', items: [
            'Técnicas de caja negra: partición de equivalencia, análisis de valores límite, tabla de decisión, transición de estados.',
            'Técnicas de caja blanca: cobertura de sentencias, cobertura de ramas.',
            'Técnicas basadas en la experiencia: testing exploratorio, suposición de errores, testing basado en listas de comprobación.',
            'Análisis de requisitos para identificar condiciones de prueba.',
            'Criterios de cobertura y su relación con el riesgo.',
          ]},
          { type: 'tip', text: 'El análisis de valores límite (BVA) y la partición de equivalencia (EP) son las técnicas que más preguntas generan. Practica con ejemplos concretos hasta dominarlos.' },
        ]
      },
      {
        heading: 'Capítulo 5 — Gestión de las actividades de testing',
        content: [
          { type: 'p', text: 'Cubre todo lo relacionado con la planificación, organización y control de las actividades de prueba, incluyendo la gestión de defectos.' },
          { type: 'ul', items: [
            'El plan de pruebas y su contenido.',
            'Estimación del esfuerzo de testing: basada en métricas, experiencia y datos históricos.',
            'Análisis y gestión de riesgos: identificación, valoración y mitigación.',
            'Monitorización y control del progreso de las pruebas.',
            'Gestión de la configuración en el contexto del testing.',
            'Informes de progreso y de resumen de pruebas.',
            'Ciclo de vida de un defecto: informes, seguimiento y métricas.',
          ]},
        ]
      },
      {
        heading: 'Capítulo 6 — Herramientas de testing',
        content: [
          { type: 'p', text: 'El capítulo más corto del syllabus, con solo 1-2 preguntas en el examen. Proporciona una visión general de los tipos de herramientas de testing y los factores a considerar al introducirlas en una organización.' },
          { type: 'ul', items: [
            'Tipos de herramientas: gestión de pruebas, ejecución, análisis estático, rendimiento.',
            'Beneficios y riesgos de la automatización de pruebas.',
            'Criterios para seleccionar una herramienta de testing.',
            'Factores de éxito para la introducción de herramientas en la organización.',
          ]},
        ]
      },
    ]
  },

  {
    id: 'tecnicas-diseno-pruebas',
    emoji: '🎯',
    title: 'Técnicas de diseño de pruebas CTFL: guía completa',
    description: 'Caja negra, caja blanca y basadas en experiencia: todas las técnicas que entran en el examen con ejemplos.',
    date: '2024-09-10',
    readTime: '7 min',
    sections: [
      {
        heading: '¿Por qué importan las técnicas de diseño?',
        content: [
          { type: 'p', text: 'El capítulo 4 del syllabus CTFL es el más extenso y el que más preguntas genera en el examen (aproximadamente el 28% del total). Las técnicas de diseño de pruebas son herramientas sistemáticas que permiten identificar casos de prueba efectivos sin necesidad de probar todas las combinaciones posibles — algo inviable en cualquier sistema real.' },
          { type: 'p', text: 'Las técnicas se dividen en tres grandes grupos: técnicas de caja negra (basadas en la especificación), técnicas de caja blanca (basadas en la estructura del código) y técnicas basadas en la experiencia.' },
        ]
      },
      {
        heading: 'Técnicas de caja negra',
        content: [
          { type: 'p', text: 'Las técnicas de caja negra diseñan pruebas a partir del comportamiento esperado del sistema (especificación, requisitos, historias de usuario), sin conocer ni acceder al código interno.' },
        ]
      },
      {
        heading: 'Partición de equivalencia (EP)',
        content: [
          { type: 'p', text: 'Divide los datos de entrada y salida en particiones (clases) cuyos elementos se espera que sean procesados de la misma manera por el sistema. Si un valor representa correctamente a toda su clase, no es necesario probar todos los demás.' },
          { type: 'ul', items: [
            'Particiones válidas: valores que el sistema debería aceptar y procesar correctamente.',
            'Particiones inválidas: valores que el sistema debería rechazar.',
            'Criterio de cobertura: probar al menos un valor de cada partición.',
            'Reduce drásticamente el número de casos de prueba sin perder cobertura.',
          ]},
          { type: 'tip', text: 'Ejemplo: para un campo de edad entre 18 y 65 años, las particiones serían: <18 (inválida), 18-65 (válida), >65 (inválida). Solo necesitas probar un valor de cada partición.' },
        ]
      },
      {
        heading: 'Análisis de valores límite (BVA)',
        content: [
          { type: 'p', text: 'Complementa la partición de equivalencia centrándose en los valores frontera entre particiones, donde estadísticamente ocurren más defectos. Existen dos versiones: BVA de 2 valores (límite y el valor justo dentro de la partición adyacente) y BVA de 3 valores.' },
          { type: 'ul', items: [
            'BVA de 2 valores: para cada límite, probar el valor límite y el valor justo al otro lado.',
            'BVA de 3 valores: probar el valor anterior, el límite y el valor siguiente.',
            'Especialmente útil para rangos numéricos y condiciones de contorno.',
          ]},
          { type: 'tip', text: 'Ejemplo con BVA-2: rango 18-65. Límites a probar: 17, 18 (límite inferior) y 65, 66 (límite superior). Son 4 casos de prueba que cubren los puntos críticos.' },
        ]
      },
      {
        heading: 'Tabla de decisión',
        content: [
          { type: 'p', text: 'Ideal para sistemas con lógica de negocio compleja donde el comportamiento depende de múltiples condiciones combinadas. La tabla enumera todas las combinaciones posibles de condiciones y el resultado esperado para cada una.' },
          { type: 'ul', items: [
            'Columnas: una por cada combinación de condiciones.',
            'Filas superiores: condiciones (verdadero/falso) o valores de entrada.',
            'Filas inferiores: acciones o resultados esperados.',
            'Garantiza que no se pasa por alto ninguna combinación relevante.',
          ]},
        ]
      },
      {
        heading: 'Transición de estados',
        content: [
          { type: 'p', text: 'Útil para sistemas que tienen comportamiento diferente según su estado actual. Modela el sistema como un conjunto de estados, transiciones (eventos que cambian el estado) y acciones.' },
          { type: 'ul', items: [
            'Cobertura de todos los estados: asegurar que se visita cada estado al menos una vez.',
            'Cobertura de todas las transiciones válidas.',
            'Cobertura de transiciones inválidas (probar que el sistema rechaza transiciones no permitidas).',
          ]},
        ]
      },
      {
        heading: 'Técnicas de caja blanca',
        content: [
          { type: 'p', text: 'Las técnicas de caja blanca diseñan pruebas basándose en la estructura interna del código. Requieren acceso y comprensión del código fuente.' },
          { type: 'ul', items: [
            'Cobertura de sentencias: ejecutar cada sentencia del código al menos una vez. Criterio mínimo.',
            'Cobertura de ramas: ejecutar cada rama de cada decisión al menos una vez (más fuerte que la cobertura de sentencias).',
            'La cobertura de ramas al 100% implica cobertura de sentencias al 100%, pero no al revés.',
          ]},
        ]
      },
      {
        heading: 'Técnicas basadas en la experiencia',
        content: [
          { type: 'p', text: 'Complementan las técnicas formales con el conocimiento, intuición y experiencia del tester.' },
          { type: 'ul', items: [
            'Suposición de errores (Error Guessing): identificar defectos probables basándose en la experiencia con sistemas similares.',
            'Testing exploratorio: diseñar y ejecutar pruebas simultáneamente, guiados por el aprendizaje continuo del sistema.',
            'Testing basado en listas de comprobación: usar checklists estandarizados para asegurar cobertura consistente.',
          ]},
        ]
      },
    ]
  },

  {
    id: 'como-aprobar-istqb-primera',
    emoji: '🏆',
    title: '10 consejos para aprobar el ISTQB CTFL a la primera',
    description: 'Estrategias probadas, plan de estudio y errores que debes evitar para superar el examen con garantías.',
    date: '2024-09-15',
    readTime: '5 min',
    sections: [
      {
        heading: 'Por qué el CTFL no es tan fácil como parece',
        content: [
          { type: 'p', text: 'El examen ISTQB CTFL tiene una tasa de reprobación significativa, especialmente entre candidatos que lo subestiman o que estudian de forma superficial. El vocabulario técnico específico del ISTQB, las preguntas con opciones muy similares y el tiempo ajustado (97 segundos por pregunta) son los factores que más candidatos por sorpresa.' },
          { type: 'p', text: 'La buena noticia: con una preparación estructurada de 3-4 semanas y práctica con preguntas reales, el examen es perfectamente superable. Aquí van los 10 consejos más útiles.' },
        ]
      },
      {
        heading: 'Los 10 consejos clave',
        content: [
          { type: 'ol', items: [
            'Lee el syllabus oficial, no solo resúmenes. El syllabus v4.0 tiene ~90 páginas y es la fuente de verdad del examen. Los resúmenes de terceros pueden omitir matices importantes que sí aparecen en las preguntas.',
            'Aprende el vocabulario ISTQB. El glosario oficial ISTQB tiene términos con significados muy específicos que difieren del uso coloquial. Confundir "error", "defecto" y "fallo" cuesta puntos fáciles.',
            'Practica con preguntas reales. La práctica con preguntas del estilo oficial (no solo teoría) es fundamental. El banco de ISTQBeasy tiene 394 preguntas reales organizadas por capítulo.',
            'Domina el capítulo 4. Las técnicas de diseño de pruebas representan el ~28% del examen. Dedica el doble de tiempo a este capítulo.',
            'No descuides los capítulos 1 y 5. Los fundamentos y la gestión de actividades son el otro gran bloque. Juntos suman casi el 42% del examen.',
            'Practica en modo examen con temporizador. Acostúmbrate al ritmo real de 97 segundos por pregunta. Bajo presión de tiempo, la mente funciona diferente.',
            'Aprende a eliminar opciones. Muchas preguntas tienen 2 opciones claramente incorrectas. Elimínalas primero y elige entre las 2 restantes con más tranquilidad.',
            'Estudia los errores que cometes. Cada pregunta fallada es más valiosa que 10 que aciertas. Entiende por qué fallaste, no solo cuál era la respuesta correcta.',
            'No memoriznes, comprende. El ISTQB no busca recitación mecánica — busca comprensión de conceptos. Las preguntas están diseñadas para detectar quién entiende vs. quién memorizó.',
            'Duerme bien la noche anterior. Suena obvio, pero la fatiga cognitiva impacta directamente en la capacidad de leer preguntas largas con precisión.',
          ]},
        ]
      },
      {
        heading: 'Plan de estudio recomendado (4 semanas)',
        content: [
          { type: 'table', headers: ['Semana', 'Objetivo', 'Recursos'], rows: [
            ['1', 'Cap. 1 y 2: Fundamentos y ciclo de vida', 'Syllabus oficial + 40 preguntas de práctica'],
            ['2', 'Cap. 4: Técnicas de diseño (dividida en 2)', 'Syllabus + ejemplos resueltos + 60 preguntas'],
            ['3', 'Cap. 3, 5 y 6: Estático, gestión y herramientas', 'Syllabus + 50 preguntas por capítulo'],
            ['4', 'Repaso general + simulacros completos', '3+ simulacros de 40 preguntas en tiempo real'],
          ]},
        ]
      },
      {
        heading: 'Errores más comunes que cuestan el aprobado',
        content: [
          { type: 'ul', items: [
            'Confundir terminología: "verificación" vs. "validación", "error" vs. "defecto" vs. "fallo".',
            'Desconocer los 7 principios del testing (aparecen en múltiples preguntas).',
            'No practicar con temporizador y quedarse sin tiempo en el examen real.',
            'Estudiar solo los capítulos que gustan (típicamente cap. 4) y descuidar el resto.',
            'Asumir que el sentido común es suficiente — el ISTQB tiene su propio vocabulario.',
          ]},
        ]
      },
    ]
  },

  {
    id: 'testing-estatico-revisiones',
    emoji: '🔍',
    title: 'Testing estático: revisiones, inspecciones y análisis de código',
    description: 'El capítulo 3 del syllabus CTFL explicado con detalle: tipos de revisión, roles y beneficios del testing sin ejecución.',
    date: '2024-09-20',
    readTime: '5 min',
    sections: [
      {
        heading: 'Qué es el testing estático',
        content: [
          { type: 'p', text: 'El testing estático es el conjunto de actividades de testing que se realizan sin ejecutar el software. En lugar de correr el código, se examinan los productos de trabajo (documentos de requisitos, casos de uso, código fuente, diseños, planes de prueba) buscando defectos, inconsistencias y áreas de mejora.' },
          { type: 'p', text: 'Contrasta con el testing dinámico, que requiere ejecutar el software con datos de prueba. Ambos tipos son complementarios y el syllabus CTFL v4.0 los considera igualmente importantes.' },
        ]
      },
      {
        heading: 'Beneficios del testing estático',
        content: [
          { type: 'p', text: 'El testing estático tiene una relación coste-beneficio excelente, especialmente en las fases tempranas del proyecto:' },
          { type: 'ul', items: [
            'Detección temprana: los defectos encontrados en requisitos cuestan hasta 100 veces menos que los encontrados en producción.',
            'Sin necesidad de entorno de prueba: se puede aplicar desde el primer día del proyecto.',
            'Mejora de la calidad de la documentación y la comunicación del equipo.',
            'Transferencia de conocimiento: las revisiones facilitan que el equipo comprenda el sistema.',
            'Cumplimiento regulatorio: en muchos sectores (aeronáutico, médico, financiero) las revisiones formales son obligatorias.',
          ]},
        ]
      },
      {
        heading: 'Tipos de revisión',
        content: [
          { type: 'p', text: 'El syllabus CTFL v4.0 define cuatro tipos de revisión, ordenados de menor a mayor formalidad:' },
          { type: 'table', headers: ['Tipo', 'Formalidad', 'Uso típico'], rows: [
            ['Revisión informal', 'Baja', 'Feedback rápido entre compañeros, sin proceso definido'],
            ['Walkthrough', 'Media-baja', 'El autor guía a los revisores por el producto, detectar defectos y mejorar la comprensión'],
            ['Revisión técnica', 'Media', 'Revisores técnicos evalúan la conformidad con especificaciones y estándares'],
            ['Inspección', 'Alta', 'Proceso formal con roles definidos, métricas y seguimiento de defectos'],
          ]},
        ]
      },
      {
        heading: 'Roles en una inspección formal',
        content: [
          { type: 'p', text: 'La inspección es el tipo de revisión más formal y estructurado. Define roles específicos para cada participante:' },
          { type: 'ul', items: [
            'Autor: el creador del producto de trabajo que se está inspeccionando. Aclara dudas pero no defiende su trabajo.',
            'Moderador (líder de inspección): gestiona el proceso, asegura que se sigue el procedimiento y facilita la reunión.',
            'Revisores: examinan el producto buscando defectos, aplican sus perspectivas y conocimientos específicos.',
            'Escriba (registrador): documenta los defectos y decisiones tomadas durante la reunión.',
            'Líder de revisión: planifica la revisión, selecciona a los revisores y asegura los recursos necesarios.',
          ]},
          { type: 'tip', text: 'En el examen, presta atención a las diferencias entre el "moderador" y el "líder de revisión" — son roles distintos en una inspección formal.' },
        ]
      },
      {
        heading: 'Análisis estático con herramientas',
        content: [
          { type: 'p', text: 'El análisis estático automatizado complementa las revisiones manuales, examinando el código fuente sin ejecutarlo mediante herramientas especializadas:' },
          { type: 'ul', items: [
            'Linters y analizadores de código: detectan errores de sintaxis, código muerto, variables no inicializadas.',
            'Comprobadores de estilo: aseguran que el código cumple los estándares de codificación del equipo.',
            'Analizadores de complejidad: detectan código demasiado complejo que es propenso a defectos.',
            'Herramientas de seguridad (SAST): identifican vulnerabilidades de seguridad potenciales en el código.',
            'Integración en CI/CD: el análisis estático se puede ejecutar automáticamente en cada commit.',
          ]},
        ]
      },
    ]
  },
];
