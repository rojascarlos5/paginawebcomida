'use strict'; /* obligarnos a escribir javascript de forma correcta */

var n1= 15;
var n2= 25;

console.log(n1+n2);

var n3 = 100;
console.log(n3);

if (true) {  
    n3 = 150;
    console.log(n3);
}

console.log("el valor de n3 como var es " + n3);

var nombre = "Rosa";
console.log(nombre);

if (true) {
    nombre = "Pedro";
    console.log("El nombre del estudiante es: " + nombre);
}

console.log("El nombre del estudiante es: " + nombre);
/*El alcance de una variable declarada con var es global, mientras que una con let es dentro del bloque donde fue declarada.*/

let ciudad = "San Juan";
console.log(ciudad);

if (true) {
    let ciudad = "Maracay";
    console.log("Es conocida como la ciudad jardin " + ciudad);
}

console.log("Es la capital del estado " + ciudad);

ciudad = "Valencia"; /* reasignar el valor de una variable let*/
console.log(ciudad)