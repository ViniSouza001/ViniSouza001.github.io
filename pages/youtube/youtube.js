const videos = [
    {
        image: '../../assets/fisolofando.png',
        title: 'Fisolofando',
        link: 'https://youtu.be/tbiGlqCiYYk'
    },
    {
        image: '../../assets/faded.png',
        title: 'Edit Faded',
        link: 'https://youtu.be/HuhpTcpFNYQ'
    },
    {
        image: '../../assets/photograph.png',
        title: 'Edit Photograph',
        link: 'https://youtu.be/TkgEAd2W0V4'
    },
    {
        image: '../../assets/bruno_mars.png',
        title: 'Edit Just the way you are',
        link: 'https://youtu.be/bAJqpubWuAA'
    },
    {
        image: '../../assets/blinding_lights.png',
        title: 'Edit Blinding Lights',
        link: 'https://youtu.be/gWDu1GXAgrU'
    },
];


function criarCard(){
    const body = document.querySelector('body');
    var contadorCard = 0;    
    videos.forEach((item) => {
        var main = document.querySelector('main');
        main.appendChild(estilizarCard(item));
        contadorCard++;
    });
}

function estilizarCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${item.link}" target="_blank" >
        <img src="${item.image}" class="img">
    </a>
    <a href="${item.link}" class="txt" target="_blank" >
        <h3>${item.title}</h3>
    </a>
    `
    return card;
}
