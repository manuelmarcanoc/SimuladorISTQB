# -*- coding: utf-8 -*-
"""
Integra la certificación CT-TAE en la app ISTQBeasy.
Aplica ediciones puntuales e idempotentes sobre src/.
Uso:  python3 patch_tae.py [ruta_a_istqb-quiz]
"""
import io, os, re, sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else '.'
SRC = os.path.join(ROOT, 'src')
report = []


def read(p):
    with io.open(p, encoding='utf-8') as f:
        return f.read()


def write(p, s):
    with io.open(p, 'w', encoding='utf-8', newline='\n') as f:
        f.write(s)


def patch(relpath, edits, skip_if=None):
    """edits: lista de (old, new, count) -> count=0 significa todas las ocurrencias"""
    p = os.path.join(SRC, relpath)
    s = read(p)
    if skip_if and skip_if in s:
        report.append('SKIP  %-28s (ya parcheado)' % relpath)
        return
    for item in edits:
        old, new = item[0], item[1]
        cnt = item[2] if len(item) > 2 else 1
        n = s.count(old)
        if n == 0:
            report.append('FAIL  %-28s no encontrado: %r' % (relpath, old[:70]))
            continue
        if cnt and n != cnt:
            report.append('WARN  %-28s %d ocurrencias (esperadas %d): %r' % (relpath, n, cnt, old[:50]))
        s = s.replace(old, new)
    write(p, s)
    report.append('OK    %-28s (%d ediciones)' % (relpath, len(edits)))


# ─────────────────────────────────────────────────────────── App.js
patch('App.js', [
    ("import { setLanguage, t } from './i18n';",
     "import { setLanguage, t } from './i18n';\nimport { CERTS, DEFAULT_CERT } from './certs';"),

    ("  const [lang, setLang] = useState('es');",
     "  const [lang, setLang] = useState('es');\n"
     "  const [cert, setCert] = useState(() => localStorage.getItem('istqb-cert') || DEFAULT_CERT);"),

    ("  const handleLanguageChange = (newLang) => {",
     "  const handleCertChange = (newCert) => {\n"
     "    setCert(newCert);\n"
     "    localStorage.setItem('istqb-cert', newCert);\n"
     "  };\n\n"
     "  const handleLanguageChange = (newLang) => {"),

    ("        return <Quiz language={lang} />;",
     "        return <Quiz language={lang} cert={cert} />;", 2),

    ("        return <StudyNotes language={lang} darkMode={darkMode} />;",
     "        return <StudyNotes language={lang} darkMode={darkMode} cert={cert} />;"),

    ("        return <ConceptMatch language={lang} />;",
     "        return <ConceptMatch language={lang} cert={cert} />;"),

    ("        return <StatsPanel language={lang} />;",
     "        return <StatsPanel language={lang} cert={cert} />;"),

    ("      <div className=\"layout-wrapper\">",
     "      <div className=\"cert-bar\" role=\"tablist\" aria-label=\"Certificación\">\n"
     "        {Object.values(CERTS).map((c) => (\n"
     "          <button\n"
     "            key={c.key}\n"
     "            role=\"tab\"\n"
     "            aria-selected={cert === c.key}\n"
     "            className={`cert-btn ${cert === c.key ? 'active' : ''}`}\n"
     "            onClick={() => handleCertChange(c.key)}\n"
     "          >\n"
     "            <span className=\"cert-code\">{c.code}</span>\n"
     "            <span className=\"cert-name\">{c.name}</span>\n"
     "          </button>\n"
     "        ))}\n"
     "      </div>\n\n"
     "      <div className=\"layout-wrapper\">"),
], skip_if="from './certs'")


# ─────────────────────────────────────────────────────── Quiz.jsx
patch('components/Quiz.jsx', [
    ("import { t } from '../i18n';",
     "import { t } from '../i18n';\nimport { getCert, dataFile } from '../certs';"),

    ("const Quiz = ({ language, onClose, onNewAchievements }) => {",
     "const Quiz = ({ language, cert = 'ctfl', onClose, onNewAchievements }) => {"),

    ("import(`../data/questions${language === 'es' ? '' : '_' + language}.json`)",
     "import(`../data/${dataFile('questions', cert, language)}.json`)", 2),

    ("    saveWrongQuestions(wrongQs);", "    saveWrongQuestions(wrongQs, cert);"),
    ("    const stats = loadStats();", "    const stats = loadStats(cert);"),
    ("    saveStats(updatedStats);", "    saveStats(updatedStats, cert);"),
    ("    const currentUnlocked = loadAchievements();", "    const currentUnlocked = loadAchievements(cert);"),
    ("      saveAchievements(allUnlocked);", "      saveAchievements(allUnlocked, cert);"),
    ("  }, [showResults]);", "  }, [showResults, cert]);"),
    ("  }, [language]);", "  }, [language, cert]);", 2),

    ("      passedExams: (stats.passedExams || 0) + (pct >= 65 ? 1 : 0),",
     "      passedExams: (stats.passedExams || 0) + (pct >= getCert(cert).exam.passPct ? 1 : 0),"),

    ("<QuizSetup onStartQuiz={startQuiz} language={language} />",
     "<QuizSetup onStartQuiz={startQuiz} language={language} cert={cert} />"),
], skip_if="from '../certs'")


