export const translations = {
  es: {
    simulator: 'Simulador',
    notes: 'Apuntes',
    minigame: 'Minijuego',
    stats: 'Estadísticas',
    start: 'Empezar Partida',
    newSimulation: 'Nueva Simulación',
    question: 'Pregunta',
    of: 'de',
    submit: 'Comprobar',
    next: 'Siguiente',
    finish: 'Terminar',
    score: 'Puntuación',
    correct: 'Correctas',
    incorrect: 'Incorrectas',
    unanswered: 'Sin Responder',
    total: 'Total',
    review: 'Repasar Fallos',
    pass: '¡Aprobado!',
    fail: 'Suspenso',
    time: 'Tiempo',
    terms: 'Términos',
    definitions: 'Definiciones',
    roundComplete: '¡Ronda Perfecta!',
    playAgain: 'Jugar Nueva Ronda',
    dominate: 'Domina la Terminología',
    dominateText: 'El examen ISTQB requiere conocer a la perfección su glosario. Empareja cada término con su definición correcta para ganar puntos.'
  },
  en: {
    simulator: 'Simulator',
    notes: 'Study Notes',
    minigame: 'Minigame',
    stats: 'Statistics',
    start: 'Start Game',
    newSimulation: 'New Simulation',
    question: 'Question',
    of: 'of',
    submit: 'Check',
    next: 'Next',
    finish: 'Finish',
    score: 'Score',
    correct: 'Correct',
    incorrect: 'Incorrect',
    unanswered: 'Unanswered',
    total: 'Total',
    review: 'Review Mistakes',
    pass: 'Passed!',
    fail: 'Failed',
    time: 'Time',
    terms: 'Terms',
    definitions: 'Definitions',
    roundComplete: 'Perfect Round!',
    playAgain: 'Play Next Round',
    dominate: 'Master the Terminology',
    dominateText: 'The ISTQB exam requires perfect knowledge of its glossary. Match each term with its correct definition to earn points.'
  },
  fr: {
    simulator: 'Simulateur',
    notes: 'Notes de Cours',
    minigame: 'Mini-jeu',
    stats: 'Statistiques',
    start: 'Commencer',
    newSimulation: 'Nouvelle Simulation',
    question: 'Question',
    of: 'sur',
    submit: 'Vérifier',
    next: 'Suivant',
    finish: 'Terminer',
    score: 'Score',
    correct: 'Correctes',
    incorrect: 'Incorrectes',
    unanswered: 'Sans Réponse',
    total: 'Total',
    review: 'Revoir les Erreurs',
    pass: 'Admis!',
    fail: 'Échoué',
    time: 'Temps',
    terms: 'Termes',
    definitions: 'Définitions',
    roundComplete: 'Manche Parfaite!',
    playAgain: 'Jouer la Prochaine Manche',
    dominate: 'Maîtrisez la Terminologie',
    dominateText: 'L\'examen ISTQB nécessite une parfaite connaissance de son glossaire. Associez chaque terme à sa définition correcte pour gagner des points.'
  }
};

let currentLanguage = 'es';

export const setLanguage = (lang) => {
  currentLanguage = lang;
};

export const getLanguage = () => currentLanguage;

export const t = (key) => {
  return translations[currentLanguage][key] || key;
};
