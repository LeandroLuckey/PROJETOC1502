// Lista de palavras para o jogo
const palavras = ["namorada", "felicidade", "amor", "catolica", "chocomenta", "maravilhosidade", "saudade", "herois", "animais", "crianças", "familia", "JesusCristo"];

// Variáveis do jogo
let palavraEscolhida;
let palavraAtual;
let tentativas;
let letrasErradas;
let jogoFinalizado;

// Função para reiniciar o jogo
function reiniciarJogo() {
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    palavraAtual = Array(palavraEscolhida.length).fill("_"); // Exibe como _ _ _ _ _ _
    tentativas = 6;
    letrasErradas = [];
    jogoFinalizado = false;

    atualizarInterface();
    document.getElementById("resultado").innerText = ""; // Limpar resultado
}

// Atualiza a interface com os dados atuais
function atualizarInterface() {
    document.getElementById("palavra").innerText = palavraAtual.join(" ");
    document.getElementById("tentativas").innerText = tentativas;
    document.getElementById("letrasErradas").innerText = letrasErradas.join(", ");
}

// Verifica a letra inserida
function verificarLetra() {
    if (jogoFinalizado) return;

    const letra = document.getElementById("letra").value.toLowerCase();

    if (!letra || letra.length !== 1) {
        alert("Digite uma letra válida!");
        return;
    }

    if (letrasErradas.includes(letra) || palavraAtual.includes(letra)) {
        alert("Você já tentou essa letra!");
        return;
    }

    let letraEncontrada = false;
    
    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letra) {
            palavraAtual[i] = letra;
            letraEncontrada = true;
        }
    }

    if (!letraEncontrada) {
        letrasErradas.push(letra);
        tentativas--;
    }

    atualizarInterface();

    // Verifica se o jogador ganhou ou perdeu
    if (palavraAtual.join("") === palavraEscolhida) {
        document.getElementById("resultado").innerText = "Você ganhou!";
        jogoFinalizado = true;
    } else if (tentativas === 0) {
        document.getElementById("resultado").innerText = `Você perdeu! A palavra era: ${palavraEscolhida}`;
        jogoFinalizado = true;
    }

    // Limpa o campo de input
    document.getElementById("letra").value = "";
}

// Inicia o jogo
reiniciarJogo();

// Adiciona um evento de clique para reiniciar o jogo
document.getElementById("btn-reiniciar").addEventListener('click', reiniciarJogo);
