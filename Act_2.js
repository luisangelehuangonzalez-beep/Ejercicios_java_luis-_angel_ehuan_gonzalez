const prompt = require('prompt-sync')(); 
console.log("ingresar edad:");
let edad = parseInt(prompt());
if (edad >= 18){
    console.log("acceso permitido");
} 
else{
    console.log("acceso denegado");
}
