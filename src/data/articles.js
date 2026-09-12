// Índice único de guías: las más recientes primero.
import { ARTICLES as CTFL_ARTICLES } from './articles_data';
import { AUTOMATION_ARTICLES } from './articles_automation';

export const ARTICLES = [...AUTOMATION_ARTICLES, ...CTFL_ARTICLES];

export default ARTICLES;
