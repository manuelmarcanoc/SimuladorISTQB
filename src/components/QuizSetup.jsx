import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';
import { loadWrongQuestions } from '../utils/storage';
import { t, tl } from '../i18n';

const QuizSetup = ({ onStartQuiz, language = 'es' }) => {
  const [chapter, setChapter] = useState('all');
  const [questionCount, setQuestionCount] = useState(40);
  const [availableQuestions, setAvailableQuestions] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const chapterNames = tl(language, 'chapterNames');
  const CHAPTERS = [
    { value: 'all', label: t('allChapters') },
    ...[1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: `${n}. ${chapterNames[n]}` })),
  ];

  useEffect(() => {
    setWrongCount(loadWrongQuestions().length);
  }, []);

  useEffect(() => {
    let filtered = questionsData;
    if (chapter !== 'all') {
      filtered = filtered.filter(q => q.chapter === parseInt(chapter, 10));
    }
    setAvailableQuestions(filtered.length);
  }, [chapter]);

  const handleStart = (mode) => {
    if (mode === 'official') {
      onStartQuiz({ chapter: 'all', count: 40, timePerQuestion: 97 });
      return;
    }
    if (mode === 'review') {
      const wrongQs = loadWrongQuestions();
      onStartQuiz({ questions: wrongQs, count: wrongQs.length, timePerQuestion: 90 });
      return;
    }
    onStartQuiz({
      chapter: chapter !== 'all' ? parseInt(chapter, 10) : 'all',
      count: Math.min(parseInt(questionCount, 10), availableQuestions),
      timePerQuestion: 90,
    });
  };

  return (
    <div className="animate-in setup-wrapper">
      <div className="setup-hero">
        <h2 className="card-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('configTitle')}</h2>
        <p className="setup-hero-sub">{t('configSubtitle')}</p>
      </div>

      <div className="setup-form">
        <div className="setup-group">
          <label>{t('topicChapter')}</label>
          <select className="setup-select" value={chapter} onChange={e => setChapter(e.target.value)}>
            {CHAPTERS.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="setup-group">
          <label>{t('numQuestions')}</label>
          <select className="setup-select" value={questionCount} onChange={e => setQuestionCount(e.target.value)}>
            <option value="5">5 {t('questionsWord')}</option>
            <option value="10">10 {t('questionsWord')}</option>
            <option value="20">20 {t('questionsWord')}</option>
            <option value="40">40 {t('questionsWord')} {t('standardExamTag')}</option>
            <option value="60">60 {t('questionsWord')}</option>
            <option value="80">80 {t('questionsWord')}</option>
          </select>
        </div>

        <div className="setup-info setup-availability">
          {t('availableWithFilters')} <strong>{availableQuestions}</strong>
          {availableQuestions < parseInt(questionCount, 10) && availableQuestions > 0 && (
            <span style={{ color: 'var(--primary)' }}> → {t('willUse', { n: availableQuestions })}</span>
          )}
        </div>

        {availableQuestions === 0 && (
          <p className="setup-info" style={{ color: 'var(--error)' }}>
            {t('noQuestionsFilters')}
          </p>
        )}

        <button
          className="btn"
          onClick={() => handleStart('custom')}
          disabled={availableQuestions === 0}
          style={{ marginTop: '0.5rem' }}
        >
          {t('startSimulation')}
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => handleStart('official')}
          style={{ marginTop: '0.25rem' }}
        >
          {t('officialExamMode')}
        </button>

        {wrongCount > 0 && (
          <button
            className="btn btn-warning"
            onClick={() => handleStart('review')}
            style={{ marginTop: '0.25rem' }}
          >
            ⚠ {t('reviewErrors', { n: wrongCount })}
          </button>
        )}

        <p className="setup-bank">
          {t('totalBank', { n: questionsData.length })}
        </p>

        <div className="setup-info notes-exam-tip" style={{ marginTop: '0.8rem', textAlign: 'left' }}>
          <strong>{t('examTipsTitle')}</strong>
          <ul style={{ margin: '6px 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
            <li>{t('tip1')}</li>
            <li>{t('tip2')}</li>
            <li>{t('tip3')}</li>
            <li>{t('tip4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizSetup;
