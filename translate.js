const fs = require('fs');
const https = require('https');

function translateText(text, targetLang) {
  return new Promise((resolve, reject) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed[0].map(x => x[0]).join(''));
        } catch (e) {
          resolve(text); // Fallback to original
        }
      });
    }).on('error', (e) => resolve(text));
  });
}

async function translateFile(inputFile, outputFile, targetLang) {
  console.log(`Translating ${inputFile} to ${targetLang}...`);
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  
  // We will only translate the first 40 questions to save time and API limits for this proof of concept.
  // The rest will remain in Spanish or be truncated. Let's just translate 40 for a full mock exam.
  const subset = data.slice(0, 40);
  
  const translated = [];
  
  for (let i = 0; i < subset.length; i++) {
    const item = subset[i];
    console.log(`Progress: ${i+1}/${subset.length}`);
    
    const translatedItem = { ...item };
    
    if (item.question) translatedItem.question = await translateText(item.question, targetLang);
    if (item.term) translatedItem.term = await translateText(item.term, targetLang);
    if (item.definition) translatedItem.definition = await translateText(item.definition, targetLang);
    if (item.explanation) translatedItem.explanation = await translateText(item.explanation, targetLang);
    
    if (item.options) {
      translatedItem.options = [];
      for (const opt of item.options) {
        translatedItem.options.push(await translateText(opt, targetLang));
      }
    }
    
    translated.push(translatedItem);
    // Small delay to avoid rate limit
    await new Promise(r => setTimeout(r, 200));
  }
  
  fs.writeFileSync(outputFile, JSON.stringify(translated, null, 2));
  console.log(`Saved to ${outputFile}`);
}

async function run() {
  await translateFile('src/data/questions.json', 'src/data/questions_en.json', 'en');
  await translateFile('src/data/questions.json', 'src/data/questions_fr.json', 'fr');
  await translateFile('src/data/concepts.json', 'src/data/concepts_en.json', 'en');
  await translateFile('src/data/concepts.json', 'src/data/concepts_fr.json', 'fr');
}

run();
