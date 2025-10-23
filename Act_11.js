const prompt = require('prompt-sync')();
console.log("ingresar numero N:")
let N = parseInt(prompt());
let contador = 0;
console.log("los numeros impares de " , N , " son")
for (let i=1; i<=N; i++){
    if (i%2!==0){
        console.log(i)
    contador++;
    }
}
console.log("Cantidad de impares encontrados:", contador);
