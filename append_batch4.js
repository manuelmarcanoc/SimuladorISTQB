const fs = require('fs');

function normalizeText(text) {
  if (!text) return "";
  return text.toLowerCase()
    .replace(/[áäâà]/g, 'a')
    .replace(/[éëêè]/g, 'e')
    .replace(/[íïîì]/g, 'i')
    .replace(/[óöôò]/g, 'o')
    .replace(/[úüûù]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const existing = JSON.parse(fs.readFileSync('src/data/questions.json'));
const newQuestions = JSON.parse(fs.readFileSync('parsed_batch4.json'));

const existingTexts = new Set(existing.map(q => normalizeText(q.question)));

let appendedCount = 0;
for (const nq of newQuestions) {
  const normNq = normalizeText(nq.question);
  if (!existingTexts.has(normNq)) {
    let ca = 0;
    if (nq.correctAnswer === "B") ca = 1;
    if (nq.correctAnswer === "C") ca = 2;
    if (nq.correctAnswer === "D") ca = 3;

    existing.push({
      id: nq.id,
      chapter: parseInt(nq.topic),
      topic: "Desarrollo y Testing",
      difficulty: "medium",
      question: nq.question,
      options: nq.options,
      correctAnswer: ca,
      explanation: nq.explanation,
      source: "User Provided Batch 4"
    });
    existingTexts.add(normNq);
    appendedCount++;
  } else {
    console.log("Duplicate skipped:", nq.question.substring(0, 50));
  }
}

if (appendedCount > 0) {
  fs.writeFileSync('src/data/questions.json', JSON.stringify(existing, null, 2));
  console.log(`Appended ${appendedCount} new questions. Total is now ${existing.length}.`);
} else {
  console.log("No new questions to append.");
}
