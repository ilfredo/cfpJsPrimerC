//Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. 
//Los números se separarán por comas.

let numero = parseInt(prompt("Escriba un numero entero"));

for (let i = 0; i <= numero; i++){
    console.log(i + ", ");
}