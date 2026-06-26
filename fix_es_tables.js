const fs = require('fs');

const qsEs = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));
let qsEn = JSON.parse(fs.readFileSync('src/data/questions_en.json', 'utf8'));
let qsFr = JSON.parse(fs.readFileSync('src/data/questions_fr.json', 'utf8'));

const replacements = {
  263: `Usted está probando una historia de usuario con tres criterios de aceptación: AC1, AC2 y AC3. AC1 está cubierto por el caso de prueba TC1, AC2 por TC2, y AC3 por TC3. El historial de ejecución de pruebas tuvo tres rondas de pruebas en tres versiones consecutivas del software de la siguiente manera:

| | Ejecución 1 | Ejecución 2 | Ejecución 3 |
|---|---|---|---|
| TC1 (1) | Fallido (4) | Pasado (7) | Pasado |
| TC2 (2) | Pasado (5) | Fallido (8) | Pasado |
| TC3 (3) | Fallido (6) | Fallido (9) | Pasado |

Las pruebas se repiten una vez que se le informa que todos los defectos encontrados en la ronda de pruebas están corregidos y hay una nueva versión del software disponible. ¿Cuáles de las pruebas anteriores se ejecutan como pruebas de regresión?`,

  270: `Está probando un sistema que calcula la nota final del curso para un estudiante determinado. La nota final se asigna en función del resultado final, de acuerdo con las siguientes reglas:
- 0 – 50 puntos: suspenso
- 51 – 60 puntos: suficiente
- 61 – 70 puntos: satisfactorio
- 71 – 80 puntos: bien
- 81 – 90 puntos: muy bien
- 91 – 100 puntos: excelente

Ha preparado el siguiente conjunto de casos de prueba:

| TC | Resultado final | Nota final |
|---|---|---|
| TC1 | 91 | excelente |
| TC2 | 50 | suspenso |
| TC3 | 81 | muy bien |
| TC4 | 60 | suficiente |
| TC5 | 70 | satisfactorio |
| TC6 | 80 | bien |

¿Cuál es la cobertura de análisis de valores límite (BVA) de 2 valores para el resultado final que se logra con los casos de prueba existentes?`,

  309: `La siguiente tabla de decisión contiene las reglas para determinar el riesgo de arteriosclerosis.

| | Regla 1 | Regla 2 | Regla 3 | Regla 4 | Regla 5 |
|---|---|---|---|---|---|
| Colesterol (mg/dl) | ≤124 | ≤124 | 125–200 | 125–200 | ≥201 |
| Presión arterial (mm Hg) | ≤140 | >140 | ≤140 | >140 | – |
| Nivel de riesgo | muy bajo | bajo | medio | alto | muy alto |

Has diseñado los siguientes casos de prueba:
- TC1: Colesterol=125, PA=141
- TC2: Colesterol=200, PA=201
- TC3: Colesterol=124, PA=201
- TC4: Colesterol=109, PA=200
- TC5: Colesterol=201, PA=140

¿Qué cobertura de tabla de decisión logran estos casos de prueba?`,

  319: `Estás probando una aplicación web que permite a los usuarios BUSCAR productos, VER detalles, AÑADIR al carrito y realizar un PEDIDO. Tienes 7 casos de prueba con estas prioridades (1=mayor):
- TC1: BUSCAR producto A (4)
- TC2: BUSCAR producto B (4)
- TC3: VER detalles A (3)
- TC4: VER detalles B (2)
- TC5: AÑADIR producto A (3)
- TC6: AÑADIR producto B (1)
- TC7: hacer PEDIDO (5)

Dependencias: BUSCAR debe probarse antes de VER, VER antes de AÑADIR, y AÑADIR antes de PEDIDO. ¿Qué caso de prueba debe ejecutarse en cuarto lugar?`,

  325: `Estás probando una función de ordenación que recibe un conjunto de números y los devuelve ordenados de forma ascendente. El log de ejecución es:

- TC1: Entrada: \`3\`. Salida: \`3\`. Resultado: pasado
- TC2: Entrada: \`3 11 6 5\`. Salida: \`3 5 6 11\`. Resultado: pasado
- TC3: Entrada: \`8 7 3 7 1\`. Salida: \`1 3 7 8\`. Resultado: fallado
- TC4: Entrada: \`-2 -2 -2 -3 -3\`. Salida: \`-3 -2\`. Resultado: fallado
- TC5: Entrada: \`0 -2 0 3 4 4\`. Salida: \`-2 0 3 4\`. Resultado: fallado

¿Cuál de las siguientes proporciona la MEJOR descripción del fallo para usar en un informe de defecto?`,

  355: `Estás preparando un calendario de ejecución de pruebas para 7 casos de prueba (TC1-TC7).

Las dependencias son:
- TC2 depende de TC1
- TC4 depende de TC2 y TC3
- TC5 depende de TC3
- TC6 depende de TC4 y TC5
- TC7 depende de TC6

Las prioridades (1=mayor) son: TC1-p3, TC2-p5, TC3-p1, TC4-p4, TC5-p2, TC6-p6, TC7-p7.

¿Cuál es el orden correcto de ejecución respetando dependencias y prioridades?`,

  1014: `Se ejecutaron los casos de prueba:
- TC1 Falló
- TC2 Pasó
- TC3 Falló

Después de las correcciones, se ejecutan nuevamente TC1, TC2 y TC3. ¿Cuáles de estas ejecuciones se consideran pruebas de regresión?`,

  'q_batch2_t5hos07b9': `Tienes los siguientes casos de prueba para un sistema de banca online:

| Caso | Riesgo de Funcionalidad | Probabilidad del Riesgo | Impacto del Riesgo | Dependencia |
|---|---|---|---|---|
| TC1 | Login | 2 | 2 | Ninguna |
| TC2 | Consultar saldo | 3 | 3 | TC1 |
| TC3 | Transferir dinero | 2 | 2 | TC1, TC2 |
| TC4 | Cambiar PIN | 4 | 4 | TC1 |

Aplicando priorización basada en riesgo, donde el impacto y la probabilidad se mide en una escala del 1 al 5 (1=Muy Alto, 2=Alto, 3=Medio, 4=Bajo, 5=Muy Bajo), ¿cuál sería el orden de ejecución MÁS apropiado?`,

  'q_batch3_l6n0dvnvr': `Un equipo de desarrollo ha corregido varios defectos en una nueva versión de la aplicación. Se ejecutaron los siguientes casos de prueba en la versión anterior:

| Prueba | Resultado en la versión anterior |
|---|---|
| TC1 | Falló |
| TC2 | Pasó |
| TC3 | Falló |

Después de las correcciones, el equipo ejecuta nuevamente los casos de prueba TC1, TC2 y TC3. ¿Cuáles de estas ejecuciones se consideran pruebas de regresión?`
};

let modified = 0;
for (const q of qsEs) {
  if (replacements[q.id]) {
    q.question = replacements[q.id];
    modified++;
  }
}

console.log(`Modified ${modified} questions in ES`);
fs.writeFileSync('src/data/questions.json', JSON.stringify(qsEs, null, 2));

// Delete from EN and FR so they get retranslated
const keys = Object.keys(replacements);
qsEn = qsEn.filter(q => !keys.includes(q.id.toString()));
qsFr = qsFr.filter(q => !keys.includes(q.id.toString()));

fs.writeFileSync('src/data/questions_en.json', JSON.stringify(qsEn, null, 2));
fs.writeFileSync('src/data/questions_fr.json', JSON.stringify(qsFr, null, 2));

console.log('Removed from EN and FR for retranslation');
