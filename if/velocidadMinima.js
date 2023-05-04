//En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
//Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
//si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

let velocidad = parseInt(prompt("Ingresa la velocidad"));
let tiempo = parseInt(prompt("Indica el tiempo en que termino el recorrido"));

if ((velocidad/tiempo) > 40 && (velocidad/tiempo < 60)){
    alert("El conductor pasa la prueba");
} else {
    alert("El conductor fue descalificado");
}