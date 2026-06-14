const fs = require('fs');

const existingData = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));
const newData = JSON.parse(fs.readFileSync('parsed_batch2.json', 'utf8'));

// normalize string for comparison
function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9áéíóúüñ]/g, '');
}

let addedCount = 0;

for (const nq of newData) {
  const normQ = normalize(nq.question);
  // check if exist
  const exists = existingData.some(eq => normalize(eq.question) === normQ);
  if (!exists) {
    existingData.push(nq);
    addedCount++;
  }
}

if (addedCount > 0) {
  fs.writeFileSync('src/data/questions.json', JSON.stringify(existingData, null, 2));
}

console.log(`Added ${addedCount} new questions. Total is now ${existingData.length}.`);
