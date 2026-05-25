const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'questions.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

console.log(`TOTAL QUESTIONS: ${data.length}`);

const chapterMap = {
  1: 'Fundamentos del Testing',
  2: 'Pruebas a lo largo del SDLC',
  3: 'Pruebas Estáticas',
  4: 'Técnicas de Análisis y Diseño de Pruebas',
  5: 'Gestión de Pruebas',
  6: 'Herramientas de Prueba'
};

const stats = {};
data.forEach(q => {
  if (!stats[q.chapter]) stats[q.chapter] = { total: 0, topics: {} };
  stats[q.chapter].total++;
  
  const topic = q.topic || 'General';
  if (!stats[q.chapter].topics[topic]) stats[q.chapter].topics[topic] = 0;
  stats[q.chapter].topics[topic]++;
});

for (let ch = 1; ch <= 6; ch++) {
  if (stats[ch]) {
    console.log(`\nCapítulo ${ch} - ${chapterMap[ch]}: ${stats[ch].total} preguntas`);
    Object.keys(stats[ch].topics).forEach(t => {
      console.log(`  - ${t}: ${stats[ch].topics[t]}`);
    });
  }
}
