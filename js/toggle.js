const body = document.querySelector('body');
const toggle = document.getElementById('toggle-box');
const circle = document.getElementById('circle');
const main = document.getElementById('main-');
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    circle.classList.toggle('active')
    main.classList.toggle('active')
};