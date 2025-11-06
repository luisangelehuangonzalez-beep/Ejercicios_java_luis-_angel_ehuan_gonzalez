//Declaracion de arreglos
/*
Tipos de datos
Number
Boolean
null
undifened
Array
Function
*/

function DatosArreglos(){
    let datos=[3,7,9,3,2,6];
    let suma=0
/*     let suma=0
    for(i=0;i<datos.length;i++){
        if(datos[i] % 2 ===0){
        suma += datos[i];
        }
        //  console.log(`la posicion es ${i} y ${datos[i]}`);
    }
    console.log(`la suma de los datos ${suma}`);
 */
/* for(let numeros of datos){
    console.log(`los datos del arreglo son: ${numeros}`)
} */

//for.. in
/* for(let numeros in datos){
    console.log(`los datos son: ${datos[numeros]}`)
} */

//for.. each
/* datos.forEach(function(numeros){
    console.log(numeros);
}) */

//datos.forEach(numeros=>console.log(numeros))
//while 
//let i=0;
/* while(i<datos.length){
    console.log(datos[i]);
    i++;
} */
d/* o{
    console.log(datos[i]);
    i++;
}while(i<datos.length) */
//map
/* datos.map(numero=>console.log(numero*2))
//filter
const newArreglo=datos.filter((numeros)=>{
    return numeros>7;
})
console.log(newArreglo);
 */
//reduce

let suma=0
datos.reduce((a,b)=>suma=a+b)
console.log(suma)

}
DatosArreglos();

//  console.log(`la posicion es ${i} y ${datos[i]}`);
