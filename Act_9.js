const prompt = require('prompt-sync')();
console.log("Introduzca el primer número:");
let num1 = parseInt(prompt());
console.log("Introduzca el segundo número:");
let num2 = parseInt(prompt());
let resultado;
if (num1 > num2) {
    resultado = num1 + num2;
    console.log("La suma es:", resultado);
}else if (num2 > num1) {
    resultado = num1 + num2;
    console.log("La suma es:", resultado);
}
else{
    resultado = num1 * num2;
    console.log("El producto es:", resultado);
}

