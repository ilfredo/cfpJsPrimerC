//En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. 
//Si un usuario paga  4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

alert("SALAS \n 1-Consolas \n 2-Juegos 2D \n 3-Juegos 3D \n 4- Realidad Virtual")
let creditos = parseInt(prompt("Ingresa cuantos creditos tienes"));

switch(creditos){
    case 1: 
        alert("Puedes ingresar a la sala de consolas");
    case 2:
        alert("Puedes ingresar a la sala de consolas y juegos 2D");
    case 3:
        alert("Puedes ingresar a la sala de consolas, juegos 2D y juegos 3D");
    case 4:
        alert("Puedes ingresar a todas las salas");
}