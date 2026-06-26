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
          resolve(text);
        }
      });
    }).on('error', (e) => resolve(text));
  });
}

async function appendTranslations() {
  const spanish = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));
  const english = JSON.parse(fs.readFileSync('src/data/questions_en.json', 'utf8'));
  const french = JSON.parse(fs.readFileSync('src/data/questions_fr.json', 'utf8'));

  const enIds = new Set(english.map(q => q.id));
  const frIds = new Set(french.map(q => q.id));

  for (let i = 0; i < spanish.length; i++) {
    const item = spanish[i];
    
    // Check if needs English
    if (!enIds.has(item.id)) {
      console.log(`Translating to EN: ${item.id}`);
      const enItem = { ...item };
      enItem.question = await translateText(item.question, 'en');
      enItem.explanation = await translateText(item.explanation, 'en');
      enItem.options = [];
      for (const opt of item.options) {
        enItem.options.push(await translateText(opt, 'en'));
      }
      english.push(enItem);
      await new Promise(r => setTimeout(r, 300));
    }
    
    // Check if needs French
    if (!frIds.has(item.id)) {
      console.log(`Translating to FR: ${item.id}`);
      const frItem = { ...item };
      frItem.question = await translateText(item.question, 'fr');
      frItem.explanation = await translateText(item.explanation, 'fr');
      frItem.options = [];
      for (const opt of item.options) {
        frItem.options.push(await translateText(opt, 'fr'));
      }
      french.push(frItem);
      await new Promise(r => setTimeout(r, 300));
    }
  }

  fs.writeFileSync('src/data/questions_en.json', JSON.stringify(english, null, 2));
  fs.writeFileSync('src/data/questions_fr.json', JSON.stringify(french, null, 2));
  console.log('Translations appended successfully!');
}

appendTranslations();
