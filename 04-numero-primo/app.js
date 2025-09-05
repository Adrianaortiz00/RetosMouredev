/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

//solución 1
let a = 100;
let b  = 2;
let numerosPrimos = [];

for (; b < a; b++) {

  if (primo(b)) {
    numerosPrimos.push(b);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

/*solución 2 

Función para comprobar si un número es primo
function primo(numero) {
  if (numero <= 1) return false;    // 0 y 1 no son primos
  if (numero === 2) return true;    // 2 sí es primo
  if (numero % 2 === 0) return false; // cualquier par (excepto 2) no es primo

  // Solo probamos hasta la raíz cuadrada de 'numero'
  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      return false; // encontramos un divisor → no es primo
    }
  }
  return true; // si no se encontró ningún divisor → es primo
}

// Imprimir primos del 1 al 100
let numerosPrimos = [];
for (let i = 1; i <= 100; i++) {
  if (primo(i)) {
    numerosPrimos.push(i);
  }
}

console.log(numerosPrimos); */
