// Dados das disciplinas e suas questões (cada disciplina possui um array de questões)
const subjects = {
  "BD": {
    title: "Banco de Dados I & II",
    questions: [
      {
        textBefore: "Os bancos de dados relacionais organizam dados em tabelas com chaves primárias e estrangeiras.",
        question: "O que é uma chave primária em um banco de dados relacional?",
        options: [
          "Um campo que identifica unicamente cada registro em uma tabela.",   // correta
          "Um campo que referencia uma tabela estrangeira.",
          "Uma consulta SQL predefinida.",
          "Uma restrição que impede valores duplicados em qualquer tabela."
        ],
        correct: 0,  // índice da opção correta no array acima (0 = primeira opção)
        textAfter: "A chave primária identifica unicamente cada registro de uma tabela, garantindo que não existam duplicatas."
      },
      {
        textBefore: "A linguagem SQL é utilizada para gerenciar e consultar dados em bancos de dados relacionais.",
        question: "Qual comando SQL é usado para extrair dados de um banco de dados?",
        options: [
          "INSERT",
          "SELECT",
          "DELETE",
          "UPDATE"
        ],
        correct: 1,  // "SELECT" é a resposta correta
        textAfter: "O comando SELECT é utilizado para consultar e retornar dados de um banco de dados."
      },
      {
        textBefore: "Sistemas de gerenciamento de banco de dados são usados para armazenar e manipular dados de maneira estruturada.",
        question: "Qual dos itens a seguir é um exemplo de SGBD?",
        options: [
          "MySQL",
          "HTML",
          "JavaScript",
          "Photoshop"
        ],
        correct: 0,
        textAfter: "MySQL é um sistema de gerenciamento de banco de dados amplamente utilizado."
      },
      {
        textBefore: "Em um modelo relacional, relacionamentos muitos-para-muitos exigem uma estrutura adicional.",
        question: "Como é representado um relacionamento N para N?",
        options: [
          "Por meio de uma tabela de associação",
          "Com um campo booleano",
          "Apenas com uma chave primária composta",
          "Através de uma visão (view)"
        ],
        correct: 0,
        textAfter: "Uma tabela intermediária armazena as associações entre as duas tabelas principais."
      },
      {
        textBefore: "Há comandos SQL específicos para manipular estruturas do banco.",
        question: "Qual comando remove uma tabela inteira do banco de dados?",
        options: [
          "DROP TABLE",
          "DELETE",
          "TRUNCATE",
          "REMOVE"
        ],
        correct: 0,
        textAfter: "DROP TABLE exclui a definição e os dados da tabela permanentemente."
      },
      // ... (até 40 questões no total para Banco de Dados, seguindo este formato)
    ]
  },

  
  "PRG": {
    title: "Programação (TPA, APS, PAM)",
    questions: [
      {
        textBefore: "Em programação, algoritmos podem ser representados em pseudocódigo ou em diagramas de fluxo para planejamento.",
        question: "O que é um algoritmo?",
        options: [
          "Uma linguagem de programação de baixo nível.",
          "Uma sequência de instruções lógicas para resolver um problema.",  // correta
          "Um erro de sintaxe no código-fonte.",
          "Um componente físico do computador."
        ],
        correct: 1,
        textAfter: "Algoritmo é uma sequência passo a passo de instruções para realizar uma tarefa ou resolver um problema."
      },
      {
        textBefore: "Estruturas de controle permitem repetição de blocos de código.",
        question: "Qual estrutura executa um bloco enquanto a condição for verdadeira?",
        options: [
          "if",
          "for",
          "while",
          "switch"
        ],
        correct: 2,
        textAfter: "O laço while repete as instruções enquanto a condição permanecer verdadeira."
      },
      {
        textBefore: "Na programação orientada a objetos, classes podem compartilhar comportamentos.",
        question: "Qual conceito permite que uma classe herde características de outra?",
        options: [
          "Encapsulamento",
          "Herança",
          "Polimorfismo",
          "Recursão"
        ],
        correct: 1,
        textAfter: "Herança permite reutilizar atributos e métodos de uma classe base em outra classe."
      },
      {
        textBefore: "Alguns tipos de dados são usados para valores lógicos.",
        question: "Qual tipo representa verdadeiro ou falso?",
        options: [
          "int",
          "boolean",
          "string",
          "float"
        ],
        correct: 1,
        textAfter: "O tipo boolean armazena valores de lógica binária: verdadeiro ou falso."
      },
      {
        textBefore: "Antes da execução, muitas linguagens traduzem o código fonte para outra forma.",
        question: "O que acontece durante a compilação de um programa?",
        options: [
          "O código é traduzido para linguagem de máquina",
          "O programa roda linha a linha",
          "Os comentários são removidos",
          "Apenas verifica-se a sintaxe"
        ],
        correct: 0,
        textAfter: "Compilar gera um arquivo executável ou bytecode que pode ser interpretado pela máquina."
      },
      // ... (demais questões de Programação)
    ]
  },
  "WEB": {
    title: "Desenvolvimento Web (PW I–III)",
    questions: [
      {
        textBefore: "No desenvolvimento web front-end, HTML define a estrutura da página, CSS define o estilo e JavaScript define o comportamento.",
        question: "Qual das opções abaixo NÃO é uma linguagem de marcação ou estilo para web?",
        options: [
          "HTML",
          "CSS",
          "JavaScript",  // correta (não é linguagem de marcação ou de estilo, e sim de programação)
          "XML"
        ],
        correct: 2,
        textAfter: "JavaScript é uma linguagem de programação, enquanto HTML é linguagem de marcação e CSS de estilo."
      },
      {
        textBefore: "Em CSS é possível definir cores de fundo de elementos.",
        question: "Qual propriedade altera a cor de fundo?",
        options: [
          "color",
          "background-color",
          "font-color",
          "border-color"
        ],
        correct: 1,
        textAfter: "A propriedade background-color define a cor de fundo de um elemento."
      },
      {
        textBefore: "O HTML é a base estrutural de páginas na web.",
        question: "O que significa a sigla HTML?",
        options: [
          "Hypertext Makeup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Text Markup Language",
          "Home Tool Markup Language"
        ],
        correct: 2,
        textAfter: "HTML significa Hyper Text Markup Language."
      },
      {
        textBefore: "Links permitem a navegação entre páginas e recursos.",
        question: "Qual tag HTML cria um hyperlink?",
        options: [
          "<img>",
          "<a>",
          "<link>",
          "<div>"
        ],
        correct: 1,
        textAfter: "A tag <a> define um âncora, utilizada para hyperlinks."
      },
      {
        textBefore: "Arrays em JavaScript possuem métodos úteis para manipulação.",
        question: "Qual método adiciona um elemento ao final de um array?",
        options: [
          "push()",
          "pop()",
          "shift()",
          "concat()"
        ],
        correct: 0,
        textAfter: "O método push() insere elementos ao final do array." 
      },
      // ... (demais questões de Desenvolvimento Web)
    ]
  },
  "FI": {
    title: "Fund. & Infraestrutura (FI, IPSSI)",
    questions: [
      {
        textBefore: "O modelo OSI descreve sete camadas para padronizar a comunicação em redes de computadores.",
        question: "Qual camada do modelo OSI é responsável pelo roteamento de pacotes entre redes?",
        options: [
          "Aplicação",
          "Enlace de Dados",
          "Rede",      // correta
          "Transporte"
        ],
        correct: 2,
        textAfter: "A camada de Rede do modelo OSI cuida do roteamento de pacotes, determinando o caminho até o destino."
      },
      {
        textBefore: "Equipamentos de rede conectam dispositivos em uma mesma LAN.",
        question: "Qual dispositivo interliga segmentos e reduz colisões?",
        options: [
          "Hub",
          "Switch",
          "Repeater",
          "Modem"
        ],
        correct: 1,
        textAfter: "Switches enviam quadros apenas para o destino correto, diminuindo colisões."
      },
      {
        textBefore: "Protocolos de configuração dinâmica facilitam o gerenciamento de IPs.",
        question: "Para que serve o protocolo DHCP?",
        options: [
          "Prover endereçamento IP dinâmico",
          "Transferir arquivos",
          "Enviar e-mails",
          "Realizar criptografia"
        ],
        correct: 0,
        textAfter: "O DHCP distribui endereços IP automaticamente na rede."
      },
      {
        textBefore: "Meios físicos de transmissão podem ser metálicos ou ópticos.",
        question: "Qual meio utiliza filamentos de vidro para transmitir dados?",
        options: [
          "Fibra óptica",
          "Par metálico",
          "Ondas de rádio",
          "Cabo coaxial"
        ],
        correct: 0,
        textAfter: "A fibra óptica guia a luz através de filamentos de vidro ou plástico."
      },
      {
        textBefore: "Diversos conceitos são essenciais em redes de computadores.",
        question: "O que significa a sigla IP?",
        options: [
          "Internet Protocol",
          "Internal Process",
          "Interactive Program",
          "Integrated Packet"
        ],
        correct: 0,
        textAfter: "IP vem de Internet Protocol, o endereço básico de host na rede."
      },
      // ... (demais questões de Fundamentos & Infraestrutura)
    ]
  },
  "AP": {
    title: "Análise & Projeto (A&P, DDS)",
    questions: [
      {
        textBefore: "Diagramas UML são ferramentas utilizadas na análise e projeto de sistemas para modelar diferentes aspectos do software.",
        question: "Qual diagrama UML é usado para representar o fluxo de atividades de um processo?",
        options: [
          "Diagrama de Caso de Uso",
          "Diagrama de Classes",
          "Diagrama de Atividades",   // correta
          "Diagrama de Implantação"
        ],
        correct: 2,
        textAfter: "O Diagrama de Atividades modela o fluxo de trabalho ou de atividades, mostrando a sequência de passos de um processo."
      },
      {
        textBefore: "Durante a fase de levantamento de requisitos, diversas pessoas participam do projeto.",
        question: "Quem são os stakeholders?",
        options: [
          "Usuários e interessados no sistema",
          "Apenas os programadores",
          "Os diagramas de caso de uso",
          "Métodos de teste"
        ],
        correct: 0,
        textAfter: "Stakeholders abrangem todos os envolvidos ou impactados pelo sistema."
      },
      {
        textBefore: "Modelos de processo guiam o desenvolvimento do software.",
        question: "Qual modelo é caracterizado por fases sequenciais rígidas?",
        options: [
          "Modelo Espiral",
          "Kanban",
          "Waterfall",
          "Scrum"
        ],
        correct: 2,
        textAfter: "O modelo Waterfall segue etapas lineares sem sobreposição."
      },
      {
        textBefore: "Casos de uso ajudam a descrever funcionalidades do sistema.",
        question: "O que é um caso de uso?",
        options: [
          "Uma técnica de teste",
          "Uma descrição de interação entre ator e sistema",
          "Um banco de dados",
          "Um tipo de diagrama de rede"
        ],
        correct: 1,
        textAfter: "Um caso de uso documenta como atores interagem com o sistema para alcançar um objetivo."
      },
      {
        textBefore: "A etapa de projeto detalha soluções para implementar o sistema.",
        question: "Qual documento descreve o design com diagramas e componentes?",
        options: [
          "Documento de Requisitos",
          "Plano de Testes",
          "Projeto de Software",
          "Manual do usuário"
        ],
        correct: 2,
        textAfter: "O projeto de software apresenta como o sistema será construído em detalhes."
      },
      // ... (demais questões de Análise & Projeto)
    ]
  },
  "QTS": {
    title: "Qualidade & Testes (QTS)",
    questions: [
      {
        textBefore: "Testes de software garantem a qualidade do produto, verificando se ele atende aos requisitos e identificando bugs.",
        question: "Que tipo de teste verifica se unidades individuais do código fonte funcionam corretamente?",
        options: [
          "Teste de Integração",
          "Teste de Sistema",
          "Teste Unitário",    // correto
          "Teste de Aceitação"
        ],
        correct: 2,
        textAfter: "Testes unitários focam em componentes ou funções individuais do código, verificando sua corretude isoladamente."
      },
      {
        textBefore: "Erros de software podem causar comportamentos inesperados.",
        question: "O que é um bug?",
        options: [
          "Uma melhoria planejada",
          "Uma falha ou erro no software",
          "Um tipo de teste automatizado",
          "Uma ferramenta de versionamento"
        ],
        correct: 1,
        textAfter: "Bug é qualquer defeito que faz o software agir de maneira diferente do esperado."
      },
      {
        textBefore: "Nem sempre é possível escrever todos os testes antes do código.",
        question: "Qual técnica se baseia na exploração e experiência do testador?",
        options: [
          "Teste baseados em especificação",
          "Teste exploratório",
          "Teste de regressão",
          "Teste de carga"
        ],
        correct: 1,
        textAfter: "O teste exploratório depende do conhecimento e criatividade do testador."
      },
      {
        textBefore: "Durante o ciclo de vida do software, novas versões podem introduzir falhas antigas novamente.",
        question: "Quando realizamos o teste de regressão?",
        options: [
          "Ao adicionar novas funcionalidades para garantir que nada existente quebrou",
          "Somente no início do projeto",
          "Apenas na fase de requisitos",
          "Nunca em projetos ágeis"
        ],
        correct: 0,
        textAfter: "Testes de regressão verificam se alterações recentes não afetaram funcionalidades já implementadas."
      },
      {
        textBefore: "Frameworks auxiliam a automatização de testes.",
        question: "Ferramentas como JUnit e PyTest são usadas para quê?",
        options: [
          "Criar documentação",
          "Automatizar testes unitários",
          "Gerenciar bancos de dados",
          "Monitorar redes"
        ],
        correct: 1,
        textAfter: "Essas ferramentas permitem escrever e executar testes unitários de forma automatizada."
      },
      // ... (demais questões de Qualidade & Testes)
    ]
  },
  "SE": {
    title: "Sistemas Embarcados (SE)",
    questions: [
      {
        textBefore: "Sistemas embarcados são dispositivos computacionais dedicados que integram hardware e software para realizar funções específicas.",
        question: "Qual dos itens a seguir é um exemplo de sistema embarcado?",
        options: [
          "Um computador pessoal rodando Windows 10",
          "Um microcontrolador Arduino controlando sensores",  // correto
          "Um servidor web em um data center",
          "Um smartphone executando aplicativos"
        ],
        correct: 1,
        textAfter: "Um microcontrolador Arduino dedicado a controlar sensores é um exemplo típico de sistema embarcado."
      },
      {
        textBefore: "Sistemas embarcados normalmente executam programas gravados em memória não volátil.",
        question: "O que é firmware?",
        options: [
          "Um tipo de hardware",
          "Software permanente gravado em memória",
          "Um aplicativo para smartphone",
          "Um protocolo de rede"
        ],
        correct: 1,
        textAfter: "Firmware é o software que permanece gravado para controle do dispositivo embarcado."
      },
      {
        textBefore: "Certas linguagens são preferidas em microcontroladores por sua eficiência.",
        question: "Qual linguagem é muito usada em sistemas embarcados?",
        options: [
          "Python",
          "Java",
          "C",
          "Ruby"
        ],
        correct: 2,
        textAfter: "A linguagem C costuma ser escolhida pelo controle de baixo nível e performance."
      },
      {
        textBefore: "Para gravar o código em um microcontrolador utiliza-se um equipamento específico.",
        question: "Como se chama o aparelho utilizado para gravar o programa no chip?",
        options: [
          "Compilador",
          "Debugger",
          "Gravador (programador)",
          "Editor de texto"
        ],
        correct: 2,
        textAfter: "O gravador, ou programador, transfere o firmware para a memória do microcontrolador."
      },
      {
        textBefore: "Alguns sistemas embarcados precisam responder a eventos em tempo determinado.",
        question: "Qual a principal vantagem de usar um sistema operacional de tempo real (RTOS)?",
        options: [
          "Permitir acesso remoto via web",
          "Garantir resposta previsível a eventos",
          "Reduzir o consumo de energia pela metade",
          "Evitar a necessidade de programação"
        ],
        correct: 1,
        textAfter: "Um RTOS assegura que tarefas críticas cumpram prazos definidos com precisão."
      },
      // ... (demais questões de Sistemas Embarcados)
    ]
  }
};

