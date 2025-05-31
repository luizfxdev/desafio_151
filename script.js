// Função para encontrar o padrão repetido na string
function findRepeatedPattern(encodedMessage) {
    const n = encodedMessage.length;
    
    // Verifica todos os possíveis tamanhos de padrão
    for (let i = 1; i <= n / 2; i++) {
        // Se o comprimento total não for divisível pelo tamanho do padrão, pula
        if (n % i !== 0) continue;
        
        const pattern = encodedMessage.substring(0, i);
        let isValid = true;
        
        // Verifica se o padrão se repete por toda a string
        for (let j = i; j < n; j += i) {
            const nextSegment = encodedMessage.substring(j, j + i);
            if (nextSegment !== pattern) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            return pattern;
        }
    }
    
    // Se nenhum padrão for encontrado, retorna a própria string
    return encodedMessage;
}

// Função para processar a mensagem quando o botão Revelar é clicado
function handleReveal() {
    const inputElement = document.getElementById('messageInput');
    const resultElement = document.getElementById('resultOutput');
    
    const encodedMessage = inputElement.value.trim();
    
    if (!encodedMessage) {
        resultElement.textContent = 'Por favor, insira uma mensagem codificada.';
        return;
    }
    
    const originalMessage = findRepeatedPattern(encodedMessage);
    resultElement.textContent = originalMessage;
}

// Função para resetar o input e resultado quando o botão Retornar é clicado
function handleReturn() {
    document.getElementById('messageInput').value = '';
    document.getElementById('resultOutput').textContent = '';
}

// Adiciona event listeners aos botões
document.getElementById('revealBtn').addEventListener('click', handleReveal);
document.getElementById('returnBtn').addEventListener('click', handleReturn);

// Permite pressionar Enter no input para ativar o botão Revelar
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleReveal();
    }
});