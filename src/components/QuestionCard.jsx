import React from 'react';

const QuestionCard = ({
  questionData,
  currentQuestionIndex,
  totalQuestions,
  selectedOption,
  handleOptionSelect,
  handleNextQuestion,
  isAnswered
}) => {
  return (
    <div>
      <div className="progress-container">
        <span>Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
        <span className="topic-badge">{questionData.topic}</span>
      </div>

      <h2 className="question-text">{questionData.question}</h2>

      <div className="options-list">
        {questionData.options.map((option, index) => {
          let className = "option-btn";
          let icon = null;

          if (isAnswered) {
            if (index === questionData.correctAnswer) {
              className += " correct";
              icon = <span style={{color: 'green', fontWeight: 'bold'}}>[OK]</span>;
            } else if (index === selectedOption) {
              className += " incorrect";
              icon = <span style={{color: 'red', fontWeight: 'bold'}}>[X]</span>;
            }
          } else if (selectedOption === index) {
            className += " selected"; 
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleOptionSelect(index)}
              disabled={isAnswered}
            >
              <span className="flex-1">{option}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="explanation-box">
          <strong>Explicación:</strong> {questionData.explanation}
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {!isAnswered && (
          <button className="btn" onClick={handleNextQuestion}>
            {currentQuestionIndex === totalQuestions - 1 ? 'Terminar Examen' : 'Saltar Pregunta'}
          </button>
        )}
        
        {isAnswered && (
          <button className="btn" onClick={handleNextQuestion}>
            {currentQuestionIndex === totalQuestions - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
