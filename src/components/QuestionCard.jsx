import React from 'react';

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
  return (
    <div>
      <div className="progress-container">
        <span>Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
        <span className="topic-badge">Cap. {questionData.chapter} — {questionData.topic}</span>
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
          <strong>💡 Explicación:</strong> {questionData.explanation}
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
