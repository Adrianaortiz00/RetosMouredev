/*ejercicio 01 
Escribe un algoritmo que imprima los múltiplos de 3 entre 1 y 20.
*/

let algoritmo = () => {
  for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
      console.log(`el numero ${i} es multiplo de 3`);
    }
  }
};

algoritmo();

/* ejercicio 02
Dado un arreglo [4, 9, 2, 7, 5], encuentra el número mayor.
*/

let arreglo = [4, 9, 2, 7, 5];

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

/* ejercicio 03
Dado el número n = 5, calcula su factorial (n!).
factorial de 5 = 5 * 4 * 3 * 2 * 1 = 120 
*/

let n = 5;

let factorial = 1;
for (let i = 1; i <= n; i++) {
  if (i <= n) {
    factorial = factorial * i;
  }
}

console.log(`el factorial de ${n} es: ${factorial}`);

/* ejercicio 04
Escribe un algoritmo que cuente cuántos números pares hay en la lista [1, 2, 3, 4, 5, 6, 7].
*/

let lista = [1, 2, 3, 4, 5, 6, 7];
/* let contadorPares = 0; 

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      contadorPares++;
    }
} */

contadorPares = lista.filter((num) => num % 2 === 0).length;
console.log(`la cantidad de numeros pares en la lista es: ${contadorPares}`);

//Ejercicio 05: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

let texto = "Esto es un string";
let numero = 23;
let decisión = true;
let nada = null;
let indefinido = undefined;
let coche = {
  marca: "kia",
  modelo: "cerato",
  año: 2005,
};
let cartuchera = ["lapiz", "borrador", "rotulador"];

console.log(texto, numero, decisión, nada, indefinido, coche, cartuchera);

//Ejercicio 06: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola.

const postres = ["helado", "tarta", "pastel"];
console.log(`los postres disponibles son ${postres}`);

//Ejercicio 07: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.
const coder = {
  nombre: "adriana",
  edad: 23,
};
console.log(coder);

//Ejercicio 08: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.
console.log(
  typeof texto,
  typeof numero,
  typeof decisión,
  typeof nada,
  typeof indefinido,
  typeof coche,
  typeof cartuchera
);

/* const variables = { texto, numero, decisión, nada, indefinido, coche, cartuchera };

Object.entries(variables).forEach(([nombre, valor]) => {
  console.log(`${nombre}: ${typeof valor}`);
});
 */

//OPERADORES ARITMÉTICOS
//Ejercicio 09: Crea una varible que sume 2 números e imprime el resultado en consola.

let a = 4;
let b = 3;

let suma = a + b;

console.log(`la suma es ${suma}`);

//Ejercicio 10: Crea una varible que reste 2 números e imprime el resultado en consola.

function resta(a, b) {
  return a - b;
}

let resultado = resta(46, 2);
console.log(`La resta es ${resultado}`);

//Ejercicio 11: Crea una varible que multiplique 2 números e imprime el resultado en consola.

let e = 46;
let f = 2;

let multiplicación = e * f;
console.log(`la multipliación  es ${multiplicación}`);

//Ejercicio 12 : Crea una varible que divida 2 números e imprime el resultado en consola

const dividir = (a, b) => a / b;

console.log(`La división es ${dividir(15, 2)}`);

//OPERADORES DE COMPARACIÓN
// Ejercicio 13: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

let numero1 = 1;
let numero2 = 2;

let comparacion = numero1 == numero2;
console.log(comparacion);

// Ejercicio 11: Escribe un algoritmo o pseudocódigo que imprima todos los números del 1 al 100. Pero para los múltiplos de 3, imprime "Fizz" en lugar del número. Para los múltiplos de 5, imprime "Buzz". Para los números que son múltiplos de ambos (3 y 5), imprime "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ejercicio 12 : Problema de Palíndromo: Diseña un algoritmo o pseudocódigo que determine si una palabra dada es un palíndromo (se lee igual de adelante hacia atrás que de atrás hacia adelante). La función debe devolver true si es un palíndromo y false en caso contrario. No tengas en cuenta mayúsculas/minúsculas ni espacios para este ejercicio.

function esPalindromo(texto) {
  let palabra = texto.toLowerCase().replaceAll(" ", "");

  for (let i = 0; i < palabra.length / 2; i++) {
    if (palabra[i] !== palabra[palabra.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Hola mundo"));

//ejercicio 13
let numeros = [10, 5, 20, 15, 25];
let buscar = 15;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === buscar) {
    console.log(`numero encontrado en el indice : ${i}`);
    concobtrado = true;
    break;
  }
}

if (!encontrado) {
  console.log("el número no está");
}

/*  
let numeros = [10, 5, 20, 15, 25];
 let buscar = 15;
 

if(numeros.includes(buscar)) {
    console.log("número encontrado en el indice: ${numeros.indexof(buscar)}")
 }else {
    console.log("el número no está")}
 */

/*ejercicio 14 -  Problema del Factorial Recursivo:
    Escribe una función (en pseudocódigo o tu lenguaje preferido) que calcule el factorial de un número entero no negativo n utilizando recursión. 
    El factorial de n (denotado como n!) es el producto de todos los enteros positivos menores o iguales a n. 0! se define como 1.
*/

function numFactorial(n) {
  if (n < 0) {
    return "no se permite numeros negativos ";
  }
  if (n === 0) {
    return 1;
  }
  return n * numFactorial(n - 1);
}

console.log(numFactorial(3));
console.log(numFactorial(5));
console.log(numFactorial(0));

// ejercicio 15 - Dado un array de números enteros [3, 8, 1, 9, 4, 7], encuentra el segundo número más grande sin ordenar el array completamente. Intenta optimizar la cantidad de pasadas por el array.

let ArrayNumeros =  [3, 8, 1, 9, 4, 7]
let numeroMayorr = Math.max(...ArrayNumeros);

let ArraySinMayor = ArrayNumeros.filter(n => n !== numeroMayorr); 

let SegundoMayor = Math.max(...ArraySinMayor); 

console.log(SegundoMayor); 

/*ejercicio 16 - Tienes un array de números [1, 2, 3] y un objetivo target = 3. Encuentra todas las combinaciones únicas de números en el array que sumen al target. 
Cada número puede ser usado múltiples veces. No te preocupes por el orden de los números dentro de una combinación.*/


let nums= [1, 2, 3];
let target = 3;   

function buscarCombinaciones (actual, sumaActual, incio ) {

  if ( sumaActual === target ) {
    console.log(actual)
    return ;
  }
  
  if (sumaActual > target) {
    return ; 
  }

  for (let i = incio; i < nums.length; i++) {
    let numero = nums[i]

    actual.push(numero);
    buscarCombinaciones(actual, sumaActual + numero, i);
    actual.pop(); 
  }
}

buscarCombinaciones([], 0, 0); 



