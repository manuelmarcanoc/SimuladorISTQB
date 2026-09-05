const fs = require('fs');
const path = require('path');

const files = [
  { name: 'questions.json', regex: /(.+?)\s+(¿[A-Z].*?)$/s },
  { name: 'questions_en.json', regex: /(.+?)\s+((?:Which|What|How|Why|When|Who|Where)\b.*?)\s*$/is },
  { name: 'questions_fr.json', regex: /(.+?)\s+((?:Lequel|Laquelle|Lesquel|Quelle|Quel|Combien|Quelles|Comment)\b.*?)\s*$/is },
  { name: 'questions_pt.json', regex: /(.+?)\s+((?:Qual|Quais|O que|Como)\b.*?)\s*$/is }
];

files.forEach(f => {
  const p = path.join(__dirname, 'src', 'data', f.name);
  if (fs.existsSync(p)) {
    let data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    let changed = 0;
    
    data.forEach(q => {
      const old = q.question;
      // We want to avoid replacing if the question word is already at the beginning of a paragraph
      // So we only replace if there isn't already a \n\n before the question word.
      // The regex captures everything before the question word in $1, and the question word + rest in $2.
      // We check if $1 already ends with \n or \n\n.
      
      const match = old.match(f.regex);
      if (match) {
        let prefix = match[1];
        let prompt = match[2];
        
        // If the prefix doesn't end with a newline, we add \n\n
        if (!/\n\s*$/.test(prefix)) {
          q.question = prefix + '\n\n' + prompt;
          changed++;
        }
      }
    });

    if (changed > 0) {
      fs.writeFileSync(p, JSON.stringify(data, null, 2));
      console.log(`Updated ${f.name} - ${changed} questions fixed.`);
    } else {
      console.log(`No changes needed for ${f.name}`);
    }
  }
});
