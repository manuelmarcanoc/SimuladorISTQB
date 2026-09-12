// ============================================================
//  Registro de certificaciones de ISTQBeasy
//  Añadir una nueva certificación = añadir una entrada aquí
//  + sus ficheros de datos en src/data/
// ============================================================

import { SITE } from './site.config';

export const CERTS = {
  ctfl: {
    key: 'ctfl',
    slug: 'ctfl',
    code: 'CTFL v4.0',
    label: 'ISTQB CTFL v4.0',
    fullName: 'ISTQB Certified Tester Foundation Level v4.0',
    name: 'Foundation Level',
    short: 'Foundation',
    level: 'Foundation Level',
    chapters: [1, 2, 3, 4, 5, 6],
    exam: { questions: 40, minutes: 65, points: 40, passPoints: 26, passPct: 65, timePerQuestion: 97 },
    prerequisites: 'Ninguno. Es el punto de entrada al esquema de certificaciones ISTQB.',
    syllabusUrl: SITE.official.ctflSyllabus,
    dataSuffix: '',
    // Contadores del banco (validados en src/data/banks.test.js)
    questionCount: 414,
    chapterCounts: { 1: 77, 2: 71, 3: 47, 4: 109, 5: 92, 6: 18 },
    hasTranslations: true,
    hasDiagrams: true,
    chapterNames: null, // usa las traducciones de i18n
    chapterShort: null,
    summary:
      'La certificación de testing de software más reconocida del mundo. Cubre los fundamentos de las pruebas, su papel en el ciclo de vida, las pruebas estáticas, las técnicas de diseño de casos, la gestión de las actividades de prueba y las herramientas.',
  },
  tae: {
    key: 'tae',
    slug: 'ctal-tae',
    code: 'CTAL-TAE v2.0',
    label: 'ISTQB CTAL-TAE v2.0',
    fullName: 'ISTQB Certified Tester Advanced Level Test Automation Engineering v2.0',
    name: 'Test Automation Engineering',
    short: 'Automation',
    level: 'Advanced Level',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8],
    // 40 preguntas / 90 minutos = 135 s por pregunta
    exam: { questions: 40, minutes: 90, points: 66, passPoints: 43, passPct: 65, timePerQuestion: 135 },
    prerequisites:
      'Tener el CTFL v4.0 (o una versión anterior del Foundation Level) y experiencia práctica real en automatización de pruebas.',
    syllabusUrl: SITE.official.taeSyllabus,
    dataSuffix: '_tae',
    questionCount: 64,
    chapterCounts: { 1: 5, 2: 9, 3: 11, 4: 8, 5: 7, 6: 8, 7: 7, 8: 9 },
    hasTranslations: false, // de momento solo ES
    hasDiagrams: false,
    chapterNames: {
      1: 'Introducción y objetivos',
      2: 'Preparación para la automatización',
      3: 'Arquitectura (gTAA)',
      4: 'Implementación',
      5: 'Despliegue y CI/CD',
      6: 'Informes y métricas',
      7: 'Verificación de la solución',
      8: 'Mejora continua',
    },
    chapterShort: {
      1: 'Intro', 2: 'Preparación', 3: 'Arquitectura', 4: 'Implementación',
      5: 'CI/CD', 6: 'Métricas', 7: 'Verificación', 8: 'Mejora',
    },
    summary:
      'Certificación de nivel avanzado centrada en diseñar, implementar y mantener soluciones de automatización de pruebas: arquitectura en capas, integración en CI/CD, métricas, verificación de la propia solución y mejora continua.',
  },
};

export const DEFAULT_CERT = 'ctfl';

export const CERT_LIST = Object.values(CERTS);

export const TOTAL_QUESTIONS = CERT_LIST.reduce((acc, c) => acc + c.questionCount, 0);

export const getCert = (key) => CERTS[key] || CERTS[DEFAULT_CERT];

export const getCertBySlug = (slug) =>
  CERT_LIST.find((c) => c.slug === slug) || CERTS[DEFAULT_CERT];

// Devuelve el nombre del fichero de datos sin extensión.
// dataFile('questions', 'tae', 'es')  -> 'questions_tae'
// dataFile('questions', 'ctfl', 'en') -> 'questions_en'
export function dataFile(base, certKey, language) {
  const c = getCert(certKey);
  if (!c.hasTranslations || !language || language === 'es') {
    return `${base}${c.dataSuffix}`;
  }
  return `${base}${c.dataSuffix}_${language}`;
}
