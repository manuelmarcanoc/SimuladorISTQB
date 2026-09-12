import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { CERTS } from './certs';

const renderApp = (path = '/simulador') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>
  );

describe('armazón de la aplicación', () => {
  beforeEach(() => localStorage.clear());

  test('la marca enlaza a la portada', () => {
    const { container } = renderApp('/');
    expect(container.querySelector('.brand-text')).toBeInTheDocument();
    expect(container.querySelector('a.app-title')).toHaveAttribute('href', '/');
  });

  test('muestra un selector con todas las certificaciones registradas', () => {
    renderApp('/simulador');
    expect(screen.getAllByRole('tab')).toHaveLength(Object.keys(CERTS).length);
    Object.values(CERTS).forEach((c) => {
      expect(screen.getByText(c.code)).toBeInTheDocument();
    });
  });

  test('cambiar de certificación se recuerda entre sesiones', () => {
    renderApp('/simulador');
    fireEvent.click(screen.getByText(CERTS.tae.code));
    expect(localStorage.getItem('istqb-cert')).toBe('tae');
  });

  test('el modo oscuro se guarda en el navegador', () => {
    const { container } = renderApp('/');
    fireEvent.click(screen.getByRole('button', { name: /modo oscuro/i }));
    expect(localStorage.getItem('istqb-dark')).toBe('true');
    expect(container.querySelector('.app-container')).toHaveClass('dark-mode');
  });

  test('hay un enlace para saltar al contenido', () => {
    renderApp('/');
    expect(screen.getByRole('link', { name: /saltar al contenido/i })).toBeInTheDocument();
  });
});
