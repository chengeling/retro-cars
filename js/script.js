const hamburger = document.querySelector('.header__navigation-hamburger');
const nav = document.querySelector('.header__navigation');

const toggleClass = () => {
    nav.classList.toggle('header__navigation--open')
}

hamburger.addEventListener('click', toggleClass)
nav.addEventListener('click', toggleClass)

AOS.init({
    offset: 200,
    duration: 600
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('header--sticky');
    } else if (window.scrollY == 0) {
        header.classList.remove('header--sticky');
    }
});