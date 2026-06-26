const fs = require('fs');

const raw = `Pregunta 1 de 12
¿Cuál de las siguientes descripciones se asocia mejor con el desarrollo guiado por pruebas (TDD)?


A. En TDD, se crean primero los casos de prueba y luego se desarrolla el código para pasarlos.

B. En TDD, se escribe el código y luego se generan pruebas manuales para verificar su funcionamiento.

C. En TDD, las pruebas se realizan solo después de que toda la funcionalidad ha sido implementada.

D. En TDD, se enfoca únicamente en pruebas de integración y no en pruebas unitarias.
Explicación
A. Es correcto. TDD se basa en el ciclo de escribir una prueba, hacer que falle, implementar el código y luego refactorizar.
B. No es correcto. En TDD, las pruebas son parte del proceso de desarrollo, no se generan manualmente después.
C. No es correcto. TDD implica que las pruebas se escriban antes de implementar la funcionalidad.
D. No es correcto. TDD se enfoca principalmente en pruebas unitarias, no solo en integración.

Pregunta 2 de 12
¿Cuál de las siguientes afirmaciones describe correctamente el enfoque de desarrollo guiado por pruebas (TDD)?


A. En TDD, primero se escribe un caso de prueba que define una función deseada antes de desarrollar el código.

B. En TDD, las pruebas se crean después de que se ha completado el desarrollo del software.

C. En TDD, se enfoca en pruebas de rendimiento y no en pruebas unitarias.

D. En TDD, los casos de prueba son irrelevantes para el proceso de desarrollo.
Explicación
A. Es correcto. En TDD, se escribe primero un caso de prueba que guía el desarrollo del código, promoviendo un enfoque iterativo.
B. No es correcto. En TDD, las pruebas se escriben antes de desarrollar el código, no después.
C. No es correcto. TDD se centra en pruebas unitarias, no específicamente en pruebas de rendimiento.
D. No es correcto. Los casos de prueba son fundamentales en TDD, ya que guían el desarrollo del software.


Pregunta 3 de 12
¿Cuál de las siguientes actividades es un ejemplo del enfoque "desplazamiento hacia la izquierda (shift left)" en el proceso de desarrollo de software?


A. Realizar revisiones de código después de la finalización del desarrollo del software.

B. Involucrar al equipo de pruebas en las etapas iniciales del proyecto para definir criterios de aceptación.

C. Llevar a cabo pruebas de integración una vez completada la implementación del sistema.

D. Escribir la documentación del usuario sólo después de que se haya completado el desarrollo.
Explicación
A. No es correcto. Las revisiones de código tardías no son un ejemplo del enfoque de desplazamiento hacia la izquierda.
B. Es correcto. Involucrar al equipo de pruebas desde el inicio ayuda a identificar problemas temprano.
C. No es correcto. Las pruebas de integración tardías no reflejan el enfoque de desplazamiento hacia la izquierda.
D. No es correcto. La documentación tardía no se alinea con la filosofía del desplazamiento hacia la izquierda.


Pregunta 4 de 12
¿Cuál de las siguientes afirmaciones describe mejor cómo el enfoque de "desplazamiento hacia la izquierda" puede mejorar la calidad del software?


A. Permite la detección y corrección de defectos en etapas posteriores del ciclo de vida del desarrollo.

B. Facilita la integración continua y la entrega temprana de valor al cliente.

C. Aumenta la complejidad del proceso de desarrollo al introducir más pruebas en las fases iniciales.

D. Reduce la necesidad de documentación al aplicar más pruebas de usuario al final del ciclo.
Explicación
A. No es correcto. El enfoque de desplazamiento hacia la izquierda se centra en detectar y corregir defectos lo antes posible, no en etapas posteriores.
B. Es correcto. Este enfoque permite integrar y entregar software de valor al cliente más rápidamente, mejorando la calidad desde el inicio.
C. No es correcto. Aunque puede introducir más actividades de prueba al inicio, el objetivo es simplificar el proceso al mejorar la calidad inicial.
D. No es correcto. El desplazamiento hacia la izquierda no elimina la necesidad de documentación, sino que busca mejorar la calidad del software desde las fases tempranas.



Pregunta 5 de 12
¿Cuál de las siguientes afirmaciones describe mejor la importancia de las pruebas en el ciclo de vida del desarrollo de software (SDLC)?


A. Las pruebas se realizan solo al final del SDLC para verificar el producto final.

B. Las pruebas deben planificarse y realizarse a lo largo de todo el SDLC para detectar problemas temprano.

C. Las pruebas son opcionales y solo se necesitan si el cliente lo solicita.

D. Las pruebas se centran únicamente en la funcionalidad del software y no en otros aspectos.
Explicación
A. Incorrecto. Las pruebas deben integrarse en cada fase del SDLC, no solo al final.
B. Correcto. Planificar y realizar pruebas durante todo el SDLC ayuda a identificar y resolver problemas a tiempo.
C. Incorrecto. Las pruebas son fundamentales y no deben ser opcionales.
D. Incorrecto. Las pruebas deben abordar tanto la funcionalidad como otros aspectos como la usabilidad y el rendimiento.


Pregunta 6 de 12
¿Cuál de las siguientes afirmaciones sobre la gestión de pruebas es correcta?


A. La gestión de pruebas no es necesaria si el desarrollo se realiza en un entorno ágil.

B. La gestión de pruebas debe ser aplicada solo en las etapas finales del desarrollo.

C. La gestión de pruebas ayuda a planificar, monitorear y controlar el proceso de pruebas.

D. La gestión de pruebas es responsabilidad únicamente del equipo de desarrollo.
Explicación
A. Incorrecto. La gestión de pruebas es importante en todos los entornos, incluidos los ágiles.
B. Incorrecto. La gestión de pruebas debe ser continua a lo largo de todo el ciclo de vida del desarrollo.
C. Correcto. La gestión de pruebas es fundamental para una planificación y control adecuados.
D. Incorrecto. La gestión de pruebas es responsabilidad de todo el equipo, no solo del desarrollo.

Pregunta 7 de 12
¿Qué nivel de prueba corresponde mejor a la identificación de defectos relacionados con la interfaz entre diferentes módulos de un sistema?


A. Pruebas de aceptación

B. Pruebas de sistema

C. Pruebas de integración

D. Pruebas de componentes
Explicación
A. Incorrecto. Las pruebas de aceptación se centran en validar si el sistema cumple con los requisitos del cliente, no en la interfaz entre módulos.
B. Incorrecto. Las pruebas de sistema evalúan el sistema en su totalidad, pero no se enfocan específicamente en la interacción entre módulos.
C. Correcto. Las pruebas de integración se centran en verificar la comunicación y la interacción entre diferentes componentes o módulos del sistema.
D. Incorrecto. Las pruebas de componentes se centran en probar un solo módulo en aislamiento, no su interacción con otros.


Pregunta 8 de 12
¿Cuáles de las siguientes afirmaciones describen adecuadamente los niveles de prueba (1-4) y sus enfoques específicos (A-D)?

Pruebas realizadas para validar la funcionalidad completa del sistema en un entorno de producción simulado.
Pruebas que se centran en verificar que los módulos individuales funcionen correctamente.
Pruebas que aseguran que los diferentes módulos se integren y funcionen juntos.
Pruebas que involucran la validación de requisitos desde la perspectiva del usuario final.
Pruebas de sistema
Pruebas de componentes
Pruebas de integración
Pruebas de aceptación
Selecciona UNA opción.


A. A. 1A, 2B, 3C, 4D

B. B. 1C, 2A, 3D, 4B

C. C. 1D, 2C, 3A, 4B

D. D. 1B, 2D, 3A, 4C
Explicación
A. La afirmación 1 describe correctamente las pruebas de sistema (1A), que validan el sistema en su totalidad. La afirmación 2 se refiere a las pruebas de componentes (2B), donde se verifica la funcionalidad de módulos individuales. La 3 se relaciona con las pruebas de integración (3C), que se centran en la interacción entre módulos. La 4 se corresponde con las pruebas de aceptación (4D), donde se validan los requisitos desde la perspectiva del usuario final.
B. La opción B es incorrecta. La afirmación 1 no se asocia con las pruebas de integración (1C), sino con pruebas de sistema. La afirmación 2 describe correctamente las pruebas de componentes, pero la afirmación 3 no se relaciona correctamente con pruebas de aceptación.
C. La opción C es incorrecta. La afirmación 1 no describe las pruebas de aceptación (1D), sino que es un enfoque de pruebas de sistema. Las demás descripciones tampoco coinciden con los niveles de prueba correspondientes.
D. La opción D es incorrecta. La afirmación 1 no corresponde a pruebas de componentes (1B), sino a pruebas de sistema. Las demás descripciones también son incorrectas respecto a los niveles de prueba.


Pregunta 9 de 12
Un equipo de pruebas ha ejecutado un conjunto de pruebas sobre una nueva funcionalidad en una aplicación. En la primera ejecución, se encontraron defectos y se realizaron correcciones. En la segunda ejecución de pruebas, algunas de las pruebas se repitieron. ¿Cuál de las siguientes afirmaciones describe correctamente las pruebas realizadas?


A. Las pruebas que se repitieron son pruebas de confirmación, mientras que las pruebas de la nueva funcionalidad son pruebas de regresión.

B. Las pruebas de la nueva funcionalidad se consideran pruebas de confirmación y las pruebas repetidas son pruebas de regresión.

C. Las pruebas repetidas son pruebas de confirmación y las pruebas de la nueva funcionalidad son pruebas de regresión.

D. Todas las pruebas ejecutadas son pruebas de regresión.
Explicación
A. Incorrecto. Las pruebas que se repiten para verificar correcciones son pruebas de confirmación, no de regresión.
B. Incorrecto. Las pruebas de la nueva funcionalidad no son pruebas de confirmación; son pruebas de verificación.
C. Correcto. Las pruebas repetidas validan correcciones, clasificándose como pruebas de confirmación, mientras que las de nueva funcionalidad se consideran pruebas de regresión.
D. Incorrecto. No todas las pruebas pueden clasificarse como pruebas de regresión; las pruebas de nueva funcionalidad no lo son.



Pregunta 10 de 12
Un equipo de desarrollo ha corregido varios defectos en una nueva versión de la aplicación. Se ejecutaron los siguientes casos de prueba en la versión anterior:

Prueba	Resultado en la versión anterior
TC1	Falló
TC2	Pasó
TC3	Falló
Después de las correcciones, el equipo ejecuta nuevamente los casos de prueba TC1, TC2 y TC3. ¿Cuáles de estas ejecuciones se consideran pruebas de regresión?


A. TC1 y TC3

B. TC2 y TC3

C. TC1 y TC2

D. Solo TC2
Explicación
A. Incorrecto. TC1 y TC3 fallaron en la version anterior, por lo que re-ejecutarlos constituye pruebas de confirmacion (re-testing): se verifica que el defecto haya sido corregido. No son pruebas de regresion.
B. Incorrecto. TC2 si es una prueba de regresion, pero TC3 fallo en la version anterior y es por tanto una prueba de confirmacion. La combinacion TC2+TC3 no es correcta.
C. Incorrecto. TC2 es una prueba de regresion, pero TC1 fallo en la version anterior y es una prueba de confirmacion, no de regresion. Ademas, esta opcion era identica a la opcion D, lo que constituia un defecto estructural en la pregunta.
D. Correcto. TC2 paso en la version anterior. Al re-ejecutarlo despues de las correcciones, se verifica que los cambios no hayan introducido nuevos defectos en funcionalidad que ya funcionaba. Esto es exactamente la definicion de prueba de regresion segun CTFL v4.0 sect. 2.2.3. TC1 y TC3, que fallaron antes, son pruebas de confirmacion.



Pregunta 11 de 12
¿Cuál de las siguientes afirmaciones describe mejor un beneficio de realizar retrospectivas después de cada iteración en un equipo de trabajo?


A. Las retrospectivas aseguran que todos los miembros del equipo estén de acuerdo en las decisiones tomadas durante la iteración.

B. Las retrospectivas permiten identificar y abordar problemas en el proceso de trabajo, facilitando así mejoras continuas.

C. Las retrospectivas son una oportunidad para que el equipo celebre sus éxitos sin enfocarse en áreas de mejora.

D. Las retrospectivas son solo una formalidad que se realiza para cumplir con las exigencias del marco ágil.
Explicación
A. No es correcto. Aunque es importante tener alineación, el objetivo principal de las retrospectivas es la mejora del proceso, no necesariamente el acuerdo sobre decisiones.
B. Es correcto. Las retrospectivas son cruciales para identificar problemas y facilitar la mejora continua en el proceso de trabajo del equipo.
C. No es correcto. Aunque celebrar éxitos es parte de la retrospectiva, el enfoque principal debe ser identificar áreas de mejora.
D. No es correcto. Las retrospectivas son una práctica fundamental para la mejora continua y no deben considerarse una mera formalidad.



Pregunta 12 de 12
¿Cuál de las siguientes afirmaciones describe mejor el propósito de las retrospectivas en un equipo ágil?


A. Las retrospectivas se utilizan principalmente para planificar las próximas tareas y asignar responsabilidades a los miembros del equipo.

B. Las retrospectivas ayudan a identificar qué funcionó y qué no, permitiendo al equipo hacer ajustes en su proceso para mejorar continuamente.

C. Las retrospectivas son reuniones donde se presentan los resultados finales del proyecto a los interesados.

D. Las retrospectivas son fundamentales para evaluar la satisfacción del cliente con el producto entregado.
Explicación
A. No es correcto. Aunque se pueden discutir tareas futuras, el enfoque principal de las retrospectivas es la reflexión sobre el proceso y no la asignación de tareas.
B. Es correcto. El principal objetivo de las retrospectivas es identificar áreas de mejora en el proceso de trabajo del equipo, fomentando la mejora continua.
C. No es correcto. Las retrospectivas no se centran en presentar resultados, sino en reflexionar sobre el proceso del equipo.
D. No es correcto. La satisfacción del cliente se evalúa en otras reuniones, mientras que las retrospectivas se enfocan en la mejora del proceso interno del equipo.`;

