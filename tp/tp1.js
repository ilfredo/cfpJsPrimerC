const cuota = 32000;
let estudiantes = [];
let salida = "";
let contF = 0;
let contM = 0;

function consultaEstudiante(matricula) {
    const estudiante = estudiantes.find(estudiante => estudiante.matricula === matricula);

    if (estudiante) {
        console.log("Datos del estudiante");
        console.log("Nombre: ", estudiante.nombre);
        console.log("Apellido: ", estudiante.apellido);
        console.log("Género: ", estudiante.genero);
        console.log("Edad: ", estudiante.edad);
        console.log("Años aprobados: ", estudiante.anosCursados);
        console.log("Le faltan: ", 6 - estudiante.anosCursados);
        console.log("Ha pagado hasta ahora por ", estudiante.anosCursados, " años y eso da un total de ", estudiante.anosCursados * cuota);
        console.log("Matrícula: ", estudiante.matricula);
    } else {
        console.log("No se encontro ningun estudiante con esa matricula");
    }

}

do {   
    let estudiante = {
        nombre: prompt("Ingresa el nombre del estudiante"),
        apellido: prompt("Ingresa el apellido del estudiante"),
        genero: prompt("Genero"),
        edad: prompt("Edad"),
        anosCursados: prompt("Años aprobados del estudiante"),
        matricula:  prompt("Matricula del estudiante")
    }

    estudiantes.push(estudiante);

    if (estudiante.genero == "m"){
        contM ++;
    } else {
        contF ++;
    }

    salida = prompt("Quieres agregar otro estudiante ? (si/no)");
} while (salida != "no")


console.log("La cantidad de estudiantes es: " + estudiantes.length);

console.log("Hay " + (contF * 100) / estudiantes.length + "% de Mujeres");
console.log("Hay " + (contM * 100) / estudiantes.length + "% de Hombres");

consultaEstudiante(prompt("Ingresa la matricula que deseas buscar"));

