/*Realiza un programa en JS, que pida números mientras no se ingrese uno negativo. 
Al final, se debe mostrar la suma de los números ingresados*/


let suma  = 0;
let valido = true;

do{
    let numero = parseInt(prompt("Ingresa un numero"));
    if (numero > 0) {
        suma = suma + numero;
    }else {
        valido = false;
    }
}while(valido)

console.log("EL total es " + suma);