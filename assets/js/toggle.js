const body = document.querySelector('body');
const toggle = document.getElementById('toggle-box');
const circle = document.getElementById('circle');
const main = document.getElementById('main-');
const card = document.getElementById('card');
const text = document.getElementById('text-1');
const imagen = document.getElementById('imagen')
toggle.onclick = function(){
    //1
    if (typeof(Storage) !== "undefined") {
        //2
        let cookies1 =["toggle", "body", "main", "circle"]
        //localStorage.setItem("cookies1", cookies1);
        localStorage.setItem("cookies1", JSON.stringify(cookies1));
        //leer elementos almacenados
        let cookiesalmacenadas = JSON.parse(localStorage.getItem("cookies1"));
        console.log(cookiesalmacenadas);
        //console.log(localStorage.getItem("cookies1"));
    
    } else {
        alert("LocalStorage no soportado en este navegador");
    }
    //toggle
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    circle.classList.toggle('active')
    main.classList.toggle('active')
    card.classList.toggle('active')
    text.classList.toggle('active')
    imagen.classList.toggle('active')
};