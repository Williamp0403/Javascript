// Strings

// Split

// Convierte un string en un arreglo, separandolo por el parametro dado.

const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words);

var prueba2 = "Hola, Mundo";
console.log(prueba2.split(",")[1]);

// Uppercase

// O método toUpperCase() retorna el valor de un string convertido en mayusculas.

var nombre = "Juan";
console.log(nombre.toUpperCase());

// Lowercase

// O método toLowerCase() retorna el valor de un string convertido en minusculas.

var nombre = "Juan";
console.log(nombre.toLowerCase());

// Replace

// O método replace() retorna uma nova string com algum ou todas as combinações de um padrão substituído por um substituto. O padrão pode ser uma string ou uma RegExp, e o substituto pode ser uma string ou uma função a ser chamada para cada combinação.

var str2 = "Mr Blue has a blue house and a blue car";
var res = str2.replace(/house/g, "casa");
console.log(res);

// Numbers

// parseInt

// permite convertir un string a un número entero.

var numero = "10";
console.log(numero);
console.log(parseInt(numero));

var numero_decimal = 10.5;
console.log(numero_decimal);
console.log(parseInt(numero_decimal));

// parseFloat

// permite convertir un string a un número decimal.

var numero = "10.5";
console.log(numero);
console.log(parseFloat(numero));

// Math.ceil

// retorna el entero más cercano mayor o igual a un número dado.

var numero = 10.5;
console.log(numero);
console.log(Math.ceil(numero));

// Math.floor

// retorna el entero más cercano menor o igual a un número dado.

var numero = 10.5;
console.log(numero);
console.log(Math.floor(numero));

// Arrays

// Join

// Permite unir todos los elementos de un array en un string.

var frutas = ["Banana", "Orange", "Apple", "Mango"];
console.log(frutas.join(" - "));

var word = "Hola Mundo";
var word_array = word.split(" ");
var array_reverse = word_array.reverse();
console.log(array_reverse.join(" , "));

// Reverse

// Invierte el orden de los elementos de un array.

var frutas = ["Banana", "Orange", "Apple", "Mango"];
console.log(frutas.reverse());

// Sort

// Ordena los elementos de un array.

var frutas = ["Banana", "Orange", "Apple", "Mango"];
console.log(frutas.sort());
var numeros = [88, 1, 7, 5, 10, 3];
console.log(numeros.sort((a, b) => a - b));

// Length

// Retorna la longitud de un array.

var frutas = ["Banana", "Orange", "Apple", "Mango"];
console.log(frutas.length);

// IndexOf

// Retorna el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.

var nombres = [
  "Juan",
  "Pedro",
  "Luis",
  "Carlos",
  "Victor",
  "Eva",
  "Ana",
  "Maria",
];

console.log(nombres.indexOf("Ana"));

// Includes

// Determina si un array incluye un determinado elemento, devuelve true o false según corresponda.

var cedulas = [123456, 789456, 123456, 456789];
console.log(cedulas.includes(12345689));

// Objects

// Includes

// Determina si un objeto tiene una propiedad con el nombre especificado.

var persona = { nombre: "Juan", edad: 25, sexo: "Masculino" };

console.log(persona.hasOwnProperty("nombre"));