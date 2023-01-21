/**
    * Array con las imagenes que se iran mostrando en la web
    */
 var imagenes=new Array(
    './assets/img/img-pagina/bloqueado.webp',
    './assets/img/img-pagina/bloqueado.webp'
);

/**
* Funcion para cambiar la imagen
*/
function rotarImagenes()
{
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index=Math.floor((Math.random()*imagenes.length));

    // cambiamos la imagen
    document.getElementById("imagen").src=imagenes[index];
}

/**
* Función que se ejecuta una vez cargada la página
*/
onload=function()
{
    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 1 segundos cambie la imagen
    setInterval(rotarImagenes,950);
}
