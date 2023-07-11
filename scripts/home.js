const main = document.querySelector('main');
const buttons = document.querySelectorAll('.buttons')
const animation = document.createElement('style')
document.head.appendChild(animation)

// pagina about me
const aboutMe = document.querySelector('.about-me')
const voltarAboutMe = document.querySelector('.voltarAboutMe')

// pagina projects
const divProjects = document.querySelector('.projects')
const projects = document.querySelector('#works')
const divVideos = document.querySelector('#videos')
const voltarProject = document.querySelector('.voltarProject')
carregarProjetos()
carregarVideos()

const button1 = buttons[0]
const button2 = buttons[1]
const button3 = buttons[2]
button1.addEventListener('click', () => {
    main.style.animation = 'fade-out .5s ease-out'   
    main.style.animationFillMode = 'both'
    
    aboutMe.style.display = 'flex'
    aboutMe.style.animation = 'fade-in 1s'
})

button2.addEventListener('click', () => {
    main.style.animation = 'fade-out .5s ease-out'   
    main.style.animationFillMode = 'both'

    divProjects.style.display = 'flex'
    divProjects.style.animation = 'fade-in 1s'
})

button3.addEventListener('click', () => {
    alert('clicado na button 3')
})

voltarAboutMe.addEventListener('click', () => {
    aboutMe.style.animation = 'fade-out .5s ease-out'
    setTimeout(() => {aboutMe.style.display = 'none'}, 450)

    main.style.animation = 'fade-in .5s ease-in'   
})

voltarProject.addEventListener('click', () => {
    divProjects.style.animation = 'fade-out .5s ease-out'
    setTimeout(() => {divProjects.style.display = 'none'}, 450)

    main.style.animation = 'fade-in .5s ease-in'
})

function carregarProjetos() {
    projetos.forEach(projeto => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <a target="_blank" href="${projeto.link}"
            <h1 class="projetoTitulo">${projeto.titulo}</h1>
            <img src="${projeto.imagem}" class="projetoImagem"
            <p class="projetoDescricao">${projeto.descricao}</p>
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
        <a target="_blank" href="${video.link}"
            <h1 class="projetoTitulo">${video.titulo}</h1>
            <img src="${video.imagem}" class="projetoImagem"
            <p class="projetoDescricao">${video.descricao}</p>
        </a>
        `
        divVideos.appendChild(card)
    })
}