import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuizSetup from './QuizSetup';
import { getCert } from '../certs';

describe('QuizSetup por certificación', () => {
  test('CTFL ofrece los 6 capítulos del syllabus más la opción "todos"', () => {
    render(<QuizSetup onStartQuiz={() => {}} language="es" cert="ctfl" />);
    const select = screen.getAllByRole('combobox')[0];
    expect(select.options.length).toBe(getCert('ctfl').chapters.length + 1);
  });

  test('CT-TAE ofrece los 8 capítulos y sus nombres propios', () => {
    render(<QuizSetup onStartQuiz={() => {}} language="es" cert="tae" />);
    const select = screen.getAllByRole('combobox')[0];
    expect(select.options.length).toBe(getCert('tae').chapters.length + 1);
    expect(screen.getByText(/Arquitectura \(gTAA\)/)).toBeInTheDocument();
    expect(screen.getByText(/Mejora continua/)).toBeInTheDocument();
  });

  test('el modo examen oficial usa el tiempo real de cada certificación', () => {
    const onStartQuiz = vi.fn();
    const { rerender } = render(
      <QuizSetup onStartQuiz={onStartQuiz} language="es" cert="ctfl" />
    );
    fireEvent.click(screen.getByText(/examen oficial/i));
    expect(onStartQuiz).toHaveBeenLastCalledWith(
      expect.objectContaining({ count: 40, timePerQuestion: getCert('ctfl').exam.timePerQuestion })
    );

    rerender(<QuizSetup onStartQuiz={onStartQuiz} language="es" cert="tae" />);
    fireEvent.click(screen.getByText(/examen oficial/i));
    expect(onStartQuiz).toHaveBeenLastCalledWith(
      expect.objectContaining({ count: 40, timePerQuestion: 135 })
    );
  });

  test('el contador de preguntas disponibles refleja el banco de la certificación activa', () => {
    const { rerender } = render(<QuizSetup onStartQuiz={() => {}} language="es" cert="ctfl" />);
    const ctflTexto = document.body.textContent;
    rerender(<QuizSetup onStartQuiz={() => {}} language="es" cert="tae" />);
    expect(document.body.textContent).not.toBe(ctflTexto);
  });
});
