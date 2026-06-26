const fs = require('fs');

const raw = `Pregunta 1 de 40
¿Cuál de los siguientes es un objetivo común de la prueba de software?


A. Confirmar que el software cumple con los requisitos especificados.

B. Asegurar que no haya errores en el código fuente.

C. Demostrar que el sistema es completamente seguro contra ataques externos.

D. Verificar que todos los usuarios estén satisfechos con el producto.
Explicación
A. Es correcto. Uno de los objetivos de la prueba es confirmar que el software cumple con los requisitos especificados, validando su funcionalidad.
B. No es correcto. Es imposible garantizar que no haya defectos en el código fuente, ya que siempre pueden existir defectos no detectados.
C. No es correcto. La seguridad total es un objetivo inalcanzable; las pruebas pueden identificar vulnerabilidades, pero no garantizan la inmunidad total.
D. No es correcto. La satisfacción del usuario es un objetivo importante, pero no es un objetivo directo de la prueba de software.


Pregunta 2 de 40
Una empresa de software desarrolla aplicaciones para el sector financiero. El equipo de dirección pregunta al jefe de pruebas por qué las pruebas son esenciales en su contexto, más allá de encontrar defectos.

¿Cuál de las siguientes razones describe MEJOR por qué las pruebas son necesarias en este contexto?

Selecciona UNA opción.


A. Para demostrar que el software no tiene ningún defecto antes de su entrega.

B. Para proporcionar confianza sobre el nivel de calidad del software y cumplir con los requisitos regulatorios del sector.

C. Para reemplazar el proceso de revisión de requisitos y reducir la documentación.

D. Para asegurar que todos los desarrolladores conozcan el código del sistema completo.
Explicación
A. Incorrecto. El Principio 1 del CTFL v4.0 establece que las pruebas demuestran la presencia de defectos, no su ausencia. Es imposible garantizar que no existan defectos.
B. Correcto. El Programa de Estudio CTFL v4.0 §1.2.1 indica que las pruebas son necesarias para proporcionar una evaluación de la calidad del software y para cumplir con requisitos contractuales o regulatorios, lo cual es especialmente relevante en el sector financiero.
C. Incorrecto. Las pruebas complementan las revisiones; no las reemplazan ni reducen la necesidad de documentación.
D. Incorrecto. El propósito de las pruebas no es la capacitación del equipo de desarrollo.



Pregunta 3 de 40
Estás evaluando la calidad de las pruebas realizadas en un software antes de su lanzamiento. Observas que aunque se han ejecutado muchas pruebas, aún persisten defectos significativos. ¿Cuál de los siete principios de prueba se refleja en esta situación?


A. Las pruebas exhaustivas son imposibles

B. Los defectos se agrupan

C. Las pruebas se desgastan

D. Falacia de la ausencia de defectos
Explicación
A. No es correcto. Este principio habla sobre la imposibilidad de probar todas las combinaciones posibles de entradas, no sobre la agrupación de defectos.
B. Es correcto. Este principio indica que un número reducido de componentes puede contener la mayoría de los defectos, lo que puede explicar por qué persisten defectos significativos.
C. No es correcto. Este principio se refiere a la disminución de efectividad de las pruebas repetidas, pero no aborda la persistencia de defectos.
D. No es correcto. Este principio trata sobre la creencia errónea de que un sistema sin defectos es una garantía de calidad, no sobre la relación entre pruebas y defectos.


Pregunta 4 de 40
Estás participando en un proyecto de software que desarrolla una plataforma de e-learning. El equipo ha decidido llevar a cabo pruebas de regresión en la versión actual del sistema.

¿Cuál de las siguientes actividades se realiza durante la fase de planificación de pruebas?

Selecciona UNA opción.


A. Definir qué funcionalidades se probarán en la próxima iteración.

B. Ejecutar casos de prueba para verificar que la funcionalidad de la plataforma de e-learning funcione.

C. Revisar los resultados de las pruebas y documentar los defectos encontrados.

D. Analizar los requisitos del sistema para identificar casos de prueba.
Explicación
A. Es correcto. Definir las funcionalidades que se probarán es parte de la planificación de pruebas.
B. No es correcto. La ejecución de casos de prueba es parte de la fase de ejecución de pruebas, no de planificación.
C. No es correcto. Revisar resultados y documentar defectos se realiza tras la ejecución de pruebas.
D. No es correcto. Analizar requisitos para identificar casos de prueba es parte del análisis de pruebas, no de la planificación.


Pregunta 5 de 40
¿Cuáles de los siguientes elementos son factores que pueden afectar la estrategia de pruebas en un proyecto de software?

El perfil del equipo de pruebas
La complejidad del sistema a probar
La disponibilidad de recursos de hardware
Las técnicas de gestión de proyectos utilizadas
Selecciona UNA opción.


A. i, ii y iii son factores que afectan la estrategia de pruebas

B. ii, iii y iv son factores que afectan la estrategia de pruebas

C. i, iii y iv son factores que afectan la estrategia de pruebas

D. i, ii, iii y iv son factores que afectan la estrategia de pruebas
Explicación
A. i. Es verdadero. El perfil del equipo de pruebas puede influir en cómo se llevan a cabo las pruebas. ii. Es verdadero. La complejidad del sistema afecta directamente el enfoque y las herramientas utilizadas en las pruebas. iii. Es verdadero. La disponibilidad de recursos de hardware es crucial para la ejecución de pruebas. Por lo tanto, todos son factores que afectan la estrategia de pruebas.
B. ii. Es verdadero. La complejidad del sistema afecta el enfoque de pruebas. iii. Es verdadero. La disponibilidad de recursos de hardware es importante. iv. Es verdadero. Las técnicas de gestión de proyectos pueden influir, pero no cubre todos los aspectos. Por tanto, no es la opción más completa.
C. i. Es verdadero. El perfil del equipo de pruebas es importante. iii. Es verdadero. La disponibilidad de recursos es crucial. iv. Es verdadero. Las técnicas de gestión de proyectos pueden influir, pero no son tan relevantes como los otros factores mencionados. Por lo tanto, no cubre todos los aspectos relevantes.
D. i. Es verdadero. El perfil del equipo de pruebas influye en la estrategia de pruebas. ii. Es verdadero. La complejidad del sistema a probar impacta la estrategia. iii. Es verdadero. La disponibilidad de recursos de hardware es fundamental. iv. Es verdadero. Las técnicas de gestión de proyectos también tienen un impacto. Por lo tanto, la respuesta correcta es D.


Pregunta 6 de 40
¿Cuál de las siguientes actividades es TÍPICA de un rol de gerente de pruebas?


A. Desarrollar casos de prueba

B. Gestionar el equipo de pruebas

C. Ejecutar pruebas automatizadas

D. Realizar análisis de defectos
Explicación
A. No es correcto. Desarrollar casos de prueba es una tarea que generalmente realiza un probador.
B. Es correcto. Gestionar el equipo de pruebas es una responsabilidad clave del gerente de pruebas.
C. No es correcto. Ejecutar pruebas automatizadas es una tarea que realizan los probadores, no necesariamente el gerente.
D. No es correcto. Aunque el gerente puede estar involucrado, el análisis de defectos es responsabilidad de los probadores.

Pregunta 7 de 40
¿Cuál de las siguientes habilidades es esencial para un probador al evaluar la calidad de un producto de software?

Comunicación efectiva
Conocimiento técnico
Capacidad de análisis
Gestión del tiempo
Selecciona UNA opción.


A. i y ii son esenciales; iii y iv no lo son

B. iii y iv son esenciales; i y ii no lo son

C. ii y iii son esenciales; i y iv no lo son

D. i y iii son esenciales; ii y iv no lo son
Explicación
A. Si bien la comunicación efectiva y el conocimiento técnico son importantes, no son las más esenciales en la evaluación de calidad, ya que el análisis y la gestión del tiempo son clave en el proceso de prueba.
B. Aunque la capacidad de análisis y la gestión del tiempo son importantes, no se puede ignorar la necesidad de habilidades de comunicación y conocimiento técnico para evaluar correctamente un producto.
C. El conocimiento técnico es crucial, pero no se puede llevar a cabo una evaluación de calidad sin habilidades de comunicación y capacidad de análisis, que son igualmente esenciales.
D. Correcto. La comunicación efectiva y la capacidad de análisis son habilidades fundamentales para un probador, permitiéndole interpretar y evaluar correctamente los resultados de las pruebas.


Pregunta 8 de 40
¿Cuál es una ventaja clave del enfoque de equipo completo en el proceso de desarrollo de software?


A. Promueve la comunicación aislada entre los probadores y los desarrolladores.

B. Facilita la colaboración entre todas las partes interesadas desde el inicio del proyecto.

C. Aumenta la duración de las pruebas al requerir revisiones extensas.

D. Elimina la necesidad de una estrategia de pruebas bien definida.
Explicación
A. No es correcto. El enfoque de equipo completo busca mejorar la comunicación entre todos los miembros del equipo, no aislar a los probadores.
B. Es correcto. Este enfoque permite que probadores, desarrolladores y representantes de negocio colaboren desde el principio, lo que mejora la calidad del producto final.
C. No es correcto. Si bien puede haber revisiones, el enfoque de equipo completo tiene como objetivo ser más eficiente y no necesariamente aumentar la duración de las pruebas.
D. No es correcto. Una buena estrategia de pruebas es esencial en un enfoque de equipo completo, ya que ayuda a alinear los objetivos de calidad entre los miembros del equipo.


Pregunta 9 de 40
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


Pregunta 10 de 40
¿Cuál de las siguientes descripciones se relaciona MEJOR con el desarrollo guiado por pruebas (TDD)?


A. En TDD, las pruebas se escriben antes del código y se utilizan para guiar el desarrollo.

B. En TDD, los desarrolladores crean primero el código y luego los casos de prueba correspondientes.

C. En TDD, las pruebas solo se realizan al final del ciclo de desarrollo para verificar el producto.

D. En TDD, se utilizan casos de prueba de aceptación como base para el diseño de código.
Explicación
A. Es correcto. En TDD, se escriben pruebas antes de implementar el código para asegurar que el desarrollo cumpla con los requisitos desde el inicio.
B. No es correcto. En TDD, el enfoque es primero escribir las pruebas y luego desarrollar el código que las pasa.
C. No es correcto. TDD enfatiza la creación de pruebas desde el inicio, no al final del ciclo.
D. No es correcto. Aunque se pueden usar pruebas de aceptación, TDD se enfoca principalmente en pruebas unitarias escritas antes del código.


Pregunta 11 de 40
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


Pregunta 12 de 40
¿Cuál es un beneficio clave de realizar retrospectivas en un equipo de trabajo?


A. Permiten al equipo ignorar los problemas de comunicación que pueden surgir durante el proyecto.

B. Ayudan a identificar y promover prácticas que han resultado efectivas en el pasado y que se pueden aplicar en futuros ciclos de trabajo.

C. Son una formalidad que se debe cumplir sin generar un impacto real en el proyecto.

D. Facilitan que los líderes del equipo asuman el control total del proceso sin considerar las opiniones del resto.
Explicación
A. No es correcto. Las retrospectivas ayudan a abordar y mejorar la comunicación dentro del equipo, no a ignorarla.
B. Es correcto. Identificar y aplicar prácticas que han sido efectivas en el pasado es uno de los propósitos de las retrospectivas, contribuyendo a la mejora continua.
C. No es correcto. Aunque algunos pueden verlas como una formalidad, su verdadero propósito es generar discusiones significativas que impacten el proceso.
D. No es correcto. Las retrospectivas están diseñadas para ser un espacio colaborativo donde todas las voces sean escuchadas, no para que un líder controle el proceso.


Pregunta 13 de 40
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


A. a) 1A, 2B, 3C, 4D

B. b) 1C, 2A, 3D, 4B

C. c) 1D, 2C, 3A, 4B

D. d) 1B, 2D, 3A, 4C
Explicación
A. La afirmación 1 describe correctamente las pruebas de sistema (1A), que validan el sistema en su totalidad. La afirmación 2 se refiere a las pruebas de componentes (2B), donde se verifica la funcionalidad de módulos individuales. La 3 se relaciona con las pruebas de integración (3C), que se centran en la interacción entre módulos. La 4 se corresponde con las pruebas de aceptación (4D), donde se validan los requisitos desde la perspectiva del usuario final.
B. La opción B es incorrecta. La afirmación 1 no se asocia con las pruebas de integración (1C), sino con pruebas de sistema. La afirmación 2 describe correctamente las pruebas de componentes, pero la afirmación 3 no se relaciona correctamente con pruebas de aceptación.
C. La opción C es incorrecta. La afirmación 1 no describe las pruebas de aceptación (1D), sino que es un enfoque de pruebas de sistema. Las demás descripciones tampoco coinciden con los niveles de prueba correspondientes.
D. La opción D es incorrecta. La afirmación 1 no corresponde a pruebas de componentes (1B), sino a pruebas de sistema. Las demás descripciones también son incorrectas respecto a los niveles de prueba.



Pregunta 14 de 40
Un equipo de desarrollo ha corregido varios defectos en una nueva versión de la aplicación. Se ejecutaron los siguientes casos de prueba en la versión anterior:

Prueba	Resultado en la versión anterior
TC1	Falló
TC2	Pasó
TC3	Falló
Después de las correcciones, el equipo ejecuta nuevamente los casos de prueba TC1, TC2 y TC3. ¿Cuáles de estas ejecuciones se consideran pruebas de regresión?


A. TC1

B. TC2

C. TC3

D. TC1 y TC3
Explicación
A. Incorrecto. TC1 falló en la versión anterior, por lo que su re-ejecución se considera una prueba de confirmación (re-testing), ya que verifica que el defecto original ha sido corregido con éxito (syllabus 2.2.3).
B. Correcto. TC2 pasó en la versión anterior. Su re-ejecución después de las correcciones se considera una prueba de regresión, ya que verifica que los cambios no han introducido nuevos defectos ni han afectado negativamente una funcionalidad que previamente funcionaba correctamente (syllabus sección 2.2.3).
C. Incorrecto. TC3 falló previamente, por lo que su re-ejecución corresponde a una prueba de confirmación, no de regresión.
D. Incorrecto. Tanto TC1 como TC3 son pruebas de confirmación (fallaron antes); ninguna de ellas es una prueba de regresión.

Pregunta 15 de 40
¿Cuál de las siguientes afirmaciones es VERDADERA sobre las pruebas estáticas?


A. Las pruebas estáticas ayudan a reducir el tiempo de desarrollo al encontrar defectos en las etapas iniciales del ciclo de vida del software.

B. Las pruebas estáticas siempre detectan todos los tipos de defectos en el código fuente.

C. Las pruebas estáticas son más efectivas que las pruebas dinámicas en la validación de la funcionalidad del software.

D. Las pruebas estáticas no pueden ser utilizadas para mejorar la calidad de la documentación del proyecto.
Explicación
A. Es correcto. Las pruebas estáticas permiten detectar defectos antes de la ejecución del software, lo cual reduce el tiempo y costo en las fases posteriores.
B. No es correcto. Aunque son útiles, las pruebas estáticas no garantizan la detección de todos los defectos.
C. No es correcto. Las pruebas dinámicas son esenciales para validar la funcionalidad, mientras que las estáticas tienen un enfoque diferente.
D. No es correcto. Las pruebas estáticas pueden mejorar la calidad de la documentación al identificar inconsistencias y errores.


Pregunta 16 de 40
¿Qué ventaja proporciona la retroalimentación temprana y frecuente de las partes interesadas durante el desarrollo del software?


A. Fomenta la innovación en las soluciones propuestas.

B. Reduce la posibilidad de retrabajo al identificar problemas a tiempo.

C. Aumenta la duración del ciclo de vida del producto.

D. Mejora la satisfacción del equipo de desarrollo.
Explicación
A. No es correcto. Aunque la retroalimentación puede fomentar la innovación, no es su principal beneficio en este contexto.
B. Es correcto. La retroalimentación temprana y frecuente ayuda a identificar problemas antes en el proceso, lo que reduce la posibilidad de retrabajo.
C. No es correcto. La retroalimentación temprana tiende a acortar el ciclo de vida del producto al resolver problemas rápidamente.
D. No es correcto. Aunque la satisfacción del equipo puede mejorar, no es el beneficio principal de la retroalimentación temprana.


Pregunta 17 de 40
En su organización, se llevan a cabo revisiones que tienen las siguientes características:

No hay un rol específico asignado para el moderador.
El objetivo es encontrar defectos y mejorar el producto.
Los participantes discuten abiertamente sus opiniones.
No se requiere documentación formal al final.
¿Qué tipo de revisión se está llevando a cabo?


A. Revisión informal

B. Revisión técnica

C. Inspección

D. Revisión guiada
Explicación
A. Las características mencionadas son típicas de una revisión informal, donde no se requiere un moderador y la documentación es mínima o inexistente.
B. Las revisiones técnicas generalmente incluyen un moderador y un enfoque más estructurado, lo cual no se menciona aquí.
C. En una inspección, se espera una documentación formal y un enfoque metódico para encontrar defectos, lo cual no es el caso aquí.
D. Las revisiones guiadas incluyen un moderador y un enfoque en la evaluación de la calidad, lo que no se aplica a la descripción dada.


Pregunta 18 de 40
¿Cuál de los siguientes factores es esencial para asegurar la efectividad de una revisión?


A. Contar con un facilitador que guíe el proceso de revisión.

B. Permitir que solo los expertos participen en todas las revisiones.

C. Realizar la revisión de manera improvisada sin preparación previa.

D. Limitar el tiempo de discusión para no extenderse demasiado.
Explicación
A. Es correcto. Un facilitador ayuda a estructurar la revisión y mantener el enfoque.
B. No es correcto. Incluir a diferentes niveles de experiencia puede enriquecer la discusión.
C. No es correcto. La preparación es fundamental para identificar problemas de manera efectiva.
D. No es correcto. Aunque el tiempo es un factor, la discusión abierta y completa es prioritaria.

Pregunta 19 de 40
¿Cuál de las siguientes afirmaciones describe mejor una técnica de prueba de caja blanca?


A. Se basa en el conocimiento del funcionamiento interno del software y su estructura de código.

B. Se utiliza principalmente para evaluar la experiencia del usuario y la usabilidad del sistema.

C. Los casos de prueba se diseñan sin tener en cuenta la lógica interna del sistema.

D. Se centra en la identificación de defectos en los requerimientos mediante pruebas de interfaz.
Explicación
A. Es correcto. Las técnicas de prueba de caja blanca se fundamentan en el conocimiento del código y la estructura interna del software, permitiendo a los probadores diseñar casos de prueba que exploren esta lógica.
B. No es correcto. Esta descripción se asocia más con las pruebas basadas en la experiencia, que evalúan la usabilidad y el comportamiento del usuario.
C. No es correcto. Esta afirmación es característica de las pruebas de caja negra, donde los diseñadores de pruebas no consideran la estructura interna del software.
D. No es correcto. Esta característica también se relaciona con las pruebas de caja negra, que se enfocan en los requerimientos y la interfaz sin considerar la lógica interna.


Pregunta 20 de 40
Estás probando un sistema de calificaciones que acepta puntajes en una escala de 0-100. El sistema clasifica los puntajes de la siguiente manera:

0-59: Reprobado
60-69: Aprobado
70-89: Bueno
90-100: Excelente
Usando partición de equivalencia, ¿cuál es el número MÍNIMO de casos de prueba necesarios para lograr 100% de cobertura de las particiones válidas?

Selecciona UNA opción.


A. 3

B. 4

C. 5

D. 6
Explicación
A. No es correcto. 3 casos de prueba no cubrirían las 4 particiones válidas identificadas.
B. Es correcto. Se necesitan 4 casos de prueba para cubrir las 4 particiones válidas identificadas: una para Reprobado (0-59), una para Aprobado (60-69), una para Bueno (70-89) y una para Excelente (90-100). Según el syllabus, para lograr 100% de cobertura con partición de equivalencia, los casos de prueba deben ejercer todas las particiones identificadas cubriendo cada partición al menos una vez.
C. No es correcto. 5 casos de prueba serían más de los necesarios para cubrir las particiones válidas mínimas.
D. No es correcto. 6 casos de prueba exceden el número mínimo requerido.


Pregunta 21 de 40
Para un campo 'Edad' que acepta valores de 16 a 65 años, tu conjunto de pruebas incluye los siguientes valores: 15, 16, 17, 64, 65, 66. ¿Qué porcentaje de cobertura de Análisis de Valores Límite (AVL) de 3 valores logras?

Selecciona UNA opción.


A. 50%

B. 67%

C. 83%

D. 100%
Explicación
A. No es correcto. 50% sería 3 de 6 elementos cubiertos.
B. No es correcto. 67% sería 4 de 6 elementos cubiertos.
C. No es correcto. 83% sería 5 de 6 elementos cubiertos.
D. Es correcto. En BVA de 3 valores, para cada valor límite (16 y 65) hay tres elementos de cobertura: el valor límite y sus dos vecinos. Para el límite 16: 15, 16, 17. Para el límite 65: 64, 65, 66. El conjunto de pruebas cubre los 6 elementos requeridos (15, 16, 17, 64, 65, 66), por tanto 6/6 = 100%.


Pregunta 22 de 40
En una tabla de decisiones para un sistema de aprobación de préstamos, tienes las siguientes condiciones:

Edad ≥ 18 años
Ingresos ≥ $30,000
Historial crediticio bueno
Empleado por ≥ 2 años
Si quisieras minimizar la tabla debido a la gran cantidad de combinaciones, ¿cuál sería la mejor estrategia?

Selecciona UNA opción.


A. Eliminar todas las condiciones menos importantes

B. Usar un enfoque basado en riesgo para reducir las reglas a probar

C. Combinar todas las condiciones en una sola regla

D. Crear múltiples tablas pequeñas separadas
Explicación
A. No es correcto. Eliminar condiciones puede dejar lagunas importantes en la cobertura.
B. Es correcto. Según el syllabus, 'si hay muchas condiciones, el ejercicio de todas las reglas de decisión puede llevar mucho tiempo, ya que el número de reglas crece exponencialmente con el número de condiciones. En tal caso, para reducir el número de reglas que se deben ejercer, se puede utilizar una tabla de decisiones minimizada o un enfoque basado en el riesgo.'
C. No es correcto. Combinar todas las condiciones no resuelve el problema de la complejidad.
D. No es correcto. Múltiples tablas separadas no abordan el problema de las combinaciones exponenciales.

Pregunta 23 de 40
¿Cuál de las siguientes afirmaciones sobre los criterios de cobertura en pruebas de transición de estado es CORRECTA?

Selecciona UNA opción.


A. Cobertura de todos los estados es más fuerte que cobertura de transiciones válidas

B. Cobertura de transiciones válidas garantiza cobertura completa de todos los estados

C. Cobertura de todas las transiciones incluye solo transiciones válidas

D. Para lograr la cobertura de transiciones válidas se debe probar solo una transición por caso de prueba
Explicación
A. No es correcto. Cobertura de todos los estados es más débil que cobertura de transiciones válidas.
B. Es correcto. Según el syllabus: 'Lograr una cobertura de transiciones válidas completa garantiza una cobertura completa en todos los estados.' Esto se debe a que para ejercitar todas las transiciones válidas necesariamente se deben visitar todos los estados.
C. No es correcto. Cobertura de todas las transiciones incluye tanto transiciones válidas como inválidas.
D. No es correcto. Un caso de prueba puede y generalmente cubre múltiples transiciones en secuencia.

Pregunta 24 de 40
¿Cuál de las siguientes afirmaciones es verdadera respecto a la cobertura de sentencias en pruebas de software?


A. La cobertura de sentencias garantiza que todos los casos de prueba han encontrado defectos.

B. Lograr una cobertura de sentencias del 100% significa que se han ejecutado todas las sentencias del código al menos una vez.

C. La cobertura de sentencias es irrelevante si se realizan pruebas funcionales exhaustivas.

D. Una cobertura de sentencias del 100% asegura que no hay bucles en el código.
Explicación
A. No es correcto. La cobertura de sentencias indica qué partes del código han sido ejecutadas, pero no garantiza que todos los defectos hayan sido encontrados.
B. Es correcto. Una cobertura de sentencias del 100% significa que cada sentencia en el código ha sido ejecutada al menos una vez durante las pruebas.
C. No es correcto. La cobertura de sentencias proporciona información valiosa sobre qué partes del código han sido probadas, incluso en pruebas funcionales.
D. No es correcto. La cobertura de sentencias no puede determinar la existencia de bucles, ya que estos pueden no ser ejecutados aunque se logre el 100% de cobertura.

Pregunta 25 de 40
¿Cuál de las siguientes afirmaciones describe mejor una ventaja de las pruebas de caja blanca?


A. Las pruebas de caja blanca permiten verificar la lógica interna del código y su flujo de ejecución.

B. Las pruebas de caja blanca son útiles para validar la experiencia del usuario en la interfaz gráfica.

C. Las pruebas de caja blanca son más efectivas que las pruebas de caja negra en la identificación de requisitos funcionales.

D. Las pruebas de caja blanca requieren menos tiempo para desarrollarse que las pruebas de caja negra.
Explicación
A. Es correcto. Una de las principales ventajas de las pruebas de caja blanca es que permite examinar y verificar la lógica interna del código y cómo fluye la ejecución a través de él.
B. No es correcto. Las pruebas de caja blanca se enfocan en la lógica del código, no en la experiencia del usuario que evalúan las pruebas de caja negra.
C. No es correcto. Las pruebas de caja blanca no son necesariamente más efectivas para identificar requisitos funcionales que las pruebas de caja negra, que están diseñadas para este propósito.

Pregunta 26 de 40
¿Cuál de las siguientes afirmaciones SE REFIERA a la predicción de errores en un proceso de prueba?


A. La predicción de errores se basa únicamente en métricas cuantitativas de defectos anteriores sin considerar el contexto del desarrollo.

B. La predicción de errores implica identificar las áreas del software que tienen más probabilidades de contener defectos, basándose en el historial de errores y la complejidad del código.

C. La predicción de errores requiere que los testers realicen pruebas unitarias en todas las funciones antes de poder predecir errores.

D. La predicción de errores es un proceso que solo los desarrolladores pueden realizar, ya que ellos conocen mejor su código.
Explicación
A. No es correcto. Aunque las métricas cuantitativas son útiles, la predicción de errores también considera el contexto y la experiencia previa para ser efectiva.
B. Es correcto. La predicción de errores implica usar el historial de errores junto con factores como la complejidad del código para identificar áreas problemáticas.
C. No es correcto. La predicción de errores no depende de realizar pruebas unitarias, sino de analizar patrones de defectos anteriores.
D. No es correcto. La predicción de errores es una tarea que también puede realizarse por testers, quienes pueden aportar una perspectiva diferente sobre las áreas de riesgo.

Pregunta 27 de 40
Un equipo de desarrollo está creando una aplicación móvil innovadora, y se ha decidido utilizar pruebas exploratorias debido a la falta de documentación. ¿Cuál de las siguientes afirmaciones sobre las pruebas exploratorias es CORRECTA?


A. Las pruebas exploratorias son siempre menos efectivas que las pruebas basadas en requisitos.

B. Las pruebas exploratorias permiten a los testers adaptarse rápidamente a cambios en el software.

C. Las pruebas exploratorias requieren un plan de pruebas detallado antes de realizarse.

D. Las pruebas exploratorias no son adecuadas para aplicaciones complejas.
Explicación
A. No es correcto. Las pruebas exploratorias pueden ser muy efectivas, especialmente en entornos donde los requisitos son ambiguos o cambian con frecuencia.
B. Es correcto. Las pruebas exploratorias permiten a los testers adaptarse y responder a los cambios del software de manera más flexible.
C. No es correcto. Aunque puede haber un enfoque general, las pruebas exploratorias se caracterizan por no depender de un plan de pruebas riguroso y detallado.
D. No es correcto. Las pruebas exploratorias pueden ser muy útiles en aplicaciones complejas al permitir una exploración más dinámica y creativa.

Pregunta 28 de 40
¿Cuál de las siguientes afirmaciones es la MEJOR para describir cómo se pueden estructurar los criterios de aceptación en una historia de usuario?


A. Definidos únicamente por el equipo de desarrollo, sin necesidad de revisión por los interesados.

B. Redactados en un formato claro y conciso que facilite la comprensión por parte de todos los interesados involucrados.

C. Creando una lista extensa de requerimientos técnicos que deben cumplirse para la entrega de la historia de usuario.

D. Establecidos en función de las expectativas personales de los miembros del equipo, sin considerar los objetivos del proyecto.
Explicación
A. No es correcto. Los criterios de aceptación deben ser revisados y acordados por todos los interesados, no solo por el equipo de desarrollo.
B. Es correcto. Un formato claro y conciso ayuda a que todos los interesados comprendan lo que se necesita para considerar que la historia de usuario está completa.
C. No es correcto. Aunque los requerimientos técnicos pueden ser importantes, los criterios de aceptación deben centrarse en las condiciones de satisfacción del usuario, no en una lista técnica exhaustiva.
D. No es correcto. Los criterios de aceptación deben alinearse con los objetivos del proyecto y las necesidades del usuario, no basarse en expectativas individuales.

Pregunta 29 de 40
Durante un taller de especificación ATDD, el equipo identifica ambigüedades en una historia de usuario sobre procesamiento de pagos. ¿Cuál es la acción MÁS apropiada según el enfoque ATDD?

Selecciona UNA opción.


A. El probador debe crear casos de prueba que cubran todas las interpretaciones posibles

B. Resolver las ambigüedades durante el taller antes de crear los casos de prueba

C. Postponer la creación de casos de prueba hasta que el desarrollo esté completo

D. Crear casos de prueba solo para los escenarios más probables
Explicación
A. No es correcto. Crear casos para todas las interpretaciones sin resolver las ambigüedades puede llevar a casos conflictivos o incorrectos.
B. Es correcto. Según el syllabus, durante el taller de especificación 'incompletitud, ambigüedades o defectos en la historia del usuario se resuelven durante este proceso' antes de proceder a crear los casos de prueba. Esto es fundamental en ATDD para asegurar que todos tengan la misma comprensión.

Pregunta 30 de 40
Durante un taller de especificación ATDD, el equipo identifica ambigüedades en una historia de usuario sobre procesamiento de pagos. ¿Cuál es la acción MÁS apropiada según el enfoque ATDD?

Selecciona UNA opción.


A. El probador debe crear casos de prueba que cubran todas las interpretaciones posibles

B. Resolver las ambigüedades durante el taller antes de crear los casos de prueba

C. Postponer la creación de casos de prueba hasta que el desarrollo esté completo

D. Crear casos de prueba solo para los escenarios más probables
Explicación
A. No es correcto. Crear casos para todas las interpretaciones sin resolver las ambigüedades puede llevar a casos conflictivos o incorrectos.
B. Es correcto. Según el syllabus, durante el taller de especificación 'incompletitud, ambigüedades o defectos en la historia del usuario se resuelven durante este proceso' antes de proceder a crear los casos de prueba. Esto es fundamental en ATDD para asegurar que todos tengan la misma comprensión.


Pregunta 31 de 40
¿Cuál de las siguientes opciones es un criterio de entrada para la ejecución de pruebas?


A. Se han documentado los resultados de pruebas anteriores.

B. Se han definido los criterios de aceptación de los requisitos.

C. El equipo de pruebas ha completado la planificación de las pruebas.

D. El software ha pasado todas las pruebas unitarias.
Explicación
A. No es correcto. Documentar resultados de pruebas anteriores es una buena práctica, pero no es un criterio de entrada específico.
B. Es correcto. Definir los criterios de aceptación de los requisitos es esencial para asegurar que los criterios de entrada estén claros antes de realizar pruebas.
C. No es correcto. Completar la planificación de las pruebas puede ser un paso previo, pero no es un criterio de entrada en sí mismo.
D. No es correcto. Pasar todas las pruebas unitarias es un criterio de salida, ya que indica que una fase de pruebas ha finalizado satisfactoriamente.


Pregunta 32 de 40
En tu proyecto anterior, la proporción entre esfuerzo de desarrollo y esfuerzo de prueba fue de 5:3. El proyecto actual estima 800 días-persona de desarrollo. Usando estimación basada en proporciones, ¿cuál sería la estimación del esfuerzo de prueba?

Selecciona UNA opción.


A. 400 días-persona

B. 480 días-persona

C. 533 días-persona

D. 600 días-persona
Explicación
A. No es correcto. 400 representaría una proporción de 5:2.5
B. Es correcto. Si la proporción desarrollo:prueba es 5:3, entonces por cada 5 días de desarrollo se necesitan 3 días de prueba. Para 800 días de desarrollo: (800 x 3) ÷ 5 = 480 días-persona de prueba.
C. No es correcto. 533 representaría una proporción de 5:3.3
D. No es correcto. 600 representaría una proporción de 5:3.75


Pregunta 33 de 40
En tu plan de pruebas, has priorizado los casos de prueba basándote en los requisitos. Sin embargo, te das cuenta de que algunos casos de alta prioridad no pueden ejecutarse en el orden ideal debido a dependencias y disponibilidad de recursos. ¿Cuál es la acción MÁS apropiada según el syllabus?

Selecciona UNA opción.


A. Mantener el orden basado en prioridad de requisitos ignorando las dependencias

B. Ajustar el orden considerando dependencias y disponibilidad de recursos

C. Cambiar a una estrategia de priorización diferente

D. Ejecutar solo los casos independientes de alta prioridad
Explicación
A. No es correcto. Ignorar dependencias puede hacer que las pruebas fallen por razones técnicas en lugar de defectos reales.
B. Es correcto. El syllabus establece que 'si un caso de prueba con una prioridad más alta depende de un caso de prueba con una prioridad más baja, el caso de prueba de prioridad más baja debe ejecutarse primero' y que 'el orden de ejecución de la prueba también debe tener en cuenta la disponibilidad de recursos.'
C. No es correcto. No es necesario cambiar la estrategia de priorización, solo ajustar el orden de ejecución.
D. No es correcto. Esto limitaría excesivamente la cobertura de pruebas.

Pregunta 34 de 40
¿Cómo se clasifican las siguientes pruebas según los cuadrantes de pruebas ágiles (A-D) y su relación con los niveles de prueba?

Pruebas de componentes
Pruebas funcionales
Pruebas exploratorias
Pruebas no funcionales
Cuadrante de pruebas ágiles Q1: orientado a la tecnología, apoya al equipo
Cuadrante de pruebas ágiles Q2: orientado a los negocios, apoya al equipo
Cuadrante de pruebas ágiles Q3: orientado a los negocios, crítica al producto
Cuadrante de pruebas ágiles Q4: orientado a la tecnología, crítica al producto
Selecciona UNA opción que represente correctamente la clasificación.


A. 1A, 2B, 3C, 4D

B. 1B, 2A, 3D, 4C

C. 1C, 2D, 3A, 4B

D. 1D, 2C, 3B, 4A
Explicación
A.
Correcto – según el syllabus (sección 5.1.7, p. 53):

1 (pruebas de componentes) → Q1 (tecnología, apoyo al equipo)
2 (pruebas funcionales) → Q2 (negocios, apoyo al equipo)
3 (pruebas exploratorias) → Q3 (negocios, crítica al producto)
4 (pruebas no funcionales) → Q4 (tecnología, crítica al producto)
Las pruebas de estos cuadrantes se relacionan directamente con los niveles y tipos de prueba indicados en el modelo de Marick/Crispin.

B. Incorrecto – las pruebas de componentes (1) no están en Q2; están en Q1. Las pruebas funcionales (2) no están en Q1; están en Q2.
C. Incorrecto – las pruebas exploratorias (3) no están en Q1; están en Q3. Las pruebas no funcionales (4) no están en Q2; están en Q4.
D. Incorrecto – las pruebas de componentes (1) no están en Q4; están en Q1. Las pruebas exploratorias (3) no están en Q2; están en Q3.


Pregunta 35 de 40
En un proyecto de desarrollo de software, se identificó el siguiente riesgo:

Riesgo: La documentación del usuario no está actualizada.
Probabilidad del riesgo: alta; impacto del riesgo: medio
Respuesta al riesgo:
se organiza una revisión exhaustiva de la documentación con el equipo de desarrollo
se informa a los usuarios sobre las posibles inconsistencias en la documentación
¿Cuál es la medida más adecuada para responder a este riesgo analizado?

Selecciona UNA opción.


A. Mitigación del riesgo

B. Aceptación del riesgo

C. Transferencia del riesgo

D. Eliminación del riesgo
Explicación
A. Es correcto. La revisión de la documentación ayuda a mitigar el riesgo de inconsistencias.
B. No es correcto. Aceptar el riesgo no aborda el problema de la documentación desactualizada.
C. No es correcto. No se está transfiriendo el riesgo, sino que se está abordando directamente.
D. No es correcto. No se puede eliminar completamente este riesgo, pero se pueden tomar medidas para mitigarlo.


Pregunta 36 de 40
¿Cuál de los siguientes informes es más adecuado para comunicar el estado actual de las pruebas a las partes interesadas durante el ciclo de vida del desarrollo de software?


A. Informe de avance de pruebas

B. Informe de pruebas de regresión

C. Informe de errores abiertos

D. Informe de incidencias
Explicación
A. Es correcto. El informe de avance de pruebas proporciona un resumen del estado actual de las pruebas, incluyendo qué pruebas se han completado y cuáles están pendientes.
B. No es correcto. El informe de pruebas de regresión se centra en las pruebas realizadas después de cambios en el software, no en el estado general de las pruebas.
C. No es correcto. Aunque el informe de errores abiertos muestra problemas existentes, no comunica el estado del progreso de las pruebas en sí.

regunta 37 de 40
Cuando se realiza un seguimiento de los defectos encontrados durante las pruebas, ¿cuál es el beneficio de la gestión de configuración en este proceso?


A. Ayuda a documentar los requisitos de pruebas.

B. Permite identificar la versión del software en la que se encontró el defecto.

C. Facilita la creación de nuevos casos de prueba.

D. Asegura que todos los defectos se resuelvan antes de la entrega.
Explicación
A. No es correcto. La gestión de configuración no se centra en los requisitos, sino en la gestión de los ítems de prueba y su versión.
B. Es correcto. La gestión de configuración permite asociar defectos a versiones específicas del software, facilitando su seguimiento y resolución.
C. No es correcto. La creación de nuevos casos de prueba es parte del diseño de pruebas, no un beneficio directo de la gestión de configuración.
D. No es correcto. Aunque la gestión de configuración


Pregunta 38 de 40
Un analista de pruebas prepara el siguiente informe de defecto:

ID: BUG-00721 | Título: El campo 'Fecha de nacimiento' acepta fechas futuras | Severidad: Media | Prioridad: Alta | Reportado por: A. López | Configuración: App v3.2.1, Chrome 120 | Pasos para reproducir: (1) Abrir formulario de registro, (2) Ingresar fecha de nacimiento '15/08/2030', (3) Hacer clic en 'Guardar'.

¿Cuál es la información MÁS importante que falta en este informe?

Selecciona UNA opción.


A. El nombre del desarrollador asignado para resolver el defecto.

B. El resultado real obtenido y el resultado esperado, para facilitar la reproducción y corrección.

C. Una estimación del tiempo necesario para corregir el defecto.

D. El número de usuarios afectados por el defecto.
Explicación
A. Incorrecto. La asignación del defecto a un desarrollador es una actividad de gestión posterior, no un componente esencial del informe inicial.
B. Correcto. Según el Programa de Estudio CTFL v4.0 §5.5.1, un informe de defecto completo debe incluir los resultados reales obtenidos y los resultados esperados. Sin esta información, el desarrollador no puede confirmar el comportamiento incorrecto ni validar la corrección.
C. Incorrecto. La estimación del tiempo de corrección es responsabilidad del equipo de desarrollo, no del informe de defecto.
D. Incorrecto. El impacto en usuarios puede indicarse en la prioridad/severidad, pero no es un campo esencial del informe de defecto según el syllabus.


Pregunta 39 de 40
¿Cuál de las siguientes herramientas de prueba se utiliza generalmente para automatizar la ejecución de pruebas?


A. Herramientas de gestión de pruebas

B. Herramientas de pruebas de rendimiento

C. Herramientas de automatización de pruebas

D. Herramientas de gestión de defectos
Explicación
A. No es correcto. Las herramientas de gestión de pruebas se utilizan para planificar, organizar y realizar un seguimiento del proceso de prueba, pero no para ejecutar pruebas de forma automatizada.
B. No es correcto. Las herramientas de pruebas de rendimiento están diseñadas para evaluar el rendimiento del sistema bajo carga, no para automatizar la ejecución de pruebas en general.
C. Es correcto. Las herramientas de automatización de pruebas están diseñadas específicamente para ejecutar pruebas automáticamente, lo que permite realizar pruebas de manera más rápida y eficiente.
D. No es correcto. Las herramientas de gestión de defectos se utilizan para rastrear y gestionar errores encontrados durante el proceso de prueba, no para automatizar la ejecución de pruebas.


Pregunta 40 de 40
¿Cuál de los siguientes enunciados describe un beneficio de la automatización de pruebas?


A. Aumenta la cobertura de pruebas en menos tiempo

B. Elimina completamente la necesidad de pruebas manuales

C. Reduce la complejidad del desarrollo de software

D. Aumenta la posibilidad de errores humanos en la ejecución
Explicación
A. Es correcto. La automatización permite ejecutar pruebas más rápidamente y con mayor frecuencia, lo que puede aumentar la cobertura de pruebas.
B. No es correcto. Aunque la automatización puede reducir la necesidad de pruebas manuales, no puede eliminarla por completo en todos los casos.
C. No es correcto. La automatización no necesariamente reduce la complejidad del software, puede, de hecho, introducir su propia complejidad.
D. No es correcto. La automatización, si se hace correctamente, puede reducir la posibilidad de errores humanos durante la ejecución de pruebas.`;

const blocks = raw.split(/r?egunta \d+ de 40/i).filter(b => b.trim().length > 0);

const parsed = blocks.map(block => {
  const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let questionText = "";
  let options = [];
  let explanationText = "";
  let mode = 'q'; // q, options, exp

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^[A-D]\.\s/) || line.match(/^[a-d]\)\s/)) {
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
  const expA = explanationText.match(/A\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta)/i);
  const expB = explanationText.match(/B\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta)/i);
  const expC = explanationText.match(/C\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta)/i);
  const expD = explanationText.match(/D\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta)/i);

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
    id: "q_batch4_" + Math.random().toString(36).substr(2, 9),
    topic: topic,
    question: questionText,
    options: options.map(o => {
        let opt = o.trim();
        if (opt.match(/^[A-D]\.\s/)) opt = opt.substring(3).trim();
        else if (opt.match(/^[a-d]\)\s/)) opt = opt.substring(3).trim();
        return opt;
    }),
    correctAnswer: correctAnswer,
    explanation: explanationText.trim()
  };
});

fs.writeFileSync('parsed_batch4.json', JSON.stringify(parsed, null, 2));
console.log(`Parsed ${parsed.length} questions.`);
