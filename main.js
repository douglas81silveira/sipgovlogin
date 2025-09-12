console.log('iniciando sip2gov');

setTimeout(() => {
    console.log('load');
    
    const button = document.querySelector('.btn-gov-br');

    if (!button) {
        console.log('O botão .GOV.BR não apareceu!');
        return;
    }

    button.style.display = 'block';
    console.log('O botão .GOV.BR apareceu!');
}, 500);
