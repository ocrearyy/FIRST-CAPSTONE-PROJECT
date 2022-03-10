const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#menu-popup');
const navIcon = document.querySelectorAll('.navIcon');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    })
}

)