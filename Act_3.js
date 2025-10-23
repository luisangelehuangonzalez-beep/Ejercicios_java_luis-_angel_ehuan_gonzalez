const prompt = require('prompt-sync')();
console.log("ingresa calificación");
let cal = parseInt(prompt());
if (cal>=90 && cal<=100){
    console.log("exelente");
}else if (cal>=70 && cal<=89){
   console.log("bien");
}
else{
    console.log("reprobado");
}