// Variáveis globais de controle do estado atual do quiz
let currentSubject = null;         // chave da disciplina atual (por exemplo, "BD", "PRG", etc.)
let currentQuestions = [];         // array de questões da disciplina atual
let currentQuestionIndex = 0;      // índice da pergunta atual dentro do array da disciplina

/**
 * Inicia o quiz para uma disciplina selecionada.
 * @param {string} subKey - chave da disciplina (conforme definida em subjects)
 */
function startSubject(subKey) {
  currentSubject = subKey;
  currentQuestions = subjects[subKey].questions;
  currentQuestionIndex = 0;

  // Atualiza o título da disciplina na interface
  document.getElementById('subject-title').textContent = subjects[subKey].title;
  // Exibe o container do quiz e oculta a mensagem de boas-vindas
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';

  // Reseta/oculta elementos de feedback e botões da interface para um novo começo
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('next-btn').textContent = "Próxima Pergunta";
  document.getElementById('check-btn').style.display = 'inline-block';
  // Garante que campos de pergunta/explicação estejam visíveis (caso tenham sido ocultados antes)
  document.getElementById('question-explanation').style.display = 'block';
  document.getElementById('question-text').style.display = 'block';
  document.getElementById('options-list').style.display = 'block';
  // Limpa textos de feedback anteriores
  document.getElementById('result-text').textContent = "";
  document.getElementById('answer-explanation').textContent = "";

  // Carrega a primeira pergunta da disciplina selecionada
  loadQuestion(currentQuestionIndex);
}

