// Shared localStorage helpers for wrong questions (to avoid circular imports)
// Las claves se separan por certificación: CTFL mantiene la clave histórica.
const WRONG_KEY = 'istqb_wrong_questions';

export function wrongKey(cert) {
  return !cert || cert === 'ctfl' ? WRONG_KEY : `${WRONG_KEY}_${cert}`;
}

export function saveWrongQuestions(questions, cert) {
  try {
    localStorage.setItem(wrongKey(cert), JSON.stringify(questions));
  } catch {}
}

export function loadWrongQuestions(cert) {
  try {
    const raw = localStorage.getItem(wrongKey(cert));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
