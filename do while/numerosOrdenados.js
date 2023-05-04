//Escribir un script usando el bucle do while para pedir que el usuario escriba dos números. 
//Si el primero es mayor que el segundo el programa volverá a pedir que se escriban los números. 
//Si el primero es menor o igual que el segundo el programa acaba y dice "Numeros en orden creciente"

let validar = true;

do {
    let numero = parseInt(prompt("Ingresa un numero"));
    let numero2 = parseInt(prompt("Ingresa un numero"));

    if (numero > numero2){
        alert("Vuelva a ingresar los numeros");
    }else {
        alert("Numeros en orden creciente");
        validar = false;
    }
} while (validar)