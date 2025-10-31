// js/templates.js

/**
 * Cria o HTML de um Card de Projeto
 * @param {object} projeto - Objeto com dados do projeto (nome, descricao, status)
 * @returns {string} HTML do card
 */
export function createProjectCard(Projeto) {
    const statusClass = projeto.status === 'ativo' ? 'tag-status-active' : 'badge-urgente';
    
    return `
        <article class="project-card">
            <div class="card-image">[Imagem de ${projeto.nome}]</div>
            <div class="card-content">
                <h3 class="card-title">${projeto.nome}</h3>
                <p class="card-description">${projeto.descricao}</p>
                <div class="card-footer">
                    <span class="badge ${statusClass}">${projeto.status.toUpperCase()}</span>
                    <a href="#" class="btn btn-secondary">Detalhes</a>
                </div>
            </div>
        </article>
    `;
}

// Exemplo de uso no main.js
// const projetosData = [{nome: 'Água Limpa', descricao: '...', status: 'ativo'}];
// let htmlContent = projetosData.map(p => createProjectCard(p)).join('');
