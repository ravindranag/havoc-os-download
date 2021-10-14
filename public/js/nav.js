const gear = document.querySelector('#gear');
const menu = document.querySelector('#nav-menu');
const close = document.querySelector('.nav-close');

gear.addEventListener('click', () => {
    menu.classList.toggle('nav-menu--open');
});

close.addEventListener('click', () => {
    menu.classList.toggle('nav-menu--open');
});