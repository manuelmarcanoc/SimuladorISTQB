const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

// Only keep official questions
let officialQuestions = questions.filter(q => q.source && q.source.includes('Official Sample Exam'));

function translateText(text) {
  if (!text) return text;
  return text
    .replace(/Which of the following statements describe a valid test objective\?/gi, '¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?')
    .replace(/Which of the following options shows an example of/gi, '¿Cuál de las siguientes opciones muestra un ejemplo de')
    .replace(/Which of the following factors have a SIGNIFICANT influence on/gi, '¿Cuáles de los siguientes factores tienen una influencia SIGNIFICATIVA en')
    .replace(/Which TWO of the following tasks belong MAINLY to a testing role\?/gi, '¿Cuáles DOS de las siguientes tareas pertenecen PRINCIPALMENTE a un rol de pruebas?')
    .replace(/Which of the following skills \(i-v\) are the MOST important skills of a tester\?/gi, '¿Cuáles de las siguientes habilidades (i-v) son las MÁS importantes para un tester?')
    .replace(/How is the whole team approach present in the/gi, '¿Cómo está presente el enfoque de equipo completo en el')
    .replace(/Consider the following rule:/gi, 'Considera la siguiente regla:')
    .replace(/Which of the following statements BEST describes the acceptance test-driven development \(ATDD\) approach\?/gi, '¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque de Desarrollo Guiado por Pruebas de Aceptación (ATDD)?')
    .replace(/Which of the following is NOT an example of the shift-left approach\?/gi, '¿Cuál de las siguientes NO es un ejemplo del enfoque shift-left (desplazamiento a la izquierda)?')
    .replace(/Which of the arguments below would you use to convince your manager to/gi, '¿Cuál de los siguientes argumentos usarías para convencer a tu jefe de')
    .replace(/Which of the following is NOT a benefit of static testing\?/gi, '¿Cuál de las siguientes NO es un beneficio de las pruebas estáticas?')
    .replace(/Which of the following is a benefit of early and frequent stakeholder feedback\?/gi, '¿Cuál de las siguientes es un beneficio del feedback temprano y frecuente de las partes interesadas?')
    .replace(/Which of these statements is NOT a factor that contributes to successful reviews\?/gi, '¿Cuál de estas afirmaciones NO es un factor que contribuye al éxito de las revisiones?')
    .replace(/Which of the following is a characteristic of experience-based test techniques\?/gi, '¿Cuál de las siguientes es una característica de las técnicas de prueba basadas en la experiencia?')
    .replace(/Your test suite achieved 100% statement coverage. What is the consequence of this fact\?/gi, 'Tu conjunto de pruebas alcanzó un 100% de cobertura de sentencias. ¿Cuál es la consecuencia de este hecho?')
    .replace(/Which of the following is NOT true for white-box testing\?/gi, '¿Cuál de las siguientes afirmaciones NO es cierta para las pruebas de caja blanca?')
    .replace(/Which of the following BEST describes the concept behind error guessing\?/gi, '¿Cuál de las siguientes describe MEJOR el concepto que subyace a la predicción de errores?')
    .replace(/Which of the following BEST describes the way acceptance criteria can be documented\?/gi, '¿Cuál de las siguientes describe MEJOR la forma en que pueden documentarse los criterios de aceptación?')
    .replace(/Which TWO of the following options are the exit criteria for testing a system\?/gi, '¿Cuáles DOS de las siguientes opciones son criterios de salida para las pruebas de un sistema?')
    .replace(/Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration\?/gi, '¿Qué producto de trabajo puede usar un equipo ágil para mostrar la cantidad de trabajo completado y el trabajo total restante en una iteración dada?')
    .replace(/Which test activity does a data preparation tool support\?/gi, '¿A qué actividad de prueba da soporte una herramienta de preparación de datos?')
    .replace(/Which item correctly identifies a potential risk of performing test automation\?/gi, '¿Qué elemento identifica correctamente un riesgo potencial de realizar automatización de pruebas?')
    .replace(/Which of the following is an example of why testing is necessary\?/gi, '¿Cuál de las siguientes es un ejemplo de por qué es necesario probar?')
    .replace(/Which of the following statements about quality assurance \(QA\) and\/or quality control \(QC\) is correct\?/gi, '¿Cuál de las siguientes afirmaciones sobre aseguramiento de la calidad (QA) y/o control de la calidad (QC) es correcta?')
    .replace(/One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice\?/gi, 'Uno de los "principios de las pruebas" afirma que las pruebas exhaustivas son imposibles. ¿Cuál de las siguientes es un ejemplo de cómo abordar este principio en la práctica?')
    .replace(/Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases\?/gi, '¿Qué actividad de prueba implica trabajar con requisitos de datos de prueba, condiciones de prueba, requisitos del entorno y casos de prueba?')
    .replace(/Which of the following is MOST likely to impact how testing is performed for a given test object\?/gi, '¿Cuál de los siguientes tiene MÁS PROBABILIDAD de influir en cómo se realizan las pruebas para un objeto de prueba dado?')
    .replace(/Which of the following statements is a CORRECT example of the value of traceability\?/gi, '¿Cuál de las siguientes afirmaciones es un ejemplo CORRECTO del valor de la trazabilidad?')
    .replace(/Which of the following is MOST likely to be an example of a tester using a generic skill when testing\?/gi, '¿Cuál de los siguientes es MÁS PROBABLEMENTE un ejemplo de un tester usando una habilidad genérica durante las pruebas?')
    // Common mappings
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
    .replace(/\bTechnical review\b/g, 'Revisión técnica')
    .replace(/\bInformal review\b/g, 'Revisión informal')
    .replace(/\bInspection\b/g, 'Inspección')
    .replace(/\bWalkthrough\b/g, 'Walkthrough')
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
    .replace(/\bregression test(s|ing)?\b/gi, 'prueba(s) de regresión')
    .replace(/\bconfiguration management\b/gi, 'gestión de la configuración')
    .replace(/\bshift-left\b/gi, 'shift-left (mover a la izquierda)')
    .replace(/\bretrospective(s)?\b/gi, 'retrospectiva(s)')
    .replace(/\bbacklog\b/gi, 'backlog')
    .replace(/\bSDLC\b/g, 'SDLC');
}

