const body = document.querySelector('body');
const main = document.querySelector('main');

main.classList.add('fadeIn');
main.style.display = 'block'

function createStar() {
    let size = definirTamanho();
    console.log(size)
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDelay = Math.random() * 5 + 's';
    body.appendChild(star);
}

for (let i = 0; i < 200; i++) {
    createStar();
}

function definirTamanho() {
    let size = 0
    do {
        size = Math.random() * 4;
    } while (size == 0);
    return size;
}