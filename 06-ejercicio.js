const $btn = document.querySelector('#btn');
const $list = document.querySelector('#list');

let itemnum=1;
$btn.addEventListener('click',() => {
    const listItem= document.createElement('li');
    listItem.textContent='Agregado desde boton '+ itemnum;
    $list.appendChild(listItem);
    itemnum++;
});