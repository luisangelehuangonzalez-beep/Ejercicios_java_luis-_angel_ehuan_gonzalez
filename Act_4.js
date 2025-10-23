const prompt = require('prompt-sync')();
console.log("escribir número:");
let num = parseInt(prompt());
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

