document.addEventListener('DOMContentLoaded', function() {
    const boasVindas = document.querySelector('.boas-vindas');
    const sectionOpcoes = document.querySelector('.section-opcoes');
    const botaoProx = document.querySelector('.botao-prox');
    const textoExplicativo = document.querySelector('.texto-explicativo');
    const linhaDoTempo = document.querySelector('.linha-do-tempo'); // Corrigido aqui

    botaoProx.addEventListener('click', function() {
        boasVindas.style.opacity = 0;
        botaoProx.style.opacity = 0;

        setTimeout(() => {
            boasVindas.style.display = 'none';
            botaoProx.style.display = 'none';
            sectionOpcoes.style.display = 'block';
            sectionOpcoes.style.opacity = 1;
        }, 1000);
    });

    const btnLinhaDoTempo = document.querySelector('.opcao-btn:nth-child(1)');
    const btnCartinhas = document.querySelector('.opcao-btn:nth-child(2)');
    const btnPlaylist = document.querySelector('.opcao-btn:nth-child(3)');
    const btnJoguinhos = document.querySelector('.opcao-btn:nth-child(4)');

    btnLinhaDoTempo.addEventListener('click', function () {
        window.location.href = 'linha-do-tempo.html'; 
    });
    
    btnCartinhas.addEventListener('click', function () {
        window.location.href = 'cartinhas.html';  
    });

    btnPlaylist.addEventListener('click', function () {
        window.location.href = 'playlist.html'; 
    });

    btnJoguinhos.addEventListener('click', function () {
        window.location.href = 'joguinhos.html'; 
    });
});


