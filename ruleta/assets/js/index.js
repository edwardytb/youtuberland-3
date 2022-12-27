let btnrandom = document.querySelector('button');
let result = document.querySelector('h1');

let users = ['10 de hierro','25 de hierro','64 de madera',
'15 troncos de madera', '64 de carbon', '10 bloques de hierro',
'1 espada de hierro encantada','1 pico de hierro encantado', 
'1 bloque de proteccion 10*10', '1 kit especial'];

function getRandomNumber(min, max){
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btnrandom.addEventListener('click', () =>{
  let index = getRandomNumber(0, users.length-1);
  result.innerText = users[index];
});