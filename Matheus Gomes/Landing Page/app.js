const hamburger = document.querySelector('hamburguer');
const nav = document.querySelector('.nav');
const anchorText = document.querySelectorAll('.nav a');

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("open");
});