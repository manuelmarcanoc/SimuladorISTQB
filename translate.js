const fs = require('fs');

const path = 'src/data/questions.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const translations = {
  376: {
    q: "¿Qué participante en el proceso de revisión es responsable de asegurar que las reuniones de revisión se desarrollen eficazmente y que todos puedan expresar sus opiniones libremente?",
    o: ["A) Gerente", "B) Moderador", "C) Presidente", "D) Líder de Revisión"],
    e: "Moderador"
  },
  377: {
    q: "Realizas pruebas de sistema de una aplicación web de comercio electrónico y se te proporciona el siguiente requisito: REQ 05-017. Si el costo total de las compras supera los $100, el cliente obtiene un 5% de descuento en compras posteriores. De lo contrario, el cliente no recibe ningún descuento. ¿Qué técnicas de prueba serán MÁS útiles para diseñar casos de prueba basados en este requisito?",
    o: ["A) Técnicas de prueba de caja blanca", "B) Técnicas de prueba de caja negra", "C) Técnicas basadas en la experiencia", "D) Técnicas de prueba basadas en riesgos"],
    e: "Técnicas de prueba de caja negra"
  },
  378: {
    q: "El sistema de venta de entradas de cine calcula el tipo de descuento basado en el año de nacimiento (AN) del cliente y en el año actual (AA) de la siguiente manera: Sea D la diferencia entre AA y AN, es decir, D = AA – AN. • Si D < 0, muestra el error 'el año de nacimiento no puede ser mayor que el año actual'. • Si 0 ≤ D < 18, aplica el descuento de estudiante. • Si 18 ≤ D < 65, no aplica ningún descuento. • Si D ≥ 65, aplica el descuento de jubilado. Tu conjunto de pruebas ya contiene dos casos: • AN = 1990, AA = 2020, resultado esperado: ningún descuento. • AN = 2030, AA = 2029, resultado esperado: mostrar error. ¿Cuál de los siguientes conjuntos de datos de prueba debería añadirse para lograr una cobertura completa de partición de equivalencia válida para el tipo de descuento?",
    o: ["A) AN = 2001, AA = 2065", "B) AN = 1900, AA = 1965", "C) AN = 1965, AA = 1900", "D) AN = 2011, AA = 2029", "E) AN = 2000, AA = 2000"],
    e: "AN = 1900, AA = 1965"
  },
  379: {
    q: "Estás probando un sistema de control de temperatura para una instalación de almacenamiento en frío. El sistema recibe la temperatura (en grados Celsius enteros) como entrada. Si la temperatura está entre 0 y 2 grados inclusive, muestra 'temperatura OK'. Para temperaturas más bajas, muestra 'temperatura demasiado baja' y para más altas 'temperatura demasiado alta'. Usando el análisis de valores límite de dos valores, ¿cuál de los siguientes conjuntos proporciona el mayor nivel de cobertura de valores límite?",
    o: ["A) –1, 3", "B) 0, 2", "C) –1, 0, 2, 3", "D) –2, 0, 2, 4"],
    e: "–1, 0, 2, 3"
  },
  380: {
    q: "Estás diseñando casos de prueba basados en una tabla de decisión de edades y experiencia. Hasta ahora has diseñado 4 casos de prueba. ¿Cuál de los siguientes casos de prueba, al añadirse al conjunto existente, aumentará la cobertura de la tabla de decisión?",
    o: ["A) Hombre de 66 años, no registrado, sin experiencia; resultado esperado: categoría B", "B) Mujer de 55 años, no registrada, con 2 años de experiencia; resultado esperado: categoría A", "C) Mujer de 19 años, registrada, con 5 años de experiencia; resultado esperado: categoría D", "D) Ningún caso adicional puede aumentar la cobertura lograda"],
    e: "Hombre de 66 años, no registrado, sin experiencia; resultado esperado: categoría B"
  },
  381: {
    q: "Estás aplicando pruebas de transición de estado a un sistema de reserva de habitaciones de hotel. Asumiendo que todos los casos de prueba comienzan en el estado 'Solicitando' (Requesting), ¿cuál de los siguientes casos de prueba, representados como secuencias de eventos, logra la mayor cobertura de transiciones válidas?",
    o: ["A) NotAvailable, Available, ChangeRoom, NotAvailable, Cancel", "B) Available, ChangeRoom, NotAvailable, Available, Pay", "C) Available, ChangeRoom, Available, ChangeRoom, NotAvailable", "D) NotAvailable, Cancel, ChangeRoom, Available, Pay"],
    e: "Available, ChangeRoom, NotAvailable, Available, Pay"
  },
  382: {
    q: "Tu conjunto de pruebas S para un programa P logra el 100% de cobertura de sentencias. Consta de tres casos de prueba, cada uno de los cuales logra el 50% de cobertura de sentencias. ¿Cuál de las siguientes afirmaciones es CORRECTA?",
    o: ["A) Ejecutar S causará todas las fallas posibles en P", "B) S logra el 100% de cobertura de ramas para P", "C) Cada sentencia ejecutable en P que contiene un defecto se ha ejecutado al menos una vez durante la ejecución de S", "D) Después de eliminar un caso de prueba de S, los dos restantes aún lograrán el 100% de cobertura de sentencias"],
    e: "Cada sentencia ejecutable en P que contiene un defecto se ha ejecutado al menos una vez durante la ejecución de S"
  },
  383: {
    q: "¿Por qué las pruebas de caja blanca facilitan la detección de defectos incluso cuando la especificación del software es vaga, anticuada o incompleta?",
    o: ["A) Los casos de prueba se diseñan basándose en la estructura del objeto de prueba en lugar de la especificación", "B) Para cada técnica de caja blanca, la cobertura puede ser bien definida y medida fácilmente", "C) Las técnicas de caja blanca están muy bien diseñadas para detectar omisiones en los requisitos", "D) Las técnicas de caja blanca se pueden usar tanto en pruebas estáticas como dinámicas"],
    e: "Los casos de prueba se diseñan basándose en la estructura del objeto de prueba en lugar de la especificación"
  },
  384: {
    q: "¿Cuál de las siguientes situaciones NO es anticipada por el probador al aplicar la técnica de predicción de errores (error guessing)?",
    o: ["A) El desarrollador entendió mal la fórmula en la historia de usuario para calcular el interés", "B) El desarrollador escribió 'FA = A*(1+IR^N)' en lugar de 'FA = A*(1+IR)^N' en el código", "C) El desarrollador faltó al seminario sobre la nueva legislación de tasas de interés compuesto", "D) La precisión del interés calculado por el sistema no es lo suficientemente exacta"],
    e: "El desarrollador faltó al seminario sobre la nueva legislación de tasas de interés compuesto"
  },
  385: {
    q: "¿Cuál de las siguientes afirmaciones es cierta sobre las pruebas exploratorias?",
    o: ["A) Los casos de prueba se diseñan antes de que comience la sesión de pruebas exploratorias", "B) El probador puede ejecutar pruebas, pero no puede diseñarlas", "C) Los resultados de las pruebas exploratorias son buenos predictores del número de defectos restantes", "D) Durante las pruebas exploratorias, el probador puede usar técnicas de caja negra"],
    e: "Durante las pruebas exploratorias, el probador puede usar técnicas de caja negra"
  },
  386: {
    q: "¿Qué práctica colaborativa para escribir historias de usuario permite al equipo lograr una comprensión colectiva de lo que necesita ser entregado?",
    o: ["A) Planning poker, para llegar a un consenso sobre el esfuerzo", "B) Revisiones, para detectar inconsistencias y contradicciones", "C) Planificación de la iteración, para priorizar historias de mayor valor", "D) Conversación, para que los miembros del equipo entiendan cómo se usará el software"],
    e: "Conversación, para que los miembros del equipo entiendan cómo se usará el software"
  },
  387: {
    q: "Estás diseñando casos de prueba para una historia de usuario donde el cliente quiere filtrar productos por rango de precio. Precondición: solo hay dos productos disponibles, A ($100) y B ($110). ¿Cuál es el MEJOR ejemplo de caso de prueba para esta historia de usuario?",
    o: ["A) Entrar a la web y fijar filtro entre $90 y $100. Resultado: solo muestra A. Cambiar máximo a $110. Resultado: muestra A y B.", "B) Entrar a la web. Añadir producto C con precio $120. Actualizar página. Resultado: el precio máximo predeterminado cambia a $120.", "C) Entrar a la web y fijar filtro entre $90 y $115. Resultado: muestra A y B. Cambiar moneda a EUR. Resultado: el filtro cambia a valores en EUR.", "D) Entrar a la web con Edge, Chrome y Opera. En cada uno fijar filtro entre $90 y $110. Resultado: muestran A y B con el mismo diseño en todos."],
    e: "Entrar a la web y fijar filtro entre $90 y $100. Resultado: solo muestra A. Cambiar máximo a $110. Resultado: muestra A y B."
  },
  388: {
    q: "¿Cuál de los siguientes define MEJOR los criterios de salida (EXIT criteria) en un proyecto de pruebas?",
    o: ["A) Se aprueba el presupuesto", "B) Se agota el presupuesto", "C) La base de prueba está disponible", "D) Los casos de prueba lograron al menos un 80% de cobertura de sentencias"],
    e: "Se agota el presupuesto"
  },
  389: {
    q: "El equipo quiere estimar el tiempo para ejecutar cuatro casos de prueba. Las medidas para un caso son: Mejor escenario: 1h, Peor escenario: 8h, Más probable: 3h. Usando la técnica de estimación de tres puntos, ¿cuál es la estimación final para los CUATRO casos de prueba?",
    o: ["A) 14 horas", "B) 3.5 horas", "C) 16 horas", "D) 12 horas"],
    e: "14 horas"
  },
  390: {
    q: "Tienes una matriz de trazabilidad y deseas priorizar los casos de prueba siguiendo la técnica de cobertura adicional (additional coverage prioritization). Ejecutarás cuatro casos de prueba. Según las técnicas estándar, ¿qué caso de prueba debería ejecutarse en ÚLTIMO lugar?",
    o: ["A) TC1", "B) TC2", "C) TC3", "D) TC4"],
    e: "TC2"
  },
  391: {
    q: "¿Cómo pueden ser beneficiosos los cuadrantes de prueba (testing quadrants)?",
    o: ["A) Ayudan a planificar dividiendo en cuatro fases: componente, integración, sistema, aceptación", "B) Ayudan a evaluar la cobertura de alto nivel basada en la de bajo nivel", "C) Ayudan a los stakeholders no técnicos a entender los diferentes tipos de prueba y su relevancia por niveles", "D) Ayudan a los equipos ágiles a comunicarse según perfiles psicológicos"],
    e: "Ayudan a los stakeholders no técnicos a entender los diferentes tipos de prueba y su relevancia por niveles"
  },
  392: {
    q: "Para un riesgo dado, el nivel de riesgo es de $1,000 y su probabilidad se estima en un 50%. ¿Cuál es el impacto del riesgo?",
    o: ["A) $500", "B) $2,000", "C) $50,000", "D) $200"],
    e: "$2,000"
  },
  393: {
    q: "¿Cuál de los siguientes es un riesgo de producto?",
    o: ["A) Corrupción del alcance (Scope creep)", "B) Arquitectura deficiente (Poor architecture)", "C) Recorte de costos", "D) Falta de soporte de herramientas", "E) Tiempo de respuesta demasiado largo"],
    e: "Arquitectura deficiente (Poor architecture)"
  },
  394: {
    q: "¿Cuál de los siguientes NO es un propósito válido para un informe de pruebas?",
    o: ["A) Seguimiento del progreso e identificación de áreas de atención", "B) Proporcionar información sobre las pruebas ejecutadas, resultados y defectos", "C) Proporcionar información sobre cómo reproducir cada defecto paso a paso", "D) Proporcionar información sobre las pruebas planificadas para el próximo período"],
    e: "Proporcionar información sobre cómo reproducir cada defecto paso a paso"
  },
  395: {
    q: "Un usuario reportó una falla. Soporte le pidió la versión del software. Con esa versión, el equipo reconstruyó los archivos del lanzamiento, lo que permitió al desarrollador analizar y corregir el defecto. ¿Qué proceso permitió realizar esta actividad?",
    o: ["A) Gestión de riesgos", "B) Monitorización y control de pruebas", "C) Enfoque de equipo completo (Whole team)", "D) Gestión de la configuración"],
    e: "Gestión de la configuración"
  },
  396: {
    q: "Considera un informe de defecto de un Sistema de Préstamo de Libros. ¿Cuál de las siguientes acciones ayudaría MÁS al desarrollador a reproducir la falla rápidamente?",
    o: ["A) Añadir información sobre qué usuarios y qué libros se ven afectados en la sección de 'Descripción'", "B) Llenar el valor faltante del campo 'Prioridad'", "C) Añadir volcados de memoria tras cada paso a la sección de 'Adjuntos'", "D) Repetir el caso de prueba para diferentes entornos y crear un reporte separado para cada uno"],
    e: "Añadir información sobre qué usuarios y qué libros se ven afectados en la sección de 'Descripción'"
  },
  397: {
    q: "Dadas las categorías de herramientas de prueba (i. Colaboración, ii. DevOps, iii. Gestión, iv. No funcionales, v. Diseño/Implementación). ¿Herramientas de cuáles categorías son MÁS propensas a facilitar la ejecución de pruebas?",
    o: ["A) i, v", "B) ii, iv", "C) i, iii, v", "D) ii, iii, iv"],
    e: "ii, iv (DevOps, No funcionales)"
  },
  398: {
    q: "¿Cuál de los siguientes es MÁS probable que sea un riesgo de la automatización de pruebas?",
    o: ["A) Detección de defectos adicionales de alta severidad", "B) Proporcionar métricas demasiado complicadas para los humanos", "C) Incompatibilidad con la plataforma de desarrollo", "D) Reducción sustancial del tiempo de ejecución"],
    e: "Incompatibilidad con la plataforma de desarrollo"
  },
  399: {
    q: "Dadas las siguientes tareas de prueba: 1) Derivar casos de prueba desde condiciones, 2) Identificar testware reutilizable, 3) Organizar casos en procedimientos, 4) Evaluar la base de prueba; y actividades: A) Análisis, B) Diseño, C) Implementación, D) Finalización. ¿Cuál es el MEJOR emparejamiento?",
    o: ["A) 1B, 2A, 3D, 4C", "B) 1B, 2D, 3C, 4A", "C) 1C, 2A, 3B, 4D", "D) 1C, 2D, 3A, 4B"],
    e: "1B, 2D, 3C, 4A"
  }
};

data.forEach(q => {
  if (translations[q.id]) {
    q.question = translations[q.id].q;
    q.options = translations[q.id].o;
    if (q.explanation.includes('Justificación:')) {
      const parts = q.explanation.split('Justificación:');
      q.explanation = parts[0] + 'Justificación: ' + translations[q.id].e;
    } else {
      q.explanation = translations[q.id].e;
    }
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log('Translations applied successfully!');
