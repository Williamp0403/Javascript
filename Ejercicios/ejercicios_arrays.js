// Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array que contenga todos los números desde inicio hasta fin, incluyendo fin.

function range(inicio, fin) {
    let array = [];
    for(i = inicio; i <= fin; i++) {
      array.push(i);       
    }
      console.log(array); 
  }  
  range(1, 7);

// Los arrays tienen un método reverse que cambia el array invirtiendo el orden en el que aparecen sus elementos. Para este ejercicio, escribe dos funciones, reverseArray y reverseArrayInPlace. La primera, reverseArray, debería tomar un array como argumento y producir un nuevo array que tenga los mismos elementos en orden inverso. La segunda, reverseArrayInPlace, debería hacer lo que hace el método reverse: modificar el array dado como argumento invirtiendo sus elementos. Ninguna de las funciones puede utilizar el método reverse estandar.
  
function reverseArray(array) {  
  arrayReverse = [];
  for(i = array.length; i >= array[0]; i--) {
    arrayReverse.push(i);  
  }
  console.log(arrayReverse);
 }
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// La funcion estandar Math.min que devuelve su menor argumento. Ahora podemos escribir una funcion como esa nosotro mismos, define la funcion min que toda dos argumentos numericos y devuelva su minimo

function MathMin (num1 , num2) {
    if (num1 < num2) {
      console.log(num1)
    } else if (num2 < num1) {
      console.log(num2)
    } else {
      console.log("los numeros son iguales")
    }   
 }
MathMin(21 , 4)

// Crea una función de búsqueda que pueda recibir un parámetro de búsqueda y un arreglo de objetos y devuelva el objeto especifico si lo encuentra por el parámetro de búsqueda y en caso contrario devuelva el mensaje de que no lo encontró

date = [
  {
    nombre: "William",
    apellido: "Pinto",
    edad: 20,
  },
  {
    nombre: "Juan",
    apellido: "Lopez",
    edad: 25,
  },
  {
    nombre: "Pedro",
    apellido: "Lugo",
    edad: 15,
  }
]

function búsqueda(buscar){

  for(i = 0; i < date.length; i++) {
     if(buscar == date[i].nombre){
      var encontrada = date[i];
      break;
     }
  }  
  if(encontrada == undefined) {
    console.log("Persona no encontrada");
  } else {
    console.log(encontrada);
  }
}
búsqueda("William");

// Calcula la suma de todos los elementos de un array

let numeros = [2, 4, 10, 20];
let suma = 0;

for(let i = 0; i < numeros.length; i++) { 
  suma += numeros[i];
}
console.log("La suma de todos los numeros del array es:", suma);

// Transforma un string y separalo por comas como un CSV, Ejemplo “Hola Mundo” -> [“Hola”, “Mundo”]

let string = "William Jose Pinto Rodriguez";
let stringArray = string.split(" ")

console.log( string, "->", stringArray)


//  Escribe una función que reciba un arreglo como parametro y retorne true si todos los valores son pares y false en caso contrario.

function par_o_impar(array) {

  for(i = 0; i < array.length; i++){
     numeros = array[i];
    if(numeros % 2 != 0){
       console.log(false);
       break;
    }
  }
   if(numeros % 2 == 0) {
    console.log(true)   
   }
}
par_o_impar([2, 4, 6, 3, 4, 10]);

// Tienes una lista(Arreglo) de objetos con los nombres de los miembros de una familia y su edad. Este script debe devolver dos objetos con los datos (nombre y edad) del miembro de mayor edad y del de menor edad. Ejemplo del arreglo [{nombre: “Ana”, edad: 42}, {nombre: “Jose”,  edad: “15"}, {nombre: “Pablo”, edad: 22}]

let array = [
  {
    nombre: "Ana",
    edad: 15,
  },
  {
    nombre: "Jose",
    edad: 78,
  },
  {
    nombre: "Pablo",
    edad: 42,
  },
  {
    nombre: "Juan",
    edad: 10,
  }
]

let array2 = [ ];

for(i = 0; i < array.length; i++) {
    array2.push(array[i].edad);
}
array2.sort((a, b) => b - a);

mayor = array2[0];
position = array2.length -1;
menor = array2[position];

for(i = 0; i < array2.length; i++) {
  if(mayor == array[i].edad) {
    mayorArray = array[i];
  } else if(menor == array[i].edad) {
    menorArray = array[i];
  }
}
console.log("El miembro con mayor edad es:" , mayorArray);
console.log("El miembro con mayor edad es:" , menorArray);

// . En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. Al primer array le llamaremos ocupados y al segundo libres. Ambos están llenos con 3 nombres. Debes crear una función rotar(lista1, lista2) que pase el primer nombre de la lista lista1 a l final de lista2, y luego el primero de la lista2 al final de lista1. Para ver que funciona escribe los arrays antes y después de usar esta función. Ejemplo:

// Por ejemplo: Inicialmente tenemos ocupados: Pedro, Abril, Camila y libres Alvaro, Rodrigo y Eva. Tras llamar a la funcion sale Pedro y entra Alvaro. Quedando Ocupados: Abril, Camila y Alvaro, Libres: Rodrigo, Eva y Pedro