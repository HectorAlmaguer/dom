const $btn = document.querySelector('#btn');

$btn.addEventListener('click',() => {
    console.log("me presionaste");
});

$btn.addEventListener('mouseover',() => {
    console.log("Pasaste por aqui");
});


const $inptext = document.querySelector('#text');
/* 
$inptext.addEventListener('keydown',() =>{
    console.log('Escribiste algo');
}); */ 

$inptext.addEventListener('keydown',(e) =>{
    console.log(e.target.value);
});
$inptext.addEventListener('keyup',(e) =>{
    console.log(e.target.value);
});
