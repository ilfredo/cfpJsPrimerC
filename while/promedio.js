//Promedio de notas aprobadas y desaprobadas.
//Dado N notas, calcular el promedio de las notas
//aprobadas y el promedio de las notas desaprobadas.

let validar = "si";
let notas = 0;
let aprobadas = 1;
let contA = 0;
let desaprobadas = 0;
let contD = 0; 

alert(aprobadas);
while (validar == "si") {
    notas = parseInt(prompt("Ingresa las notas"));

        if(notas > 0){
            if(notas <= 4){
                alert(aprobadas);
            aprobadas = aprobadas + notas;
            contA = contA + 1;
            alert(aprobadas + " entro " + contA)
            alert(desaprobadas);
            }        
        } else {
            
            desaprobadas = desaprobadas + notas;
            contD = contD + 1;
            alert(desaprobadas + " entro " + contD)
        }
    
    if(validar = prompt("Quieres ingresar otra nota?") == "no"){
       break;
    }

}
alert(aprobadas + (" ") + desaprobadas + (" ") + contA);
alert("Los promedios son \n Aprobadas: " + aprobadas/contA + "\n Desaprobadas: " + desaprobadas/contD);