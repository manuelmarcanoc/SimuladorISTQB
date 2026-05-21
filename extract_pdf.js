const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('public/CTFL-V4.0-ES-EJEMPLO-DE-EXAMEN-PREGUNTAS-MODELO-A-V001.00.pdf');

pdf(dataBuffer).then(function(data) {
  fs.writeFileSync('pdf_text.txt', data.text);
  console.log('PDF extracted to pdf_text.txt');
}).catch(err => {
  console.error('Error parsing PDF:', err);
});
