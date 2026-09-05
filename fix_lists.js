const fs = require('fs');
const path = require('path');

const files = ['questions.json', 'questions_en.json', 'questions_fr.json', 'questions_pt.json'];

const targetIds = [317, 449, 1064, 'q_batch4_attdk2hjt'];

files.forEach(file => {
  const p = path.join(__dirname, 'src', 'data', file);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    let changed = 0;
    
    data.forEach(q => {
      if (targetIds.includes(q.id)) {
        const old = q.question;
        
        // For q_batch4_attdk2hjt and 449, it has commas before the numbers: ", (2) "
        // Let's replace the pattern `(number)` with `\n- `
        
        // First, add a newline before the first (1) if it doesn't have one
        let updated = old.replace(/([^\n])\s*\(\s*1\s*\)\s+/g, '$1\n- 1. ');
        
        // Then replace subsequent (2), (3), etc.
        updated = updated.replace(/,?\s*\(\s*2\s*\)\s+/g, '\n- 2. ');
        updated = updated.replace(/,?\s*\(\s*3\s*\)\s+/g, '\n- 3. ');
        updated = updated.replace(/,?\s*\(\s*4\s*\)\s+/g, '\n- 4. ');
        updated = updated.replace(/,?\s*\(\s*5\s*\)\s+/g, '\n- 5. ');

        if (updated !== old) {
          // If the text after the list needs a newline, let's make sure.
          // In 449, "No ha votado ya. Solo puede votar..." -> "Solo puede votar..." should be its own line?
          if (q.id === 449) {
             updated = updated.replace(/\.\s+Solo puede/g, '.\n\nSolo puede');
             updated = updated.replace(/\.\s+Only/g, '.\n\nOnly');
             updated = updated.replace(/\.\s+Seul/g, '.\n\nSeul');
             updated = updated.replace(/\.\s+Só/g, '.\n\nSó');
          }
          
          q.question = updated;
          changed++;
        }
      }
    });

    if (changed > 0) {
      fs.writeFileSync(p, JSON.stringify(data, null, 2));
      console.log(`Updated ${file} - ${changed} questions fixed.`);
    }
  }
});
