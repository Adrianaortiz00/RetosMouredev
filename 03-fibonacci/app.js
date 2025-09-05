/*
 * * LA SUCESIÓN DE FIBONACCI *
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

// Crear array con los dos primeros números
let fib = [0, 1];

//  Calcular los siguientes números hasta tener 50
for (let i = 2; i < 50; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];  
}

// Imprimir todos los números
for (let num of fib) {
    console.log(num);
}
