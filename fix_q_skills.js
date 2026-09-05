const fs = require('fs');
const path = require('path');

const files = ['questions.json', 'questions_en.json', 'questions_fr.json'];

const fixes = {
  'questions.json': {
    id: 'q_batch4_d9p5xynen',
    question: `¿Cuál de las siguientes habilidades es esencial para un probador al evaluar la calidad de un producto de software?

i. Comunicación efectiva
ii. Conocimiento técnico
iii. Capacidad de análisis
iv. Gestión del tiempo`
  },
  'questions_en.json': {
    id: 'q_batch4_d9p5xynen',
    question: `Which of the following skills is essential for a tester when evaluating the quality of a software product?

i. Effective communication
ii. Technical knowledge
iii. Analytical skills
iv. Time management`
  },
  'questions_fr.json': {
    id: 'q_batch4_d9p5xynen',
    question: `Laquelle des compétences suivantes est essentielle pour un testeur lors de l'évaluation de la qualité d'un produit logiciel ?

i. Communication efficace
ii. Connaissances techniques
iii. Compétences analytiques
iv. Gestion du temps`
  }
};

files.forEach(file => {
  const p = path.join(__dirname, 'src', 'data', file);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    const fix = fixes[file];
    
    let changed = false;
    data.forEach(q => {
      if (q.id === fix.id && q.question !== fix.question) {
        q.question = fix.question;
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(p, JSON.stringify(data, null, 2));
      console.log(`Updated ${file}`);
    }
  }
});
