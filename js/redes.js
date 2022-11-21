var cargando

//setTimeout(function(){alert("Porfavor espera un momento"); }, 100);
//setTimeout(function(){ alert("cargando.... esto puede demorar"); }, 1100);

function borrar(id) {var elem = document.getElementById(id); return elem.parentNode.removeChild(elem);}

function msj(titulo, contenido, idioma) {
var padre = document.createElement('div');
padre.id = 'modal';
document.body.appendChild(padre);
var bc = idioma ? idioma : 'Aceptar';
var ModalData = document.getElementById("modal");
var boton = "";
ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>'+titulo+'</h3><span id="mc">'+contenido+'</span><div id="buttons"><a id="mclose" href="#">'+bc+'</a>'+boton+'</div></div></div>';
document.querySelector(".modal").style.height = document.getElementById("mc").offsetHeight+100 + 'px';
document.getElementById('mclose').onclick=function(){ borrar('modal'); };
document.getElementById('modal-back').onclick=function(){ borrar('modal'); }
}


//probando la función, creando una alerta
msj('esta pagina dice','Por favor espera un momento.... cargando C:', 'Cerrar');

console.log("cargando...")
console.log("buscando informacion..")
console.log("porfavor espera")
