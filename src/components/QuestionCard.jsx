import React from 'react';

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];

const DIFF_LABEL = { easy: 'Fácil', medium: 'Media', hard: 'Difícil' };
const DIFF_BG    = { easy: '#a8f5a8', medium: '#ffe8a8', hard: '#f5a8a8' };

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
    <div>
      {/* Question progress bar */}
      <div className="question-progress-track">
        <div className="question-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="progress-container">
        <span>Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {questionData.difficulty && (
            <span
              className="topic-badge"
              style={{
                background: DIFF_BG[questionData.difficulty] || '#eee',
                color: '#000',
              }}
            >
              {DIFF_LABEL[questionData.difficulty] || questionData.difficulty}
            </span>
          )}
          <span className="topic-badge">Cap. {questionData.chapter} — {questionData.topic}</span>
        </div>
      </div>

      <h2 className="question-text">{questionData.question}</h2>

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
              aria-label={`Opción ${OPTION_LETTERS[index]}: ${option}`}
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
          <strong>Explicación:</strong> {questionData.explanation}
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        {!isAnswered && (
          <button className="btn" onClick={handleNextQuestion}>
            {currentQuestionIndex === totalQuestions - 1 ? '[ Terminar Examen ]' : '[ Saltar Pregunta ]'}
          </button>
        )}
        {isAnswered && (
          <button className="btn" onClick={handleNextQuestion}>
            {currentQuestionIndex === totalQuestions - 1 ? '[ Ver Resultados ]' : '[ Siguiente →]'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
