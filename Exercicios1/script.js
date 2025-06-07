/*
 * Script de funcionalidades interativas do site de revisão intensiva.
 * Contém simulação de consultas SQL, cálculo algorítmico (fatorial),
 * manipulação dinâmica de estilo (mudança de cor de texto),
 * verificação de respostas de quizzes e funcionalidade de flashcards.
 */
// Funções de interatividade e manipulação de DOM

// ----- Dados de exemplo para simulação de banco de dados -----
const Alunos = [
    { id: 1, nome: "Alice", idade: 23, curso_id: 1 },
    { id: 2, nome: "Bruno", idade: 21, curso_id: 2 },
    { id: 3, nome: "Carla", idade: 22, curso_id: 1 },
    { id: 4, nome: "Daniel", idade: 20, curso_id: 2 },
    { id: 5, nome: "Eduarda", idade: 23, curso_id: 1 },
    { id: 6, nome: "Fabio", idade: 25, curso_id: 2 },
    { id: 7, nome: "Giovana", idade: 19, curso_id: 1 },
    { id: 8, nome: "Hugo", idade: 24, curso_id: 2 },
    { id: 9, nome: "Isabela", idade: 22, curso_id: 1 },
    { id: 10, nome: "João", idade: 21, curso_id: 2 }
];
const Cursos = [
    { id: 1, nome: "Informática" },
    { id: 2, nome: "Eletrônica" },
    { id: 3, nome: "Administração" }
];

// ----- Função para executar consulta SQL simulada -----
function executarConsulta() {
    const input = document.getElementById("sql-input");
    const outputDiv = document.getElementById("sql-output");
    let query = input.value.trim();
    if (query === "") {
        outputDiv.innerText = ""; // nada para executar
        return;
    }
    // Limpa o output anterior
    outputDiv.innerText = "";
    // Verifica se é um SELECT
    if (!/^SELECT/i.test(query)) {
        outputDiv.innerText = "Simulação: Apenas consultas SELECT são suportadas.";
        return;
    }
    // Caso a consulta inclua JOIN, realizamos junção simples entre tabelas Alunos e Cursos.
    if (/JOIN/i.test(query)) {
        // Simula um join simples entre Alunos e Cursos
        let resultRows = [];
        for (let aluno of Alunos) {
            // encontra curso correspondente
            let curso = Cursos.find(c => c.id === aluno.curso_id);
            if (curso) {
                resultRows.push({ "Alunos.nome": aluno.nome, "Cursos.nome": curso.nome });
            }
        }
        if (resultRows.length === 0) {
            outputDiv.innerText = "Nenhum resultado (verifique nome das tabelas).";
            return;
        }
        // Construir tabela HTML
        let table = document.createElement("table");
        // Cabeçalho
        let header = table.createTHead();
        let headerRow = header.insertRow();
        let headers = ["Alunos.nome", "Cursos.nome"];
        headers.forEach(h => {
            let th = document.createElement("th");
            th.innerText = h;
            headerRow.appendChild(th);
        });
        // Corpo da tabela
        let tbody = table.createTBody();
        resultRows.forEach(row => {
            let tr = tbody.insertRow();
            headers.forEach(col => {
                let td = tr.insertCell();
                td.innerText = row[col] !== undefined ? row[col] : "";
            });
        });
        outputDiv.innerHTML = "";
        outputDiv.appendChild(table);
        return;
    }
    // Caso não haja JOIN, tentamos fazer correspondência com padrão SELECT simples.
    const selectRegex = /SELECT\s+(.+)\s+FROM\s+(\w+)(?:\s+WHERE\s+(.+))?/i;
    const match = selectRegex.exec(query);
    if (!match) {
        // Se a consulta não corresponder ao padrão esperado, avisamos que não foi compreendida.
        outputDiv.innerText = "Consulta não compreendida. Tente um formato: SELECT campos FROM Tabela [WHERE condição].";
        return;
    }
    let fieldsStr = match[1].trim();
    let tableName = match[2];
    let whereClause = match[3] ? match[3].trim() : null;
    let data = null;
    // Verifica qual tabela foi solicitada (Alunos ou Cursos).
    if (/^Alunos$/i.test(tableName)) {
        data = Alunos;
    } else if (/^Cursos$/i.test(tableName)) {
        data = Cursos;
    } else {
        outputDiv.innerText = `Tabela "${tableName}" não encontrada.`;
        return;
    }
    // Determina campos a selecionar
    let fields = [];
    if (fieldsStr === "*") {
        // Se os campos selecionados forem '*', preparamos para retornar todas as colunas.
        if (data.length > 0) {
            fields = Object.keys(data[0]);
        } else {
            fields = [];
        }
    } else {
        // separa por vírgulas os campos
        fields = fieldsStr.split(",").map(f => f.trim());
    }
    // Aplica condição WHERE se houver
    if (whereClause) {
        // Tenta reconhecer condição do tipo campo operador valor (ex: idade > 20).
        const whereRegex = /^(\w+)\s*(=|>|<)\s*'?([\w\d\u00c0-\u017F]+)'?$/i;
        const whereMatch = whereRegex.exec(whereClause);
        if (!whereMatch) {
            outputDiv.innerText = "Cláusula WHERE não suportada. Use formato campo = valor.";
            return;
        }
        let field = whereMatch[1];
        let op = whereMatch[2];
        let valStr = whereMatch[3];
        let valNum = Number(valStr);
        let isNum = !isNaN(valNum);
        // Filtra os dados de acordo com a condição (se suportada).
        filteredData = data.filter(item => {
            if (!(field in item)) {
                return false;
            }
            let itemVal = item[field];
            if (op === "=") {
                // compara como string ou number
                return isNum ? itemVal == valNum : (itemVal + "").toLowerCase() == valStr.toLowerCase();
            } else if (op === ">") {
                return isNum ? itemVal > valNum : itemVal > valStr;
            } else if (op === "<") {
                return isNum ? itemVal < valNum : itemVal < valStr;
            }
            return false;
        });
    } else {
        filteredData = data;
    }
    // Monta resultado em tabela
    if (filteredData.length === 0) {
        // Se nenhum resultado após filtro, informa que não há resultados.
        outputDiv.innerText = "Nenhum resultado.";
        return;
    }
    // Monta um elemento de tabela HTML para exibir o resultado da consulta simulada.
    let table = document.createElement("table");
    // Cabeçalho da tabela
    let header = table.createTHead();
    let headerRow = header.insertRow();
    fields.forEach(col => {
        let th = document.createElement("th");
        th.innerText = col;
        headerRow.appendChild(th);
    });
    // Corpo da tabela
    let tbody = table.createTBody();
    filteredData.forEach(item => {
        let tr = tbody.insertRow();
        fields.forEach(col => {
            let td = tr.insertCell();
            // insere valor do campo se existir
            td.innerText = item[col] !== undefined ? item[col] : "";
        });
    });
    // Limpa e insere a tabela no output
    outputDiv.innerHTML = "";
    outputDiv.appendChild(table);
}

