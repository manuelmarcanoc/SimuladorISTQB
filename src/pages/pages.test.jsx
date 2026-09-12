import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes';
import { ROUTES } from '../routes';
import { SITE } from '../site.config';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>
  );

describe('todas las páginas renderizan contenido', () => {
  test.each(ROUTES.map((r) => r.path))('%s tiene un h1 y texto suficiente', (path) => {
    const { container, unmount } = renderAt(path);
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1.textContent.trim().length).toBeGreaterThan(5);
    // Contenido real, no solo el armazón de la plantilla
    const texto = container.textContent.replace(/\s+/g, ' ').trim();
    expect(texto.length).toBeGreaterThan(800);
    unmount();
  });
});

describe('armazón común', () => {
  test('la navegación principal y el pie aparecen en todas las páginas', () => {
    const { container } = renderAt('/');
    expect(screen.getByRole('navigation', { name: /navegación principal/i })).toBeInTheDocument();

    const footer = container.querySelector('.site-footer');
    expect(footer).toBeInTheDocument();
    const enlaces = [...footer.querySelectorAll('a')].map((a) => a.getAttribute('href'));
    ['/privacidad', '/cookies', '/aviso-legal', '/contacto', '/sobre'].forEach((href) => {
      expect(enlaces).toContain(href);
    });
  });

  test('el descargo de responsabilidad del ISTQB está en el pie', () => {
    const { container } = renderAt('/');
    expect(container.textContent).toMatch(/no est[áa] afiliado ni respaldado por el ISTQB/i);
  });

  test('el selector de certificación solo aparece en las secciones de estudio', () => {
    const app = renderAt('/simulador');
    expect(app.container.querySelectorAll('[role="tab"]').length).toBeGreaterThan(1);
    app.unmount();

    const content = renderAt('/privacidad');
    expect(content.container.querySelectorAll('[role="tab"]').length).toBe(0);
  });

  test('una ruta inexistente muestra la página 404', () => {
    renderAt('/esto-no-existe');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/no existe/i);
  });
});

describe('páginas legales y de contacto', () => {
  test('la política de privacidad cubre los apartados exigibles', () => {
    const { container } = renderAt('/privacidad');
    const texto = container.textContent.toLowerCase();
    ['responsable', 'base jurídica', 'derechos', 'conserv', 'adsense'].forEach((termino) => {
      expect(texto).toContain(termino);
    });
  });

  test('la política de cookies detalla las cookies propias y de terceros', () => {
    const { container } = renderAt('/cookies');
    expect(container.textContent).toMatch(/istqb_consent_v2/);
    expect(container.textContent).toMatch(/AdSense/);
  });

  test('el formulario de contacto avisa si falta configurar el endpoint', () => {
    const { container } = renderAt('/contacto');
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    if (!SITE.contact.formEndpoint) {
      expect(container.textContent).toMatch(/pendiente de configuraci[óo]n/i);
      expect(container.querySelector('button[type="submit"]')).toBeDisabled();
    }
  });
});
