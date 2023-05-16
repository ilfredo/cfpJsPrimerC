//En este ejercicio el script convertirá las notas numéricas de un examen en palabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.

let notas = parseInt(prompt("Ingresa las notas"));
let mensaje = "";

switch (notas){
    case 0, 1, 2, 3, 4:
        mensaje = "suspenso";
        break;
    case 5, 6:
        mensaje = "aprobado";
        break;
    case 7, 8:
        mensaje = "notable";
        break;
    case 9, 10:
        mensaje = "sobresaliente";
        break; 
}

alert("Tu calificacion es " + mensaje);
