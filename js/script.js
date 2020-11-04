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