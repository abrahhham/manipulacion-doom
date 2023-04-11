/*const num1 = document.querySelector('#numero-1');
const num2 = document.querySelector('#numero-2')
let button = document.querySelector('#boton')
let total = document.querySelector('.resultado');

button.addEventListener('click', function(){
    const resultado = parseInt(num1.value) + parseInt(num2.value); 
    total.innerHTML = `El resultado es ${resultado}`;
});
*/

let numero1 = document.querySelector('#numero-1');
let numero2 = document.querySelector('#numero-2');
let button = document.querySelector('#boton');
let resultado = document.querySelector('.resultado');

let resetear = document.querySelector('.reset');

button.addEventListener('click', function(){
    let total = parseInt(numero1.value) + parseInt(numero2.value);
    resultado.innerHTML = `${total}`;
});

resetear.addEventListener('click', function(){
    resultado.innerHTML = 0;
})