/**
 * Carrega a questão de índice especificado da disciplina atual na interface.
 * @param {number} index - índice da questão a ser carregada
 */
function loadQuestion(index) {
  const qData = currentQuestions[index];  // dados da questão atual (objeto com textBefore, question, etc.)

  // Preenche os elementos HTML com os dados da questão
  document.getElementById('question-explanation').textContent = qData.textBefore;
  document.getElementById('question-text').textContent = qData.question;

  // Gera as opções de resposta na lista de opções
  const optionsDiv = document.getElementById('options-list');
  optionsDiv.innerHTML = "";  // limpa quaisquer opções anteriores
  qData.options.forEach((optText, i) => {
    // Cria um elemento <label> com classe 'option' contendo o input radio e o texto da opção
    const optionLabel = document.createElement('label');
    optionLabel.className = 'option';
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "answer";      // todas opções compartilham o mesmo name (grupo de rádio)
    radio.value = i.toString(); // valor do rádio é o índice da opção
    optionLabel.appendChild(radio);
    optionLabel.appendChild(document.createTextNode(optText));
    optionsDiv.appendChild(optionLabel);
  });

  // Oculta a área de feedback (caso esteja visível de pergunta anterior) e garante botão Verificar visível
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('check-btn').style.display = 'inline-block';
  document.getElementsByName('answer').forEach(r => r.disabled = false);  // habilita inputs caso estivessem desabilitados
}

