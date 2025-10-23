const prompt = require('prompt-sync')();
let horas_a=12
let	pago_a=45
let horas_b = 10
let pago_b = 56
let horas_c = 8
let pago_c = 52
let horas_d = 13
let pago_d = 28
let sueldo_a = horas_a*pago_a
let sueldo_b = horas_b*pago_b
let sueldo_c = horas_c*pago_c
let sueldo_d = horas_d*pago_d
let sueldo_total =sueldo_a+sueldo_b+sueldo_c+sueldo_d
console.log("el sueldo de juanita es de:")
console.log("trabajo a: $:", sueldo_a.toFixed(2));
console.log("trabajo b: $:", sueldo_b.toFixed(2));
console.log("trabajo c: $:", sueldo_c.toFixed(2));
console.log("trabajo d: $", sueldo_d.toFixed(2));
console.log("total semanal: $", sueldo_total.toFixed(2));
