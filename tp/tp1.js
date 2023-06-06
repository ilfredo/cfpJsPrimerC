const cuotaMensual = 32000;
let estudiantes = [];
let salida = "";

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

    salida = prompt("Salida");
} while (salida != "no")


console.log(estudiantes.length);
