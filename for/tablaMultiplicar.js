//Este script debe escribir la tabla de multiplicar del número que el usuario teclee. 
//La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

let numero = parseInt(prompt("Ingresa un numero"));
let resultado = 0;

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}