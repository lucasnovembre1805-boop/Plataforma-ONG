// js/spa.js

// 1. Defina os Templates (Conteúdo das "Páginas")
// No seu projeto, você pode carregar o conteúdo dos arquivos .html aqui
const templates = {
    '/': '<h2>Página Inicial da ONG</h2><p>Conteúdo principal.</p>',
    '#projetos': '<h2>Nossos Projetos</h2><p>Aqui estarão os cards de projetos.</p>',
    '#cadastro': '<h2>Cadastre-se e Contribua</h2><p>Aqui estará o formulário com validação.</p>'
    // Para a entrega, você pode mover o HTML de projetos.html e cadastro.html para cá.
};

const root = document.getElementById('app-root');

// 2. Função de Roteamento
function router() {
    const hash = window.location.hash || '/';
    const content = templates[hash] || '<h2>404</h2><p>Página não encontrada.</p>';
    
    // Atualiza o DOM (o conteúdo dentro do <main>)
    root.innerHTML = content; 
}

// 3. Escuta de Eventos
// Quando o hash da URL mudar (o usuário clica em um link com href="#projetos")
window.addEventListener('hashchange', router);

// Carrega o conteúdo inicial
window.addEventListener('load', router); 