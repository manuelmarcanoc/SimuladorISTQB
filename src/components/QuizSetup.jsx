import React, { useState, useEffect } from 'react';
import { getCert } from '../certs';
import { loadWrongQuestions } from '../utils/storage';
import { t, tl } from '../i18n';

const QuizSetup = ({ onStartQuiz, language = 'es', cert = 'ctfl' }) => {
  const [chapter, setChapter] = useState('all');
  const [questionCount, setQuestionCount] = useState(40);
  const [availableQuestions, setAvailableQuestions] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const certInfo = getCert(cert);
  const chapterNames = certInfo.chapterNames || tl(language, 'chapterNames');
  const CHAPTERS = [
    { value: 'all', label: t('allChapters') },
    ...certInfo.chapters.map((n) => ({ value: String(n), label: `${n}. ${chapterNames[n]}` })),
  ];

  useEffect(() => {
    setWrongCount(loadWrongQuestions(cert).length);
    setChapter('all');
  }, [cert]);

  useEffect(() => {
    setAvailableQuestions(
      chapter === 'all'
        ? certInfo.questionCount
        : certInfo.chapterCounts[parseInt(chapter, 10)] || 0
    );
  }, [chapter, certInfo]);

  const handleStart = (mode) => {
    if (mode === 'official') {
      onStartQuiz({ chapter: 'all', count: certInfo.exam.questions, timePerQuestion: certInfo.exam.timePerQuestion });
      return;
    }
    if (mode === 'review') {
      const wrongQs = loadWrongQuestions(cert);
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
        <p className="setup-hero-sub">{t('configSubtitle', { cert: certInfo.label })}</p>
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
          {t('totalBank', { n: certInfo.questionCount, cert: certInfo.label })}
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
