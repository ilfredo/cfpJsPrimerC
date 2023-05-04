//Se trata de escribir un script que diga si un número es par o es impar.

//Recordemos que un número es par si al dividirlo por 2 da como resto 0.

let numero = parseInt(prompt("Ingresa un numero"));

if ((numero % 2) ==0 ){
    alert("El numero es par");
}else {
    alert("El numero es impar");
}