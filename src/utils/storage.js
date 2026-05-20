// Shared localStorage helpers for wrong questions (to avoid circular imports)
const WRONG_KEY = 'istqb_wrong_questions';

export function saveWrongQuestions(questions) {
  try {
    localStorage.setItem(WRONG_KEY, JSON.stringify(questions));
  } catch {}
}

export function loadWrongQuestions() {
  try {
    const raw = localStorage.getItem(WRONG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
