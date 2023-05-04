//Escribir un script para determinar si el numero introducido por el usuario es un palíndromo
//es decir, un número que se lee igual del derecho que del revés.

let numero = parseInt(prompt("Ingresa un numero"));
let numero2 = 0;
let aux = 0;
let aux2 = 0;

aux2 = numero;

do{
    aux = aux2 % 10;
    numero2 = (numero2 * 10) + aux; 
    aux2 = aux2 - aux;
    aux2 = aux2 / 10;
}while(aux2 > 0)

if (numero == numero2){
    alert("Es palidromo");
}else {
    alert("No es palidromo");
}