import React from 'react';

const QuestionNav = ({ totalQuestions, currentQuestionIndex, userAnswers, onJump, onFinish }) => {
  return (
    <div className="question-nav-panel">
      <div className="nav-grid">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const answer = userAnswers[i];
          let statusClass = 'nav-unanswered';
          if (answer) {
            statusClass = answer.isCorrect ? 'nav-correct' : 'nav-incorrect';
          }
          const isActive = currentQuestionIndex === i ? 'nav-active' : '';

          return (
            <button
              key={i}
              className={`nav-btn ${statusClass} ${isActive}`}
              onClick={() => onJump(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <button className="btn" onClick={onFinish} style={{ marginTop: '20px' }}>
        [ Terminar Examen ]
      </button>
    </div>
  );
};

export default QuestionNav;
