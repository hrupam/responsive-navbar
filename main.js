const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {

    // TOGGLE NAV
    nav.classList.toggle('nav-active');

    burger.classList.toggle('burger-toggle');

    // LINK ANIMATION
    let delay=0;
    navLinks.forEach(link => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.7s ease-in-out forwards ${delay}s`;
        }
        delay+=0.2;
    })
})