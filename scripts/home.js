function entrar() {
    setTimeout(() => {
        window.location.href = './page2/portfolio.html'
    }, 1000);
}

const main = document.querySelector('main');
function transicao() {
    main.classList.add('fadeout');
}