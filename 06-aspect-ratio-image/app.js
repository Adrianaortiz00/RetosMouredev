/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://es.vitejs.dev/og-image-announcing-vite3.png
 * https://vitest.dev/logo-shadow.svg
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

const calcularAspectRatio = (url) => {
  const img = new Image();
  img.src = url;

  img.onload = () => {
    const width = img.width;
    const height = img.height;

    const mcd = (a, b) => (b === 0 ? a : mcd(b, a % b));
    const ratioMCD = mcd(width, height);


    console.log( `imagen cargada: ${url}`); 
    console.log( `resolución: ${width}x${height}`); 
    console.log( `aspect ratio: ${width / ratioMCD}:${height / ratioMCD}`); 
  };

  img.onerror = () => {
    console.log(`Error al cargar la imagen. ${url}`);
  }
};

// Ejemplo de uso
calcularAspectRatio("https://vitest.dev/logo-shadow.svg");
