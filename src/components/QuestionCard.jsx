import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { t } from '../i18n';

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];


const QuestionCard = ({
  questionData,
  currentQuestionIndex,
  totalQuestions,
  selectedOption,
  handleOptionSelect,
  handleNextQuestion,
  isAnswered,
}) => {
  const progressPct = ((currentQuestionIndex) / totalQuestions) * 100;

  return (
    <div className="animate-in">
      {/* Question progress bar */}
      <div className="question-progress-track">
        <div className="question-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="progress-container">
        <span>{t('question')} {currentQuestionIndex + 1} {t('of')} {totalQuestions}</span>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <span className="topic-badge">{t('chapter')} {questionData.chapter} — {questionData.topic}</span>
        </div>
      </div>

      <div className="question-text">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{questionData.question}</ReactMarkdown>
      </div>

      <div className="options-list">
        {questionData.options.map((option, index) => {
          let className = 'option-btn';
          let icon = null;

          if (isAnswered) {
            if (index === questionData.correctAnswer) {
              className += ' correct';
              icon = <span style={{ color: 'green', fontWeight: 'bold', marginLeft: '8px' }}>[OK]</span>;
            } else if (index === selectedOption) {
              className += ' incorrect';
              icon = <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '8px' }}>[X]</span>;
            }
          } else if (selectedOption === index) {
            className += ' selected';
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleOptionSelect(index)}
              disabled={isAnswered}
              aria-label={`${OPTION_LETTERS[index]}: ${option}`}
            >
              <span style={{ fontWeight: 'bold', marginRight: '8px', minWidth: '18px', flexShrink: 0 }}>
                {OPTION_LETTERS[index]})
              </span>
              <span className="flex-1">{option}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {isAnswered && questionData.explanation && (
        <div className="explanation-box">
          <strong>{t('explanation')}</strong> {questionData.explanation}
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        {!isAnswered && (
          <button className="btn btn-secondary" onClick={handleNextQuestion}>
            {currentQuestionIndex === totalQuestions - 1 ? t('finishExam') : t('skip')}
          </button>
        )}
        {isAnswered && (
          <button className="btn" onClick={handleNextQuestion}>
            {currentQuestionIndex === totalQuestions - 1 ? t('viewResults') : t('next') + ' →'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
