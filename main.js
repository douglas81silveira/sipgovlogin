addEventListener("load", function () {
    const botao = document.querySelector('.btn-gov-br');
    if (botao) {
        botao.style.display = 'block';
    } else {
        console.log('Plugin: Botão não encontrado.');
    }
});