let par = 0;
let impar = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " Es par");
        par = par + i;
    } else {
        console.log(i + " Es impar");
        impar = impar + i;
    }
}

console.log("La suma de los pares es: " + par);
console.log("La suma de los impares es: " + impar);