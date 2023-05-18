let validar = "si";

while (validar = "si"){
    let numero = parseInt(prompt("Ingresa un numero"));
    let numero2 = parseInt(prompt("Ingresa otro numero"));
    let resultado = 0;

    let operacion = prompt("Que operacion quieres realizar \n + \n - \n * \n /");

    switch(operacion){
        case "+" :
            alert("La suma de los numeros es " + (numero + numero2));
            break;
        case "-" :
            resultado = numero - numero2;
            break;
        case "*" :
            resultado = numero * numero2;
            break;
        case "/" :
            resultado = numero / numero2;
            break;
    }

    validar = prompt("Quieres realizar otra operacion si/no");
}