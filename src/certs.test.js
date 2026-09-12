import { CERTS, DEFAULT_CERT, getCert, dataFile } from './certs';

describe('registro de certificaciones', () => {
  test('la certificación por defecto existe en el registro', () => {
    expect(CERTS[DEFAULT_CERT]).toBeDefined();
  });

  test('cada certificación declara los campos obligatorios', () => {
    Object.values(CERTS).forEach((c) => {
      expect(typeof c.key).toBe('string');
      expect(typeof c.code).toBe('string');
      expect(Array.isArray(c.chapters)).toBe(true);
      expect(c.chapters.length).toBeGreaterThan(0);
      expect(c.exam.questions).toBeGreaterThan(0);
      expect(c.exam.timePerQuestion).toBeGreaterThan(0);
      expect(c.exam.passPct).toBeGreaterThan(0);
    });
  });

  test('getCert cae en la certificación por defecto ante una clave desconocida', () => {
    expect(getCert('no-existe').key).toBe(DEFAULT_CERT);
    expect(getCert(undefined).key).toBe(DEFAULT_CERT);
  });

  test('el tiempo del examen CT-TAE son 40 preguntas en 90 minutos', () => {
    const tae = getCert('tae');
    expect(tae.exam.questions).toBe(40);
    expect((tae.exam.questions * tae.exam.timePerQuestion) / 60).toBe(90);
  });

  describe('dataFile', () => {
    test('CTFL en español usa el fichero base', () => {
      expect(dataFile('questions', 'ctfl', 'es')).toBe('questions');
    });

    test('CTFL traducido añade el sufijo de idioma', () => {
      expect(dataFile('questions', 'ctfl', 'fr')).toBe('questions_fr');
      expect(dataFile('concepts', 'ctfl', 'pt')).toBe('concepts_pt');
    });

    test('CT-TAE ignora el idioma mientras no tenga traducciones', () => {
      expect(dataFile('questions', 'tae', 'es')).toBe('questions_tae');
      expect(dataFile('questions', 'tae', 'en')).toBe('questions_tae');
      expect(dataFile('concepts', 'tae', 'fr')).toBe('concepts_tae');
    });
  });
});
