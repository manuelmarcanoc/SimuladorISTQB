import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

const CHAPTERS = [
  { value: 'all', label: 'Todos los Capítulos' },
  { value: '1', label: '1. Fundamentos de Pruebas' },
  { value: '2', label: '2. Pruebas a lo Largo del SDLC' },
  { value: '3', label: '3. Pruebas Estáticas' },
  { value: '4', label: '4. Análisis y Diseño de Pruebas' },
  { value: '5', label: '5. Gestión de las Actividades de Prueba' },
  { value: '6', label: '6. Herramientas de Prueba' },
];

const QuizSetup = ({ onStartQuiz }) => {
  const [chapter, setChapter] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [questionCount, setQuestionCount] = useState(40);
  const [availableQuestions, setAvailableQuestions] = useState(0);

  useEffect(() => {
    let filtered = questionsData;
    if (chapter !== 'all') {
      filtered = filtered.filter(q => q.chapter === parseInt(chapter, 10));
    }
    if (difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }
    setAvailableQuestions(filtered.length);
  }, [chapter, difficulty]);

  const handleStart = (mode) => {
    if (mode === 'official') {
      onStartQuiz({ chapter: 'all', difficulty: 'all', count: 40, timePerQuestion: 97 });
      return;
    }
    onStartQuiz({
      chapter: chapter !== 'all' ? parseInt(chapter, 10) : 'all',
      difficulty,
      count: Math.min(parseInt(questionCount, 10), availableQuestions),
      timePerQuestion: 90,
    });
  };

  return (
    <div>
      <h2 className="question-text" style={{ textAlign: 'center' }}>Configura tu Simulación</h2>

      <div className="setup-form">
        <div className="setup-group">
          <label>Tema / Capítulo</label>
          <select className="setup-select" value={chapter} onChange={e => setChapter(e.target.value)}>
            {CHAPTERS.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="setup-group">
          <label>Dificultad</label>
          <select className="setup-select" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            <option value="all">Cualquiera</option>
            <option value="easy">Fácil</option>
            <option value="medium">Media</option>
            <option value="hard">Difícil</option>
          </select>
        </div>

        <div className="setup-group">
          <label>Número de Preguntas</label>
          <select className="setup-select" value={questionCount} onChange={e => setQuestionCount(e.target.value)}>
            <option value="5">5 Preguntas</option>
            <option value="10">10 Preguntas</option>
            <option value="20">20 Preguntas</option>
            <option value="40">40 Preguntas (Examen Estándar)</option>
            <option value="60">60 Preguntas</option>
            <option value="80">80 Preguntas</option>
          </select>
        </div>

        <div className="setup-info" style={{ borderTop: '1px solid #aaa', paddingTop: '0.5rem', marginTop: '0.2rem' }}>
          Preguntas disponibles con estos filtros: <strong>{availableQuestions}</strong>
          {availableQuestions < parseInt(questionCount, 10) && availableQuestions > 0 && (
            <span style={{ color: 'var(--os-titlebar)' }}> → Se usarán {availableQuestions}</span>
          )}
        </div>

        {availableQuestions === 0 && (
          <p className="setup-info" style={{ color: 'var(--os-error)' }}>
            No hay preguntas con estos filtros. Amplía la selección.
          </p>
        )}

        <button
          className="btn"
          onClick={() => handleStart('custom')}
          disabled={availableQuestions === 0}
          style={{ marginTop: '0.5rem' }}
        >
          [ Iniciar Simulación ]
        </button>

        <button
          className="btn"
          onClick={() => handleStart('official')}
          style={{ marginTop: '0.5rem', background: 'var(--os-titlebar)', color: 'white' }}
        >
          [ Modo Examen Oficial — 40 Preg. / 65 min ]
        </button>

        <p style={{ fontSize: '0.85rem', textAlign: 'center', color: '#555', marginTop: '0.3rem' }}>
          Banco total: <strong>{questionsData.length}</strong> preguntas ISTQB CTFL v4.0
        </p>
      </div>
    </div>
  );
};

export default QuizSetup;
