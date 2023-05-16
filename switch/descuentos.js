//Un comerciante hace descuentos a sus clientes de la siguiente forma:
//Si ha comprado menos de 100 euros no hay descuento
//Si la compra está entre 100 y 300 euros le descuenta un 5%
//Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
//Si la compra supera los 500 euros le descuenta un 15%

let valor = parseInt(prompt("Ingresa cuanto gasto el cliente"));
let descuento = 0;

switch (true){
    case (valor >= 100 && valor <= 300):
        descuento = 5;
        break;
    case (valor > 300 && valor <= 500):
        descuento = 10;
        break;
    case (valor > 500):
        descuento = 15;
        break;
}

let total = valor * (1 - descuento/100);
alert("El cliente debe pagar " + total + " " + descuento);
