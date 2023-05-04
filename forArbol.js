/*Escribir un programa que pida al usuario un número entero y muestre por 
pantalla un triángulo rectángulo como el de más abajo.
1
3 1
5 3 1
7 5 3 1
9 7 5 3 1
*/

let numero = parseInt(prompt("Ingresa un numero entero"));
let linea = "";

if (Number.isInteger(numero)){
   for (let i = 1; i <= numero; i++){
    if ((i % 2) ==! 0){
        let cont = i;
        let j = i;
        while (cont > 0){
            linea = j + " " + linea;
            cont = cont - i;
        }
        console.log(linea);
    }
   }
}