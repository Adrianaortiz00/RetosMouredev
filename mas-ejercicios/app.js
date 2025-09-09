/*ejercicio 01 
Escribe un algoritmo que imprima los múltiplos de 3 entre 1 y 20.
*/

let algoritmo = () => {
  for (let i = 1; i < 20; i++) {
    if( i % 3 === 0) {
        console.log(`el numero ${i} es multiplo de 3`)
    } 
  }
};

algoritmo(); 

/* ejercicio 02
Dado un arreglo [4, 9, 2, 7, 5], encuentra el número mayor.
*/

 let arreglo = [ 4, 9, 2, 7 , 5]

let numeroMayor = Math.max(...arreglo); 
console.log(`el numero mayor es: ${numeroMayor}`);

 /* let arreglo = [4, 9, 2, 7, 5];
let numeroMayor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
  if (arreglo[i] > numeroMayor) {
    numeroMayor = arreglo[i];
  }
}

console.log(`El número mayor es: ${numeroMayor}`); */

/* ejercicio 02
Dado el número n = 5, calcula su factorial (n!).
*/

let n = 5;

let factorial = 1;
 for (let i = 1; i <= n; i++) {
    if (i <= n) {
        factorial = factorial * i;
    }
 }

    console.log(`el factorial de ${n} es: ${factorial}`); 
    