const prompt = require('prompt-sync')(); 
let num = parseInt(prompt("Ingrese un número: "));
if (num === 0) {
    console.log("cero");
}else if (num > 0){
    console.log("positivo");
} 
else{
    console.log("negativo");
}
