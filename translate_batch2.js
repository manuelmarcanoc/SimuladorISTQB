const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

const manualTranslations = {
  341: {
    question: "¿Cuál de los siguientes es un factor que contribuye a una revisión exitosa?",
    options: [
      "A) Los revisores son expertos en el dominio del objeto a revisar",
      "B) Los revisores hacen sus revisiones en voz alta durante la reunión de revisión",
      "C) El autor no participa en la planificación de la revisión",
      "D) Los participantes hacen las revisiones de sus propios productos de trabajo"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#17, LO: FL-3.2.4). Justificación: Que los revisores sean expertos en el dominio garantiza que puedan detectar defectos relevantes."
  },
  342: {
    question: "¿Cuál es la diferencia PRINCIPAL entre las técnicas de prueba de caja negra y las técnicas basadas en la experiencia?",
    options: [
      "A) Las técnicas de caja negra utilizan modelos formales; las técnicas basadas en la experiencia utilizan el conocimiento de los testers",
      "B) Las técnicas de caja negra utilizan la especificación del sistema; las técnicas basadas en la experiencia utilizan el conocimiento y la intuición de los testers",
      "C) Las técnicas de caja negra se derivan del código; las técnicas basadas en la experiencia se derivan de la especificación",
      "D) Las técnicas de caja negra incluyen las pruebas exploratorias; las técnicas basadas en la experiencia incluyen las pruebas de partición de equivalencia"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#18, LO: FL-4.1.1). Justificación: Las técnicas de caja negra se basan en la especificación del sistema; las basadas en la experiencia se basan en el conocimiento e intuición del tester."
  },
  343: {
    question: "Estás probando un validador de PIN que acepta PINs válidos y rechaza los inválidos. Un PIN es una secuencia de 4 dígitos donde cada dígito está entre 0 y 9. Aplicas partición de equivalencia al campo 'número de dígitos del PIN'. ¿Cuántas particiones hay en total (incluyendo las válidas e inválidas)?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#19, LO: FL-4.2.1). Justificación: Hay 3 particiones: longitud menor de 4 (inválida), exactamente 4 dígitos (válida) y más de 4 dígitos (inválida)."
  },
  344: {
    question: "Se le pidió a un desarrollador que implementara la siguiente regla de negocio: ENTRADA: valor (número entero). SI (valor > 0) Y (valor ≤ 10) → Acción A. SI (valor > 10) Y (valor ≤ 20) → Acción B. SI (valor > 20) → Acción C. ¿Cuántos casos de prueba se necesitan como mínimo para lograr el 100% de cobertura de ramas (branch coverage)?",
    options: ["A) 2", "B) 3", "C) 4", "D) 6"],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#20, LO: FL-4.2.2). Justificación: Se necesitan 4 casos de prueba para cubrir todas las ramas: un valor ≤0 (ninguna condición), uno en 1-10 (Acción A), uno en 11-20 (Acción B) y uno >20 (Acción C)."
  },
  345: {
    question: "Estás trabajando en un proyecto para desarrollar un sistema de análisis de resultados de exámenes de conducción. Se te ha pedido que diseñes casos de prueba usando pruebas de tabla de decisión para la siguiente regla: Un candidato APRUEBA si obtiene al menos 43 de 50 respuestas correctas Y no comete ningún fallo grave. Un candidato SUSPENDE en cualquier otro caso. ¿Cuántas reglas (columnas) tendrá la tabla de decisión completa?",
    options: ["A) 2", "B) 3", "C) 4", "D) 6"],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#21, LO: FL-4.2.3). Justificación: Hay 2 condiciones con 2 valores cada una (≥43/no, sin fallo grave/con fallo grave), lo que da 4 combinaciones (reglas)."
  },
  346: {
    question: "Estás diseñando casos de prueba basándote en un diagrama de transición de estados. ¿Cuál es el número MÍNIMO de casos de prueba necesarios para lograr cobertura de todas las transiciones válidas (100%)?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#23, LO: FL-4.2.4). Justificación: El número mínimo de casos de prueba para cobertura de transiciones válidas depende del diagrama; en este caso, 3 casos cubren todas las transiciones."
  },
  347: {
    question: "Quieres aplicar pruebas de ramas al código representado por el siguiente grafo de flujo de control. ¿Cuántos casos de prueba se necesitan como MÍNIMO para lograr el 100% de cobertura de ramas?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#25, LO: FL-4.3.2). Justificación: Para el grafo de flujo de control dado se necesitan 2 casos de prueba para cubrir todas las ramas (TRUE y FALSE de cada decisión)."
  },
  348: {
    question: "¿Cómo pueden ser útiles las pruebas de caja blanca como apoyo a las pruebas de caja negra?",
    options: [
      "A) Pueden usarse para verificar que todos los requisitos están implementados en el código",
      "B) Pueden usarse para crear casos de prueba que cubran el código que los casos de caja negra no ejecutan",
      "C) Pueden usarse para evaluar si la especificación refleja correctamente la lógica de negocio del sistema",
      "D) Pueden usarse para evitar la creación de casos de prueba redundantes con los de caja negra"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#26, LO: FL-4.3.2). Justificación: Las pruebas de caja blanca pueden identificar y cubrir código que los casos de caja negra no ejercitan, complementando así la cobertura."
  },
  349: {
    question: "Considera la siguiente lista de posibles defectos: • Entrada correcta no aceptada • Entrada incorrecta aceptada • Salida incorrecta producida • Funcionalidad omitida. ¿Cuál de las siguientes técnicas de prueba está diseñada ESPECÍFICAMENTE para detectar todos estos tipos de defectos?",
    options: [
      "A) Pruebas de partición de equivalencia",
      "B) Pruebas de tabla de decisión",
      "C) Pruebas de transición de estados",
      "D) Pruebas de análisis de valores límite"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#27, LO: FL-4.4.1). Justificación: La partición de equivalencia está específicamente diseñada para detectar estos tipos de defectos al probar valores representativos de cada partición."
  },
  350: {
    question: "¿Cuál de las siguientes describe MEJOR cómo el uso de pruebas basadas en checklist puede resultar en una mayor cobertura en comparación con las pruebas de especificación sin checklist?",
    options: [
      "A) Los checklists incluyen elementos basados en la experiencia de defectos del pasado, lo que ayuda a detectar más defectos",
      "B) Los checklists son documentos formales generados automáticamente por herramientas de análisis estático",
      "C) Los checklists permiten al tester cubrir más condiciones de prueba sin necesidad de especificación",
      "D) Los checklists garantizan el 100% de cobertura de ramas del código"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#28, LO: FL-4.4.3). Justificación: Los checklists incorporan experiencia de proyectos pasados, lo que permite detectar defectos que las especificaciones formales no contemplan explícitamente."
  },
  351: {
    question: "¿Cuál de las siguientes proporciona el MEJOR ejemplo de un criterio de aceptación orientado a escenario?",
    options: [
      "A) El sistema debe mostrar un mensaje de error si el nombre de usuario supera los 50 caracteres",
      "B) DADO que un cliente ha iniciado sesión, CUANDO hace clic en 'Realizar pedido', ENTONCES el sistema muestra una confirmación del pedido",
      "C) El tiempo de respuesta del sistema no debe superar los 2 segundos en el 95% de las solicitudes",
      "D) El campo de contraseña debe aceptar entre 8 y 20 caracteres alfanuméricos"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#29, LO: FL-4.5.2). Justificación: El formato DADO/CUANDO/ENTONCES (Given/When/Then) es el formato orientado a escenarios típico de BDD."
  },
  352: {
    question: "Estás usando desarrollo guiado por pruebas de aceptación (ATDD) y diseñando casos de prueba basados en la siguiente historia de usuario: 'Como usuario registrado, quiero poder cambiar mi contraseña, para mantener mi cuenta segura.' ¿Cuál de los siguientes casos de prueba NO es relevante para esta historia de usuario?",
    options: [
      "A) Verificar que el usuario puede cambiar su contraseña introduciendo la contraseña actual correcta y una nueva contraseña válida",
      "B) Verificar que el sistema rechaza el cambio si la contraseña actual introducida es incorrecta",
      "C) Verificar que el sistema envía un correo de confirmación al usuario tras el cambio de contraseña",
      "D) Verificar que un usuario no registrado puede restablecer su contraseña mediante el enlace 'olvidé mi contraseña'"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra C, Q#30, LO: FL-4.5.3). Justificación: La historia de usuario trata sobre cambiar la contraseña de un usuario YA registrado, no sobre restablecer contraseñas de usuarios no registrados."
  },
  353: {
    question: "¿Cuál de las siguientes NO es una finalidad de un plan de pruebas?",
    options: [
      "A) Documentar los medios y el calendario de las actividades de prueba",
      "B) Servir como medio de comunicación entre los miembros del equipo de pruebas",
      "C) Registrar los defectos encontrados durante la ejecución de las pruebas",
      "D) Documentar los riesgos y los enfoques de mitigación"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#1, LO: FL-5.1.1). Justificación: El registro de defectos es responsabilidad del sistema de gestión de defectos, no del plan de pruebas."
  },
  354: {
    question: "Al comienzo de cada iteración, el equipo estima la cantidad de trabajo (en personas-día) que puede completar durante esa iteración. Al final de la iteración, se mide el trabajo real completado. Con el tiempo, los datos históricos muestran que el equipo completa de media el 80% del trabajo estimado. Si en la próxima iteración el equipo estima 50 personas-día de trabajo, ¿cuántos personas-día debería el jefe de pruebas planificar como esfuerzo real?",
    options: ["A) 40", "B) 50", "C) 62", "D) 63"],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#2, LO: FL-5.1.4). Justificación: Si históricamente se completa el 80% del estimado, la estimación real sería 50 × 0.80 = 40 personas-día."
  },
  355: {
    question: "Estás preparando un calendario de ejecución de pruebas para 7 casos de prueba (TC1-TC7). Las dependencias son: TC2 depende de TC1, TC4 depende de TC2 y TC3, TC5 depende de TC3, TC6 depende de TC4 y TC5, TC7 depende de TC6. Las prioridades (1=mayor) son: TC1-p3, TC2-p5, TC3-p1, TC4-p4, TC5-p2, TC6-p6, TC7-p7. ¿Cuál es el orden correcto de ejecución respetando dependencias y prioridades?",
    options: [
      "A) TC3, TC5, TC1, TC2, TC4, TC6, TC7",
      "B) TC1, TC2, TC3, TC4, TC5, TC6, TC7",
      "C) TC3, TC1, TC5, TC2, TC4, TC6, TC7",
      "D) TC1, TC3, TC2, TC5, TC4, TC6, TC7"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#3, LO: FL-5.1.5). Justificación: TC3 tiene la mayor prioridad (p1) y no tiene dependencias, por lo que va primero. Luego TC1 (p3, sin dependencias), después TC5 (depende de TC3), etc."
  },
  356: {
    question: "¿Qué muestra el modelo de pirámide de pruebas?",
    options: [
      "A) Los diferentes niveles de prueba y los tipos de defectos más probables en cada nivel",
      "B) El número relativo de pruebas recomendadas en cada nivel de prueba, con más pruebas en los niveles inferiores",
      "C) El coste relativo de encontrar y corregir defectos en cada nivel de prueba",
      "D) La secuencia recomendada en la que deben ejecutarse los distintos niveles de prueba"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#4, LO: FL-5.1.7). Justificación: La pirámide de pruebas muestra que deben existir muchas pruebas de componente (base) y pocas pruebas de sistema o E2E (cima), ya que las inferiores son más rápidas y baratas."
  },
  357: {
    question: "¿Cuál es la relación entre los cuadrantes de prueba, los niveles de prueba y los tipos de prueba?",
    options: [
      "A) Los cuadrantes de prueba incluyen los niveles de prueba; los tipos de prueba ayudan a identificar qué cuadrantes de prueba se aplican a cada nivel",
      "B) Los tipos de prueba ayudan a identificar qué cuadrantes de prueba se aplican; los cuadrantes de prueba ayudan a identificar qué niveles de prueba se deben usar",
      "C) Los cuadrantes de prueba ayudan a identificar qué tipos de prueba se aplican a cada nivel; los tipos de prueba pueden abarcar múltiples niveles",
      "D) Los niveles de prueba son subconjuntos de los cuadrantes de prueba; los cuadrantes de prueba son subconjuntos de los tipos de prueba"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#5, LO: FL-5.1.7). Justificación: Los cuadrantes de prueba ayudan a identificar qué tipos de prueba (funcional, no funcional, caja blanca, etc.) son aplicables en cada nivel de prueba."
  },
  358: {
    question: "¿Cuál de las siguientes es un ejemplo de cómo el análisis de riesgo de producto puede influir en la exhaustividad y el enfoque de las pruebas?",
    options: [
      "A) Aumentar la cobertura de pruebas de las funcionalidades de mayor riesgo",
      "B) Priorizar las pruebas de las funcionalidades implementadas recientemente sobre las más antiguas",
      "C) Ejecutar primero las pruebas de menor duración para obtener resultados rápidos",
      "D) Concentrar el esfuerzo de pruebas en los componentes desarrollados por testers menos experimentados"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#6, LO: FL-5.2.3). Justificación: El análisis de riesgo dirige el esfuerzo de prueba hacia las áreas de mayor riesgo, aumentando su cobertura."
  },
  359: {
    question: "¿Cuál de las siguientes actividades del proceso de pruebas hace MÁS USO de los informes de progreso de pruebas?",
    options: [
      "A) Planificación de pruebas",
      "B) Monitorización y control de pruebas",
      "C) Análisis de pruebas",
      "D) Diseño de pruebas"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#7, LO: FL-5.3.2). Justificación: La monitorización y el control de pruebas usa los informes de progreso para comparar el avance real con el planificado y tomar decisiones correctivas."
  },
  360: {
    question: "¿Cuál de las siguientes NO es un ejemplo de cómo la gestión de la configuración (CM) da soporte a las pruebas?",
    options: [
      "A) Mantener un registro de los ítems de configuración que componen el entorno de prueba",
      "B) Generar automáticamente casos de prueba adicionales cuando se detectan defectos en el software",
      "C) Permitir la trazabilidad entre los casos de prueba y los elementos de trabajo que prueban",
      "D) Garantizar que todos los miembros del equipo utilizan la misma versión de los casos de prueba"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#8, LO: FL-5.4.1). Justificación: La generación automática de casos de prueba no es una función de la gestión de la configuración."
  },
  361: {
    question: "Considera el siguiente informe de defecto para una aplicación web de compras: Aplicación: WebShop v0.9.1. Módulo: Carrito de compra. Resumen: 'El botón Eliminar del carrito no funciona cuando hay exactamente 1 artículo'. Pasos: 1) Iniciar sesión 2) Añadir 1 artículo al carrito 3) Hacer clic en Eliminar. Resultado esperado: El artículo se elimina y el carrito queda vacío. Resultado real: Nada ocurre. ¿Cuál de los siguientes elementos está AUSENTE en este informe de defecto?",
    options: [
      "A) El identificador del caso de prueba que reveló el defecto",
      "B) Los datos de entorno/configuración del sistema",
      "C) La severidad del defecto",
      "D) La prioridad del defecto"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#9, LO: FL-5.5.1). Justificación: El informe no especifica la versión del sistema operativo, navegador u otros datos del entorno necesarios para reproducir el defecto."
  },
  362: {
    question: "Las herramientas de qué categoría ayudan a organizar los casos de prueba, los defectos detectados y los resultados de las pruebas?",
    options: [
      "A) Herramientas de gestión de pruebas",
      "B) Herramientas de análisis estático",
      "C) Herramientas de ejecución de pruebas",
      "D) Herramientas de automatización de pruebas"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#10, LO: FL-6.1.1). Justificación: Las herramientas de gestión de pruebas (como Jira, TestRail) organizan y rastrean casos de prueba, defectos y resultados."
  },
  363: {
    question: "Un diseñador documenta un diseño para una interfaz de usuario que no atiende adecuadamente a usuarios con discapacidad visual porque el diseñador no era consciente de los requisitos de accesibilidad. ¿Cómo se clasifica esto según la terminología ISTQB?",
    options: [
      "A) El diseñador cometió un fallo que introdujo un error en el diseño",
      "B) El diseñador cometió un error que introdujo un defecto en el diseño",
      "C) El diseñador cometió un defecto que resultó en un fallo en el diseño",
      "D) El diseñador cometió un error que introdujo un fallo en el diseño"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#1, LO: FL-1.2.2). Justificación: El desconocimiento del diseñador (error humano) da lugar a un defecto en el documento de diseño. Terminología: Error → Defecto → Fallo."
  },
  364: {
    question: "Los testers usan condiciones de prueba para generar casos de prueba y ejecutar pruebas. Aunque las condiciones de prueba permanecen iguales, los casos de prueba varían en cada ocasión. ¿Cuál de los 'principios de las pruebas' se está aplicando mediante la variación de los casos de prueba?",
    options: [
      "A) Las pruebas se desgastan (paradoja del pesticida)",
      "B) La falacia de ausencia de defectos",
      "C) Las pruebas tempranas ahorran tiempo y dinero",
      "D) Los defectos se agrupan"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#3, LO: FL-1.3.1). Justificación: La paradoja del pesticida (o 'las pruebas se desgastan') indica que repetir los mismos casos de prueba deja de detectar nuevos defectos, por eso hay que variarlos."
  },
  365: {
    question: "Dado el siguiente testware: i. Informe de finalización de pruebas ii. Datos en una base de datos usados como entradas y resultados esperados iii. Lista de elementos necesarios para construir el entorno de prueba iv. Secuencias documentadas de casos de prueba en orden de ejecución v. Casos de prueba. ¿Cuál de las siguientes muestra MEJOR el testware producido como resultado de realizar la implementación de pruebas?",
    options: ["A) ii, iv", "B) iii, v", "C) i, ii, v", "D) i, iii, iv"],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#5, LO: FL-1.4.3). Justificación: Durante la implementación de pruebas se crean los datos de prueba (ii) y las secuencias de ejecución/suites de prueba (iv)."
  },
  366: {
    question: "¿Cuál de las siguientes opciones describe MÁS PROBABLEMENTE una tarea realizada por alguien en un rol de gestión de pruebas?",
    options: [
      "A) Evaluar la base de pruebas y el objeto de prueba",
      "B) Definir los requisitos del entorno de prueba",
      "C) Evaluar la testabilidad del objeto de prueba",
      "D) Crear el informe de finalización de pruebas"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#6, LO: FL-1.4.5). Justificación: Crear el informe de finalización de pruebas es una tarea de cierre del proceso, típicamente responsabilidad del jefe de pruebas."
  },
  367: {
    question: "¿Cuál de las siguientes es una ventaja del enfoque de equipo completo (whole-team approach)?",
    options: [
      "A) Mejora la comunicación entre los miembros del equipo",
      "B) Disminuye la responsabilidad individual por la calidad",
      "C) Acelera el despliegue de entregables a los usuarios finales",
      "D) Reduce la colaboración con los usuarios de negocio externos"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#7, LO: FL-1.5.2). Justificación: El enfoque de equipo completo promueve la colaboración entre todos los miembros del equipo, mejorando la comunicación."
  },
  368: {
    question: "Dados los siguientes beneficios e inconvenientes de la independencia de las pruebas: i. Los testers trabajan en un lugar distinto al de los desarrolladores ii. Los testers cuestionan los supuestos que los programadores hacen al escribir código iii. Se ha establecido una dinámica de confrontación entre testers y desarrolladores iv. Los desarrolladores se han convencido de que los testers son los principales responsables de la calidad v. Los testers tienen sesgos diferentes a los de los desarrolladores. ¿Cuáles son MÁS PROBABLEMENTE considerados beneficios?",
    options: ["A) i, iv", "B) ii, v", "C) i, iii, iv", "D) ii, iii, v"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#8, LO: FL-1.5.3). Justificación: Cuestionar los supuestos (ii) y tener sesgos distintos (v) son beneficios de la independencia; los demás son inconvenientes o consecuencias negativas."
  },
  369: {
    question: "¿Cuál de las siguientes es MÁS PROBABLEMENTE un desafío al implementar DevOps?",
    options: [
      "A) Asegurarse de que no se pasan por alto las características de calidad no funcionales",
      "B) Gestionar entornos de prueba que cambian continuamente",
      "C) La necesidad de más testers manuales con experiencia adecuada",
      "D) Configurar la automatización de pruebas como parte del pipeline de entrega"
    ],
    explanation: "La opción D) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#11, LO: FL-2.1.4). Justificación: Configurar e integrar la automatización de pruebas dentro del pipeline de entrega continua es uno de los mayores desafíos al adoptar DevOps."
  },
  370: {
    question: "¿Cuál de las siguientes describe MEJOR las retrospectivas?",
    options: [
      "A) Las retrospectivas permiten a los miembros del equipo identificar a otros miembros que no contribuyeron suficientemente a la calidad según el enfoque de equipo completo",
      "B) Las retrospectivas dan a los testers la oportunidad de identificar actividades que fueron exitosas para mantenerlas cuando se realicen mejoras en el futuro",
      "C) Las retrospectivas son donde los miembros del equipo ágil pueden expresar sus preocupaciones sobre la gestión y los clientes en un entorno sin reproches",
      "D) Las retrospectivas dan a los miembros del equipo ágil un foro para debatir el plan y las decisiones técnicas de la próxima iteración"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#12, LO: FL-2.1.6). Justificación: Las retrospectivas sirven para identificar qué funcionó bien (para mantenerlo) y qué se puede mejorar en el próximo ciclo."
  },
  371: {
    question: "¿Cuál de las siguientes pruebas es MÁS PROBABLEMENTE la que se realiza como parte de las pruebas funcionales?",
    options: [
      "A) La prueba verifica que la función de ordenación coloca los elementos de la lista en orden ascendente",
      "B) La prueba verifica que la función de ordenación completa el proceso en menos de un segundo",
      "C) La prueba verifica con qué facilidad se puede cambiar la función de ordenación de ascendente a descendente",
      "D) La prueba verifica que la función de ordenación sigue funcionando correctamente al migrar de una arquitectura de 32 a 64 bits"
    ],
    explanation: "La opción A) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#13, LO: FL-2.2.2). Justificación: Verificar que la función de ordenación hace lo que debe hacer (ordenar correctamente) es una prueba funcional; las demás opciones son no funcionales."
  },
  372: {
    question: "¿Cuál de las siguientes es MÁS PROBABLEMENTE el desencadenante que lleva a realizar pruebas de mantenimiento de un sistema de cambio de divisas?",
    options: [
      "A) Los desarrolladores informaron de que modificar el sistema era difícil y los testers decidieron verificar si era cierto",
      "B) Se eliminó la opción de reembolso del sistema porque no devolvía siempre el importe correcto a los clientes",
      "C) El equipo ágil comenzó a desarrollar una historia de usuario que añade una función de fidelización de clientes",
      "D) La opción de soporte de idiomas del sistema se usó para habilitar transacciones en inglés y en el idioma local"
    ],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#14, LO: FL-2.3.1). Justificación: Eliminar una funcionalidad defectuosa del sistema en producción es un desencadenante clásico de las pruebas de mantenimiento."
  },
  373: {
    question: "¿Cuál de los siguientes NO puede examinarse mediante pruebas estáticas?",
    options: [
      "A) Contrato",
      "B) Plan de pruebas",
      "C) Código cifrado",
      "D) Carta de prueba (test charter)"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#15, LO: FL-3.1.1). Justificación: El código cifrado no puede analizarse estáticamente porque su contenido es ilegible para las herramientas de análisis estático y los revisores."
  },
  374: {
    question: "¿Cuál de las siguientes afirmaciones sobre el valor de las pruebas estáticas es CORRECTA?",
    options: [
      "A) Los tipos de defectos que encuentran las pruebas estáticas son diferentes de los que pueden encontrar las pruebas dinámicas",
      "B) Las pruebas dinámicas pueden detectar los tipos de defectos que encuentran las pruebas estáticas, más algunos adicionales",
      "C) Las pruebas dinámicas pueden identificar algunos de los defectos que encuentran las pruebas estáticas, pero no todos",
      "D) Las pruebas estáticas pueden identificar los tipos de defectos que encuentran las pruebas dinámicas, además de algunos adicionales"
    ],
    explanation: "La opción C) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#16, LO: FL-3.1.2). Justificación: Las pruebas dinámicas no pueden encontrar defectos como código inalcanzable, variables no usadas o inconsistencias en documentación que solo detectan las pruebas estáticas."
  },
  375: {
    question: "Dadas las siguientes descripciones de actividades de revisión: 1. Las anomalías detectadas se debaten y se toman decisiones sobre su estado, propietario y pasos siguientes 2. Los defectos se registran y las actualizaciones necesarias se abordan antes de la aceptación del producto de trabajo 3. Los revisores emplean técnicas para generar sugerencias y preguntas sobre el producto de trabajo e identificar anomalías 4. El objetivo de la revisión y su calendario se establecen para garantizar una revisión enfocada y eficiente 5. Los participantes reciben acceso al elemento a revisar. ¿Cuál es la secuencia CORRECTA de actividades del proceso de revisión?",
    options: ["A) 4 – 3 – 5 – 2 – 1", "B) 4 – 5 – 3 – 1 – 2", "C) 5 – 4 – 1 – 3 – 2", "D) 5 – 4 – 3 – 2 – 1"],
    explanation: "La opción B) es la respuesta correcta según el Examen Oficial ISTQB CTFL v4.0 (Muestra D, Q#17, LO: FL-3.2.2). Justificación: Secuencia correcta: Planificación (4) → Inicio de revisión/acceso (5) → Revisión individual (3) → Comunicación y análisis (1) → Corrección y reporte (2)."
  }
};

let translatedCount = 0;
const updatedQuestions = questions.map(q => {
  if (manualTranslations[q.id]) {
    translatedCount++;
    return { ...q, ...manualTranslations[q.id] };
  }
  return q;
});

require('fs').writeFileSync('src/data/questions.json', JSON.stringify(updatedQuestions, null, 2));
console.log(`Translated ${translatedCount} more questions`);
console.log('Remaining English:', updatedQuestions.filter(x => x.id >= 296 && !/[áéíóúüñ¿¡]/.test(x.question)).length);
