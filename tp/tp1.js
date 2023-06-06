const cuotaMensual = 32000;
let estudiantes = [];
let salida = "";
let contH = 0;
let contM = 0;

do {   
    let estudiante = {
        nombre: prompt("Ingresa el nombre del estudiante"),
        apellido: prompt("Ingresa el apellido del estudiante"),
        genero: prompt("Genero"),
        edad: prompt("Edad"),
        anosCursados: prompt("Años aprobados del estudiante"),
        numeroM:  prompt("Matricula del estudiante")
    }

    estudiantes.push(estudiante);

    if (estudiante.genero == "m"){
        contM ++;
    } else {
        contH ++;
    }

    salida = prompt("Salida");
} while (salida != "no")


console.log("La cantidad de estudiantes es: " + estudiantes.length);

console.log("Hay " + (contM * 100) / estudiantes.length + "% de Mujeres");
console.log("Hay " + (contH * 100) / estudiantes.length + "% de Hombres");

