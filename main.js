const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Menu Show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu Hide
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')  
})
}



// ===================== REMOVE MENU MOBILE ================================

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on eah nav__link, we remove the show-menu close
    navMenu.classList.remove('show-menu')
    }

navLink.forEach(n => n.addEventListener('click', linkAction))


// ===========================ADD BLUR HEADER ==============================
const blurHeader = () => {
    const header = document.getElementById("header")
    // When the scroll is greater than 50 viewport height, add the blur header
    // this.screenY >= 50 ? header.classList.add('blur_header')
    //                    : header.classList.remove('blur_header')
    header.classList.add('blur_header')
}

window.addEventListener('scroll', blurHeader)

// ===========================ADD SCROLL up ==============================
const scrollUp = () => {
    const scroll = document.getElementById("scroll-up")
    // When the scroll is greater than 50 viewport height, add the blur header
    window.screenY >= 350 ? scroll.classList.add('show-scroll') : scroll.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)