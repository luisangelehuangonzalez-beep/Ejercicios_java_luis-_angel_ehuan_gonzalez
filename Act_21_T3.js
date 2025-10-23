const prompt=require("prompt-sync")();
let contador =0;
let numero= parseInt(prompt("Ingresa un numero par: "));
while(numero % 2 === 0){
    contador++;
    numero= parseInt(prompt("Ingresa un numero par: "));
}
console.log("La cantidad de numeros pares ingresados es: " +contador);