/**
 * Verifica a resposta selecionada pelo usuário para a questão atual e exibe o feedback.
 */
function checkAnswer() {
  const choices = document.getElementsByName('answer');
  let selectedIndex = -1;
  // Percorre as opções para encontrar qual está selecionada
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      selectedIndex = parseInt(choices[i].value);
      break;
    }
  }
  if (selectedIndex === -1) {
    alert("Por favor, selecione uma resposta.");  // nenhum rádio selecionado
    return;
  }

  // Desabilita todas as opções após a seleção (para não permitir mudanças depois de responder)
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }

  const correctIndex = currentQuestions[currentQuestionIndex].correct;
  const optionLabels = document.querySelectorAll('#options-list .option');

  // Verifica se o índice selecionado é o correto e prepara mensagem de feedback
  if (selectedIndex === correctIndex) {
    // Resposta correta
    optionLabels[correctIndex].classList.add('correct');  // destaque verde na opção correta
    document.getElementById('result-text').textContent = "Resposta Correta!";
    document.getElementById('result-text').style.color = "green";
  } else {
    // Resposta incorreta
    optionLabels[selectedIndex].classList.add('wrong');   // marca a opção escolhida como incorreta (vermelho)
    optionLabels[correctIndex].classList.add('correct');  // destaca qual era a opção correta
    document.getElementById('result-text').textContent = "Resposta Incorreta.";
    document.getElementById('result-text').style.color = "red";
  }

  // Mostra a explicação adicional da resposta
  document.getElementById('answer-explanation').textContent = currentQuestions[currentQuestionIndex].textAfter;
  // Exibe a área de feedback agora que temos o resultado e explicação
  document.getElementById('feedback').style.display = 'block';
  // Oculta o botão Verificar para não permitir nova verificação desta pergunta
  document.getElementById('check-btn').style.display = 'none';

  // Se ainda houver próxima pergunta, mostra o botão "Próxima Pergunta"
  if (currentQuestionIndex < currentQuestions.length - 1) {
    document.getElementById('next-btn').textContent = "Próxima Pergunta";
    document.getElementById('next-btn').style.display = 'inline-block';
  } else {
    // Se era a última pergunta da matéria, mostra o botão "Finalizar"
    document.getElementById('next-btn').textContent = "Finalizar";
    document.getElementById('next-btn').style.display = 'inline-block';
  }
}

/**
 * Avança para a próxima questão ou finaliza o quiz da matéria atual se não houver mais perguntas.
 */
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    // Carrega a próxima pergunta
    loadQuestion(currentQuestionIndex);
  } else {
    // Não há mais perguntas na matéria atual - finaliza quiz desta disciplina
    document.getElementById('question-explanation').style.display = 'none';
    document.getElementById('question-text').style.display = 'none';
    document.getElementById('options-list').style.display = 'none';
    document.getElementById('check-btn').style.display = 'none';
    // Atualiza a mensagem de feedback para indicar conclusão
    document.getElementById('result-text').textContent = "Fim da revisão de " + subjects[currentSubject].title + "!";
    document.getElementById('result-text').style.color = "#333";
    document.getElementById('answer-explanation').textContent = "Você concluiu todos os exercícios desta disciplina. Selecione outra matéria no menu para continuar revisando.";
    // Esconde o botão Próxima/Finalizar (já estamos no fim)
    document.getElementById('next-btn').style.display = 'none';
    // Garante que a área de feedback esteja visível mostrando a mensagem final
    document.getElementById('feedback').style.display = 'block';
  }
}
