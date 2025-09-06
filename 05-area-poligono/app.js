/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

let poligono = [
  {
    tipo: "triangulo",
    base: 8,
    altura: 5,
  },
  {
    tipo: "cuadrado",
    lado: 4,
  },
  {
    tipo: "rectangulo",
    base: 8,
    altura: 5,
  },
];
function areaPoligono(poligono) {
  switch (poligono.tipo) {
    case "triangulo":
      return (poligono.base * poligono.altura) / 2;
    case "cuadrado":
      return poligono.lado * poligono.lado;
    case "rectangulo":
      return poligono.base * poligono.altura;
    default:
      return "Polígono no soportado";
  }
}

for ( let i = 0; i < poligono.length; i++) {
  console.log(areaPoligono(poligono[i]));
} 

/* solución 02 
function areaPoligono(poligono) {
  if (!poligono.tipo) {
    return "Debes especificar el tipo de polígono";
  }

  switch (poligono.tipo.toLowerCase()) { 
    case "triangulo":
      if (poligono.base > 0 && poligono.altura > 0) {
        return (poligono.base * poligono.altura) / 2;
      } else {
        return "La base y la altura deben ser mayores a 0";
      }

    case "cuadrado":
      if (poligono.lado > 0) {
        return poligono.lado * poligono.lado;
      } else {
        return "El lado debe ser mayor a 0";
      }

    case "rectangulo":
      if (poligono.base > 0 && poligono.altura > 0) {
        return poligono.base * poligono.altura;
      } else {
        return "La base y la altura deben ser mayores a 0";
      }

    default:
      return "Polígono no soportado";
  }
}

// Ejemplos de uso
let poligonos = [
  { tipo: "triangulo", base: 8, altura: 5 },
  { tipo: "cuadrado", lado: 4 },
  { tipo: "rectangulo", base: 8, altura: 5 },
  { tipo: "pentagono", lado: 3 }, // no soportado
  { tipo: "triangulo", base: -3, altura: 5 }, // datos incorrectos
];

for (let p of poligonos) {
  console.log(`${p.tipo}:`, areaPoligono(p));
}

*/

