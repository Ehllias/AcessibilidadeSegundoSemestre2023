function aumentarFonte() {
    const elementosComFonte = document.querySelectorAll('body, body *');
    elementosComFonte.forEach(elemento => {
        let estilo = window.getComputedStyle(elemento);
        let tamanhoAtual = parseFloat(estilo.fontSize);
        elemento.style.fontSize = (tamanhoAtual * 1.2) + 'px'; // Aumenta em 20%
    });
}

function diminuirFonte() {
    const elementosComFonte = document.querySelectorAll('body, body *');
    elementosComFonte.forEach(elemento => {
        let estilo = window.getComputedStyle(elemento);
        let tamanhoAtual = parseFloat(estilo.fontSize);
        elemento.style.fontSize = (tamanhoAtual * 0.8) + 'px'; // Diminui em 20%
    });
}

// Event listeners para os botões
document.getElementById('aumentarZoomBtn').addEventListener('click', aumentarFonte);
document.getElementById('diminuirZoomBtn').addEventListener('click', diminuirFonte);
