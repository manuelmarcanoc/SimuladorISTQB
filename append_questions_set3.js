const fs = require('fs');
const path = require('path');

const mainFile = path.join(__dirname, 'src', 'data', 'questions.json');
const newFile = path.join(__dirname, 'nuevas_preguntas_3.json');

try {
  const mainData = JSON.parse(fs.readFileSync(mainFile, 'utf8'));
  const newData = JSON.parse(fs.readFileSync(newFile, 'utf8'));

  // Get max ID to avoid collisions
  let maxId = 0;
  mainData.forEach(q => {
    if (q.id > maxId) maxId = q.id;
  });

  // Re-assign IDs
  newData.forEach((q, idx) => {
    q.id = maxId + 1 + idx;
    mainData.push(q);
  });

  fs.writeFileSync(mainFile, JSON.stringify(mainData, null, 2));
  console.log('Successfully appended ' + newData.length + ' questions to questions.json');
} catch(e) {
  console.error('Error:', e.message);
}
