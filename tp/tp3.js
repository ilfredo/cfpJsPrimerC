const valorH = 360;
let salario = 0;
let aux = 0;
let hora = 0;
let nombre = "";
let salida = "";

do {  
   nombre = prompt("Ingresa el nombre del empleado");

   hora = prompt("Ingresa la cantidad de horas que hizo a la semana");
   
   if (hora <= 40) {
        salario = valorH * hora;
   } else {
    aux = hora - 40;
    salario = (valorH * 40) + (valorH * 2 * aux);
   }

   console.log(nombre + " gano " + salario + " en la semana");

   salida = prompt("Quieres agregar otro empleado? (si/no)");

}while (salida != "no");