const manualOverrides = {
  250: { question: "¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?", options: ["A) Demostrar que no hay defectos sin corregir en el sistema bajo prueba", "B) Demostrar que no habrá fallos después de implementar el sistema", "C) Reducir el nivel de riesgo de calidad del software", "D) Verificar que no hay combinaciones de entrada no probadas"] },
  269: { question: "Estás probando un formulario simplificado de búsqueda de apartamentos con dos criterios: • planta (baja, primera, segunda o superior) • jardín (sin jardín, pequeño, grande). Todos los de planta baja tienen jardín, los superiores no. ¿Cuál es el número mínimo de casos de prueba para lograr 100% de cobertura de partición de equivalencia (EP) para particiones válidas?", options: ["A) 3", "B) 4", "C) 5", "D) 6"] },
  270: { question: "El sistema calcula la nota final: 0-50: suspenso; 51-60: suficiente; 61-70: bien; 71-80: notable; 81-90: muy bien; 91-100: excelente. Tienes los casos: TC1: 91, TC2: 50, TC3: 81, TC4: 60, TC5: 70, TC6: 80. ¿Qué cobertura de análisis de valores límite (BVA) de 2 valores se alcanza?", options: ["A) 50%", "B) 60%", "C) 80%", "D) 100%"] },
  271: { question: "Reglas de alquiler de bicicletas: Miembros tienen 20% descuento, pero se pierde si se atrasan. Al 15º alquiler reciben camiseta. Según la tabla de decisión, ¿cuál regla describe una situación imposible?", options: ["A) R1", "B) R2", "C) R6", "D) R8"] },
  272: { question: "Pruebas un sistema cuyo ciclo de vida se modela en un diagrama de transición de estados desde INIT hasta OFF. ¿Cuál es el número MÍNIMO de casos de prueba para lograr cobertura de transiciones válidas?", options: ["A) 1", "B) 2", "C) 3", "D) 4"] },
  276: { question: "Comenzaste tarde, pero tienes un gran conocimiento del dominio y buenas habilidades analíticas. La lista de requisitos aún no se ha compartido, pero te piden resultados de prueba. ¿Qué técnica es la MEJOR en esta situación?", options: ["A) Basada en checklist", "B) Exploratorias", "C) Partición de equivalencia", "D) Predicción de errores"] },
  278: { question: "Historia de usuario: 'Como Editor quiero revisar el contenido antes de que se publique para asegurar que la gramática es correcta'. ¿Cuál es el MEJOR ejemplo de una prueba ATDD para esto?", options: ["A) Probar si el editor puede guardar los cambios", "B) Verificar que un editor pueda cambiar contenido, añadir comentarios y guardarlo", "C) Revisión estática del código del módulo de gestión de contenidos", "D) Comprobar el rendimiento del guardado de página"] },
  280: { question: "Tu equipo usa estimación de tres puntos: Optimista: 2h, Más probable: 11h, Pesimista: 14h. ¿Cuál es la estimación final?", options: ["A) 9", "B) 10", "C) 11", "D) 14"] },
  281: { question: "Tienes dependencias: TC001(p3) -> TC002(p2) -> TC003(p1), TC004(p2), TC005(p3). ¿Cuál debe ejecutarse en tercer lugar?", options: ["A) TC001", "B) TC003", "C) TC004", "D) TC005"] },
  282: { question: "Empareja categorías con cuadrantes ágiles: 1.Usabilidad, 2.Componente, 3.Funcional, 4.Fiabilidad vs Q1(T/Soporte), Q2(N/Soporte), Q3(N/Crítica), Q4(T/Crítica).", options: ["A) 1C, 2A, 3B, 4D", "B) 1D, 2A, 3C, 4B", "C) 1C, 2B, 3D, 4A", "D) 1D, 2B, 3A, 4C"] },
  283: { question: "Riesgo: Tiempo de respuesta alto. Acción: Equipo independiente hace pruebas de eficiencia y usuarios hacen alpha/beta. ¿Qué tipo de medida es?", options: ["A) Mitigación", "B) Planes de contingencia", "C) Transferencia", "D) Aceptación"] },
  286: { question: "Informe de defecto rechazado. Faltaba información crítica para los desarrolladores. ¿Qué información?", options: ["A) El entorno de pruebas utilizado", "B) El resultado real y el resultado esperado", "C) El identificador del caso de prueba", "D) La prioridad del defecto"] }
};

officialQuestions = officialQuestions.map(q => {
  let newQ = { ...q };
  delete newQ.difficulty; // Purge difficulty!

  if (newQ.id >= 250 && newQ.id <= 295) {
    if (manualOverrides[newQ.id]) {
      newQ.question = manualOverrides[newQ.id].question;
      newQ.options = manualOverrides[newQ.id].options;
    } else {
      newQ.question = translateText(newQ.question);
      newQ.options = newQ.options.map(o => translateText(o));
      if (newQ.explanation) newQ.explanation = translateText(newQ.explanation);
    }
  }
  return newQ;
});

fs.writeFileSync('src/data/questions.json', JSON.stringify(officialQuestions, null, 2));
console.log(`Total questions: ${officialQuestions.length}`);
console.log('Remaining English items (untranslated):', officialQuestions.filter(x => !/[áéíóúüñ¿¡]/i.test(x.question)).length);
