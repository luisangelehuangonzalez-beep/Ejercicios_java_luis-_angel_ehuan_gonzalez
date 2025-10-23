const prompt = require('prompt-sync')();
console.log("ingrese el limite de contaminacion de la ciudad:");
let indice = parseInt(prompt());
if (indice<=37){
    console.log("el indice ", indice, " es aceptble ");
} else if (indice >= 38 && indice <= 55) {
    console.log("el indice ", indice, " es desagradable");
}
else{ 
    console.log("el indice ", indice, " es peligroso")
}

