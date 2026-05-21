const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

// 1. Keep only official questions (IDs 250 to 467)
let officialQuestions = questions.filter(q => q.id >= 250);

// 2. Remove difficulty property
officialQuestions = officialQuestions.map(q => {
  const newQ = { ...q };
  delete newQ.difficulty;
  return newQ;
});

// 3. Load Spanish Sample A if exists and merge
try {
  const spanishA = JSON.parse(fs.readFileSync('spanish_sampleA.json', 'utf8'));
  const translationsMap = {};
  spanishA.forEach(q => {
    translationsMap[q.id] = q;
  });

  officialQuestions = officialQuestions.map(q => {
    if (translationsMap[q.id]) {
      return { ...q, ...translationsMap[q.id], difficulty: undefined };
    }
    return q;
  });
  console.log(`Loaded ${spanishA.length} translations from Sample A`);
} catch (e) {
  console.log('spanish_sampleA.json not found or invalid, proceeding without it');
}

// 4. Save back to questions.json
fs.writeFileSync('src/data/questions.json', JSON.stringify(officialQuestions, null, 2));

console.log(`Total questions remaining: ${officialQuestions.length}`);
const englishRemaining = officialQuestions.filter(x => {
  const all = [x.question, ...(x.options||[])].join(' ');
  return !/[áéíóúüñ¿¡]/i.test(all);
}).length;
console.log(`Remaining English: ${englishRemaining}`);
