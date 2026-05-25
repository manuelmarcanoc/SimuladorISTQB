import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';
import { loadWrongQuestions } from '../utils/storage';

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
  const [questionCount, setQuestionCount] = useState(40);
  const [availableQuestions, setAvailableQuestions] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

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
    <div className="animate-in">
      <h2 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Configura tu Simulación</h2>

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
            <span style={{ color: 'var(--primary)' }}> → Se usarán {availableQuestions}</span>
          )}
        </div>

        {availableQuestions === 0 && (
          <p className="setup-info" style={{ color: 'var(--error)' }}>
            No hay preguntas con estos filtros. Amplía la selección.
          </p>
        )}

        <button
          className="btn btn-secondary"
          onClick={() => handleStart('custom')}
          disabled={availableQuestions === 0}
          style={{ marginTop: '0.5rem' }}
        >
          Iniciar Simulación
        </button>

        <button
          className="btn"
          onClick={() => handleStart('official')}
          style={{ marginTop: '0.5rem' }}
        >
          Modo Examen Oficial — 40 Preg. / 65 min
        </button>

        {wrongCount > 0 && (
          <button
            className="btn btn-secondary"
            onClick={() => handleStart('review')}
            style={{ marginTop: '0.5rem', color: 'var(--warning)' }}
          >
            ⚠ Repasar {wrongCount} Errores del Último Examen
          </button>
        )}

        <p style={{ fontSize: '0.85rem', textAlign: 'center', color: '#555', marginTop: '0.3rem' }}>
          Banco total: <strong>{questionsData.length}</strong> preguntas ISTQB CTFL v4.0
        </p>

        <div className="setup-info notes-exam-tip" style={{ marginTop: '0.8rem', textAlign: 'left' }}>
          <strong>Consejos para el examen real:</strong>
          <ul style={{ margin: '6px 0 0', paddingLeft: '1.2rem', fontSize: '0.85rem', lineHeight: '1.45' }}>
            <li>65% para aprobar (26 de 40). Sin penalización por respuestas incorrectas.</li>
            <li>En modo oficial: 40 preguntas en 65 min (~97 s por pregunta).</li>
            <li>Lee cada enunciado entero antes de elegir; elimina opciones imposibles primero.</li>
            <li>Repasa los capítulos 1, 4 y 5: suelen tener mayor peso en el examen.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizSetup;
