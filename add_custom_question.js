const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('crypto');

const baseId = 'q_custom_risk_complex_' + Math.floor(Math.random()*10000);

const qES = {
  id: baseId,
  chapter: 5,
  topic: 'Gestión de las Actividades de Prueba',
  difficulty: 'hard',
  question: `Tienes los siguientes casos de prueba para un sistema de comercio electrónico:

| Caso | Funcionalidad | Probabilidad | Impacto | Dependencia |
|---|---|---|---|---|
| TC1 | Inicio de sesión | 3 | 3 | Ninguna |
| TC2 | Añadir al carrito | 2 | 2 | TC1 |
| TC3 | Pago (Checkout) | 1 | 1 | TC2, TC5 |
| TC4 | Buscar productos | 2 | 3 | TC1 |
| TC5 | Aplicar cupón | 1 | 2 | TC2 |
| TC6 | Cerrar sesión | 4 | 4 | TC1 |

Aplicando priorización basada en riesgo, donde el nivel de riesgo se calcula como Probabilidad x Impacto (escala 1=Muy Alto, 5=Muy Bajo; por tanto, un menor valor numérico indica un MAYOR riesgo). El objetivo es ejecutar las pruebas de mayor riesgo lo antes posible, siempre que sus dependencias estén resueltas.

¿Cuál sería el orden de ejecución MÁS apropiado?`,
  options: [
    'A) TC1, TC4, TC2, TC5, TC3, TC6',
    'B) TC1, TC2, TC5, TC3, TC4, TC6',
    'C) TC3, TC5, TC2, TC4, TC1, TC6',
    'D) TC1, TC2, TC4, TC5, TC3, TC6'
  ],
  correctAnswer: 1,
  explanation: `B. Es correcto. Se empieza con TC1 (único sin dependencias). Tras TC1, están disponibles TC2 (riesgo=4), TC4 (riesgo=6) y TC6 (riesgo=16). Se elige TC2 por tener mayor riesgo (menor valor). Tras TC2, se desbloquea TC5. Disponibles: TC4 (6), TC5 (2), TC6 (16). Se elige TC5. Tras TC5, se desbloquea TC3. Disponibles: TC3 (1), TC4 (6), TC6 (16). Se elige TC3. Tras TC3, quedan TC4 (6) y TC6 (16). Se elige TC4 y finalmente TC6.

A. Incorrecto. Ejecuta TC4 antes que TC2, pero TC2 tiene mayor riesgo (4 vs 6).
C. Incorrecto. Ignora completamente las dependencias y solo ordena por riesgo matemático.
D. Incorrecto. Ejecuta TC4 antes que TC5, a pesar de que tras ejecutar TC2, TC5 queda desbloqueado y tiene un riesgo mucho mayor (2) que TC4 (6).`,
  source: 'Antigravity Custom'
};

const qEN = { ...qES, 
  question: `You have the following test cases for an e-commerce system:

| Case | Functionality | Probability | Impact | Dependency |
|---|---|---|---|---|
| TC1 | Login | 3 | 3 | None |
| TC2 | Add to cart | 2 | 2 | TC1 |
| TC3 | Checkout | 1 | 1 | TC2, TC5 |
| TC4 | Search products | 2 | 3 | TC1 |
| TC5 | Apply coupon | 1 | 2 | TC2 |
| TC6 | Logout | 4 | 4 | TC1 |

Applying risk-based prioritization, where the risk level is calculated as Probability x Impact (scale 1=Very High, 5=Very Low; therefore, a lower numerical value indicates HIGHER risk). The objective is to execute the highest risk tests as early as possible, provided their dependencies are met.

What would be the MOST appropriate execution order?`,
  explanation: `B. Correct. Start with TC1 (only one with no dependencies). After TC1, available are TC2 (risk=4), TC4 (risk=6) and TC6 (risk=16). Choose TC2 as it has higher risk (lower value). After TC2, TC5 is unlocked. Available: TC4 (6), TC5 (2), TC6 (16). Choose TC5. After TC5, TC3 is unlocked. Available: TC3 (1), TC4 (6), TC6 (16). Choose TC3. After TC3, remaining are TC4 (6) and TC6 (16). Choose TC4, then finally TC6.

A. Incorrect. Executes TC4 before TC2, but TC2 has higher risk (4 vs 6).
C. Incorrect. Completely ignores dependencies and only sorts by mathematical risk.
D. Incorrect. Executes TC4 before TC5, even though after executing TC2, TC5 is unlocked and has a much higher risk (2) than TC4 (6).`
};

