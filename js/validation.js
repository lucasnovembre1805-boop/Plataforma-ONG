// js/validation.js

const form = document.getElementById('cadastroForm'); // Adicione id="cadastroForm" no seu HTML

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const alertContainer = document.getElementById('alert-message'); // Elemento para mostrar o erro

    let hasError = false;
    let errorMessage = '';

    // 1. Verificação de Preenchimento (Não vazio)
    if (nome === '' || email === '') {
        hasError = true;
        errorMessage += 'Por favor, preencha todos os campos obrigatórios.<br>';
    }

    // 2. Verificação de Consistência (Formato do Email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && !emailRegex.test(email)) {
        hasError = true;
        errorMessage += 'O endereço de e-mail é inválido.<br>';
    }
    
    // ... Adicionar mais verificações (Ex: CPF com 11 dígitos, Senha > 8 caracteres) ...

    // 3. Aviso ao Usuário (Manipulação do DOM)
    if (hasError) {
        // Usa o componente CSS 'alert-danger' criado na Entrega II
        alertContainer.innerHTML = `<div class="alert alert-danger">${errorMessage}</div>`; 
    } else {
        // Sucesso: Simula envio e limpa o formulário
        alertContainer.innerHTML = '<div class="alert alert-success">Formulário enviado com sucesso!</div>';
        form.reset();
    }
});
