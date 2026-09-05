const fs = require('fs');
const path = require('path');

const files = ['questions.json', 'questions_en.json', 'questions_fr.json', 'questions_pt.json'];

files.forEach(file => {
  const p = path.join(__dirname, 'src', 'data', file);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    let changed = 0;
    
    data.forEach(q => {
      const old = q.question;
      // Replace multiple spaces/newlines with a clean \n\n
      q.question = q.question.replace(/\s*\n\s*\n\s*/g, '\n\n');
      
      if (q.question !== old) {
        changed++;
      }
    });

    if (changed > 0) {
      fs.writeFileSync(p, JSON.stringify(data, null, 2));
      console.log(`Updated ${file} - ${changed} questions cleaned.`);
    }
  }
});
