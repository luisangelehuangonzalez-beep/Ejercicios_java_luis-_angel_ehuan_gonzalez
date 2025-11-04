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
    let datos=[3,7,9,3,2];
    let suma=0
    for(i=0;i<datos.length;i++){
        if(datos[i] % 2 ===0){
        suma += datos[i];
        }
        //  console.log(`la posicion es ${i} y ${datos[i]}`);
    }
    console.log(`la suma de los datos ${suma}`);

}
DatosArreglos();

//  console.log(`la posicion es ${i} y ${datos[i]}`);