// ----- Função para calcular fatorial de um número fornecido -----
function calcularFatorial() {
    const input = document.getElementById("fact-input");
    const outputDiv = document.getElementById("fact-output");
    const num = parseInt(input.value, 10);
    // Verifica se o valor de entrada é numérico válido.
    if (isNaN(num)) {
        outputDiv.innerText = "Por favor, insira um número válido.";
        return;
    }
    if (num < 0) {
        outputDiv.innerText = "Fatorial não definido para números negativos.";
        return;
    }
    // Limitamos o cálculo para números até 20 para evitar resultados muito grandes.
    if (num > 20) {
        outputDiv.innerText = "Número muito grande! Por favor insira um valor até 20.";
        return;
    }
    // Calcula fatorial iterativamente.
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    outputDiv.innerText = num + "! = " + result;
}

// ----- Função para mudar a cor de um texto de exemplo -----
// (Demonstração de manipulação de estilo via JavaScript)
const colors = ["red", "green", "blue", "orange", "purple", "magenta"];
let colorIndex = 0;
function mudarCor() {
    const text = document.getElementById("demo-text");
    if (!text) return;
    // Alterna para a próxima cor da lista
    colorIndex = (colorIndex + 1) % colors.length;
    text.style.color = colors[colorIndex];
}

// ----- Função genérica para verificar respostas de quizzes -----
// Recebe o nome do grupo de inputs e o valor correto esperado,
// então confere a opção selecionada pelo usuário e exibe feedback.
function verificarQuiz(groupName, correctValue) {
    const selecionado = document.querySelector(`input[name="${groupName}"]:checked`);
    const feedbackDiv = document.getElementById(`quiz-feedback-${groupName}`);
    if (!feedbackDiv) return;
    feedbackDiv.classList.remove("correct", "wrong");
    // Se nenhuma opção foi marcada, pede para selecionar uma.
    if (!selecionado) {
        feedbackDiv.innerText = "Por favor, selecione uma opção.";
        feedbackDiv.classList.add("wrong");
        return;
    }
    const resposta = selecionado.value;
    // Compara a resposta selecionada com o valor correto esperado.
    if (resposta === correctValue) {
        feedbackDiv.innerText = "Correto! Boa!";
        feedbackDiv.classList.add("correct");
    } else {
        feedbackDiv.innerText = "Incorreto. A resposta correta é: " + correctValue + ".";
        feedbackDiv.classList.add("wrong");
    }
}

// ----- Configuração do comportamento do menu responsivo -----
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
        } else {
            navLinks.classList.add("open");
        }
    });
}

// ----- Inicialização dos flashcards (adiciona evento de clique) -----
document.querySelectorAll(".flashcard").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("revealed");
    });
});
