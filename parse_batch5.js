const fs = require('fs');

const raw = fs.readFileSync('batch5_raw.txt', 'utf8');
const blocks = raw.split(/r?egunta \d+ de 40/i).filter(b => b.trim().length > 0);

const parsed = blocks.map(block => {
  const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let questionText = "";
  let options = [];
  let explanationText = "";
  let mode = 'q'; // q, options, exp

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^[A-D]\.\s/) || line.match(/^[a-d]\)\s/)) {
      if (mode === 'q') mode = 'options';
      if (mode === 'options') {
        options.push(line);
        continue;
      }
    }
    if (line.startsWith('Explicación') || line.startsWith('Explicacin')) {
      mode = 'exp';
      continue;
    }

    if (mode === 'q') {
      questionText += line + "\n"; // Preserve newlines this time!
    } else if (mode === 'exp') {
      explanationText += line + " ";
    }
  }

  let correctAnswer = "";
  const expA = explanationText.match(/A\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta|Esta opcin es correcta)/i);
  const expB = explanationText.match(/B\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta|Esta opcin es correcta)/i);
  const expC = explanationText.match(/C\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta|Esta opcin es correcta)/i);
  const expD = explanationText.match(/D\.\s[^A-D]*(Es correcto|Correcto|Correcta|Esta opción es correcta|Esta opcin es correcta)/i);

  if (expA) correctAnswer = "A";
  else if (expB) correctAnswer = "B";
  else if (expC) correctAnswer = "C";
  else if (expD) correctAnswer = "D";

  questionText = questionText.replace(/Selecciona UNA opcin\./g, "").replace(/Selecciona UNA opción\./g, "").trim();

  let topic = "1";
  const qLower = questionText.toLowerCase() + explanationText.toLowerCase();
  if (qLower.includes('caja negra') || qLower.includes('partición') || qLower.includes('particin') || qLower.includes('valor límite') || qLower.includes('valor lmite') || qLower.includes('decisiones') || qLower.includes('transición') || qLower.includes('transicin') || qLower.includes('caja blanca') || qLower.includes('sentencia') || qLower.includes('exploratoria') || qLower.includes('atdd') || qLower.includes('predicción') || qLower.includes('prediccin')) topic = "4";
  else if (qLower.includes('revisión') || qLower.includes('revisin') || qLower.includes('inspección') || qLower.includes('inspeccin') || qLower.includes('estática') || qLower.includes('estǭtica')) topic = "3";
  else if (qLower.includes('planificación') || qLower.includes('planificacin') || qLower.includes('estimación') || qLower.includes('estimacin') || qLower.includes('riesgo') || qLower.includes('configuración') || qLower.includes('configuracin') || qLower.includes('defecto') || qLower.includes('informe') || qLower.includes('líder de pruebas') || qLower.includes('lder de pruebas')) topic = "5";
  else if (qLower.includes('sdlc') || qLower.includes('ágil') || qLower.includes('ǭgil') || qLower.includes('tdd') || qLower.includes('desplazamiento') || qLower.includes('retrospectiva') || qLower.includes('nivel de prueba') || qLower.includes('confirmación') || qLower.includes('confirmacin') || qLower.includes('integración') || qLower.includes('integracin') || qLower.includes('sistema')) topic = "2";

  return {
    id: "q_batch5_" + Math.random().toString(36).substr(2, 9),
    topic: topic,
    question: questionText,
    options: options.map(o => {
        let opt = o.trim();
        if (opt.match(/^[A-D]\.\s/)) opt = opt.substring(3).trim();
        else if (opt.match(/^[a-d]\)\s/)) opt = opt.substring(3).trim();
        return opt;
    }),
    correctAnswer: correctAnswer,
    explanation: explanationText.trim()
  };
});

fs.writeFileSync('parsed_batch5.json', JSON.stringify(parsed, null, 2));
console.log(`Parsed ${parsed.length} questions.`);
