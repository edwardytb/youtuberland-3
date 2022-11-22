const body = document.querySelector('body');
const toggle = document.getElementById('toggle-box');
const circle = document.getElementById('circle');
const fondo = document.getElementById('fondo');
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    circle.classList.toggle('active')
    fondo.classList.toggle('active')
}