const body = document.querySelector('body');
const toggle = document.getElementById('toggle-box');
const circle = document.getElementById('circle');
const main = document.getElementById('main-');
const card = document.getElementById('card');
const text = document.getElementById('text-1');
const imagen = document.getElementById('imagen')
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    circle.classList.toggle('active')
    main.classList.toggle('active')
    card.classList.toggle('active')
    text.classList.toggle('active')
    imagen.classList.toggle('active')
};