const prompt = require('prompt-sync')();
let busto_cm=89
let cintura_cm=58
let cadera_cm=89
let estatura_mts=1.70
let peso_kg=53
let busto_in = busto_cm /2.54
let cintura_in=cintura_cm /2.54
let cadera_in=cadera_cm /2.54
let estatura_ft=estatura_mts* 3.281
let peso_lb=peso_kg * 2.205
console.log("busto:", busto_in.toFixed(2));
console.log("cintura:", cintura_in.toFixed(2));
console.log("cadera:", cadera_in.toFixed(2));
console.log("estatura en pies:", estatura_ft.toFixed(2));
console.log("peso en libras:", peso_lb.toFixed(2));


