const fs = require('fs');
const path = require('path');

const files = ['questions.json', 'questions_en.json', 'questions_fr.json', 'questions_pt.json'];

const fixes = {
  'q_batch2_butb18o4u': {
    es: '¿Cuál de los siguientes elementos puede modificar el enfoque de las pruebas en un proyecto de software?\n\ni. El número de empleados en el área comercial de la empresa\nii. La complejidad del software a probar\niii. El presupuesto asignado al proyecto\niv. El uso de herramientas automatizadas',
    en: 'Which of the following elements can modify the test approach in a software project?\n\ni. The number of employees in the company\'s commercial area\nii. The complexity of the software to be tested\niii. The budget assigned to the project\niv. The use of automated tools',
    fr: 'Lequel des éléments suivants peut modifier l\'approche de test dans un projet logiciel ?\n\ni. Le nombre d\'employés dans la zone commerciale de l\'entreprise\nii. La complexité du logiciel à tester\niii. Le budget alloué au projet\niv. L\'utilisation d\'outils automatisés',
    pt: 'Qual dos seguintes elementos pode modificar a abordagem de teste em um projeto de software?\n\ni. O número de funcionários na área comercial da empresa\nii. A complexidade do software a ser testado\niii. O orçamento atribuído ao projeto\niv. O uso de ferramentas automatizadas'
  },
  'q_batch4_x1vez8tp7': {
    es: '¿Cuáles de los siguientes elementos son factores que pueden afectar la estrategia de pruebas en un proyecto de software?\n\ni. El perfil del equipo de pruebas\nii. La complejidad del sistema a probar\niii. La disponibilidad de recursos de hardware\niv. Las técnicas de gestión de proyectos utilizadas',
    en: 'Which of the following elements are factors that can affect the test strategy in a software project?\n\ni. The profile of the test team\nii. The complexity of the system to be tested\niii. The availability of hardware resources\niv. The project management techniques used',
    fr: 'Lequel des éléments suivants sont des facteurs pouvant affecter la stratégie de test dans un projet logiciel ?\n\ni. Le profil de l\'équipe de test\nii. La complexité du système à tester\niii. La disponibilité des ressources matérielles\niv. Les techniques de gestion de projet utilisées',
    pt: 'Quais dos seguintes elementos são fatores que podem afetar a estratégia de testes em um projeto de software?\n\ni. O perfil da equipe de testes\nii. A complexidade do sistema a ser testado\niii. A disponibilidade de recursos de hardware\niv. As técnicas de gerenciamento de projetos utilizadas'
  }
};

const langMap = {
  'questions.json': 'es',
  'questions_en.json': 'en',
  'questions_fr.json': 'fr',
  'questions_pt.json': 'pt'
};

files.forEach(file => {
  const p = path.join(__dirname, 'src', 'data', file);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    const lang = langMap[file];
    
    data.forEach(q => {
      if (fixes[q.id] && fixes[q.id][lang]) {
        q.question = fixes[q.id][lang];
      }
      
      // Fix (i), (ii), etc for 1070, 1071, 1074, 1075
      if (['1070', '1071', '1074', '1075'].includes(q.id.toString())) {
        q.question = q.question.replace(/\s*\(i\)\s*/g, '\n\ni. ')
                               .replace(/\s*\(ii\)\s*/g, '\n\nii. ')
                               .replace(/\s*\(iii\)\s*/g, '\n\niii. ')
                               .replace(/\s*\(iv\)\s*/g, '\n\niv. ')
                               .replace(/\s*\(v\)\s*/g, '\n\nv. ');
      }
    });

    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Updated ${file}`);
  }
});
