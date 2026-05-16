import React, { useState } from 'react';

const CHAPTERS = [
  {
    id: 1,
    title: 'Cap. 1 — Fundamentos de Pruebas',
    color: '#000080',
    sections: [
      {
        heading: '¿Qué es el Testing?',
        items: [
          'El testing evalúa la calidad y reduce el riesgo — NO garantiza ausencia de defectos.',
          'Error → Defecto (bug en código) → Falla (comportamiento incorrecto en ejecución).',
          'Testing estático (revisiones, análisis) vs. Dinámico (ejecución del software).',
        ],
      },
      {
        heading: '7 Principios — LO MÁS PREGUNTADO',
        items: [
          '1. Testing muestra presencia de defectos, no ausencia.',
          '2. Testing exhaustivo es imposible → usa riesgos y prioridades.',
          '3. Testing temprano ahorra tiempo y dinero (shift-left).',
          '4. Agrupamiento de defectos: el 80% suele estar en el 20% del código.',
          '5. Paradoja del pesticida: los mismos tests dejan de encontrar bugs → rota y revisa.',
          '6. Testing depende del contexto (banca ≠ juego móvil).',
          '7. Falacia de ausencia de defectos: software sin bugs puede ser inútil.',
        ],
        exam: 'Se pide identificar el principio que aplica a una situación concreta.',
      },
      {
        heading: 'Actividades de Testing',
        items: [
          'Planificación → Análisis → Diseño → Implementación → Ejecución → Finalización.',
          'Bases de prueba: requisitos, diseño, código, casos de uso.',
          'Trazabilidad: vincular casos de prueba con requisitos (permite análisis de impacto).',
        ],
        exam: 'Distinguir entre análisis (QUÉ probar) y diseño (CÓMO probarlo).',
      },
      {
        heading: 'Roles: Tester vs. Test Manager',
        items: [
          'Tester: diseña/ejecuta tests, reporta defectos, analiza la base de prueba.',
          'Test Manager: planifica, gestiona recursos, reporta avance al negocio.',
          'Enfoque de equipo completo (whole-team): todos son responsables de la calidad.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Cap. 2 — Testing a lo Largo del SDLC',
    color: '#006400',
    sections: [
      {
        heading: 'Modelos de Desarrollo',
        items: [
          'Secuencial (Cascada/V): testing al final, caro corregir defectos tardíos.',
          'Incremental/Iterativo (Ágil): testing continuo en cada sprint.',
          'Regla de oro: siempre hay una actividad de test correspondiente a cada actividad de desarrollo.',
        ],
        exam: 'Preguntan cuándo se hace testing en cada modelo.',
      },
      {
        heading: 'Niveles de Prueba',
        items: [
          'Componente (unitario): tests de unidades individuales, típicamente por desarrolladores.',
          'Integración de componentes: interfaces entre componentes (stubs/drivers).',
          'Sistema: el sistema completo contra los requisitos.',
          'Aceptación (UAT): ¿satisface las necesidades del negocio? Lo hacen usuarios reales.',
          'Aceptación Operacional (OAT): backup, recuperación, mantenimiento — lo hace IT Ops.',
        ],
        exam: 'Mapear tipo de fallo con el nivel de prueba correcto.',
      },
      {
        heading: 'Tipos de Prueba',
        items: [
          'Funcional: ¿qué hace el sistema? (login, cálculo de impuestos...)',
          'No funcional: ¿cómo lo hace? (rendimiento, seguridad, usabilidad).',
          'Caja negra: basada en especificación (no necesitas ver el código).',
          'Caja blanca: basada en estructura interna del código.',
          'Confirmación (re-test): verificar que un defecto concreto fue corregido.',
          'Regresión: verificar que los cambios no rompieron nada existente.',
        ],
      },
      {
        heading: 'Enfoques Ágiles — TDD / BDD / ATDD',
        items: [
          'TDD (Test-Driven Development): escribes el test ANTES del código.',
          'BDD (Behaviour-Driven): tests en lenguaje dado/cuando/entonces (Gherkin).',
          'ATDD: tests de aceptación escritos ANTES para guiar el desarrollo.',
          'Shift-left: mover el testing lo más a la izquierda posible en el ciclo de vida.',
          'Retrospectivas: identifican mejoras del proceso para iteraciones futuras.',
        ],
        exam: 'Diferenciar TDD/BDD/ATDD y cuándo aplica el shift-left.',
      },
    ],
  },
  {
    id: 3,
    title: 'Cap. 3 — Pruebas Estáticas',
    color: '#8B0000',
    sections: [
      {
        heading: '¿Qué es el Testing Estático?',
        items: [
          'Examinar artefactos SIN ejecutar el software.',
          'Analiza: requisitos, diseño, código, planes de prueba, historias de usuario.',
          'Encuentra defectos más baratos de corregir que en fases tardías.',
          'NO puede encontrar fallos que solo aparecen en ejecución (rendimiento, memoria).',
        ],
        exam: 'Distinguir qué puede y qué NO puede encontrar el testing estático.',
      },
      {
        heading: 'Tipos de Revisión',
        items: [
          'Informal: sin proceso definido, rápida (ej. pair programming).',
          'Walkthrough: el AUTOR guía la reunión; objetivo educativo. Tiene escriba.',
          'Revisión Técnica: pares técnicos revisan; puede tener moderador.',
          'Inspección: la más formal; moderador certificado, roles definidos, métricas, causal analysis.',
        ],
        exam: 'Dado un escenario, identificar qué tipo de revisión se usa.',
      },
      {
        heading: 'Factores de Éxito en Revisiones',
        items: [
          'Objetivos claros definidos antes de la revisión.',
          'Preparación individual previa a la reunión.',
          'Ambiente psicológicamente seguro (no criticar a personas, solo al producto).',
          'No usar la revisión para evaluar el desempeño del autor.',
          'Gerencia apoya pero no interfiere en el proceso técnico.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Cap. 4 — Análisis y Diseño de Pruebas',
    color: '#4B0082',
    sections: [
      {
        heading: 'Partición de Equivalencia (EP)',
        items: [
          'Divide entradas en clases: válidas e inválidas.',
          'Un valor de cada partición es suficiente para representarla.',
          'Ej. campo 10-50: partición inválida <10, válida 10-50, inválida >50.',
        ],
        exam: 'Calcular número mínimo de casos de prueba para 100% de cobertura EP.',
      },
      {
        heading: 'Análisis de Valores Límite (BVA)',
        items: [
          '2-value BVA: el límite exacto + el valor justo fuera del límite.',
          '3-value BVA: el límite + valor anterior + valor posterior.',
          'Ej. rango 1-10: límites son 1, 10 y sus vecinos 0, 2, 9, 11.',
        ],
        exam: 'Identificar qué valores probar y calcular % de cobertura BVA.',
      },
      {
        heading: 'Tablas de Decisión',
        items: [
          'Para reglas de negocio con múltiples condiciones booleanas.',
          'Cada columna = una regla. Filas = condiciones y acciones.',
          'Regla imposible: combinación de condiciones que no puede ocurrir en realidad.',
        ],
        exam: 'Identificar reglas imposibles o la acción correspondiente a una regla.',
      },
      {
        heading: 'Transición de Estado',
        items: [
          'Modela el comportamiento del sistema como estados + transiciones + eventos.',
          'Cobertura de transiciones válidas: todos los arcos del diagrama.',
          'Cobertura de estados: todos los nodos del diagrama.',
        ],
        exam: 'Número mínimo de tests para cubrir todas las transiciones válidas.',
      },
      {
        heading: 'Técnicas de Caja Blanca',
        items: [
          'Cobertura de Sentencias: % de líneas ejecutadas. Más débil.',
          'Cobertura de Decisión/Ramas: % de salidas TRUE/FALSE ejecutadas. Más fuerte.',
          '100% decisión → garantiza 100% sentencia. Lo inverso NO es cierto.',
        ],
        exam: 'Determinar cobertura lograda con un conjunto de tests dado.',
      },
      {
        heading: 'Técnicas Basadas en Experiencia',
        items: [
          'Error Guessing: usa conocimiento de defectos típicos del pasado.',
          'Testing Exploratorio: sesiones con time-box; simultáneamente diseña y ejecuta.',
          'Checklist-based: sigue listas de comprobación reutilizables.',
          'ATDD: criterios de aceptación en formato given/when/then.',
        ],
        exam: 'Elegir la técnica más adecuada para una situación concreta.',
      },
    ],
  },
  {
    id: 5,
    title: 'Cap. 5 — Gestión de Actividades de Prueba',
    color: '#8B4513',
    sections: [
      {
        heading: 'Plan de Pruebas',
        items: [
          'Documenta: alcance, enfoque, recursos, cronograma, riesgos.',
          'Criterios de entrada (ENTRY): condiciones para empezar a probar.',
          'Criterios de salida (EXIT): condiciones para dar por terminado el testing.',
          'Estrategias: analítica (basada en riesgos), metódica, reactiva, consultiva...',
        ],
      },
      {
        heading: 'Estimación de Esfuerzo',
        items: [
          'Basada en métricas: puntos de función, datos históricos.',
          'Basada en expertos: Wideband Delphi, Planning Poker (consenso de equipo).',
          'Three-point: E = (Optimista + 4×MásProbable + Pesimista) / 6.',
        ],
        exam: 'Calcular estimación con la fórmula de tres puntos.',
      },
      {
        heading: 'Priorización de Casos de Prueba',
        items: [
          'Por riesgo: primero los de mayor riesgo.',
          'Por dependencias lógicas: respetar el orden obligatorio.',
          'Por prioridad de negocio: lo más crítico para el cliente, primero.',
        ],
        exam: 'Dado un orden de prioridad y dependencias, elegir el 3.º test a ejecutar.',
      },
      {
        heading: 'Gestión de Riesgos',
        items: [
          'Riesgo = Probabilidad × Impacto.',
          'Riesgo de producto: afecta la calidad del software.',
          'Riesgo de proyecto: afecta el éxito del proyecto (presupuesto, equipo).',
          'Mitigación: reducir probabilidad o impacto.',
          'Aceptación: asumir el riesgo conscientemente.',
        ],
        exam: 'Clasificar un riesgo como de producto/proyecto y la respuesta (mitigación/aceptación).',
      },
      {
        heading: 'Reportes y Métricas',
        items: [
          'Reporte de progreso: para el equipo técnico (defectos, % ejecutados).',
          'Cobertura de rama: útil para técnicos, NO para representantes de negocio.',
          'Burndown chart: muestra trabajo completado vs. restante en una iteración ágil.',
          'Reporte de defecto: debe incluir entorno, objeto bajo prueba, pasos, resultado actual vs. esperado.',
        ],
        exam: 'Identificar qué métrica no es útil para un representante de negocio.',
      },
      {
        heading: 'Gestión de la Configuración',
        items: [
          'Garantiza que se prueba la versión CORRECTA del software y entorno.',
          'Permite crear nuevas versiones de scripts de test en el repositorio.',
          'No es lo mismo que gestión de defectos ni de requisitos.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Cap. 6 — Herramientas de Prueba',
    color: '#006666',
    sections: [
      {
        heading: 'Categorías de Herramientas',
        items: [
          'Gestión de pruebas: almacena requisitos, casos de prueba y resultados vinculados.',
          'Análisis estático: detecta código muerto, variables sin usar (sin ejecutar).',
          'Ejecución/Automatización: ejecuta scripts de prueba automáticamente.',
          'Cobertura: mide % de código ejecutado por los tests.',
          'Rendimiento/Carga: simula múltiples usuarios virtuales concurrentes.',
          'Preparación de datos: genera/manipula datos de prueba masivos.',
        ],
        exam: 'Dado un objetivo, elegir qué categoría de herramienta es la más adecuada.',
      },
      {
        heading: 'Automatización de Pruebas',
        items: [
          'Ventajas: consistencia, repetibilidad, ahorro en regresión.',
          'Riesgos: expectativas irreales, alto costo inicial, mantenimiento de scripts.',
          'No todo se puede/debe automatizar (ej. exploratoria, usabilidad).',
          'Herramienta de preparación de datos apoya DISEÑO e IMPLEMENTACIÓN.',
        ],
        exam: 'Identificar el principal riesgo de automatizar y qué actividad soporta cada herramienta.',
      },
    ],
  },
];

const StudyNotes = ({ onClose }) => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapter = CHAPTERS.find(c => c.id === selectedChapter);

  return (
    <div className="notes-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Chapter selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
        {CHAPTERS.map(c => (
          <button
            key={c.id}
            className="btn"
            onClick={() => setSelectedChapter(selectedChapter === c.id ? null : c.id)}
            style={{
              width: 'auto',
              padding: '4px 10px',
              fontSize: '0.9rem',
              background: selectedChapter === c.id ? c.color : undefined,
              color: selectedChapter === c.id ? 'white' : undefined,
            }}
          >
            Cap. {c.id}
          </button>
        ))}
      </div>

      {!chapter && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#555' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
          <p style={{ fontSize: '1rem' }}>Selecciona un capítulo para ver los apuntes clave.</p>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Contiene resúmenes por tema e indicaciones de <strong>qué suele preguntarse en el examen</strong>.
          </p>
        </div>
      )}

      {chapter && (
        <div style={{ overflowY: 'auto', flexGrow: 1 }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: chapter.color, borderBottom: `2px solid ${chapter.color}`, paddingBottom: '4px' }}>
            {chapter.title}
          </h2>
          {chapter.sections.map((section, si) => (
            <div key={si} style={{ marginBottom: '1.2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '6px', background: '#e8e8e8', padding: '4px 8px', borderLeft: `4px solid ${chapter.color}` }}>
                {section.heading}
              </h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {section.items.map((item, ii) => (
                  <li key={ii} style={{ fontSize: '0.9rem', marginBottom: '4px', lineHeight: '1.4' }}>
                    {item}
                  </li>
                ))}
              </ul>
              {section.exam && (
                <div style={{ marginTop: '6px', background: '#fffbcc', border: '1px solid #e6c700', padding: '6px 10px', fontSize: '0.85rem', borderRadius: '2px' }}>
                  <strong>📝 En el examen:</strong> {section.exam}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyNotes;
