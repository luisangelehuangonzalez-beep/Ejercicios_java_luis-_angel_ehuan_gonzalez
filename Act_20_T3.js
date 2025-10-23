const prompt=require("prompt-sync")();
let suma = 0;
let numero = parseInt(prompt("Ingresa un numero (teclea 0 para terminar): "), 10);
while(numero !== 0){
    suma+=numero;
    numero = parseInt(prompt("Ingresa un numero (teclea 0 para terminar): "), 10);
}
console.log("la suma de los numeros es: " +suma);

