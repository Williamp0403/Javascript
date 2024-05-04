// Arrays - Arreglos
// Objetos

// Arrays

// Un array es una estructura de datos que nos permite almacenar varios valores en una sola variable.
// Los valores pueden ser de cualquier tipo de dato.
// Cada valor tiene una posición o índice que empieza desde el 0.
// Se declaran con corchetes [] y los distintos valores se separan por comas.
// Se pueden inicializar con valores o vacíos.
// Se pueden acceder a los valores con el índice.

// Operaciones Basicas de una estructura de datos

// Insertar: Agregar un elemento al final de la estructura de datos.
// Eliminar: Quitar un elemento de la estructura de datos.
// Buscar: Encontrar un elemento en la estructura de datos.

var numeros = [1, 2, 3, 4, 5];
var nombres = [];

console.log(typeof numeros);

var frutas = ["manzana", "pera", "uva", "fresa"];

console.log(frutas);

var mixto = [1, "hola", true, 3.1416];

// Metodos de los arreglos

// length: Devuelve la longitud del arreglo.

console.log("Length", frutas.length);

// push: Agrega un elemento al final del arreglo.

frutas.push("mango");
console.log("Push", frutas);

// pop: Elimina el último elemento del arreglo.

frutas.pop();
console.log("Pop", frutas);

// shift: Elimina el primer elemento del arreglo.

frutas.shift();
console.log("Shift", frutas);

// unshift: Agrega un elemento al principio del arreglo.

frutas.unshift("kiwi");
console.log("Unshift", frutas);

// splice: Agrega o elimina elementos de un arreglo.

frutas.splice(1, 0, "sandia");
console.log("Splice", frutas);

// Objects

// Un objeto es una estructura de datos que nos permite almacenar varios valores en una sola variable.
// Los valores pueden ser de cualquier tipo de dato.
// Cada valor tiene una clave o nombre -> clave: valor.
// Se declaran con llaves {} y los distintos valores se separan por comas.
// Se pueden inicializar con valores o vacíos.
// Se pueden acceder a los valores con la clave -> objeto.clave1.

var persona = { nombre: "Juan", edad: 25, esEstudiante: true };

console.log(typeof persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.esEstudiante);

var personas = [
  {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true,
    materias: ["Matematicas", "Fisica"],
  },
  {
    nombre: "Maria",
    edad: 30,
    esEstudiante: false,
    materias: ["Quimica", "Biologia"],
  },
];

// Imprimiendo datos desde un arreglo de objetos
console.log(personas[0].nombre);
console.log(personas[0].edad);
console.log(personas[0].materias[0]);

// Metodos de los objetos

// Object.keys: Devuelve un arreglo con las claves del objeto.

console.log("Claves", Object.keys(persona));

// Object.values: Devuelve un arreglo con los valores del objeto.

console.log("Valores", Object.values(persona));

// Object.entries: Devuelve un arreglo con los pares clave: valor del objeto.

console.log("Entradas", Object.entries(persona));

// Delete: Elimina una propiedad del objeto.

delete persona.edad;
console.log("Despues del Delete", persona);

// Insertar: Agregar una propiedad al objeto.

persona.edad = 25;
persona.puestoDeTrabajo = "Desarrollador Web";
persona.edad = 26;
console.log("Despues del Insertar", persona);