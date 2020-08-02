$(document).ready(() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    $('.logo').addClass('animate__animated animate__bounceInRight');

    burger.addEventListener('click', () => {

        // TOGGLE NAV
        nav.classList.toggle('nav-active');

        // TOGGLE BURGER ICON
        burger.classList.toggle('burger-toggle');

        //CUSTOM LINK ANIMATION
        let delay = 0;
        navLinks.forEach(link => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.3s ease-in-out forwards ${delay}s`;
            }
            delay += 0.2;
        })

        // USING ANIMATE.CSS
        // navLinks.forEach(link =>{
        //     link.classList.toggle('animate__animated');
        //     link.classList.toggle('animate__bounceInLeft');
        // })


    })
})


