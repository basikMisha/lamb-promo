const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile--open');
    menuBtn.classList.toggle('menu-btn--open');
})