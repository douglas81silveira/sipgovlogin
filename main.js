console.log('iniciando sip2gov');

setTimeout(() => {
    console.log('load');
    
    const button = document.querySelector('.btn-gov-br');

    if (button) {
        button.style.display = 'block';
        console.log('O botão .GOV.BR apareceu!');
    } else {
        console.log('O botão .GOV.BR não apareceu!');
    }
}, 500);

console.log('encerrando sip2gov');