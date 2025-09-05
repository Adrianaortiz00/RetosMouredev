/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function Anagrama (palabra1, palabra2){
    //Si son exactamente iguales → no se consideran anagramas 
    if (palabra1 === palabra2){
        return false;
    }

    //Si no tienen la misma longitud → no son anagramas
    if(palabra1.length !== palabra2.length){
        return false;
    }

    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();

    //Ordenamos las letras de cada palabra alfabéticamente
    let ordenada1 = palabra1.split("").sort().join("");
    let ordenada2 = palabra2.split("").sort().join("");

    return ordenada1 === ordenada2;
}

// 🔹 Ejemplos de prueba
console.log(Anagrama("roma", "amor"));   // true
console.log(Anagrama("roma", "roma"));   // false
console.log(Anagrama("perro", "gato"));  // false
console.log(Anagrama("Listen", "Silent")); // true