const prompt = require('prompt-sync')();
console.log("Ingrese un número:");
let num = parseInt(prompt());
if (num % 2 === 0){
    if (num > 0) {
        console.log("mayor que 0");
    } else {
        console.log("menor que 0");
    }
    console.log("par");
} else {
    console.log("impar");
    if (num < 0) {
        console.log("menor que 0");
    } else {
        console.log("mayor que 0");
    }
}
