document.write('Hola desde Javascript');

/* const title=document.getElementsByTagName('h1');
title[1].innerHTML ='Titulo cambiado desde javascript';
console.log(title);

const texto=document.getElementById('text');
texto.innerHTML = "Este texto esta escrito desde Javascript";
texto.style.background = 'blue';
texto.style.color="white";

console.log(texto); */

const texto = document.querySelector('#text');
texto.textContent='Estoy escribiendo desde Javascript';

/* crear elementos html */
const div = document.createElement('div');
const body = document.querySelector('body');
body.append(div);