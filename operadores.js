// Operadores

// Operadores de Asignación
// Operadores Aritméticos
// Operadores de Comparación
// Operadores Lógicos

// 1. Operadores de Asignación

// = Asignación

var nombre = "Juan";

// += Asignación de adición

// 2. Operadores Aritméticos

// + Suma
// - Resta
// * Multiplicación
// / División
// ** Exponenciación
// % Módulo

// console.log("Suma", 5 + 3);
// console.log("Resta", 5 - 3);
// console.log("Multiplicación", 5 * 3);
// console.log("División", 5 / 3);
// console.log("Exponenciación", 5 ** 3);
// console.log("Módulo", 5 % 3); //  -> Residuo de la división

var a = 25;
var b = 3878;
var suma = a + b;

// console.log("Resultado", suma);

// 3. Operadores de Comparación

// == Igualdad

console.log(10 == "10"); // true

// === Igualdad estricta - valor y tipo de dato

console.log(10 === "10"); // false

// != Diferente

console.log(10 != "10"); // false

// !== Diferente estricto - valor y tipo de dato

console.log(10 !== "10"); // true

// > Mayor que

console.log(10 > 5); // true

// < Menor que

console.log(10 < 5); // false

// >= Mayor o igual que

console.log(18 >= 18); // true

// <= Menor o igual que

console.log(18 <= 19); // true

// 4. Operadores Lógicos

// && AND - Se tienen que cumplir todas las condiciones

console.log(true && true); // true
console.log(true && false); // false
console.log("Prueba", 18 > 20 && "hola" == "hola"); // true
console.log(18 != 10 && "hola" == 8); // false

// || OR - Se tiene que cumplir al menos una condición

console.log(true || true); // true
console.log(true || false); // true
console.log(
  "Ejemplo de encadenamiento:",
  18 > 20 || ("hola" == "hola" && 1 === "1")
);

// ! NOT - Negación

console.log(!true); // false

estado = true;
console.log(!estado); // false

// += Asignación de adición
// -= Asignación de sustracción
// *= Asignación de multiplicación
// /= Asignación de división

var numero = 10;
console.log("numero", numero);
numero += 5;
console.log("numero", numero);
numero *= 2;
console.log("numero multiplicado", numero);