const body = document.querySelector('body');
const toggle = document.getElementById('toggle-box');
const circle = document.getElementById('circle');
const main = document.getElementById('main-');
const card = document.getElementById('card');
const text = document.getElementById('text-1');
const imagen = document.getElementById('imagen')

toggle.onclick = function(){
if (typeof(Storage) !== "undefined") {
    // LocalStorage disponible
    console.log(Storage);
    //asignar elementos:
    let cookies =["toggle-box", "body", "circle", "main-"];
    //localStorage.setItem("cookies", cookies);
    localStorage.setItem("cookies", JSON.stringify(cookies));
    //leer elementos almacenados
    let cookiesalmacenadas1 = JSON.parse(localStorage.getItem("cookies"));
    console.log(cookiesalmacenadas1);
    //console.log(localStorage.getItem("cookies1"));

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
};