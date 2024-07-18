//// Strings ////

// Concat: Junta dos o mas cadenas y retorna una nueva

var cadena = "cadena de prueba";
var cadena2 = cadena.concat(" cadena 2")
console.log(cadena2);

// Startswith: Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino, devuelve false.

var cadena = "cadena de prueba";
var cadena2 = "cadena";
var resultado = cadena.startsWith(cadena2);
console.log(resultado);

// Endswith: Si una cadena termina con los caracteres de otra cadena, devuelve true, sino, devuelve false.

var cadena = "cadena de prueba";
var cadena2 = "cadena";
var resultado = cadena.endsWith(cadena2);
console.log(resultado);

// Includes: Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino, devuelve false. 

var cadena = "cadena de prueba";
var cadena2 = "de";
var resultado = cadena.includes(cadena2);
console.log(resultado);

// IndexOf: Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1. 

var cadena = "cadena de prueba";
var resultado = cadena.indexOf("prueba");
console.log(resultado);

//LastIndefOf: Devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1.

var cadena = "cadena de prueba prueba";
var resultado = cadena.lastIndexOf("prueba");
console.log(resultado);

// PadStart [propuesta de Estandar]: Rellenar cadena al principio con los caracteres deseados. 

var cadena = "abc"
var resultado = cadena.padStart(10, "12");
console.log(resultado);

// PadEnd [popuesta de ECMA]: Rellenar cadena al final con los caracteres deseados.

var cadena = "abc";
var resultado = cadena.padEnd(10, "12");
console.log(resultado);

// Repeat: Devuelve la misma cadena pero repetida la cantidad que le indiquemos. 

var cadena = "abc "
var resultado = cadena.repeat(4);
console.log(resultado);

// Split: Convierte un string en un arreglo, separandolo por el parametro dado.

const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words);

var prueba2 = "Hola, Mundo";
console.log(prueba2.split(",")[1]);

// Substring: Nos retorna un pedazo de la cena que seleccionamos.

var cadena = "abcdefghij";
var resultado = cadena.substring(1, 4);
console.log(resultado);

// ToUppercase: El método toUpperCase() retorna el valor de un string convertido en mayusculas.

var nombre = "Juan";
console.log(nombre.toUpperCase());

// ToLowercase: El método toLowerCase() retorna el valor de un string convertido en minusculas.

var nombre = "Juan";
console.log(nombre.toLowerCase());

// Tostring:  Convierte una cadena a String

var cadena = ["pedro", "maria"];
var resultado = cadena.toString();
console.log(typeof resultado);
console.log(resultado[1]);

// Trim: Elimina los espacios en blanco al principio y al final de una cadena.

var cadena = "  hola   ";
var resultado = cadena.trim();
console.log(cadena);
console.log(resultado);

// TrimEnd: Elimina los espacios en blanco al final de una cadena. 

var cadena = "  hola   ";
var resultado = cadena.trimEnd();
console.log(cadena);
console.log(resultado);

// TrimStart: Elimina los espacios en blanco al comienzo de una cadena.

var cadena = "  hola   ";
var resultado = cadena.trimStart();
console.log(cadena);
console.log(resultado);

// ValueOf: Retorna el valor primitivo de un objeto string

// Replace
// El método replace() retorna uma nova string com algum ou todas as combinações de um padrão substituído por um substituto. O padrão pode ser uma string ou uma RegExp, e o substituto pode ser uma string ou uma função a ser chamada para cada combinação.

var str2 = "Mr Blue has a blue house and a blue car";
var res = str2.replace(/house/g, "casa");
console.log(res);

//// Numbers ////

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

//// Arrays ////

// Pop: Elimina el ultimo elemento de un array y lo devuelve.

var array = ["pedro", "juan", "jose"];
console.log("Original:", array);
var resultado = array.pop();
console.log("Removido:", resultado);
console.log("Resultado: ", array);

// Shift: Elimina el primer elemento de un array y lo devuelve.

var array = ["pedro", "juan", "jose"];
console.log("Original:", array);
var resultado = array.shift();
console.log("Removido:", resultado);
console.log("Resultado: ", array);

// Push: Agrega un elemento al array al final de la lista.

var array = ["pedro", "juan", "jose"];
console.log("Original:", array);
var resultado = array.push("William", "Pinto");
console.log("Resultado: ", array);

// Reverse: Invierte el orden de los elementos de un array.

var array = [1, 2, 3, 4, 5];
console.log("Original:", array)
var resultado = array.reverse();
console.log("Resultado", array);

// Unshift: Agrega uno o mas elementos al inicio del array, y devuleve la nueva longitud del array.

var array = ["pedro", "juan", "jose"];
console.log("Original:", array);
var resultado = array.unshift("William", "Pinto");
console.log("Resultado: ", array);

// Sort: Ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado.

var numeros = [2, 5, 100, 14, 10];
var cadena = ["Manzana", "Pera", "Coco", "Guayaba"]
cadena.sort();
numeros.sort((a,b)=> a - b);
console.log(cadena);
console.log(numeros);

// Splice: Cambia el contenido de un array eliminando existentes y/o agregando nuevos elementos. ejemplo.splice(comienza, eliminar, elemento)

var cadena = ["Manzana", "Pera", "Coco", "Guayaba"]
console.log("Original:", cadena);
cadena.splice(1, 0, "Zandia", "Cambur");
console.log("Modificado:", cadena);

// Join: Permite unir todos los elementos de un array en un string.

var frutas = ["Banana", "Orange", "Apple", "Mango"];
var resultado = frutas.join(" - ")
console.log(resultado);

var word = "Hola Mundo";
var word_array = word.split(" ");
var array_reverse = word_array.reverse();
console.log(array_reverse.join(" , "));

// Slice: Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

var frutas = ["Banana", "Orange", "Apple", "Mango", "Pera", "Cambur"]
var resultado = frutas.slice(1, 3)
console.log(resultado);

// Length: Retorna la longitud de un array.

var frutas = ["Banana", "Orange", "Apple", "Mango"];
console.log(frutas.length);

// IndexOf

// Retorna el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.

var nombres = [
  "Juan",
  "Pedro",
  "Ana",
  "Carlos",
  "Victor",
  "Eva",
  "Ana",
  "Maria",
];

console.log(nombres.indexOf("Ana"));

//LastIndefOf: Devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1.

var nombres = [
  "Juan",
  "Pedro",
  "Ana",
  "Carlos",
  "Victor",
  "Eva",
  "Ana",
  "Maria",
];

console.log(nombres.lastIndexOf("Ana"));

// Includes

// Determina si un array incluye un determinado elemento, devuelve true o false según corresponda.

var cedulas = [123456, 789456, 123456, 456789];
console.log(cedulas.includes(12345689));

// Tostring:  Convierte una cadena a String

var cadena = ["pedro", "maria"];
var resultado = cadena.toString();
console.log(typeof resultado);
console.log(resultado[1]);

// Filter: Crea un nuevo array con todos los elementos que cumplan la condicion.

var nombres = ["Juan", "Pedro", "Ana", "Carlos","Victor", "Eva", "Ana", "Maria"];

resultado = nombres.filter(name=> name.length > 4)
console.log(resultado)

// ForEach: Ejecuta la funcion indicada una vez para cada elemento

//// Objects

// Includes

// Determina si un objeto tiene una propiedad con el nombre especificado.

var persona = { nombre: "Juan", edad: 25, sexo: "Masculino" };

console.log(persona.hasOwnProperty("nombre"));