const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

// Translation map for common English patterns
function translateText(text) {
  if (!text) return text;
  
  return text
    // Question starters
    .replace(/Which of the following is (MOST likely to be |LEAST likely to be |MOST likely |LEAST likely )?an? advantage of/gi, '¿Cuál de las siguientes es una ventaja de')
    .replace(/Which of the following is (MOST likely to be |LEAST likely to be |MOST likely |LEAST likely )?a benefit of/gi, '¿Cuál de las siguientes es un beneficio de')
    .replace(/Which of the following (BEST )?describes?/gi, '¿Cuál de las siguientes describe mejor')
    .replace(/Which of the following is (MOST likely to be |LEAST likely |MOST likely )?(the |a |an )?BEST /gi, '¿Cuál de las siguientes es la mejor ')
    .replace(/Which of the following is (MOST likely to be |LEAST likely |MOST likely )?CORRECT\?/gi, '¿Cuál de las siguientes es CORRECTA?')
    .replace(/Which of the following statements? is (MOST likely to be )?CORRECT\?/gi, '¿Cuál de las siguientes afirmaciones es CORRECTA?')
    .replace(/Which of the following statements? (BEST )?describes?/gi, '¿Cuál de las siguientes afirmaciones describe mejor')
    .replace(/Which of the following is (MOST likely to be |LEAST likely to be |MOST likely |LEAST likely )?/gi, '¿Cuál de las siguientes es ')
    .replace(/Which of the following (TWO )?statements? /gi, '¿Cuál de las siguientes afirmaciones ')
    .replace(/Which of the following test /gi, '¿Cuál de las siguientes pruebas ')
    .replace(/Which of the following /gi, '¿Cuál de las siguientes ')
    .replace(/What (is|are) the (MAIN |BEST )?/gi, '¿Cuál es $2')
    .replace(/What does /gi, '¿Qué ')
    .replace(/How (can|many|much) /gi, '¿Cómo ')
    // Levels/types in options
    .replace(/\bComponent testing\b/g, 'Pruebas de componente')
    .replace(/\bComponent integration testing\b/g, 'Pruebas de integración de componentes')
    .replace(/\bSystem integration testing\b/g, 'Pruebas de integración de sistemas')
    .replace(/\bSystem testing\b/g, 'Pruebas de sistema')
    .replace(/\bAcceptance testing\b/g, 'Pruebas de aceptación')
    .replace(/\bRegression testing\b/g, 'Pruebas de regresión')
    .replace(/\bConfirmation testing\b/g, 'Pruebas de confirmación')
    .replace(/\bStatic testing\b/g, 'Pruebas estáticas')
    .replace(/\bDynamic testing\b/g, 'Pruebas dinámicas')
    .replace(/\bExploratory testing\b/g, 'Pruebas exploratorias')
    .replace(/\bFunctional testing\b/g, 'Pruebas funcionales')
    .replace(/\bNon-functional testing\b/g, 'Pruebas no funcionales')
    .replace(/\bPerformance testing\b/g, 'Pruebas de rendimiento')
    .replace(/\bSecurity testing\b/g, 'Pruebas de seguridad')
    .replace(/\bUsability testing\b/g, 'Pruebas de usabilidad')
    .replace(/\bUser acceptance testing\b/g, 'Pruebas de aceptación de usuario')
    .replace(/\bBeta testing\b/g, 'Pruebas beta')
    // Review types
    .replace(/\bTechnical review\b/g, 'Revisión técnica')
    .replace(/\bInformal review\b/g, 'Revisión informal')
    .replace(/\bInspection\b/g, 'Inspección')
    .replace(/\bWalkthrough\b/g, 'Walkthrough')
    // Common terms
    .replace(/\btest case(s)?\b/gi, 'caso(s) de prueba')
    .replace(/\btest plan\b/gi, 'plan de pruebas')
    .replace(/\btest object\b/gi, 'objeto de prueba')
    .replace(/\bwork product(s)?\b/gi, 'producto(s) de trabajo')
    .replace(/\bstatement coverage\b/gi, 'cobertura de sentencias')
    .replace(/\bbranch coverage\b/gi, 'cobertura de ramas')
    .replace(/\bboundary value analysis\b/gi, 'análisis de valores límite')
    .replace(/\bequivalence partition(ing)?\b/gi, 'partición de equivalencia')
    .replace(/\bdecision table\b/gi, 'tabla de decisión')
    .replace(/\bstate transition\b/gi, 'transición de estados')
    .replace(/\btest manager\b/gi, 'jefe de pruebas')
    .replace(/\btester(s)?\b/gi, 'tester(s)')
    .replace(/\bdeveloper(s)?\b/gi, 'desarrollador(es)')
    .replace(/\bdefect(s)?\b/gi, 'defecto(s)')
    .replace(/\bfailure(s)?\b/gi, 'fallo(s)')
    .replace(/\berror(s)?\b/gi, 'error(es)')
    .replace(/\btest automation\b/gi, 'automatización de pruebas')
    .replace(/\bautomation\b/gi, 'automatización')
    .replace(/\bregression test(s|ing)?\b/gi, 'prueba(s) de regresión')
    .replace(/\bconfiguration management\b/gi, 'gestión de la configuración')
    .replace(/\bshift-left\b/gi, 'shift-left (mover a la izquierda)')
    .replace(/\bretrospective(s)?\b/gi, 'retrospectiva(s)')
    .replace(/\bbacklog\b/gi, 'backlog')
    .replace(/\bsoftware development lifecycle\b/gi, 'ciclo de vida del desarrollo de software')
    .replace(/\bSDLC\b/g, 'SDLC')
    // Options fixes
    .replace(/\bOnly confirmation testing\b/g, 'Solo pruebas de confirmación')
    .replace(/\bOnly regression testing\b/g, 'Solo pruebas de regresión')
    .replace(/\bConfirmation testing then regression testing\b/g, 'Pruebas de confirmación y después pruebas de regresión')
    .replace(/\bRegression testing then confirmation testing\b/g, 'Pruebas de regresión y después pruebas de confirmación')
    .replace(/\bTest design\b/g, 'Diseño de pruebas')
    .replace(/\bTest analysis\b/g, 'Análisis de pruebas')
    .replace(/\bTest implementation\b/g, 'Implementación de pruebas')
    .replace(/\bTest execution\b/g, 'Ejecución de pruebas')
    .replace(/\bTest monitoring\b/g, 'Monitorización de pruebas')
    .replace(/\bTest completion\b/g, 'Finalización de pruebas')
    .replace(/\bTest planning\b/g, 'Planificación de pruebas')
    // Clean up extra spaces from original typos
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// Manual translations for the 172 English questions
const manualTranslations = {
  296: {
    question: "¿Cuál de las siguientes es una ventaja del enfoque de equipo completo (whole-team approach)?",
    options: [
      "A) Permite a los miembros del equipo asumir cualquier rol en cualquier momento",
      "B) Solo necesita un único equipo para dar soporte al proyecto de desarrollo completo",
      "C) Integra a los representantes de negocio junto con los desarrolladores en el mismo equipo",
      "D) Genera una sinergia de equipo que beneficia a todo el proyecto"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#8, LO: FL-1.5.2). Justificación: El enfoque de equipo completo genera una sinergia que beneficia a todo el proyecto."
  },
  297: {
    question: "¿Cuál de las siguientes afirmaciones sobre el ciclo de vida de desarrollo de software elegido es CORRECTA?",
    options: [
      "A) Si se usa desarrollo de software ágil, la automatización de las pruebas de sistema sustituye la necesidad de pruebas de regresión",
      "B) Si se usa un modelo de desarrollo secuencial, las pruebas dinámicas suelen estar restringidas a etapas más tardías del ciclo de vida",
      "C) Si se usa un modelo de desarrollo iterativo, las pruebas de componente suelen realizarlas manualmente los desarrolladores",
      "D) Si se usa un modelo de desarrollo incremental, las pruebas estáticas se realizan en los primeros incrementos y las dinámicas en los últimos"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#9, LO: FL-2.1.1). Justificación: En un modelo de desarrollo secuencial, las pruebas dinámicas suelen restringirse a las fases finales del ciclo de vida."
  },
  298: {
    question: "¿Cuál de las siguientes es una buena práctica de pruebas aplicable a todos los ciclos de vida de desarrollo de software?",
    options: [
      "A) Los testers deben revisar los productos de trabajo como parte de la siguiente fase de desarrollo",
      "B) Los testers deben revisar los productos de trabajo en cuanto estén disponibles los borradores",
      "C) Los testers deben revisar los productos de trabajo antes de que comiencen el análisis y el diseño de pruebas",
      "D) Los testers deben revisar los productos de trabajo inmediatamente después de que se publiquen"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#10, LO: FL-2.1.2). Justificación: Los testers deben revisar los productos de trabajo en cuanto estén disponibles los borradores."
  },
  299: {
    question: "¿Cuál de las siguientes es un ejemplo de enfoque de desarrollo prueba-primero (test-first)?",
    options: [
      "A) Desarrollo Guiado por Pruebas (TDD)",
      "B) Desarrollo Guiado por Cobertura",
      "C) Desarrollo Guiado por Calidad",
      "D) Desarrollo Guiado por Funcionalidades"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#11, LO: FL-2.1.3). Justificación: El Desarrollo Guiado por Pruebas (TDD) es el ejemplo clásico de enfoque prueba-primero."
  },
  300: {
    question: "¿Cuál de las siguientes actividades se realiza MÁS PROBABLEMENTE como parte de las pruebas de sistema?",
    options: [
      "A) Pruebas de seguridad de un sistema de gestión de créditos realizado por un equipo de pruebas independiente",
      "B) Pruebas de la interfaz de un sistema de cambio de divisas con un sistema bancario externo",
      "C) Pruebas beta de un sistema de aprendizaje remoto realizadas por los desarrolladores del software",
      "D) Pruebas de las interacciones entre la interfaz de usuario y la base de datos de un sistema de recursos humanos"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#13, LO: FL-2.2.1). Justificación: Las pruebas de seguridad realizadas por un equipo independiente son características de las pruebas de sistema."
  },
  301: {
    question: "¿Cuál de las siguientes afirmaciones es CORRECTA?",
    options: [
      "A) Las pruebas de regresión aumentan en número a medida que avanza el proyecto, mientras que las pruebas de confirmación disminuyen",
      "B) Las pruebas de regresión se crean y ejecutan cuando el objeto de prueba se corrige, mientras que las de confirmación se ejecutan cuando el objeto de prueba se mejora",
      "C) Las pruebas de regresión verifican que el entorno operativo permanece sin cambios, mientras que las de confirmación prueban los cambios en el objeto de prueba",
      "D) Las pruebas de regresión verifican los efectos adversos en el código sin cambios, mientras que las de confirmación prueban el código modificado"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#14, LO: FL-2.2.3). Justificación: Las pruebas de regresión se ocupan de los efectos adversos en el código sin cambios, mientras que las pruebas de confirmación se ocupan del código modificado."
  },
  302: {
    question: "¿Cuál de los siguientes es un ejemplo de defecto que puede encontrarse mediante pruebas estáticas pero NO mediante pruebas dinámicas?",
    options: [
      "A) Falta de usabilidad en la interfaz de usuario",
      "B) Código al que no llega ningún camino de ejecución (código muerto)",
      "C) Tiempos de respuesta deficientes para la mayoría de los usuarios esperados",
      "D) Funcionalidades requeridas que no están implementadas en el código"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#15, LO: FL-3.1.3). Justificación: El código inalcanzable (código muerto) solo puede detectarse mediante análisis estático, ya que nunca se ejecuta."
  },
  303: {
    question: "¿Cuál de las siguientes es una ventaja del feedback temprano y frecuente de las partes interesadas?",
    options: [
      "A) Los gestores conocen qué desarrolladores son menos productivos",
      "B) Permite a los jefes de proyecto priorizar sus interacciones con las partes interesadas",
      "C) Facilita la comunicación temprana de posibles problemas de calidad",
      "D) Los usuarios finales comprenden mejor por qué se retrasa la entrega del producto de trabajo"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#16, LO: FL-3.2.1). Justificación: El feedback temprano facilita la comunicación anticipada de posibles problemas de calidad."
  },
  304: {
    question: "Dadas las siguientes descripciones de tareas: 1. Se seleccionan las características de calidad a evaluar y los criterios de salida 2. Todos tienen acceso al producto de trabajo 3. Se identifican anomalías en el producto de trabajo 4. Se debaten las anomalías Y las siguientes actividades de revisión: A. Revisión individual B. Inicio de la revisión C. Planificación D. Comunicación y análisis ¿Cuál de las siguientes opciones establece la MEJOR correspondencia entre las descripciones de tareas y las actividades?",
    options: ["A) 1B, 2C, 3D, 4A", "B) 1B, 2D, 3C, 4A", "C) 1C, 2A, 3B, 4D", "D) 1C, 2B, 3A, 4D"],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#17, LO: FL-3.2.2). Justificación: La planificación define criterios (1C), el inicio da acceso al documento (2B), la revisión individual identifica anomalías (3A) y la comunicación y análisis las debate (4D)."
  },
  305: {
    question: "Dados los siguientes roles en las revisiones: 1. Secretario/Escriba 2. Líder de revisión 3. Facilitador 4. Gestor Y las siguientes responsabilidades: A. Garantiza el funcionamiento eficaz de las reuniones de revisión y establece un entorno seguro B. Registra la información de la revisión, como decisiones y nuevas anomalías encontradas C. Decide qué se va a revisar y proporciona recursos como personal y tiempo D. Asume la responsabilidad general de la revisión: cuándo y dónde tendrá lugar ¿Cuál de las siguientes opciones establece la MEJOR correspondencia entre los roles y las responsabilidades?",
    options: ["A) 1A, 2B, 3D, 4C", "B) 1A, 2C, 3B, 4D", "C) 1B, 2D, 3A, 4C", "D) 1B, 2D, 3C, 4A"],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#18, LO: FL-3.2.3). Justificación: El Secretario registra (1B), el Líder organiza la revisión (2D), el Facilitador gestiona la reunión (3A) y el Gestor decide recursos (4C)."
  },
  306: {
    question: "¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre las pruebas de tabla de decisión y las pruebas de ramas?",
    options: [
      "A) En las pruebas de tabla de decisión, los casos de prueba se derivan de las sentencias de decisión del código. En las pruebas de ramas, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba.",
      "B) En las pruebas de tabla de decisión, los casos de prueba se derivan de la especificación que describe la lógica de negocio. En las pruebas de ramas, los casos se basan en la anticipación de posibles defectos en el código fuente.",
      "C) En las pruebas de tabla de decisión, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba. En las pruebas de ramas, los casos se derivan de la especificación que describe la lógica de negocio.",
      "D) En las pruebas de tabla de decisión, los casos de prueba son independientes de cómo está implementado el software. En las pruebas de ramas, los casos de prueba solo pueden crearse después del diseño o la implementación del código."
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#19, LO: FL-4.1.1). Justificación: Las tablas de decisión son independientes de la implementación (caja negra), mientras que las pruebas de ramas requieren conocer el código (caja blanca)."
  },
  307: {
    question: "Los clientes de la cadena de lavado de coches TestWash tienen tarjetas con el número de lavados que han comprado. El valor inicial es 0. Al entrar al lavado, el sistema incrementa el número en la tarjeta en uno. Este valor representa el número del lavado actual. Basándose en este número el sistema decide el descuento: cada décimo lavado da un 10% de descuento y cada vigésimo lavado da un 40% adicional (es decir, 50% en total). ¿Cuál de los siguientes conjuntos de datos de entrada (entendidos como los números del lavado actual) logra la mayor cobertura de partición de equivalencia?",
    options: ["A) 19, 20, 30", "B) 11, 12, 20", "C) 1, 10, 50", "D) 10, 29, 30, 31"],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#20, LO: FL-4.2.1). Justificación: Las particiones son: sin descuento (no múltiplo de 10), 10% (múltiplo de 10 pero no de 20) y 50% (múltiplo de 20). 19 (sin descuento), 20 (50%) y 30 (10%) cubre 3 particiones distintas."
  },
  308: {
    question: "Estás probando un formulario que verifica si la longitud de la contraseña introducida es correcta. El formulario acepta contraseñas con la longitud correcta y rechaza las que son demasiado cortas o largas. La longitud es correcta si tiene entre 6 y 12 caracteres inclusive. El formulario inicialmente está vacío (longitud = 0). Aplicas análisis de valores límite a la variable 'longitud de contraseña'. Tu conjunto de casos de prueba logra cobertura 100% de valores límite de 2 valores. El equipo decide que, por el alto riesgo del componente, hay que añadir casos para alcanzar cobertura 100% de valores límite de 3 valores. ¿Qué longitudes de contraseña adicionales se deben probar?",
    options: ["A) 4, 5, 13, 14", "B) 7, 11", "C) 1, 5, 13", "D) 1, 4, 7, 11, 14"],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#21, LO: FL-4.2.2). Justificación: Con 2 valores ya tenemos 0, 6, 12, y un valor fuera del rango superior. Con 3 valores necesitamos también los vecinos: 5, 7, 11, 13 y el valor 1 para el límite inferior izquierdo."
  },
  309: {
    question: "La siguiente tabla de decisión contiene las reglas para determinar el riesgo de arteriosclerosis. Regla 1 | Regla 2 | Regla 3 | Regla 4 | Regla 5 — Colesterol (mg/dl): ≤124 | ≤124 | 125–200 | 125–200 | ≥201 — Presión arterial (mm Hg): ≤140 | >140 | ≤140 | >140 | – — Nivel de riesgo: muy bajo | bajo | medio | alto | muy alto. Has diseñado los siguientes casos de prueba — TC1: Colesterol=125, PA=141 | TC2: Colesterol=200, PA=201 | TC3: Colesterol=124, PA=201 | TC4: Colesterol=109, PA=200 | TC5: Colesterol=201, PA=140. ¿Qué cobertura de tabla de decisión logran estos casos de prueba?",
    options: ["A) 40%", "B) 60%", "C) 80%", "D) 100%"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#22, LO: FL-4.2.3). Justificación: La tabla tiene 5 reglas. Los casos de prueba cubren las reglas 2 (TC1), 4 (TC2 – no aplica exactamente), 1 (TC4) y 5 (TC5). Solo 3 de 5 reglas quedan cubierta correctamente, lo que da un 60%."
  },
  310: {
    question: "Un sistema de almacenamiento puede guardar hasta tres elementos y se modela mediante el siguiente diagrama de transición de estados. La variable N representa el número de elementos almacenados actualmente. ¿Cuál de los siguientes casos de prueba, representados como secuencias de eventos, logra el mayor nivel de cobertura de transiciones válidas?",
    options: [
      "A) Añadir, Eliminar, Añadir, Añadir, Añadir",
      "B) Añadir, Añadir, Añadir, Añadir, Eliminar, Eliminar",
      "C) Añadir, Añadir, Añadir, Eliminar, Eliminar",
      "D) Añadir, Añadir, Añadir, Eliminar, Añadir"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#23, LO: FL-4.2.4). Justificación: La secuencia Añadir×3, Eliminar×2 recorre todas las transiciones válidas del diagrama de estados."
  },
  311: {
    question: "Ejecutas dos casos de prueba, T1 y T2, sobre el mismo código. T1 logra un 40% de cobertura de sentencias y T2 logra un 65%. ¿Cuál de las siguientes afirmaciones es necesariamente verdadera?",
    options: [
      "A) El conjunto de pruebas T1+T2 logra un 105% de cobertura de sentencias",
      "B) Existe al menos una sentencia que ha sido ejecutada tanto por T1 como por T2",
      "C) Al menos el 5% de las sentencias del código probado no son ejecutables",
      "D) El conjunto de pruebas T1+T2 logra cobertura total de ramas"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#24, LO: FL-4.3.1). Justificación: Si T1 cubre el 40% y T2 el 65%, y la cobertura total no puede superar el 100%, necesariamente existe solapamiento: ambos han ejecutado al menos alguna sentencia común."
  },
  312: {
    question: "La métrica de cobertura de ramas se define como: BCov = (X / Y) × 100%. ¿Qué representan X e Y en esta fórmula?",
    options: [
      "A) X = número de resultados de decisión ejercitados por los casos de prueba. Y = número total de resultados de decisión en el código",
      "B) X = número de ramas condicionales ejercitadas por los casos de prueba. Y = número total de ramas en el código",
      "C) X = número de ramas ejercitadas por los casos de prueba. Y = número total de ramas en el código",
      "D) X = número de ramas condicionales ejercitadas por los casos de prueba. Y = número total de resultados de decisión en el código"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#25, LO: FL-4.3.2). Justificación: X es el número de ramas ejercitadas y Y el número total de ramas en el código."
  },
  313: {
    question: "¿Cuáles DOS de las siguientes afirmaciones proporcionan la MEJOR justificación para usar pruebas exploratorias?",
    options: [
      "A) Los testers no disponen de suficiente tiempo para el diseño y la ejecución de pruebas",
      "B) La estrategia de pruebas existente requiere que los testers usen técnicas formales de caja negra",
      "C) La especificación está escrita en un lenguaje formal que puede ser procesado por una herramienta",
      "D) Los testers son miembros de un equipo ágil y tienen buenas habilidades de programación",
      "E) Los testers tienen experiencia en el dominio de negocio y buenas habilidades analíticas"
    ],
    explanation: "La opción A) y E) son las respuestas correctas según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#26, LO: FL-4.4.2). Justificación: Las pruebas exploratorias son ideales cuando hay poco tiempo para diseño formal (A) y cuando el tester tiene experiencia en el dominio (E)."
  },
  314: {
    question: "¿Cuál de las siguientes opciones es la que MEJOR encaja como elemento de una lista de verificación (checklist) en las pruebas basadas en checklist?",
    options: [
      "A) 'El desarrollador cometió un error al implementar el código'",
      "B) 'La cobertura de sentencias lograda supera el 85%'",
      "C) 'El programa funciona correctamente respecto a los requisitos funcionales y no funcionales'",
      "D) 'Los mensajes de error están escritos en un lenguaje comprensible para el usuario'"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#27, LO: FL-4.4.3). Justificación: Los elementos de un checklist deben ser verificables por observación, como comprobar si los mensajes son comprensibles para el usuario."
  },
  315: {
    question: "Considera el siguiente criterio de aceptación para una historia de usuario escrita desde la perspectiva del propietario de una tienda en línea. DADO que el usuario ha iniciado sesión y está en la página de inicio, CUANDO el usuario hace clic en el botón 'Añadir artículo', ENTONCES debe aparecer el formulario 'Crear artículo', Y el usuario debe poder introducir un nombre y un precio para el nuevo artículo. ¿En qué formato está escrito este criterio de aceptación?",
    options: [
      "A) Orientado a reglas",
      "B) Orientado a escenarios",
      "C) Orientado al producto",
      "D) Orientado al proceso"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#28, LO: FL-4.5.2). Justificación: El formato DADO/CUANDO/ENTONCES (Given/When/Then) es el formato orientado a escenarios, típico de BDD."
  },
  316: {
    question: "Tu equipo analiza la siguiente historia de usuario para definir los criterios de aceptación: 'Como cliente registrado, quiero poder ver mis pedidos anteriores en la web de la empresa, para poder llevar un control de mis compras.' ¿Cuál de los siguientes casos de prueba NO será relevante para esta historia de usuario?",
    options: [
      "A) Entrada: el cliente inicia sesión y hace clic en 'ver historial de pedidos'. Resultado esperado: el sistema muestra una lista de todos los pedidos anteriores con fecha, número de pedido y coste total",
      "B) Entrada: el cliente hace clic en un pedido de la lista. Resultado esperado: el sistema muestra los artículos individuales comprados con sus precios y cantidades",
      "C) Entrada: el cliente hace clic en 'Ordenar ascendente' en la pantalla de historial de pedidos. Resultado esperado: el sistema muestra el historial ordenado por número de pedido en orden ascendente",
      "D) Entrada: un cliente no registrado se registra como nuevo cliente con un correo electrónico válido que no existe en la base de datos. Resultado esperado: el sistema acepta el registro y crea la cuenta"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#29, LO: FL-4.5.3). Justificación: La historia de usuario trata sobre ver pedidos anteriores (cliente ya registrado), no sobre el proceso de registro de nuevos clientes."
  },
  317: {
    question: "Tu equipo sigue un proceso que usa el pipeline de entrega de DevOps. Los primeros tres pasos son: (1) Desarrollo de código (2) Enviar el código al sistema de control de versiones y fusionarlo con la rama 'test' (3) Ejecutar pruebas de componente del código enviado. ¿Cuál de las siguientes es la MEJOR opción como criterio de entrada para el paso (2) de este pipeline?",
    options: [
      "A) El análisis estático no devuelve advertencias de alta severidad para el código enviado",
      "B) El sistema de control de versiones no reporta conflictos al fusionar el código con la rama 'test'",
      "C) Los tests de componente están compilados y listos para ejecutarse",
      "D) La cobertura de sentencias es al menos del 80%"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#30, LO: FL-5.1.3). Justificación: El análisis estático sin advertencias graves es el criterio de entrada más adecuado antes de enviar el código al sistema de control de versiones."
  },
  318: {
    question: "Quieres estimar el esfuerzo de pruebas para un nuevo proyecto usando estimación basada en ratios. Calculas el ratio esfuerzo de pruebas/esfuerzo de desarrollo usando datos promediados de cuatro proyectos históricos similares. La tabla muestra: P1: Desarrollo $800.000, Pruebas $40.000 | P2: $1.200.000 / $130.000 | P3: $600.000 / $70.000 | P4: $1.000.000 / $120.000. El esfuerzo de desarrollo estimado para el nuevo proyecto es $800.000. ¿Cuál es tu estimación del esfuerzo de pruebas?",
    options: ["A) $40.000", "B) $80.000", "C) $81.250", "D) $82.500"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#31, LO: FL-5.1.4). Justificación: El ratio promedio es (40+130+70+120)/(800+1200+600+1000) = 360/3600 = 10%. El 10% de $800.000 = $80.000."
  },
  319: {
    question: "Estás probando una aplicación web que permite a los usuarios BUSCAR productos, VER detalles, AÑADIR al carrito y realizar un PEDIDO. Tienes 7 casos de prueba con estas prioridades (1=mayor): TC1 BUSCAR producto A (4), TC2 BUSCAR producto B (4), TC3 VER detalles A (3), TC4 VER detalles B (2), TC5 AÑADIR producto A (3), TC6 AÑADIR producto B (1), TC7 hacer PEDIDO (5). Dependencias: BUSCAR debe probarse antes de VER, VER antes de AÑADIR, y AÑADIR antes de PEDIDO. ¿Qué caso de prueba debe ejecutarse en cuarto lugar?",
    options: ["A) TC3", "B) TC1", "C) TC7", "D) TC2"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#32, LO: FL-5.1.5). Justificación: Respetando dependencias y prioridad: 1º TC6 (p1), 2º TC4 (p2), 3º TC5 o TC3 (p3), 4º TC1 (p4 después de cumplir dependencias)."
  },
  320: {
    question: "Según el modelo de cuadrantes de prueba, ¿cuál de los siguientes se encuadra en el cuadrante Q1 ('orientado a tecnología' y 'da soporte al equipo')?",
    options: [
      "A) Pruebas de usabilidad",
      "B) Pruebas funcionales",
      "C) Pruebas de aceptación de usuario",
      "D) Pruebas de integración de componentes"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#33, LO: FL-5.1.7). Justificación: Las pruebas de integración de componentes son técnicas y dan soporte al equipo de desarrollo, por eso pertenecen al cuadrante Q1."
  },
  321: {
    question: "Dados los siguientes riesgos: 1. Una implementación ineficaz de bucles causa respuestas lentas del sistema 2. Los consumidores cambian sus preferencias 3. Inundación de la sala de servidores 4. Pacientes mayores de cierta edad reciben informes incorrectos. Y las siguientes actividades de mitigación: A. Aceptación del riesgo B. Pruebas de eficiencia de rendimiento C. Uso de análisis de valores límite como técnica D. Transferencia del riesgo. ¿Cuál de las siguientes opciones establece la MEJOR correspondencia entre riesgos y actividades de mitigación?",
    options: ["A) 1C, 2D, 3A, 4B", "B) 1B, 2D, 3A, 4C", "C) 1B, 2A, 3D, 4C", "D) 1C, 2A, 3D, 4B"],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#34, LO: FL-5.2.4). Justificación: Riesgo de rendimiento→pruebas de rendimiento (1B), riesgo de mercado→aceptación (2A), riesgo de inundación→transferencia/seguro (3D), riesgo de precisión→valores límite (4C)."
  },
  322: {
    question: "¿Cuál de las siguientes es una métrica de calidad del producto?",
    options: [
      "A) Tiempo medio hasta el fallo (MTTF)",
      "B) Número de defectos encontrados",
      "C) Cobertura de requisitos",
      "D) Porcentaje de detección de defectos"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#35, LO: FL-5.3.1). Justificación: El MTTF (tiempo medio hasta el fallo) mide la fiabilidad del producto en producción, por lo que es una métrica de calidad del producto."
  },
  323: {
    question: "Eres miembro de un equipo de pruebas ubicado en América del Norte, desarrollando un producto para un cliente en Europa. El equipo es ágil, sigue DevOps y usa un pipeline de CI/CD. ¿Cuál de las siguientes es la forma MENOS efectiva de comunicar el progreso de las pruebas al cliente?",
    options: [
      "A) Cara a cara (presencialmente)",
      "B) Paneles de control (Dashboards)",
      "C) Correo electrónico",
      "D) Videoconferencia"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#36, LO: FL-5.3.3). Justificación: Con el equipo en América del Norte y el cliente en Europa, la comunicación presencial es inviable y es la opción menos efectiva."
  },
  324: {
    question: "¿Cuál de las siguientes opciones describe MEJOR un ejemplo de cómo la gestión de la configuración (CM) da soporte a las pruebas?",
    options: [
      "A) Con el número de versión del entorno, la herramienta de CM puede recuperar los números de versión de las bibliotecas, stubs y drivers utilizados en ese entorno",
      "B) Con un registro de los valores de las entradas, la herramienta de CM puede ejecutar los casos de prueba para esas configuraciones y calcular la cobertura",
      "C) Con datos sobre la fecha de compra de una licencia de software, la herramienta de CM genera automáticamente información sobre la proximidad del fin de la licencia",
      "D) Con el número de versión del caso de prueba, la herramienta de CM puede generar automáticamente datos de prueba para ese caso"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#37, LO: FL-5.4.1). Justificación: La CM permite vincular versiones del entorno con versiones específicas de bibliotecas, stubs y drivers, garantizando reproducibilidad de los entornos de prueba."
  },
  325: {
    question: "Estás probando una función de ordenación que recibe un conjunto de números y los devuelve ordenados de forma ascendente. El log de ejecución es: TC1: Entrada: 3. Salida: 3. Resultado: pasado | TC2: Entrada: 3 11 6 5. Salida: 3 5 6 11. Resultado: pasado | TC3: Entrada: 8 7 3 7 1. Salida: 1 3 7 8. Resultado: fallado | TC4: Entrada: -2 -2 -2 -3 -3. Salida: -3 -2. Resultado: fallado | TC5: Entrada: 0 -2 0 3 4 4. Salida: -2 0 3 4. Resultado: fallado. ¿Cuál de las siguientes proporciona la MEJOR descripción del fallo para usar en un informe de defecto?",
    options: [
      "A) El sistema no logra ordenar varios conjuntos de números. Referencia: TC3, TC4, TC5.",
      "B) El sistema parece ignorar los duplicados al ordenar. Referencia: TC3, TC4, TC5.",
      "C) El sistema no logra ordenar números negativos. Referencia: TC4, TC5.",
      "D) TC3, TC4 y TC5 tienen defectos (datos de entrada duplicados) y deben corregirse."
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#38, LO: FL-5.5.1). Justificación: El patrón común en los tres fallos es que la función ignora los elementos duplicados al ordenar, lo cual es la descripción más precisa del defecto."
  },
  326: {
    question: "Dadas las siguientes descripciones: 1. Dan soporte al seguimiento del flujo de trabajo 2. Facilitan la comunicación 3. Máquinas virtuales 4. Dan soporte a las revisiones. Y las siguientes categorías de herramientas de prueba: A. Herramientas de pruebas estáticas B. Herramientas que apoyan la escalabilidad y la estandarización del despliegue C. Herramientas DevOps D. Herramientas de colaboración. ¿Cuál de las siguientes opciones establece la MEJOR correspondencia entre las descripciones y las categorías?",
    options: ["A) 1A, 2B, 3C, 4D", "B) 1B, 2D, 3C, 4A", "C) 1C, 2D, 3B, 4A", "D) 1D, 2C, 3A, 4B"],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#39, LO: FL-6.1.1). Justificación: DevOps→seguimiento de flujo (1C), Colaboración→comunicación (2D), Escalabilidad→máquinas virtuales (3B), Estáticas→revisiones (4A)."
  },
  327: {
    question: "¿Cuál de las siguientes es MÁS PROBABLEMENTE una ventaja de la automatización de pruebas?",
    options: [
      "A) Proporciona medidas de cobertura demasiado complicadas para que las obtengan los humanos manualmente",
      "B) Comparte la responsabilidad de las pruebas con el proveedor de la herramienta",
      "C) Elimina la necesidad de pensamiento crítico al analizar los resultados de las pruebas",
      "D) Genera casos de prueba a partir del análisis del código del programa"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra B, Q#40, LO: FL-6.2.1). Justificación: La automatización permite obtener métricas de cobertura complejas que serían impracticables de calcular manualmente."
  },
  328: {
    question: "¿Cuál de las siguientes es un objetivo típico de las pruebas?",
    options: [
      "A) Validar que se cumplen los requisitos documentados",
      "B) Provocar fallos e identificar defectos",
      "C) Iniciar errores e identificar causas raíz",
      "D) Verificar que el objeto de prueba cumple las expectativas del usuario"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#1, LO: FL-1.1.1). Justificación: Un objetivo típico de las pruebas es provocar fallos para identificar defectos en el software."
  },
  329: {
    question: "¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre las pruebas y la depuración (debugging)?",
    options: [
      "A) Las pruebas provocan fallos mientras que la depuración los corrige",
      "B) Las pruebas son una actividad negativa mientras que la depuración es positiva",
      "C) Las pruebas determinan que existen defectos mientras que la depuración los elimina",
      "D) Las pruebas encuentran la causa de los defectos mientras que la depuración la corrige"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#2, LO: FL-1.1.2). Justificación: Las pruebas determinan la existencia de defectos (mediante los fallos); la depuración localiza la causa raíz y la elimina."
  },
  330: {
    question: "La 'falacia de ausencia de defectos' es uno de los principios de las pruebas. ¿Cuál de las siguientes es un ejemplo de cómo abordar este principio en la práctica?",
    options: [
      "A) Explicar que no es posible que las pruebas demuestren la ausencia de defectos",
      "B) Apoyar a los usuarios finales para que realicen pruebas de aceptación",
      "C) Garantizar que no queda ningún defecto de implementación en el sistema entregado",
      "D) Modificar las pruebas que no provocan fallos para asegurarse de que quedan pocos defectos"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#3, LO: FL-1.3.1). Justificación: Apoyar a los usuarios finales en las pruebas de aceptación garantiza que el sistema satisface sus necesidades reales, abordando la falacia de que 'sin defectos = sistema correcto'."
  },
  331: {
    question: "¿Qué actividades de prueba son MÁS PROBABLEMENTE las que implican aplicar análisis de valores límite y partición de equivalencia?",
    options: [
      "A) Implementación de pruebas",
      "B) Diseño de pruebas",
      "C) Ejecución de pruebas",
      "D) Monitorización de pruebas",
      "E) Análisis de pruebas"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#4, LO: FL-1.4.1). Justificación: Las técnicas de diseño de pruebas como el análisis de valores límite y la partición de equivalencia se aplican durante el diseño de pruebas."
  },
  332: {
    question: "Dado el siguiente testware: 1. Ítems de cobertura 2. Solicitudes de cambio 3. Calendario de ejecución de pruebas 4. Condiciones de prueba priorizadas. Y las siguientes actividades de prueba: A. Análisis de pruebas B. Diseño de pruebas C. Implementación de pruebas D. Finalización de pruebas. ¿Cuál de las siguientes muestra MEJOR el testware producido por cada actividad?",
    options: ["A) 1B, 2D, 3C, 4A", "B) 1B, 2D, 3A, 4C", "C) 1D, 2C, 3A, 4B", "D) 1D, 2C, 3B, 4A"],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#5, LO: FL-1.4.3). Justificación: Los ítems de cobertura se producen en el diseño (1B), las solicitudes de cambio en la finalización (2D), el calendario en la implementación (3C) y las condiciones priorizadas en el análisis (4A)."
  },
  333: {
    question: "¿Cuál de las siguientes afirmaciones sobre los distintos roles de prueba es MÁS PROBABLEMENTE CORRECTA?",
    options: [
      "A) En el desarrollo de software ágil, el rol de gestión de pruebas es responsabilidad principal del equipo, mientras que el rol de pruebas es responsabilidad de un único individuo externo",
      "B) El rol de pruebas es principalmente responsable de la monitorización y el control de pruebas, mientras que el rol de gestión es responsable de la planificación y la finalización",
      "C) En el desarrollo de software ágil, las actividades de gestión de pruebas que abarcan múltiples equipos las gestiona un jefe de pruebas externo, mientras que algunas tareas de gestión las asume el propio equipo",
      "D) El rol de gestión de pruebas es principalmente responsable del análisis y el diseño de pruebas, mientras que el rol de pruebas es responsable de la implementación y la ejecución"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#6, LO: FL-1.4.5). Justificación: En Agile, las actividades de gestión que afectan a varios equipos las coordina un gestor externo, mientras que el equipo gestiona sus propias actividades de prueba internamente."
  },
  334: {
    question: "¿Cuál de las siguientes afirmaciones sobre la independencia de las pruebas es CORRECTA?",
    options: [
      "A) Los testers independientes encontrarán defectos gracias a su perspectiva técnica diferente a la de los desarrolladores, aunque su independencia puede generar una relación antagónica",
      "B) La familiaridad de los desarrolladores con su propio código hace que solo encuentren pocos defectos; sin embargo, su formación similar a la de los testers hace que estos también los encontrarían",
      "C) Las pruebas independientes requieren testers fuera del equipo de desarrollo e idealmente de fuera de la organización, aunque estas personas tienen dificultades para entender el dominio de la aplicación",
      "D) Los testers de fuera del equipo del desarrollador son más independientes, pero los del interior del equipo tienen más probabilidad de ser culpados de los retrasos en la entrega"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#8, LO: FL-1.5.3). Justificación: La independencia aporta una perspectiva diferente que ayuda a encontrar más defectos, pero puede crear tensiones con el equipo de desarrollo."
  },
  335: {
    question: "¿Cuál de las siguientes proporciona la MEJOR descripción del concepto 'shift-left' (desplazamiento a la izquierda)?",
    options: [
      "A) Cuando los desarrolladores están de acuerdo, las actividades manuales del lado izquierdo del proceso de prueba se automatizan para apoyar el principio de 'las pruebas tempranas ahorran tiempo y dinero'",
      "B) Cuando es rentable, las actividades de prueba se adelantan en el SDLC para reducir el coste total de la calidad al disminuir el número de defectos encontrados en fases tardías",
      "C) Cuando tienen tiempo libre, los testers deben automatizar pruebas de regresión empezando por las pruebas de componente y de integración de componentes",
      "D) Cuando están disponibles, los testers reciben formación para realizar tareas al inicio del SDLC y así permitir automatizar más actividades de prueba en fases posteriores"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#11, LO: FL-2.1.5). Justificación: Shift-left implica adelantar las actividades de prueba al inicio del ciclo de vida para detectar defectos antes, cuando son más baratos de corregir."
  },
  336: {
    question: "¿Cuál de las siguientes es la que MENOS PROBABLEMENTE ocurrirá como resultado de una retrospectiva?",
    options: [
      "A) La calidad de los futuros objetos de prueba mejora al identificar mejoras en las prácticas de desarrollo",
      "B) La eficiencia de las pruebas mejora al agilizar la configuración de los entornos de prueba mediante automatización",
      "C) La comprensión de los usuarios finales sobre los procesos de desarrollo y prueba mejora",
      "D) Los scripts de prueba automatizados se mejoran gracias al feedback de los desarrolladores"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#12, LO: FL-2.1.6). Justificación: Las retrospectivas son reuniones internas del equipo; no tienen como objetivo mejorar la comprensión de los usuarios finales sobre los procesos."
  },
  337: {
    question: "¿Qué nivel de prueba se está realizando MÁS PROBABLEMENTE si las pruebas están enfocadas en la validación y no las realizan testers?",
    options: [
      "A) Pruebas de componente",
      "B) Pruebas de integración de componentes",
      "C) Pruebas de integración de sistemas",
      "D) Pruebas de aceptación"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#13, LO: FL-2.2.1). Justificación: Las pruebas de aceptación están orientadas a la validación (¿es el sistema correcto?) y generalmente las realizan los usuarios o clientes, no los testers."
  },
  338: {
    question: "Se ha actualizado el software de un sistema de navegación porque sugería rutas que infringían las normas de tráfico, como conducir en sentido contrario en calles de sentido único. ¿Cuál de las siguientes describe MEJOR las pruebas que se realizarán?",
    options: [
      "A) Solo pruebas de confirmación",
      "B) Pruebas de confirmación y después pruebas de regresión",
      "C) Solo pruebas de regresión",
      "D) Pruebas de regresión y después pruebas de confirmación"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#14, LO: FL-2.2.3). Justificación: Primero se hace prueba de confirmación para verificar que el defecto está corregido, y luego pruebas de regresión para comprobar que la corrección no ha introducido nuevos defectos."
  },
  339: {
    question: "Dados los siguientes ejemplos de defectos: i. Dos partes distintas de la especificación de diseño se contradicen debido a la complejidad del diseño ii. Un tiempo de respuesta es demasiado largo y hace perder la paciencia a los usuarios iii. Un camino en el código no puede alcanzarse durante la ejecución iv. Una variable se declara pero nunca se usa en el programa v. La cantidad de memoria que necesita el programa para generar un informe es excesiva. ¿Cuál de las siguientes identifica MEJOR los defectos que podrían encontrarse mediante pruebas estáticas (en lugar de dinámicas)?",
    options: ["A) ii, v", "B) iii, v", "C) i, ii, iv", "D) i, iii, iv"],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#15, LO: FL-3.1.3). Justificación: Las contradicciones en la especificación (i), el código inalcanzable (iii) y las variables sin usar (iv) se detectan mediante revisión o análisis estático sin ejecutar el código."
  },
  340: {
    question: "Dados los siguientes tipos de revisión: 1. Revisión técnica 2. Revisión informal 3. Inspección 4. Walkthrough. Y las siguientes descripciones: A. Incluye objetivos como alcanzar consenso, generar nuevas ideas y motivar a los autores a mejorar B. Incluye objetivos como formar a los revisores, alcanzar consenso, generar nuevas ideas y detectar posibles defectos C. El objetivo principal es detectar posibles defectos y requiere recopilación de métricas para la mejora del proceso D. El objetivo principal es detectar posibles defectos y no genera documentación formal de salida. ¿Cuál de las siguientes establece la MEJOR correspondencia?",
    options: ["A) 1A, 2B, 3C, 4D", "B) 1A, 2D, 3C, 4B", "C) 1B, 2C, 3D, 4A", "D) 1C, 2D, 3A, 4B"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#16, LO: FL-3.2.1). Justificación: Revisión técnica→consenso y nuevas ideas (1A), Informal→sin documentación formal (2D), Inspección→métricas (3C), Walkthrough→forma revisores y genera ideas (4B)."
  }
};

// Apply translations
let translatedCount = 0;
const updatedQuestions = questions.map(q => {
  if (manualTranslations[q.id]) {
    translatedCount++;
    return { ...q, ...manualTranslations[q.id] };
  }
  return q;
});

fs.writeFileSync('src/data/questions.json', JSON.stringify(updatedQuestions, null, 2));
console.log(`Translated ${translatedCount} questions manually`);
console.log('Remaining English:', updatedQuestions.filter(x => x.id >= 296 && !/[áéíóúüñ¿¡]/.test(x.question)).length);