const blocks = raw.split(/Pregunta \d+ de 12/i).filter(b => b.trim().length > 0);

const parsed = blocks.map(block => {
  const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let questionText = "";
  let options = [];
  let explanationText = "";
  let mode = 'q'; // q, options, exp

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^[A-D]\.\s/)) {
      if (mode === 'q') mode = 'options';
      if (mode === 'options') {
        options.push(line);
        continue;
      }
    }
    if (line.startsWith('Explicación')) {
      mode = 'exp';
      continue;
    }

    if (mode === 'q') {
      questionText += line + " ";
    } else if (mode === 'exp') {
      explanationText += line + " ";
    }
  }

  let correctAnswer = "";
  const expA = explanationText.match(/A\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta|Correcto.)/i);
  const expB = explanationText.match(/B\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta|Correcto.)/i);
  const expC = explanationText.match(/C\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta|Correcto.)/i);
  const expD = explanationText.match(/D\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta|Correcto.)/i);

  if (expA) correctAnswer = "A";
  else if (expB) correctAnswer = "B";
  else if (expC) correctAnswer = "C";
  else if (expD) correctAnswer = "D";

  questionText = questionText.replace(/Selecciona UNA opción\./g, "").trim();

  let topic = "1";
  const qLower = questionText.toLowerCase() + explanationText.toLowerCase();
  if (qLower.includes('caja negra') || qLower.includes('partición') || qLower.includes('valor límite') || qLower.includes('decisiones') || qLower.includes('transicion') || qLower.includes('caja blanca') || qLower.includes('sentencia') || qLower.includes('exploratoria') || qLower.includes('atdd') || qLower.includes('predicción')) topic = "4";
  else if (qLower.includes('revisión') || qLower.includes('inspección') || qLower.includes('estática')) topic = "3";
  else if (qLower.includes('planificación') || qLower.includes('estimación') || qLower.includes('riesgo') || qLower.includes('configuración') || qLower.includes('defecto') || qLower.includes('informe') || qLower.includes('líder de pruebas')) topic = "5";
  else if (qLower.includes('sdlc') || qLower.includes('ágil') || qLower.includes('tdd') || qLower.includes('desplazamiento') || qLower.includes('retrospectiva') || qLower.includes('nivel de prueba') || qLower.includes('confirmación') || qLower.includes('integración') || qLower.includes('sistema')) topic = "2";

  return {
    id: "q_batch3_" + Math.random().toString(36).substr(2, 9),
    topic: topic,
    question: questionText,
    options: options.map(o => o.substring(3).trim()),
    correctAnswer: correctAnswer,
    explanation: explanationText.trim()
  };
});

fs.writeFileSync('parsed_batch3.json', JSON.stringify(parsed, null, 2));
console.log(`Parsed ${parsed.length} questions.`);
