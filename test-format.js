const fs = require('fs');

const files = ['./src/data/questions.json', './src/data/questions_en.json', './src/data/questions_fr.json'];
const output = {};

files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(f, 'utf8'));
  const lang = f.includes('en') ? 'EN' : f.includes('fr') ? 'FR' : 'ES';
  output[lang] = [];

  data.forEach(q => {
    let text = q.question;
    // We only care about long texts without line breaks
    if (text.length > 150 && !text.includes('\n')) {
      
      // Look for multiple numbers, romans, or letters like " 1. " or " 1) "
      const hasNumbers = text.match(/ \d[\.\)] /g) && text.match(/ \d[\.\)] /g).length > 1;
      const hasRoman = text.match(/ [ivx]+[\.\)] /gi) && text.match(/ [ivx]+[\.\)] /gi).length > 1;
      const hasLetters = text.match(/ [A-D][\.\)] /g) && text.match(/ [A-D][\.\)] /g).length > 1;
      
      if (hasNumbers || hasRoman || hasLetters) {
        
        // Skip code-like questions to prevent corrupting them
        if (text.includes('IF (') || text.includes('SI (') || text.includes('ENTRADA:')) return;

        // Apply safe formatting
        // Replace space + Number/Roman/Letter + dot/parenthesis + space
        text = text.replace(/ (\d[\.\)]) /g, '\n\n$1 ');
        text = text.replace(/ ([ivx]+[\.\)]) /gi, '\n\n$1 ');
        text = text.replace(/ ([A-D][\.\)]) /g, '\n\n$1 ');
        
        // Clean up any double-double newlines
        text = text.replace(/\n\n\n\n/g, '\n\n');

        output[lang].push({
          id: q.id,
          original: q.question,
          formatted: text
        });
      }
    }
  });
});

fs.writeFileSync('preview_format.json', JSON.stringify(output, null, 2));
console.log('Preview generated in preview_format.json');
