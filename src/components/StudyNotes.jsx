import React, { useState } from 'react';
import notesData from '../data/notes_data';
import ChapterDiagram from './ChapterDiagram';
import { t } from '../i18n';

const getLightenedColor = (hex) => {
  if (!hex) return hex;
  const darkMap = {
    '#000080': '#668cff', // Navy -> Light Blue
    '#006400': '#66cc66', // Dark Green -> Light Green
    '#8B0000': '#ff6666', // Dark Red -> Light Red
    '#4B0082': '#b366ff', // Indigo -> Light Purple
    '#8B4513': '#ffaa66', // Saddle Brown -> Light Orange
    '#006666': '#4dd2d2', // Dark Cyan -> Light Cyan
    '#D2691E': '#ffb366', // Chocolate -> Light Orange
  };
  return darkMap[hex.toUpperCase()] || darkMap[hex] || hex;
};

const StudyNotes = ({ language, darkMode }) => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Fallback to 'es' if language missing from notesData
  const currentNotes = notesData[language] || notesData['es'];
  const { chapters, examOverview, emptyState, emptyStateSub, examLabel } = currentNotes;

  const chapter = chapters.find(c => c.id === selectedChapter);
  const themeColor = chapter ? (darkMode ? getLightenedColor(chapter.color) : chapter.color) : '#000';

  return (
    <div className="notes-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Chapter selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem', flexShrink: 0 }}>
        {chapters.map(c => (
          <button
            key={c.id}
            className="btn"
            onClick={() => setSelectedChapter(selectedChapter === c.id ? null : c.id)}
            style={{
              width: 'auto',
              padding: '4px 10px',
              fontSize: '0.9rem',
              background: selectedChapter === c.id ? c.color : undefined,
              color: selectedChapter === c.id ? 'white' : undefined,
            }}
          >
            {t('chapter')} {c.id}
          </button>
        ))}
      </div>

      <div style={{ overflowY: 'auto', flexGrow: 1, paddingRight: '4px' }}>
        <div className="notes-intro-panel">
          <h3>{t('examTitle')}</h3>
          <ul>
            {examOverview.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        {!chapter && (
          <div className="notes-empty-state">
            <p>{emptyState}</p>
            <p className="notes-sub" dangerouslySetInnerHTML={{ __html: emptyStateSub.replace('En el examen', '<strong>En el examen</strong>').replace('"In the exam"', '<strong>"In the exam"</strong>').replace('« À l\'examen »', '<strong>« À l\'examen »</strong>') }}>
            </p>
          </div>
        )}

        {chapter && (
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '4px' }}>
              {chapter.title}
            </h2>
            <ChapterDiagram chapterId={chapter.id} color={themeColor} language={language} />
          {chapter.sections.map((section, si) => (
            <div key={si} style={{ marginBottom: '1.2rem' }}>
              <h3 className="notes-heading" style={{ borderLeft: `4px solid ${themeColor}` }}>
                {section.heading}
              </h3>
              <ul className="notes-list">
                {section.items.map((item, ii) => (
                  <li key={ii} style={{ fontSize: '0.9rem', marginBottom: '4px', lineHeight: '1.4' }}>
                    {item}
                  </li>
                ))}
              </ul>
              {section.exam && (
                <div className="notes-exam-tip">
                  <strong>{examLabel}</strong> {section.exam}
                </div>
              )}
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default StudyNotes;
