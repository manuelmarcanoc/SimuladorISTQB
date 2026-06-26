const qs = require('./src/data/questions.json');
const ids = [263, 270, 309, 319, 325, 355, 1014, 'q_batch2_t5hos07b9', 'q_batch3_l6n0dvnvr'];

for (const id of ids) {
  const q = qs.find(q => q.id === id);
  console.log(`\n--- ID: ${id} ---`);
  console.log(q.question);
}
