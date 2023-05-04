// En un hospital se ha hecho un estudio con el objeto de
// hacer una aproximación de los costos diarios de interna-
// miento por paciente. Se obtuvo un costo promedio diario
// según el tiempo que el enfermo esta sin atención por una
// enfermedad que aqueja al paciente, además se pudo
// determinar que en promedio todos los pacientes con edad
// entre 17 y 25 años implican un costo adicional del 20%.
// La siguiente tabla expresa los costos diarios según el tipo
// de enfermedad.
// Tiempo sin atención = Costo diario por paciente en pesos
// Menos de 1 hora = $ 3
// De 1 hora a menos de 4 = $ 20
// De 4 horas a menos de 10 = $ 25
// De 10 horas a más = $ 40
// Construir un algoritmo que permita ingresar el tiempo de
// exposición del paciente en horas y su edad para luego
// mostrar el costo diario de su hospitalización.

let edadPaciente = parseInt(prompt("Ingresa la edad del paciente "));
let tiempoExposicion = parseInt(prompt("Ingresa el tiempo que estuvo el paciente"));
let costoDiaro = 0;
let menos1Hora = 3;
let menos4Hora = 20;
let menos10Hora = 25;
let mas10Hora = 40; 

if (edadPaciente >= 17 || edadPaciente <= 25){
    if (tiempoExposicion < 1){
        costoDiaro = menos1Hora + (menos1Hora * 0.20);
    } else if (tiempoExposicion >= 1 || tiempoExposicion < 4){
        costoDiaro = (tiempoExposicion * menos4Hora);
        costoDiaro = costoDiaro + (costoDiaro * 0.20); 
    } else if (tiempoExposicion >= 4 || tiempoExposicion < 10){
        costoDiaro = (tiempoExposicion * menos10Hora);
        costoDiaro = costoDiaro + (costoDiaro * 0.20);
    } else if (tiempoExposicion >= 10){
        costoDiaro = (tiempoExposicion * mas10Hora);
        costoDiaro = costoDiaro + (costoDiaro * 0.20);
    }
}

if (edadPaciente < 17 || edadPaciente > 25){
    if (tiempoExposicion < 1){
        costoDiaro = menos1Hora;
    } else if (tiempoExposicion >= 1 || tiempoExposicion < 4){
        costoDiaro = (tiempoExposicion * menos4Hora); 
    } else if (tiempoExposicion >= 4 || tiempoExposicion < 10){
        costoDiaro = (tiempoExposicion * menos10Hora);
    } else if (tiempoExposicion >= 10){
        costoDiaro = (tiempoExposicion * mas10Hora);
    }
}

alert ("El paciente tiene " + edadPaciente + " anios y estuvo  " + tiempoExposicion + " horas internado dando un valor diario de " 
+ costoDiaro );