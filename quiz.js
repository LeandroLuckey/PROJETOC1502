// Perguntas e respostas do quiz
const perguntas = [
    {
        pergunta: "Quando nos conhecemos?",
        respostas: ["29/11/2024", "01/12/2024", "02/12/2024", "30/11/2024"],
        correta: 3
    },
    {
        pergunta: "Qual foi o primeiro presentinho que te dei?",
        respostas: ["Terço lilaszinho de Ns de Guadalupe", "Chaveiro e Chocolatinho", "Camisa", "Esmaltess"],
        correta: 1
    },
    {
        pergunta: "Quem é a mulher mais linda desse mundo??",
        respostas: ["MINHA CATINHA", "essa tá errada", "só existe uma opção MUAHAHAHA", "ACEITE OS FATOS MUAHAHAHA"],
        correta: 0
    }
];

// Variáveis para controle
let perguntaAtual = 0;
let pontuacao = 0;

// Função para exibir a pergunta
function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('pergunta').innerText = pergunta.pergunta;

    // Exibe as opções de resposta
    const opcoes = document.getElementById('opcoes');
    opcoes.innerHTML = ''; // Limpa opções anteriores
    pergunta.respostas.forEach((resposta, index) => {
        const li = document.createElement('li');
        li.textContent = resposta;
        li.onclick = () => verificarResposta(index, li);
        opcoes.appendChild(li);
    });

    // Atualiza a pontuação no display (se desejar mostrar durante o quiz)
    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;
}

// Função para verificar a resposta
function verificarResposta(respostaEscolhida, elemento) {
    const pergunta = perguntas[perguntaAtual];

    // Verifica se a resposta está correta e atualiza a pontuação ANTES de avançar
    if (respostaEscolhida === pergunta.correta) {
        pontuacao++; // Incrementa a pontuação antes de mudar de pergunta
        elemento.classList.add('correct'); // Adiciona a classe verde
    } else {
        elemento.classList.add('incorrect'); // Adiciona a classe vermelha

        // Destaca a resposta correta automaticamente
        const opcoes = document.querySelectorAll('#opcoes li');
        opcoes[pergunta.correta].classList.add('correct'); 
    }

    // Atualiza a pontuação na tela imediatamente
    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;

    // Aguarda 1 segundo antes de passar para a próxima pergunta ou finalizar o quiz
    setTimeout(() => {
        if (perguntaAtual === perguntas.length - 1) {
            exibirResultado(); // Exibe o resultado final se for a última pergunta
        } else {
            perguntaAtual++;
            mostrarPergunta(); // Exibe a próxima pergunta
        }
    }, 1000);
}

// Função para exibir o resultado final
function exibirResultado() {
    document.getElementById('quiz-container').innerHTML = `
        <h2>Você acertou ${pontuacao} de ${perguntas.length} perguntas!</h2>
        <button onclick="reiniciarQuiz()">Reiniciar Quiz</button>
    `;
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    document.getElementById('quiz-container').innerHTML = `
        <h2 id="pergunta"></h2>
        <ul id="opcoes"></ul>
        <p id="pontuacao">Pontuação: 0</p>
    `;
    mostrarPergunta();
}

// Inicializa o quiz
mostrarPergunta();
