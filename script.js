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
    document.getElementById('btn-quiz').onclick = function() {
        window.location.href = 'quiz.html';
    }
    
    document.getElementById('btn-forca').onclick = function() {
        window.location.href = 'forca.html';
    }
    
});








document.addEventListener('DOMContentLoaded', function() {
    carregarCartinhas(); // Carregar as cartinhas salvas ao carregar a página
});

// Função para enviar uma cartinha
function enviarCartinha() {
    const textoCartinha = document.getElementById('texto-cartinha').value;
    const imagemCartinha = document.getElementById('imagem-cartinha').files[0];

    if (textoCartinha.trim() === "") {
        alert("Você precisa escrever uma cartinha primeiro!");
        return;
    }

    // Criar o item da cartinha
    const cartinhaItem = document.createElement('li');
    cartinhaItem.classList.add('cartinha-item');

    // Se houver uma imagem, mostrar junto com o texto
    let imagemHTML = '';
    if (imagemCartinha) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagemHTML = `<img src="${e.target.result}" alt="Imagem da cartinha">`;
            adicionarCartinha(textoCartinha, imagemHTML);
        };
        reader.readAsDataURL(imagemCartinha);
    } else {
        adicionarCartinha(textoCartinha, imagemHTML);
    }

    // Limpar a caixa de texto e o campo de imagem após enviar
    document.getElementById('texto-cartinha').value = '';
    document.getElementById('imagem-cartinha').value = '';
}

// Função para adicionar a cartinha à lista e ao localStorage
function adicionarCartinha(texto, imagemHTML) {
    const listaCartinhas = document.getElementById('lista-cartinhas');
    const cartinhaItem = document.createElement('li');
    cartinhaItem.classList.add('cartinha-item');

    // Adicionar texto e imagem
    cartinhaItem.innerHTML = `<p>${texto}</p>${imagemHTML}`;

    // Adicionar botão de excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('botao-excluir');
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function() {
        excluirCartinha(cartinhaItem);
    };

    cartinhaItem.appendChild(botaoExcluir);
    listaCartinhas.appendChild(cartinhaItem);

    // Salvar as cartinhas no localStorage
    salvarCartinhas();
}

// Função para excluir uma cartinha
function excluirCartinha(cartinhaItem) {
    cartinhaItem.remove(); // Remover a cartinha da lista
    salvarCartinhas(); // Atualizar o localStorage
}

// Função para salvar as cartinhas no localStorage
function salvarCartinhas() {
    const listaCartinhas = document.getElementById('lista-cartinhas').innerHTML;
    localStorage.setItem('cartinhas', listaCartinhas);
}

// Função para carregar as cartinhas salvas no localStorage
function carregarCartinhas() {
    const cartinhasSalvas = localStorage.getItem('cartinhas');
    if (cartinhasSalvas) {
        document.getElementById('lista-cartinhas').innerHTML = cartinhasSalvas;

        // Adicionar eventos de excluir para as cartinhas já salvas
        const cartinhas = document.querySelectorAll('.cartinha-item');
        cartinhas.forEach(cartinha => {
            const botaoExcluir = cartinha.querySelector('.botao-excluir');
            if (botaoExcluir) {
                botaoExcluir.addEventListener('click', function() {
                    excluirCartinha(cartinha);
                });
            }
        });
    }

    
}
