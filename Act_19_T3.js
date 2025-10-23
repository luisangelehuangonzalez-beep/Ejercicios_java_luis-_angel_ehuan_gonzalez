const prompt=require("prompt-sync")();
let  numero=0;
    
  while(numero<1 || numero>5 ||isNaN(numero)){
      numero=parseInt(prompt("Ingresa un numero del 1 al 5: "));
      }
      console.log("Numero dentro del rango."); 