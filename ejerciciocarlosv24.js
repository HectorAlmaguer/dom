const edadTitle = document.querySelector('#name');
const input = document.querySelector('#input');

const writeedad=()=>{
    parseInt(input.value) >= 18 ? edadTitle.textContent="Eres Mayor de edad" : edadTitle.textContent ="Eres menor de edad";
}
