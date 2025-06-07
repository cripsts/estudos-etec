//
// Arquivo: script.js
// Descrição: Contém códigos JavaScript para adicionar interatividade ao portal educacional.
// Inclui funcionalidade para quizzes de múltipla escolha, cálculo de fatorial, mudança de cor de elemento, conversão de decimal para binário e simulação de LED ligado/desligado.
// As interações tornam o aprendizado mais dinâmico e permitem aos alunos verificar respostas e visualizar conceitos em ação.
//

// Funções de suporte e configuração de eventos

// 1. Funcionalidade de Quiz de múltipla escolha
// Selecionamos todos os botões de verificação dos quizzes (marcados com a classe 'quiz-btn') e adicionamos um evento de clique para cada um.
document.querySelectorAll('.quiz-btn').forEach(function(botaoQuiz) {
    botaoQuiz.addEventListener('click', function() {
        // Obtém os atributos data-* do botão para identificar o quiz, a resposta correta e o elemento de resultado
        var nomeQuiz = this.dataset.quiz;
        var respostaCorreta = this.dataset.answer;
        var idResultado = this.dataset.result;
        // Seleciona a opção marcada (se houver) com base no nome do quiz (atributo name dos inputs)
        var opcaoMarcada = document.querySelector('input[name="' + nomeQuiz + '"]:checked');
        var elementoResultado = document.getElementById(idResultado);
        if (!opcaoMarcada) {
            // Se nenhuma opção foi selecionada, instruímos o usuário a selecionar uma
            elementoResultado.innerText = 'Por favor, selecione uma opção.';
            elementoResultado.classList.remove('correct', 'incorrect');
        } else {
            // Compara o valor da opção selecionada com a resposta correta
            if (opcaoMarcada.value === respostaCorreta) {
                elementoResultado.innerText = 'Correto!';
                // Aplica classe de estilo para resposta correta
                elementoResultado.classList.add('correct');
                elementoResultado.classList.remove('incorrect');
            } else {
                elementoResultado.innerText = 'Incorreto.';
                // Aplica classe de estilo para resposta incorreta
                elementoResultado.classList.add('incorrect');
                elementoResultado.classList.remove('correct');
            }
        }
    });
});

// 2. Cálculo de Fatorial
// Adiciona evento de clique ao botão de calcular fatorial. Quando clicado, lê o número de entrada e calcula o fatorial.
var botaoFatorial = document.getElementById('btnFatorial');
if (botaoFatorial) {
    botaoFatorial.addEventListener('click', function() {
        var entrada = document.getElementById('numFatorial');
        var saida = document.getElementById('resFatorial');
        // Garante que entrada exista e saída com sucesso
        if (!entrada || !saida) return;
        var num = parseInt(entrada.value);
        if (isNaN(num) || num < 0) {
            // Valor inválido: número não especificado ou negativo
            saida.innerText = 'Por favor, insira um número inteiro não-negativo.';
        } else {
            var fatorial = 1;
            for (var i = 1; i <= num; i++) {
                fatorial *= i;
            }
            // Exibe o resultado do fatorial no span de saída
            // Exemplo: se num = 5, resultado = 120 (5! = 5 x 4 x 3 x 2 x 1)
            saida.innerText = fatorial;
        }
    });
}

// 3. Mudar cor de elemento (Desenvolvimento Web)
// Botão que alterna a classe de destaque em um elemento de demonstração, mudando sua cor de fundo.
var botaoCor = document.getElementById('btnCor');
if (botaoCor) {
    botaoCor.addEventListener('click', function() {
        var caixa = document.getElementById('caixaDemo');
        if (caixa) {
            // Alterna a classe 'destacado' para mudar a cor de fundo via CSS
            caixa.classList.toggle('destacado');
        }
    });
}

// 4. Conversão de número decimal para binário (Fundamentos & Infra)
// Quando o usuário clica em 'Converter', lemos o valor decimal e exibimos a representação binária.
var botaoConverter = document.getElementById('btnConverter');
if (botaoConverter) {
    botaoConverter.addEventListener('click', function() {
        var campoDecimal = document.getElementById('numDecimal');
        var saidaBinario = document.getElementById('resBinario');
        if (!campoDecimal || !saidaBinario) return;
        var dec = parseInt(campoDecimal.value);
        if (isNaN(dec)) {
            saidaBinario.innerText = 'Por favor, insira um número decimal.';
        } else {
            // Converte o decimal para binário usando toString(2)
            // Exemplo: 10 (dec) -> '1010' (bin)
            var binario = dec.toString(2);
            saidaBinario.innerText = binario;
        }
    });
}

// 5. Simulador de LED (Sistemas Embarcados)
// Botão que alterna o estado de um 'LED' simulado na tela mudando a cor de um elemento .led.
var botaoLed = document.getElementById('btnLed');
if (botaoLed) {
    botaoLed.addEventListener('click', function() {
        var ledElem = document.getElementById('led');
        if (ledElem) {
            // Alterna a classe 'on' no elemento LED para ligar/desligar a luz (cor do LED)
            ledElem.classList.toggle('on');
        }
    });
}

/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
*/