# ────────────────────────────────────────────────── QuizSetup.jsx
patch('components/QuizSetup.jsx', [
    ("import questionsData from '../data/questions.json';",
     "import questionsData from '../data/questions.json';\n"
     "import questionsTaeData from '../data/questions_tae.json';\n"
     "import { getCert } from '../certs';\n\n"
     "const BANKS = { ctfl: questionsData, tae: questionsTaeData };"),

    ("const QuizSetup = ({ onStartQuiz, language = 'es' }) => {",
     "const QuizSetup = ({ onStartQuiz, language = 'es', cert = 'ctfl' }) => {"),

    ("  const chapterNames = tl(language, 'chapterNames');\n"
     "  const CHAPTERS = [\n"
     "    { value: 'all', label: t('allChapters') },\n"
     "    ...[1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: `${n}. ${chapterNames[n]}` })),\n"
     "  ];",
     "  const certInfo = getCert(cert);\n"
     "  const bank = BANKS[certInfo.key] || questionsData;\n"
     "  const chapterNames = certInfo.chapterNames || tl(language, 'chapterNames');\n"
     "  const CHAPTERS = [\n"
     "    { value: 'all', label: t('allChapters') },\n"
     "    ...certInfo.chapters.map((n) => ({ value: String(n), label: `${n}. ${chapterNames[n]}` })),\n"
     "  ];"),

    ("  useEffect(() => {\n"
     "    setWrongCount(loadWrongQuestions().length);\n"
     "  }, []);",
     "  useEffect(() => {\n"
     "    setWrongCount(loadWrongQuestions(cert).length);\n"
     "    setChapter('all');\n"
     "  }, [cert]);"),

    ("    let filtered = questionsData;", "    let filtered = bank;"),
    ("  }, [chapter]);", "  }, [chapter, bank]);"),

    ("      onStartQuiz({ chapter: 'all', count: 40, timePerQuestion: 97 });",
     "      onStartQuiz({ chapter: 'all', count: certInfo.exam.questions, timePerQuestion: certInfo.exam.timePerQuestion });"),

    ("      const wrongQs = loadWrongQuestions();", "      const wrongQs = loadWrongQuestions(cert);"),
    ("{t('totalBank', { n: questionsData.length })}", "{t('totalBank', { n: bank.length })}"),
], skip_if="from '../certs'")


# ───────────────────────────────────────────────── StudyNotes.jsx
patch('components/StudyNotes.jsx', [
    ("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';"),

    ("import notesData from '../data/notes_data';",
     "import notesData from '../data/notes_data';\nimport notesTaeData from '../data/notes_tae_data';"),

    ("const StudyNotes = ({ language, darkMode }) => {",
     "const StudyNotes = ({ language, darkMode, cert = 'ctfl' }) => {"),

    ("  // Fallback to 'es' if language missing from notesData\n"
     "  const currentNotes = notesData[language] || notesData['es'];",
     "  useEffect(() => { setSelectedChapter(null); }, [cert]);\n\n"
     "  // Fallback to 'es' if language missing\n"
     "  const source = cert === 'tae' ? notesTaeData : notesData;\n"
     "  const currentNotes = source[language] || source['es'];"),

    ("            <ChapterDiagram chapterId={chapter.id} color={themeColor} language={language} />",
     "            {chapter.subtitle && (\n"
     "              <p className=\"notes-chapter-subtitle\">{chapter.subtitle}</p>\n"
     "            )}\n"
     "            {cert !== 'tae' && (\n"
     "              <ChapterDiagram chapterId={chapter.id} color={themeColor} language={language} />\n"
     "            )}"),
], skip_if="notes_tae_data")


# ─────────────────────────────────────────────── ConceptMatch.jsx
patch('components/ConceptMatch.jsx', [
    ("import { t } from '../i18n';",
     "import { t } from '../i18n';\nimport { dataFile } from '../certs';"),

    ("const ConceptMatch = ({ language, onClose, onNewAchievements }) => {",
     "const ConceptMatch = ({ language, cert = 'ctfl', onClose, onNewAchievements }) => {"),

    ("import(`../data/concepts${language === 'es' ? '' : '_' + language}.json`)",
     "import(`../data/${dataFile('concepts', cert, language)}.json`)"),
], skip_if="from '../certs'")


