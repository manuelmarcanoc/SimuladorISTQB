const fs = require('fs');

const raw = fs.readFileSync('raw_questions.txt', 'utf8');
const blocks = raw.split(/Pregunta \d+ de 40/i).filter(b => b.trim().length > 0);

const parsed = blocks.map(block => {
  const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let questionText = "";
  let options = [];
  let explanationText = "";
  let mode = 'q'; // q, options, exp

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^[A-D]\.\s/)) {
      if (mode === 'q') mode = 'options';
      if (mode === 'options') {
        options.push(line);
        continue;
      }
    }
    if (line.startsWith('Explicación')) {
      mode = 'exp';
      continue;
    }

    if (mode === 'q') {
      questionText += line + " ";
    } else if (mode === 'exp') {
      explanationText += line + " ";
    }
  }

  // Find correct answer from explanation
  let correctAnswer = "";
  const expA = explanationText.match(/A\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta)/i);
  const expB = explanationText.match(/B\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta)/i);
  const expC = explanationText.match(/C\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta)/i);
  const expD = explanationText.match(/D\.\s[^A-D]*(Es correcto|Correcta|Correcto|Esta opción es correcta)/i);

  if (expA) correctAnswer = "A";
  else if (expB) correctAnswer = "B";
  else if (expC) correctAnswer = "C";
  else if (expD) correctAnswer = "D";

  // clean question
  questionText = questionText.replace(/Selecciona UNA opción\./g, "").trim();

  // assign topic (heuristic based on question content)
  let topic = "1";
  const qLower = questionText.toLowerCase() + explanationText.toLowerCase();
  if (qLower.includes('caja negra') || qLower.includes('partición') || qLower.includes('valor límite') || qLower.includes('decisiones') || qLower.includes('transicion') || qLower.includes('caja blanca') || qLower.includes('sentencia') || qLower.includes('exploratoria') || qLower.includes('atdd') || qLower.includes('predicción')) topic = "4";
  else if (qLower.includes('revisión') || qLower.includes('inspección') || qLower.includes('estática')) topic = "3";
  else if (qLower.includes('planificación') || qLower.includes('estimación') || qLower.includes('riesgo') || qLower.includes('configuración') || qLower.includes('defecto') || qLower.includes('informe') || qLower.includes('líder de pruebas')) topic = "5";
  else if (qLower.includes('sdlc') || qLower.includes('ágil') || qLower.includes('tdd') || qLower.includes('desplazamiento') || qLower.includes('retrospectiva') || qLower.includes('nivel de prueba') || qLower.includes('confirmación') || qLower.includes('integración') || qLower.includes('sistema')) topic = "2";

  return {
    id: "q_batch2_" + Math.random().toString(36).substr(2, 9),
    topic: topic,
    question: questionText,
    options: options.map(o => o.substring(3).trim()),
    correctAnswer: correctAnswer,
    explanation: explanationText.trim()
  };
});

fs.writeFileSync('parsed_batch2.json', JSON.stringify(parsed, null, 2));
console.log(`Parsed ${parsed.length} questions.`);
