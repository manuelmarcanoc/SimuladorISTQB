import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

const QuizSetup = ({ onStartQuiz }) => {
  const [chapter, setChapter] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [questionCount, setQuestionCount] = useState(40);
  const [availableQuestions, setAvailableQuestions] = useState(0);

  // Calcular cuántas preguntas coinciden con los filtros actuales
  useEffect(() => {
    let filtered = questionsData;
    
    if (chapter !== 'all') {
      filtered = filtered.filter(q => q.chapter === parseInt(chapter));
    }
    
    if (difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }
    
    setAvailableQuestions(filtered.length);
    
    // Si la cantidad seleccionada es mayor a las disponibles, ajustarla temporalmente en la UI no es estrictamente necesario,
    // pero podemos mostrar un mensaje.
  }, [chapter, difficulty]);

  const handleStart = () => {
    onStartQuiz({
      chapter: chapter !== 'all' ? parseInt(chapter) : 'all',
      difficulty,
      count: parseInt(questionCount)
    });
  };

  return (
    <div>
      <h2 className="question-text" style={{ textAlign: 'center' }}>Configura tu Simulación</h2>
      
      <div className="setup-form">
        <div className="setup-group">
          <label>Tema / Capítulo</label>
          <select 
            className="setup-select" 
            value={chapter} 
            onChange={(e) => setChapter(e.target.value)}
          >
            <option value="all">Todos los Capítulos</option>
            <option value="1">1. Fundamentos de Pruebas</option>
            <option value="2">2. Pruebas a lo Largo del Ciclo de Vida</option>
            <option value="3">3. Pruebas Estáticas</option>
            <option value="4">4. Análisis y Diseño de Pruebas</option>
            <option value="5">5. Gestión de las Actividades de Prueba</option>
            <option value="6">6. Herramientas de Prueba</option>
          </select>
        </div>

        <div className="setup-group">
          <label>Dificultad</label>
          <select 
            className="setup-select" 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="all">Cualquiera</option>
            <option value="easy">Fácil</option>
            <option value="medium">Media</option>
            <option value="hard">Difícil</option>
          </select>
        </div>

        <div className="setup-group">
          <label>Número de Preguntas</label>
          <select 
            className="setup-select" 
            value={questionCount} 
            onChange={(e) => setQuestionCount(e.target.value)}
          >
            <option value="5">5 Preguntas</option>
            <option value="10">10 Preguntas</option>
            <option value="20">20 Preguntas</option>
            <option value="40">40 Preguntas (Examen Completo)</option>
          </select>
        </div>
        
        {availableQuestions < questionCount && availableQuestions > 0 && (
          <p className="setup-info">
            Solo hay {availableQuestions} preguntas disponibles con estos filtros. Se ajustará a {availableQuestions}.
          </p>
        )}
        
        {availableQuestions === 0 && (
          <p className="setup-info" style={{ color: 'var(--accent-error)' }}>
            No hay preguntas con estos filtros. Por favor, amplía tu selección.
          </p>
        )}

        <button 
          className="btn" 
          onClick={handleStart}
          disabled={availableQuestions === 0}
          style={{ marginTop: '1rem' }}
        >
          [ Iniciar Simulación ]
        </button>
      </div>
    </div>
  );
};

export default QuizSetup;
