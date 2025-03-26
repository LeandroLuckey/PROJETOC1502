// Perguntas e respostas do quiz
const perguntas = [
    {
        pergunta: "Qual é a cor favorita de você?",
        respostas: ["Azul", "Rosa", "Verde", "Amarelo"],
        correta: 1 // índice da resposta correta (Rosa)
    },
    {
        pergunta: "Qual é o nosso filme favorito?",
        respostas: ["A Procura da Felicidade", "O Rei Leão", "Vingadores", "Titanic"],
        correta: 2 // índice da resposta correta (Vingadores)
    },
    {
        pergunta: "Onde foi o nosso primeiro encontro?",
        respostas: ["Praia", "Restaurante", "Cinema", "Parque"],
        correta: 0 // índice da resposta correta (Praia)
    }
];

// Variáveis para controlar o quiz
let perguntaAtual = 0;
let pontuacao = 0;

// Função para exibir a próxima pergunta
function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('pergunta').innerText = pergunta.pergunta;
    
    // Exibe as opções de resposta
    const opcoes = document.getElementById('opcoes');
    opcoes.innerHTML = ''; // Limpa as opções anteriores
    pergunta.respostas.forEach((resposta, index) => {
        const li = document.createElement('li');
        li.textContent = resposta;
        li.onclick = () => verificarResposta(index);
        opcoes.appendChild(li);
    });
}

// Função para verificar a resposta
function verificarResposta(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    
    // Verifica se a resposta está correta
    if (respostaEscolhida === pergunta.correta) {
        pontuacao++;
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        exibirResultado();
    }
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
    mostrarPergunta();
}

// Inicializa o quiz
mostrarPergunta();
