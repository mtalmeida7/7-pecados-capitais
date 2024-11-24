// OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// Passo 1 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles.
const personagens = document.querySelectorAll('.personagem');

// Passo 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');

        // Verifica se existe algum personagem selecionado antes de tentar remover
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove('selecionado');
        }

        // Adicionar a classe selecionado no personagem atual
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        // Passo 1 - Pegar o elemento do personagem grande para adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Passo 2 - Alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.webp`;

        // Passo 3 - Alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 4 - Alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    });
});

// Script para alternar entre tema claro e escuro
const toggleButton = document.getElementById('theme-toggle');

// Função para alternar o tema
function toggleTheme() {
    // Alterna a classe 'light-theme'
    document.body.classList.toggle('light-theme');
    
    // Salva a escolha do tema no localStorage
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
}

// Verifica se o tema foi salvo no localStorage e aplica
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
});

// Adiciona o evento de alternância de tema ao botão
toggleButton.addEventListener('click', toggleTheme);
