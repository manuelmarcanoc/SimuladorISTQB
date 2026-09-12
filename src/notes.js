// Acceso a los apuntes por certificación (sin dependencias del router,
// para poder usarlo tanto en las páginas como en el mapa de rutas).
import notesData from './data/notes_data';
import notesTaeData from './data/notes_tae_data';

export const NOTES_BY_CERT = { ctfl: notesData, tae: notesTaeData };

export function notesFor(certKey, language = 'es') {
  const source = NOTES_BY_CERT[certKey] || notesData;
  return source[language] || source.es;
}

export function chaptersOf(certKey, language = 'es') {
  return notesFor(certKey, language).chapters || [];
}

export function chapterOf(certKey, chapterId, language = 'es') {
  return chaptersOf(certKey, language).find((c) => String(c.id) === String(chapterId));
}
