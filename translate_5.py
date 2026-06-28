import json
import sys

input_file = r'C:\Users\Manuel\Documents\ISTQB_Test\istqb-quiz\pt_chunk_5.json'
output_file = r'C:\Users\Manuel\Documents\ISTQB_Test\istqb-quiz\pt_translated_5.json'

with open(input_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Hardcoded translations for simplicity and precision
translations = {
    450: {
        'question': 'CASO PRÁTICO: Testes de um semáforo de pedestres. Estados: VERMELHO_PEDESTRE, VERDE_PEDESTRE, PISCANTE. Transições: VERMELHO→VERDE (após 60s), VERDE→PISCANTE (após 25s), PISCANTE→VERMELHO (após 5s). Qual cobertura de 0-switch (todas as transições) é exigida no mínimo?',
        'options': [
            'A) 1 caso de teste',
            'B) 2 casos de teste',
            'C) 3 casos de teste que cubram o ciclo completo',
            'D) 6 casos de teste, um para cada transição possível'
        ],
        'explanation': 'A cobertura de 0-switches exige que cada transição válida seja exercida pelo menos uma vez. Com 3 transições em um ciclo (V→Ve→P→V), 1 caso que percorra o ciclo completo cobre todas elas. Na prática, múltiplos casos são usados para variantes.'
    },
    451: {
        'question': 'CASO PRÁTICO: Você tem 100 casos de teste para executar em 5 dias. Após 3 dias, você executou 50 casos, encontrou 15 defeitos (5 críticos), e a equipe de desenvolvimento corrigiu 8. Os critérios de saída exigem: 90% de execução, 0 defeitos críticos abertos. Qual é a sua situação?',
        'options': [
            'A) Pode liberar: você cumpriu os critérios de saída',
            'B) Não pode liberar: faltam casos de teste e há defeitos críticos abertos',
            'C) Pode liberar porque você encontrou e corrigiu a maioria dos defeitos',
            'D) Deve escalar ao cliente para que ele decida se libera ou não'
        ],
        'explanation': 'Você não atende aos critérios de saída: tem apenas 50% de execução (precisa de 90%) e ainda há 5-8=máximo 7... os 5 críticos continuam abertos se apenas 8 de 15 foram corrigidos (mistura). Com defeitos críticos abertos, os critérios de saída (exit criteria) não são atendidos.'
    },
    452: {
        'question': 'CASO PRÁTICO: Sua equipe identificou os seguintes riscos de produto: R1(prob=Alta, impacto=Alto), R2(prob=Baixa, impacto=Alto), R3(prob=Alta, impacto=Baixo), R4(prob=Baixa, impacto=Baixo). Usando testes baseados em risco, em qual ordem você prioriza os testes?',
        'options': [
            'A) R4, R3, R2, R1',
            'B) R1, R2, R3, R4',
            'C) R1, R3, R2, R4',
            'D) R2, R1, R4, R3'
        ],
        'explanation': 'O nível de risco = probabilidade × impacto. R1(A×A=muito alto), R3(A×B=médio-alto), R2(B×A=médio-alto), R4(B×B=baixo). R1 primeiro, depois R3 e R2 (nível semelhante), por fim R4. A ordem correta é R1, R3, R2, R4.'
    },
    453: {
        'question': "CASO PRÁTICO: Em uma revisão de especificação de requisitos você encontra: 'O sistema deverá processar as transações rapidamente e a interface deverá ser amigável'. Quais tipos de defeitos de requisitos existem aí?",
        'options': [
            'A) Apenas ambiguidade',
            "B) Ambiguidade ('rapidamente', 'amigável') e falta de testabilidade (não são verificáveis): não são mensuráveis nem testáveis",
            'C) Contradição entre requisitos',
            'D) Requisitos duplicados'
        ],
        'explanation': "'Rapidamente' e 'amigável' são termos ambíguos e não verificáveis. Bons requisitos devem ser específicos e mensuráveis (ex: 'processar em <2s', 'pontuação SUS>75'). Este é o defeito mais comum em revisões de requisitos."
    },
    454: {
        'question': "CASO PRÁTICO: A equipe executou 500 testes e encontrou 0 defeitos. O product owner quer liberar o software afirmando que 'está livre de bugs'. Qual é a sua resposta baseada nos princípios do ISTQB?",
        'options': [
            'A) Você concorda, 500 testes sem defeitos é evidência suficiente',
            'B) Os testes apenas mostram que não foram encontrados defeitos com esse conjunto de testes; não podem demonstrar sua ausência total (Princípio 1). Liberar tem risco residual',
            'C) Deve adicionar mais 500 testes para ter certeza',
            'D) Solicitar testes exaustivos de todos os caminhos possíveis'
        ],
        'explanation': "Princípio 1 do ISTQB: 'Os testes mostram a presença de defeitos, não a sua ausência'. 0 defeitos em 500 testes não garante um software livre de bugs, apenas que esse conjunto de testes não os encontrou. Sempre existe risco residual."
    },
    455: {
        'question': "CASO PRÁTICO: Um sistema de e-commerce tem 3 níveis: Frontend (React), Backend API (Java), Banco de dados (PostgreSQL). Ao testar a função 'adicionar ao carrinho', ela falha. O backend retorna erro 500. Que tipo de teste de integração você precisa?",
        'options': [
            'A) Teste de componente do frontend',
            'B) Teste de integração entre frontend e backend API para verificar o contrato da interface',
            'C) Teste de sistema end-to-end completo',
            'D) Teste de aceite do usuário (UAT)'
        ],
        'explanation': 'O erro 500 do backend indica uma falha na interface entre frontend e backend. O teste de integração de componentes verifica as interfaces e contratos entre os módulos integrados, que é exatamente o que você precisa diagnosticar.'
    },
    456: {
        'question': 'CASO PRÁTICO: Sua empresa quer adotar uma ferramenta de automação de testes de API. A equipe avalia: custo, curva de aprendizado, integração com CI/CD, suporte a protocolos REST/SOAP e manutenibilidade. Qual é o fator MAIS crítico para garantir o sucesso a longo prazo?',
        'options': [
            'A) O menor custo de licença',
            'B) A facilidade de manutenção e a integração com o pipeline CI/CD existente',
            'C) Que suporte o maior número de protocolos possível',
            'D) Que tenha a interface mais intuitiva'
        ],
        'explanation': 'A longo prazo, a manutenibilidade dos scripts e a integração com CI/CD são críticas. Testes difíceis de manter são abandonados. Sem integração no pipeline, a automação não agrega valor contínuo.'
    },
    457: {
        'question': 'CASO PRÁTICO: Testes de um formulário de registro. Campos: nome (obrigatório), email (formato válido), senha (8-20 caracteres, pelo menos 1 maiúscula). Usando Partição de Equivalência (EP), quantas classes de equivalência existem APENAS para o campo senha?',
        'options': [
            'A) 2 (válida e inválida)',
            'B) 4 (válida; inválida por comprimento curto; inválida por comprimento longo; inválida por não ter maiúscula)',
            'C) 3 (curta, válida, longa)',
            'D) 6 (todas as combinações de comprimento e formato)'
        ],
        'explanation': 'Para senha: 1)Válida (8-20 caracteres + maiúscula), 2)Inválida-curta (<8 caracteres), 3)Inválida-longa (>20 caracteres), 4)Inválida-sem maiúscula (comprimento OK mas sem maiúscula). São 4 classes distintas com comportamento diferente do sistema.'
    },
    458: {
        'question': 'CASO PRÁTICO: Sua organização implementa revisões de código obrigatórias. A equipe de desenvolvimento reclama que elas tornam o processo mais lento. Qual é o argumento MAIS sólido para justificar as revisões?',
        'options': [
            'A) São obrigatórias por norma, não há alternativa',
            'B) O custo de corrigir defeitos encontrados em revisão é significativamente menor do que corrigi-los em produção',
            'C) As revisões melhoram o moral da equipe',
            'D) A ferramenta de revisão foi paga e precisa ser amortizada'
        ],
        'explanation': 'O argumento econômico é o mais sólido: encontrar um defeito em revisão de código custa ~1x; em testes de sistema ~10x; em produção ~100x. As revisões têm o maior ROI na detecção precoce de defeitos.'
    },
    459: {
        'question': 'CASO PRÁTICO: Você está gerenciando os testes de um app mobile. A 3 dias da release, sua equipe encontra um defeito grave no fluxo de pagamento. A correção do desenvolvedor levará 2 dias. Qual é o processo correto segundo o ISTQB?',
        'options': [
            'A) Cancelar a release automaticamente',
            'B) Registrar o defeito, avaliar o impacto e risco, e escalar para uma decisão de negócio sobre adiar ou liberar com um workaround documentado',
            'C) O testador deve corrigir o defeito diretamente',
            'D) Ignorar o defeito se o cliente ainda não o reportou'
        ],
        'explanation': 'O processo correto é: documentar o defeito (bug report), analisar impacto/risco e escalar aos stakeholders com informações para que decidam. Não é decisão unilateral do testador adiar ou liberar; é uma decisão de negócio informada.'
    },
    460: {
        'question': "O que descreve melhor o conceito de 'shift-left' em testes?",
        'options': [
            'A) Mover os testes para o lado esquerdo da tela',
            'B) Iniciar atividades de teste mais cedo no ciclo de vida de desenvolvimento',
            'C) Reduzir o número de testadores na equipe',
            'D) Automatizar todos os testes de regressão'
        ],
        'explanation': 'Shift-left significa antecipar (mover para a esquerda na linha do tempo) as atividades de teste: revisar requisitos, fazer testes de componente mais cedo, usar TDD/ATDD, etc. O objetivo é detectar defeitos antes para reduzir custos.'
    },
    461: {
        'question': 'Qual é o objetivo principal dos testes de aceite do usuário (UAT)?',
        'options': [
            'A) Verificar se o código não tem erros de sintaxe',
            'B) Confirmar que o sistema atende às necessidades do negócio e é adequado para ser usado pelos usuários finais',
            'C) Testar o desempenho do sistema sob carga',
            'D) Verificar se os componentes se integram corretamente'
        ],
        'explanation': 'O UAT verifica se o sistema atende aos requisitos de negócio e às necessidades dos usuários. Os usuários ou representantes de negócios confirmam se o sistema é adequado para o seu propósito antes da aceitação formal.'
    },
    462: {
        'question': "Uma especificação diz: 'Se o usuário é premium E tem mais de 1 ano, aplica-se 20% de desconto'. Qual técnica de modelagem de testes é MAIS diretamente aplicável a esta regra de negócio?",
        'options': [
            'A) Análise de valor limite',
            'B) Tabelas de decisão',
            'C) Transição de estado',
            'D) Cobertura de comandos (statement coverage)'
        ],
        'explanation': 'As tabelas de decisão são ideais para regras de negócio com múltiplas condições e combinações (premium: sim/não, tempo: >1ano/<=1ano) que determinam diferentes ações (desconto ou não).'
    },
    463: {
        'question': "O que é um 'framework de automação de testes orientado a palavras-chave' (keyword-driven)?",
        'options': [
            'A) Um framework onde as palavras-chave são senhas de acesso',
            "B) Um framework onde os casos de teste são descritos usando palavras-chave de alto nível que representam ações (ex: 'Login', 'ClickButton', 'VerifyText')",
            'C) Um framework apenas para testes de segurança',
            'D) Um framework que usa inteligência artificial para gerar testes'
        ],
        'explanation': 'O keyword-driven testing usa palavras-chave ou palavras de ação que representam operações do sistema. Os casos de teste são escritos em tabelas com essas palavras-chave (keywords), separando a modelagem dos testes da sua implementação técnica.'
    },
    464: {
        'question': "Qual das seguintes opções descreve melhor os 'critérios de saída' (exit criteria) de uma fase de testes?",
        'options': [
            'A) As condições para começar a testar',
            'B) As condições que devem ser atendidas para considerar uma fase de testes concluída',
            'C) O número máximo de defeitos permitidos em produção',
            'D) O prazo (deadline) final do projeto'
        ],
        'explanation': 'Os critérios de saída (exit criteria ou Definition of Done) definem quando uma fase de testes pode ser considerada completa: ex. 95% dos casos executados, 0 defeitos críticos abertos, cobertura ≥80%.'
    },
    465: {
        'question': 'Qual dos seguintes é um exemplo de técnica de análise estática?',
        'options': [
            'A) Executar o software com dados de teste',
            'B) Usar um linter ou ferramenta de análise de código para detectar violações de padrões',
            'C) Testar a interface de usuário manualmente',
            'D) Medir o tempo de resposta do sistema'
        ],
        'explanation': 'A análise estática examina o código sem executá-lo. As ferramentas de linter (como SonarQube, ESLint, Checkstyle) detectam violações de padrões, código morto, possíveis null pointers, etc., sem executar o programa.'
    },
    466: {
        'question': 'Qual é a diferença entre verificação e validação em testes?',
        'options': [
            'A) São exatamente a mesma coisa',
            'B) Verificação: estamos construindo o produto corretamente? Validação: estamos construindo o produto certo?',
            'C) A verificação é feita pelos usuários; a validação pelos testadores',
            'D) Verificação é dinâmica; validação é estática'
        ],
        'explanation': "A verificação comprova que o produto atende às suas especificações ('estamos construindo-o da maneira certa?'). A validação comprova que o produto atende às necessidades reais do usuário ('estamos construindo o produto certo?')."
    },
    467: {
        'question': "O que significa 'cobertura de desvios' (branch coverage / cobertura de decisão) de 100%?",
        'options': [
            'A) Que todas as linhas de código foram testadas',
            'B) Que cada decisão no código assumiu o valor true E false pelo menos uma vez',
            'C) Que todos os possíveis valores de entrada foram testados',
            'D) Que todas as funções do sistema foram executadas'
        ],
        'explanation': '100% de cobertura de desvio (ou decisão) significa que cada resultado possível de cada ponto de decisão (if/else, switch) foi executado pelo menos uma vez: tanto o desvio verdadeiro quanto o falso de cada condição.'
    },
    1001: {
        'question': 'Qual dos seguintes é um objetivo comum dos testes de software?',
        'options': [
            'Confirmar que o software cumpre com os requisitos especificados.',
            'Garantir que não haja erros no código-fonte.',
            'Demonstrar que o sistema é completamente seguro contra ataques externos.',
            'Verificar se todos os usuários estão satisfeitos com o produto.'
        ],
        'explanation': 'Confirmar o cumprimento dos requisitos é um objetivo comum (Syllabus 1.1). Os testes não podem garantir que não haja erros (falso), nem que o sistema seja completamente seguro ou que todos fiquem satisfeitos.'
    },
    1002: {
        'question': 'Uma empresa de software desenvolve aplicativos para o setor financeiro. A equipe de direção pergunta ao gerente de testes por que os testes são essenciais em seu contexto, além de encontrar defeitos. Qual das seguintes razões descreve MELHOR por que os testes são necessários neste contexto?',
        'options': [
            'Para demonstrar que o software não tem nenhum defeito antes de sua entrega.',
            'Para proporcionar confiança sobre o nível de qualidade do software e cumprir com os requisitos regulatórios do setor.',
            'Para substituir o processo de revisão de requisitos e reduzir a documentação.',
            'Para garantir que todos os desenvolvedores conheçam o código do sistema completo.'
        ],
        'explanation': 'No setor financeiro, proporcionar confiança e cumprir com regulamentações é vital. Os testes não podem demonstrar a ausência de defeitos (princípio da falácia da ausência de defeitos).'
    },
    1003: {
        'question': 'Você está avaliando a qualidade dos testes realizados em um software antes de seu lançamento. Você observa que, embora muitos testes tenham sido executados, defeitos significativos ainda persistem. Qual dos sete princípios de teste se reflete nesta situação?',
        'options': [
            'Testes exaustivos são impossíveis',
            'Agrupamento de defeitos (Os defeitos se agrupam)',
            'Paradoxo do pesticida (Os testes se desgastam)',
            'Falácia da ausência de defeitos'
        ],
        'explanation': 'Os defeitos tendem a se agrupar em módulos específicos (Agrupamento de defeitos ou Princípio de Pareto).'
    },
    1004: {
        'question': 'Você está participando de um projeto de software que desenvolve uma plataforma de e-learning. A equipe decidiu realizar testes de regressão na versão atual do sistema. Qual das seguintes atividades é realizada durante a fase de planejamento de testes?',
        'options': [
            'Definir quais funcionalidades serão testadas na próxima iteração.',
            'Executar casos de teste para verificar se a funcionalidade da plataforma de e-learning funciona.',
            'Revisar os resultados dos testes e documentar os defeitos encontrados.',
            'Analisar os requisitos do sistema para identificar casos de teste.'
        ],
        'explanation': 'O planejamento inclui definir o escopo, ou seja, o que será testado. Executar é a fase de execução; analisar é da análise; revisar os resultados faz parte do encerramento ou monitoramento.'
    },
    1006: {
        'question': 'Qual das seguintes atividades é TÍPICA de um papel de gerente de testes?',
        'options': [
            'Desenvolver casos de teste',
            'Gerenciar a equipe de testes',
            'Executar testes automatizados',
            'Realizar análise de defeitos'
        ],
        'explanation': 'O gerente de testes (Test Manager) supervisiona, planeja e gerencia. Desenvolver e executar casos de teste costuma ser o papel do testador (tester).'
    },
    1007: {
        'question': 'Qual das seguintes habilidades é essencial para um testador ao avaliar a qualidade de um produto de software?  \n  \ni. Comunicação efetiva  \n  \nii. Conhecimento técnico  \n  \niii. Capacidade de análise  \n  \niv. Gerenciamento do tempo  ',
        'options': [
            'i e ii são essenciais; iii e iv não são',
            'iii e iv são essenciais; i e ii não são',
            'ii e iii são essenciais; i e iv não são',
            'i e iii são essenciais; ii e iv não são'
        ],
        'explanation': 'A comunicação efetiva e a capacidade de análise (i e iii) são primordiais segundo o syllabus para reportar problemas e modelar testes, embora ii e iv também ajudem.'
    },
    1008: {
        'question': 'Qual é uma vantagem principal da abordagem de equipe completa (whole-team approach) no processo de desenvolvimento de software?',
        'options': [
            'Promove a comunicação isolada entre os testadores e os desenvolvedores.',
            'Facilita a colaboração entre todas as partes interessadas desde o início do projeto.',
            'Aumenta a duração dos testes por exigir revisões extensas.',
            'Elimina a necessidade de uma estratégia de testes bem definida.'
        ],
        'explanation': 'A abordagem de equipe inteira (whole-team) fomenta a colaboração mútua de todos os perfis desde o início.'
    },
    1009: {
        'question': 'Qual das seguintes afirmações descreve melhor a importância dos testes no ciclo de vida de desenvolvimento de software (SDLC)?',
        'options': [
            'Os testes são realizados apenas no final do SDLC para verificar o produto final.',
            'Os testes devem ser planejados e realizados ao longo de todo o SDLC para detectar problemas precocemente.',
            'Os testes são opcionais e só são necessários se o cliente solicitar.',
            'Os testes focam unicamente na funcionalidade do software e não em outros aspectos.'
        ],
        'explanation': 'Realizar testes ao longo de todo o SDLC (shift-left) é fundamental para detectar e corrigir problemas o mais cedo possível.'
    },
    1010: {
        'question': 'Qual das seguintes descrições se relaciona MELHOR com o desenvolvimento orientado a testes (TDD)?',
        'options': [
            'No TDD, os testes são escritos antes do código e são usados para guiar o desenvolvimento.',
            'No TDD, os desenvolvedores criam primeiro o código e depois os casos de teste correspondentes.',
            'No TDD, os testes são realizados apenas no final do ciclo de desenvolvimento para verificar o produto.',
            'No TDD, usam-se casos de teste de aceite como base para o design do código.'
        ],
        'explanation': 'TDD (Test-Driven Development) consiste em escrever os testes (unitários) antes de escrever o código-fonte que os faça passar.'
    },
    1011: {
        'question': 'Qual das seguintes afirmações descreve melhor como a abordagem de "deslocamento para a esquerda" (shift-left) pode melhorar a qualidade do software?',
        'options': [
            'Permite a detecção e correção de defeitos em estágios posteriores do ciclo de vida de desenvolvimento.',
            'Facilita a integração contínua e a entrega antecipada de valor ao cliente ao encontrar erros cedo.',
            'Aumenta a complexidade do processo de desenvolvimento ao introduzir mais testes nas fases iniciais.',
            'Reduz a necessidade de documentação ao aplicar mais testes de usuário no final do ciclo.'
        ],
        'explanation': 'Mover os testes para a esquerda permite encontrar erros antes, melhorando a integração e reduzindo custos.'
    },
    1012: {
        'question': 'Qual é um benefício principal de realizar retrospectivas em uma equipe de trabalho?',
        'options': [
            'Permitem à equipe ignorar os problemas de comunicação que podem surgir durante o projeto.',
            'Ajudam a identificar e promover práticas que foram eficazes no passado e que podem ser aplicadas em ciclos futuros.',
            'São uma formalidade que deve ser cumprida sem gerar um impacto real no projeto.',
            'Facilitam que os líderes da equipe assumam o controle total do processo sem considerar opiniões.'
        ],
        'explanation': 'As retrospectivas são o motor da melhoria contínua (identificar o que funcionou e o que não funcionou).'
    },
    1013: {
        'question': 'Quais das seguintes afirmações descrevem adequadamente os níveis de teste e suas abordagens?\n\n1. Valida a funcionalidade completa em produção simulada\n2. Verifica se módulos individuais funcionam\n3. Garante que os módulos se integrem juntos\n4. Valida os requisitos a partir da perspectiva do usuário final\n\nA. Testes de sistema  \nB. Testes de componente  \nC. Testes de integração  \nD. Testes de aceite',
        'options': [
            '1A, 2B, 3C, 4D',
            '1C, 2A, 3D, 4B',
            '1D, 2C, 3A, 4B',
            '1B, 2D, 3A, 4C'
        ],
        'explanation': '1: Sistema (A), 2: Componente (B), 3: Integração (C), 4: Aceite (D).'
    },
    1014: {
        'question': 'Foram executados os seguintes casos de teste:  \n- TC1 Falhou  \n- TC2 Passou  \n- TC3 Falhou  \n  \nApós as correções, TC1, TC2 e TC3 são executados novamente. Quais dessas execuções são consideradas testes de regressão?',
        'options': [
            'TC1',
            'TC2',
            'TC3',
            'TC1 e TC3'
        ],
        'explanation': 'A execução do TC2 é regressão, pois ele funcionava antes e se verifica que as alterações não o quebraram. TC1 e TC3 são testes de confirmação (reteste).'
    },
    1015: {
        'question': 'Qual das seguintes afirmações é VERDADEIRA sobre os testes estáticos?',
        'options': [
            'Os testes estáticos ajudam a reduzir o tempo de desenvolvimento ao encontrar defeitos nos estágios iniciais.',
            'Os testes estáticos sempre detectam todos os tipos de defeitos no código-fonte.',
            'Os testes estáticos são mais eficazes que os dinâmicos na validação de funcionalidade.',
            'Os testes estáticos não podem ser usados para melhorar a qualidade da documentação.'
        ],
        'explanation': 'Encontrar problemas de forma estática (sem executar o código) economiza muito dinheiro e tempo.'
    },
    1016: {
        'question': 'Que vantagem proporciona o feedback (retroalimentação) antecipado e frequente das partes interessadas durante o desenvolvimento de software?',
        'options': [
            'Fomenta a inovação nas soluções propostas.',
            'Reduz a possibilidade de retrabalho ao identificar problemas a tempo.',
            'Aumenta a duração do ciclo de vida do produto.',
            'Melhora a satisfação da equipe de desenvolvimento.'
        ],
        'explanation': 'O feedback contínuo evita que o produto errado seja construído, reduzindo retrabalho custoso.'
    },
    1017: {
        'question': 'Em sua organização: Não há o papel de moderador. O objetivo é encontrar defeitos e melhorar. Discute-se abertamente. Não é necessária documentação formal no final. Que tipo de revisão é essa?',
        'options': [
            'Revisão informal',
            'Revisão técnica',
            'Inspeção',
            'Revisão guiada (Walkthrough)'
        ],
        'explanation': 'Sem moderador, sem documentação formal e orientada a melhorar com discussão aberta: Revisão informal.'
    },
    1018: {
        'question': 'Qual dos seguintes fatores é essencial para garantir a eficácia de uma revisão?',
        'options': [
            'Contar com um facilitador que guie o processo de revisão.',
            'Permitir que apenas os especialistas participem em todas as revisões.',
            'Realizar a revisão de forma improvisada, sem preparação prévia.',
            'Limitar o tempo de discussão para não se prolongar muito.'
        ],
        'explanation': "Um facilitador ou outros papéis claros melhoram o sucesso. No entanto, em algumas metodologias outra chave é a 'preparação prévia'."
    },
    1019: {
        'question': 'Qual das seguintes afirmações descreve melhor uma técnica de teste de caixa branca?',
        'options': [
            'Baseia-se no conhecimento do funcionamento interno do software e de sua estrutura de código.',
            'É usada principalmente para avaliar a experiência do usuário e a usabilidade do sistema.',
            'Os casos de teste são modelados sem levar em conta a lógica interna do sistema.',
            'Concentra-se na identificação de defeitos nos requisitos através de testes de interface.'
        ],
        'explanation': 'Caixa branca baseia-se na estrutura interna (código, arquitetura).'
    },
    1020: {
        'question': 'Um sistema de notas aceita pontuações de 0 a 100. Reprovado: 0-59, Aprovado: 60-69, Bom: 70-89, Excelente: 90-100. Usando Partição de Equivalência, qual é o número MÍNIMO de casos de teste para alcançar 100% de cobertura das partições VÁLIDAS?',
        'options': [
            '3',
            '4',
            '5',
            '6'
        ],
        'explanation': 'Existem 4 partições válidas: [0,59], [60,69], [70,89], [90,100]. É necessário 1 caso para cada uma, portanto 4 casos.'
    },
    1021: {
        'question': "O campo 'Idade' aceita de 16 a 65 anos. Seu conjunto inclui: 15, 16, 17, 64, 65, 66. Que porcentagem de cobertura de Análise de Valor Limite (BVA) de 3 valores você alcança?",
        'options': [
            '50%',
            '67%',
            '83%',
            '100%'
        ],
        'explanation': "No BVA de 3 valores, um limite 'X' precisa de X-1, X, X+1. Para 16 você precisa de 15,16,17. Para 65 você precisa de 64,65,66. Você tem todos eles, cobertura de 100%."
    },
    1022: {
        'question': 'Em uma tabela de decisão para empréstimos você tem 4 condições. Se quisesse minimizar a tabela devido à grande quantidade de combinações, qual seria a melhor estratégia?',
        'options': [
            'Eliminar todas as condições menos importantes',
            'Usar uma abordagem baseada em risco para reduzir as regras a testar',
            'Combinar todas as condições em uma única regra',
            'Criar múltiplas tabelas pequenas e separadas'
        ],
        'explanation': 'Quando uma tabela é muito grande (ex: 2^N regras), a estratégia sugerida pelo ISTQB é minimizar mediante uma abordagem de riscos.'
    },
    1023: {
        'question': 'Qual das seguintes afirmações sobre os critérios de cobertura em testes de transição de estado é CORRETA?',
        'options': [
            'A cobertura de todos os estados é mais forte do que a cobertura de transições válidas',
            'A cobertura de transições válidas garante a cobertura completa de todos os estados',
            'A cobertura de todas as transições inclui apenas transições válidas',
            'Para alcançar a cobertura de transições válidas, deve-se testar apenas uma transição por caso de teste'
        ],
        'explanation': 'Se você cobrir todas as transições válidas (setas), obrigatoriamente terá visitado todos os estados (nós). Portanto, a Cobertura de Transições Válidas é mais forte do que a Cobertura de Estados.'
    }
}

for item in data:
    item_id = item['id']
    if item_id in translations:
        item['question'] = translations[item_id]['question']
        item['options'] = translations[item_id]['options']
        item['explanation'] = translations[item_id]['explanation']

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('Translation completed.')
