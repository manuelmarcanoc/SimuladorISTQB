// Contrato de datos de los bancos de preguntas.
// Estos tests son la red de seguridad al añadir preguntas nuevas a mano:
// cualquier fallo de formato rompe el build antes de llegar a producción.
import { CERTS } from '../certs';
import questionsEs from './questions.json';
import questionsEn from './questions_en.json';
import questionsFr from './questions_fr.json';
import questionsPt from './questions_pt.json';
import questionsTae from './questions_tae.json';
import conceptsEs from './concepts.json';
import conceptsTae from './concepts_tae.json';
import flashcardsEs from './flashcards.json';
import flashcardsTae from './flashcards_tae.json';

const BANKS = {
  'CTFL es': { data: questionsEs, cert: 'ctfl' },
  'CTFL en': { data: questionsEn, cert: 'ctfl' },
  'CTFL fr': { data: questionsFr, cert: 'ctfl' },
  'CTFL pt': { data: questionsPt, cert: 'ctfl' },
  'CT-TAE es': { data: questionsTae, cert: 'tae' },
};

describe.each(Object.entries(BANKS))('banco de preguntas %s', (name, { data, cert }) => {
  test('no está vacío', () => {
    expect(data.length).toBeGreaterThan(0);
  });

  test('todos los ids son únicos', () => {
    const ids = data.map((q) => q.id);
    const duplicados = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicados).toEqual([]);
  });

  test('cada pregunta tiene enunciado, opciones y explicación', () => {
    data.forEach((q) => {
      expect(typeof q.question).toBe('string');
      expect(q.question.trim().length).toBeGreaterThan(0);
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      q.options.forEach((o) => expect(String(o).trim().length).toBeGreaterThan(0));
      expect(String(q.explanation || '').trim().length).toBeGreaterThan(0);
    });
  });

  test('correctAnswer apunta a una opción existente', () => {
    data.forEach((q) => {
      expect(Number.isInteger(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThan(q.options.length);
    });
  });

  test('el capítulo pertenece a la certificación', () => {
    const capitulos = CERTS[cert].chapters;
    data.forEach((q) => {
      expect(capitulos).toContain(q.chapter);
    });
  });

  test('hay preguntas suficientes para un examen completo', () => {
    expect(data.length).toBeGreaterThanOrEqual(CERTS[cert].exam.questions);
  });

  test('cada capítulo de la certificación tiene al menos una pregunta', () => {
    const cubiertos = new Set(data.map((q) => q.chapter));
    CERTS[cert].chapters.forEach((c) => expect(cubiertos.has(c)).toBe(true));
  });
});

describe('los contadores declarados en certs.js coinciden con los bancos', () => {
  test.each([
    ['ctfl', questionsEs],
    ['tae', questionsTae],
  ])('%s: questionCount y chapterCounts están al día', (cert, data) => {
    expect(CERTS[cert].questionCount).toBe(data.length);
    const reales = {};
    data.forEach((q) => {
      reales[q.chapter] = (reales[q.chapter] || 0) + 1;
    });
    expect(CERTS[cert].chapterCounts).toEqual(reales);
    const suma = Object.values(CERTS[cert].chapterCounts).reduce((a, b) => a + b, 0);
    expect(suma).toBe(CERTS[cert].questionCount);
  });
});

describe('coherencia entre traducciones de CTFL', () => {
  test.each([
    ['en', questionsEn],
    ['fr', questionsFr],
    ['pt', questionsPt],
  ])('la traducción %s mantiene los mismos ids y respuestas que el español', (lang, traducido) => {
    const porId = new Map(questionsEs.map((q) => [q.id, q]));
    traducido.forEach((q) => {
      const original = porId.get(q.id);
      expect(original).toBeDefined();
      expect(q.correctAnswer).toBe(original.correctAnswer);
      expect(q.chapter).toBe(original.chapter);
      expect(q.options.length).toBe(original.options.length);
    });
  });
});

describe('glosario y flashcards', () => {
  test.each([
    ['CTFL', conceptsEs],
    ['CT-TAE', conceptsTae],
  ])('los conceptos de %s tienen término y definición', (name, data) => {
    expect(data.length).toBeGreaterThanOrEqual(5); // el minijuego usa rondas de 5
    data.forEach((c) => {
      expect(String(c.term || '').trim().length).toBeGreaterThan(0);
      expect(String(c.definition || '').trim().length).toBeGreaterThan(0);
    });
  });

  test.each([
    ['CTFL', flashcardsEs, 'ctfl'],
    ['CT-TAE', flashcardsTae, 'tae'],
  ])('las flashcards de %s tienen anverso, reverso y capítulo válido', (name, data, cert) => {
    data.forEach((f) => {
      expect(String(f.front || '').trim().length).toBeGreaterThan(0);
      expect(String(f.back || '').trim().length).toBeGreaterThan(0);
      expect(CERTS[cert].chapters).toContain(f.chapter);
    });
  });
});
