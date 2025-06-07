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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
