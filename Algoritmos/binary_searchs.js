// Tenemos un arreglo de números ordenados de menor a mayor. Del 1 al 100
// Encontramos el medio del arreglo -> 50
// En la izquierda tendremos los numeros del 0 al 49
// En la derecha tendremos los numeros del 51 al 100
// Nuestro numero a buscar es el 62
// Declaramos una variable de izquierda y derecha -> izq: 0 y der: 100
// Validamos si nuestro numero a buscar es igual al numero del medio -> 62 === 50
// Si es igual, retornamos el numero encontrado
// Si no, validamos si nuestro numero a buscar es mayor al numero del medio -> 62 > 50
// Si es mayor, actualizamos la variable de izquierda al numero del medio + 1 -> izq: 51
// Si no, actualizamos la variable de derecha al numero del medio - 1 -> der: 49
// Necesitamos actualizar el medio (51 + 100) / 2 -> 75
// repetimos el proceso hasta encontrar el numero
// Si no encontramos el numero, retornamos -1

// Binary Search

function binarSearch(arr, objetivo) {
  let izq = 0;
  let der = arr.length - 1;
  let medio = Math.floor((izq + der) / 2);
  let steps = 0;

  while (arr[medio] !== objetivo && izq < der) {
    if (objetivo > arr[medio]) {
      izq = medio + 1;
    } else {
      der = medio - 1;
    }
    steps++;
    medio = Math.floor((izq + der) / 2);
  }

  // return arr[medio] === objetivo ? medio : -1;
  console.log(`Steps: ${steps}`);
  if (arr[medio] === objetivo) {
    return medio;
  } else {
    return -1;
  }
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 62, 65,
  70, 75, 80, 85, 90, 95, 100,
];
console.log(arr.length);
console.log(binarSearch(arr, 62)); // 20
console.log(arr[20]);

// Busqueda Lineal - Simple Search

const arr2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 62, 65,
  70, 75, 80, 85, 90, 95, 100,
];
objetivo = 62;
steps = 0;
for (i = 0; i < arr2.length; i++) {
  steps++;
  if (arr2[i] === objetivo) {
    console.log(`Steps: ${steps}`);
    console.log("Index", i);
    break;
  }
}