# ───────────────────────────────────────────────── StatsPanel.jsx
patch('components/StatsPanel.jsx', [
    ("import { t, tl, getLanguage } from '../i18n';",
     "import { t, tl, getLanguage } from '../i18n';\nimport { getCert } from '../certs';"),

    ("const StatsPanel = ({ language }) => {\n"
     "  const CHAPTER_NAMES = tl(getLanguage(), 'chapterShort');",
     "const StatsPanel = ({ language, cert = 'ctfl' }) => {\n"
     "  const CHAPTER_NAMES = getCert(cert).chapterShort || tl(getLanguage(), 'chapterShort');"),

    ("  const [stats] = useState(() => loadStats());", "  const [stats] = useState(() => loadStats(cert));"),
], skip_if="from '../certs'")


# ──────────────────────────────────────────────────── storage.js
storage_js = """// Shared localStorage helpers for wrong questions (to avoid circular imports)
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
"""
write(os.path.join(SRC, 'utils', 'storage.js'), storage_js)
report.append('OK    %-28s (reescrito)' % 'utils/storage.js')


# ─────────────────────────────────────────────── Achievements.jsx
# Namespacing de estadísticas/logros por certificación (regex tolerante)
ach_path = os.path.join(SRC, 'components', 'Achievements.jsx')
s = read(ach_path)
if 'nsKey(' in s:
    report.append('SKIP  %-28s (ya parcheado)' % 'components/Achievements.jsx')
else:
    before = s
    s = s.replace(
        "const STORAGE_KEY_ACHIEVEMENTS = 'istqb_achievements';",
        "const STORAGE_KEY_ACHIEVEMENTS = 'istqb_achievements';\n\n"
        "// Cada certificación guarda sus propias estadísticas.\n"
        "// CTFL conserva las claves históricas para no perder el progreso existente.\n"
        "const nsKey = (base, cert) => (!cert || cert === 'ctfl' ? base : `${base}_${cert}`);")
    for fn in ('loadStats', 'loadAchievements'):
        s = re.sub(r'export function %s\(\s*\)' % fn, 'export function %s(cert)' % fn, s)
    s = re.sub(r'export function saveStats\(\s*stats\s*\)', 'export function saveStats(stats, cert)', s)
    s = re.sub(r'export function saveAchievements\(\s*(\w+)\s*\)', r'export function saveAchievements(\1, cert)', s)
    s = s.replace('localStorage.getItem(STORAGE_KEY_STATS)', 'localStorage.getItem(nsKey(STORAGE_KEY_STATS, cert))')
    s = s.replace('localStorage.setItem(STORAGE_KEY_STATS,', 'localStorage.setItem(nsKey(STORAGE_KEY_STATS, cert),')
    s = s.replace('localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS)', 'localStorage.getItem(nsKey(STORAGE_KEY_ACHIEVEMENTS, cert))')
    s = s.replace('localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS,', 'localStorage.setItem(nsKey(STORAGE_KEY_ACHIEVEMENTS,')
    # cierre del setItem de logros (paréntesis extra)
    s = s.replace('localStorage.setItem(nsKey(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(list));',
                  'localStorage.setItem(nsKey(STORAGE_KEY_ACHIEVEMENTS, cert), JSON.stringify(list));')
    if s == before:
        report.append('FAIL  %-28s ninguna sustitución aplicada' % 'components/Achievements.jsx')
    else:
        write(ach_path, s)
        report.append('OK    %-28s (namespacing por certificación)' % 'components/Achievements.jsx')


# ───────────────────────────────────────────────────── index.css
css = read(os.path.join(SRC, 'index.css'))
if '.cert-bar' not in css:
    css += """

/* ===== Selector de certificación ===== */
.cert-bar {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 16px 0;
}
.cert-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 7px 14px;
  border: 1px solid var(--border, #d4d4d8);
  border-radius: 10px;
  background: transparent;
  color: var(--text-muted, #71717a);
  cursor: pointer;
  font: inherit;
  line-height: 1.2;
  transition: all .15s ease;
}
.cert-btn:hover { border-color: var(--primary, #2563eb); color: var(--primary, #2563eb); }
.cert-btn.active {
  border-color: var(--primary, #2563eb);
  background: var(--primary, #2563eb);
  color: #fff;
  box-shadow: 0 2px 8px rgba(37, 99, 235, .25);
}
.cert-code { font-size: .82rem; font-weight: 700; letter-spacing: .02em; }
.cert-name { font-size: .68rem; opacity: .85; }

.notes-chapter-subtitle {
  margin: -.6rem 0 1rem;
  font-size: .8rem;
  opacity: .7;
  font-style: italic;
}

@media (max-width: 520px) {
  .cert-btn { flex: 1 1 auto; align-items: center; padding: 6px 10px; }
  .cert-name { display: none; }
}
"""
    write(os.path.join(SRC, 'index.css'), css)
    report.append('OK    %-28s (estilos del selector)' % 'index.css')
else:
    report.append('SKIP  %-28s (ya tiene .cert-bar)' % 'index.css')


print('\n'.join(report))
fails = [r for r in report if r.startswith('FAIL')]
print('\n%d fallo(s)' % len(fails))
sys.exit(1 if fails else 0)
