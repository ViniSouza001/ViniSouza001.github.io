const main = document.querySelector('main');
const buttons = document.querySelectorAll('.buttons')
const animation = document.createElement('style')
document.head.appendChild(animation)
const entrada = document.querySelector('.entrada')
const voltar = document.querySelectorAll('.voltar')

// sumir com a animação inicial
setTimeout(() => {
    if (entrada.parentNode) {
        entrada.parentNode.removeChild(entrada)
    }
}, 4500)

// pagina about me
const aboutMe = document.querySelector('.about-me')

// pagina projects
const divProjects = document.querySelector('.projects')
const projects = document.querySelector('#works')
const divVideos = document.querySelector('#videos')
carregarProjetos()
carregarVideos()

// pagina curriculum
const curriculum = document.querySelector('.curriculum')

const button1 = buttons[0]
const button2 = buttons[1]
const button3 = buttons[2]

button1.addEventListener('click', async () => {
    await addAnimation('to-left', main, '1s', '', 'both')

    setTimeout(() => {
        aboutMe.style.display = 'flex'
        addAnimation('appear-to-right', aboutMe, '1.1s', '', 'both')
    }, 150);

    setTimeout(() => {
        main.style.display = 'none'
    }, 800)
})

button2.addEventListener('click', async () => {
    await addAnimation('to-right', main, '1s', '', 'both')

    setTimeout(() => {
        divProjects.style.display = 'flex'
        addAnimation('appear-to-left', divProjects, '1.1s', '', 'both')
    }, 150);

    setTimeout(() => {
        main.style.display = 'none'
    }, 800)
})

button3.addEventListener('click', async () => {
    await addAnimation('to-left', main, '1s', '', 'both')

    setTimeout(() => {
        curriculum.style.display = 'flex'
        addAnimation('appear-to-right', curriculum, '1.1s', '', 'both')
    }, 150);

    setTimeout(() => {
        main.style.display = 'none'
    }, 800)
})

// voltar <=

const backToRight1 = () => {
    addAnimation('to-right', aboutMe, '1s', 'ease-out', 'both')

    setTimeout(() => {
        main.style.display = 'flex'
        addAnimation("appear-to-left", main, '1.2s', '', 'both')
    }, 100)

    setTimeout(() => {
        aboutMe.style.display = 'none'
        curriculum.style.display = 'none'
    }, 800)
}

const backToRight2 = () => {
    addAnimation('to-right', curriculum, '1s', 'ease-out', 'both')

    setTimeout(() => {
        main.style.display = 'flex'
        addAnimation("appear-to-left", main, '1.2s', '', 'both')
    }, 100)

    setTimeout(() => {
        aboutMe.style.display = 'none'
        curriculum.style.display = 'none'
    }, 800)
}

const backToLeft = () => {
    addAnimation('to-left', divProjects, '1s', 'ease-out', 'both')

    setTimeout(() => {
        main.style.display = 'flex'
        addAnimation("appear-to-right", main, '1.2s', '', 'both')
    }, 100)

    setTimeout(() => {
        divProjects.style.display = 'none'
    }, 800)
}

voltar[0].addEventListener('click', backToRight1)
voltar[1].addEventListener('click', backToLeft)
voltar[2].addEventListener('click', backToRight2)



// voltar.forEach((botao) => {
//     botao.addEventListener('click', () => {
//         aboutMe.style.animation = 'fade-out .5s ease-out'
//         setTimeout(() => { aboutMe.style.display = 'none' }, 450)

//         divProjects.style.animation = 'fade-out .5s ease-out'
//         setTimeout(() => { divProjects.style.display = 'none' }, 450)

//         curriculum.style.animation = 'fade-out .5s ease-out'
//         setTimeout(() => { curriculum.style.display = 'none' }, 450)

//         main.style.animation = 'fade-in .5s ease-in'
//     })
// })

function carregarProjetos() {
    projetos.forEach(projeto => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <a target="_blank" href="${ projeto.linkProj }"
            <h1 class="projetoTitulo">${ projeto.titulo }</h1>
            <img src="${ projeto.imagem }" class="projetoImagem" />
            <p class="projetoDescricao">${ projeto.descricao }</p>
        </a>
        <hr>
        <a class="btnProjs" target="_blank" href="${ projeto.linkGit }">
            Project on Github
        </a>
        `
        projects.appendChild(card)
    })
}

function carregarVideos() {
    videos.forEach(video => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <a target="_blank" href="${ video.link }"
            <h1 class="projetoTitulo">${ video.titulo }</h1>
            <img src="${ video.imagem }" class="projetoImagem"
            <p class="projetoDescricao">${ video.descricao }</p>
        </a>
        `
        divVideos.appendChild(card)
    })
}

async function addAnimation(name, element, time, ease, fillMode) {
    element.style.animation = `${ name } ${ time } ${ ease } ${ fillMode }`
}