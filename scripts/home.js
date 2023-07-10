const main = document.querySelector('main');
const buttons = document.querySelectorAll('.buttons')
const animation = document.createElement('style')
document.head.appendChild(animation)
// pagina sobre mim
const aboutMe = document.querySelector('.about-me')
const voltar = document.querySelector('.voltar')


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
    alert('clicado na button 2')
})

button3.addEventListener('click', () => {
    alert('clicado na button 3')
})

voltar.addEventListener('click', () => {
    aboutMe.style.animation = 'fade-out .5s ease-out'
    aboutMe.style.display = 'none'

    main.style.animation = 'fade-in .5s ease-in'   
    
})