const qFR = { ...qES,
  question: `Vous avez les cas de test suivants pour un système de commerce électronique :

| Cas | Fonctionnalité | Probabilité | Impact | Dépendance |
|---|---|---|---|---|
| TC1 | Connexion | 3 | 3 | Aucune |
| TC2 | Ajouter au panier | 2 | 2 | TC1 |
| TC3 | Paiement | 1 | 1 | TC2, TC5 |
| TC4 | Rechercher des produits | 2 | 3 | TC1 |
| TC5 | Appliquer un coupon | 1 | 2 | TC2 |
| TC6 | Déconnexion | 4 | 4 | TC1 |

En appliquant une priorisation basée sur les risques, où le niveau de risque est calculé comme Probabilité x Impact (échelle 1=Très Élevé, 5=Très Faible ; par conséquent, une valeur numérique plus faible indique un risque PLUS ÉLEVÉ). L'objectif est d'exécuter les tests à plus haut risque le plus tôt possible, à condition que leurs dépendances soient satisfaites.

Quel serait l'ordre d'exécution LE PLUS approprié ?`,
  explanation: `B. Correct. Commencez par TC1 (le seul sans dépendances). Après TC1, sont disponibles TC2 (risque=4), TC4 (risque=6) et TC6 (risque=16). Choisissez TC2 car son risque est plus élevé (valeur plus faible). Après TC2, TC5 est débloqué. Disponibles: TC4 (6), TC5 (2), TC6 (16). Choisissez TC5. Après TC5, TC3 est débloqué. Disponibles: TC3 (1), TC4 (6), TC6 (16). Choisissez TC3. Après TC3, il reste TC4 (6) et TC6 (16). Choisissez TC4, puis finalement TC6.

A. Incorrect. Exécute TC4 avant TC2, mais TC2 a un risque plus élevé (4 vs 6).
C. Incorrect. Ignore complètement les dépendances et ne trie que par risque mathématique.
D. Incorrect. Exécute TC4 avant TC5, même si après l'exécution de TC2, TC5 est débloqué et a un risque beaucoup plus élevé (2) que TC4 (6).`
};

const qPT = { ...qES,
  question: `Você tem os seguintes casos de teste para um sistema de comércio eletrônico:

| Caso | Funcionalidade | Probabilidade | Impacto | Dependência |
|---|---|---|---|---|
| TC1 | Login | 3 | 3 | Nenhuma |
| TC2 | Adicionar ao carrinho | 2 | 2 | TC1 |
| TC3 | Pagamento (Checkout) | 1 | 1 | TC2, TC5 |
| TC4 | Buscar produtos | 2 | 3 | TC1 |
| TC5 | Aplicar cupom | 1 | 2 | TC2 |
| TC6 | Logout | 4 | 4 | TC1 |

Aplicando priorização baseada em risco, onde o nível de risco é calculado como Probabilidade x Impacto (escala 1=Muito Alto, 5=Muito Baixo; portanto, um valor numérico menor indica MAIOR risco). O objetivo é executar os testes de maior risco o mais cedo possível, desde que suas dependências sejam atendidas.

Qual seria a ordem de execução MAIS apropriada?`,
  explanation: `B. Correto. Comece com TC1 (o único sem dependências). Após TC1, estão disponíveis TC2 (risco=4), TC4 (risco=6) e TC6 (risco=16). Escolha TC2 pois tem maior risco (menor valor). Após TC2, TC5 é desbloqueado. Disponíveis: TC4 (6), TC5 (2), TC6 (16). Escolha TC5. Após TC5, TC3 é desbloqueado. Disponíveis: TC3 (1), TC4 (6), TC6 (16). Escolha TC3. Após TC3, restam TC4 (6) e TC6 (16). Escolha TC4 e finalmente TC6.

A. Incorreto. Executa TC4 antes de TC2, mas TC2 tem maior risco (4 vs 6).
C. Incorreto. Ignora completamente as dependências e apenas classifica por risco matemático.
D. Incorreto. Executa TC4 antes de TC5, mesmo que após a execução de TC2, TC5 seja desbloqueado e tenha um risco muito maior (2) do que TC4 (6).`
};

const mapping = {
  'questions.json': qES,
  'questions_en.json': qEN,
  'questions_fr.json': qFR,
  'questions_pt.json': qPT
};

Object.keys(mapping).forEach(file => {
  const p = path.join(__dirname, 'src', 'data', file);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    data.push(mapping[file]);
    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Added new question to ${file}`);
  }
});
