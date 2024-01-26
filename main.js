const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Nav Show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })


if(navClose) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})