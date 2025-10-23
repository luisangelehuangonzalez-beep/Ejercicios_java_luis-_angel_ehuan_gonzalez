const prompt = require('prompt-sync')();
console.log("escribe la edad:")
let EDAD_AÑOS = parseInt(prompt());
let Dias_Vividos=EDAD_AÑOS*365;
let Horas_Dormidas=Dias_Vividos*8;
console.log(`Una persona de ${EDAD_AÑOS} años ha dormido aproximadamente ${Horas_Dormidas.toFixed(2)} horas de su vida.`);

