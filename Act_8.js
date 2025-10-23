const prompt = require('prompt-sync')();
let libro_1=568
console.log("el precio del libro 1 es:", libro_1);
let libro_2=libro_1*0.20;
let libros=libro_2 * 4;
console.log("el precio del escuento es:", libro_2);
let disco1=45;
console.log("el precio de los discos es:", disco1);
let	disco2=disco1 * 0.05;
let	discos=disco2 * 3;
console.log("el descuento seria es de:", disco2);
let total=libros+discos;
console.log("la suma de descuentos es", total);
let suma1=45*4
let	suma2=568*3
let suma3=suma2+suma1
let suma4=suma3-total
console.log("el resultado con el descuento es", suma4);

