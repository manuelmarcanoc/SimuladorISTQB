const fs = require('fs');

const files = ['./src/data/questions.json', './src/data/questions_en.json', './src/data/questions_fr.json'];

files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(f, 'utf8'));

  data.forEach(q => {
    let text = q.question;
    
    if (text.length > 150 && !text.includes('\n')) {
      const hasNumbers = text.match(/ \d[\.\)] /g) && text.match(/ \d[\.\)] /g).length > 1;
      const hasRoman = text.match(/ [ivx]+[\.\)] /gi) && text.match(/ [ivx]+[\.\)] /gi).length > 1;
      const hasLetters = text.match(/ [A-D][\.\)] /g) && text.match(/ [A-D][\.\)] /g).length > 1;
      
      if (hasNumbers || hasRoman || hasLetters) {
        if (text.includes('IF (') || text.includes('SI (') || text.includes('ENTRADA:')) return;

        text = text.replace(/ (\d[\.\)]) /g, '\n\n$1 ');
        text = text.replace(/ ([ivx]+[\.\)]) /gi, '\n\n$1 ');
        text = text.replace(/ ([A-D][\.\)]) /g, '\n\n$1 ');
        text = text.replace(/\n\n\n\n/g, '\n\n');

        q.question = text;
      }
    }
  });
  
  fs.writeFileSync(f, JSON.stringify(data, null, 2));
});

console.log('Successfully formatted all files.');
