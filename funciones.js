// Funciones Declarativas
// Funciones de Expresión
// Arrow Functions -> Funciones Flecha

// Funciones Declarativas

// 1. Palabra reservada function
// 2. Nombre de la función
// 3. Lista de parámetros
// 4. { Bloque de código }
// 5. Return (opcional) -> nos permite devolver un valor
// 6. Llamado a la función

function pingPong() {
    console.log("Ping Pong");
  }
  
  pingPong();
  console.log(typeof pingPong());
  
  function printName(name, edad) {
    console.log("Hola mi nombre es: " + name + " y tengo " + edad + " años");
  }
  
  printName("Eduardo", 30);
  
  var resultado = 0;
  function promedioAlumno(nota1, nota2, nota3) {
    resultado = (nota1 + nota2 + nota3) / 3;
    return resultado;
  }
  
  promedioAlumno(15, 14, 8);
  console.log("Resultado", resultado);
  
  console.log("Suma", suma(5, 5));
  
  function suma(a, b) {
    return a + b;
  }
  
  numero1 = suma(5, 5);
  numero2 = 3;
  
  console.log("Suma", numero1 + numero2);
  
  // Funciones de Expresión
  
  // Las funciones de expresión son aquellas que se almacenan en una variable.
  // 1. Declarar un variable, puede ser var o const.
  // 2. Asignarle una función anónima. -> función sin nombre.
  // 3. La función puede llevar parámetros o no.
  // 4. Bloque de código.
  // 5. Llamar a la variable/función.
  
  var suma = function (a, b) {
    return a + b;
  };
  
  console.log(suma(1, 2));
  
  const fullName = function (name, lastName) {
    return name + " " + lastName;
  };
  
  console.log(fullName("Eduardo", "García"));
  
  // Arrow Functions -> Funciones Flecha
  
  // Las arrow functions son una forma abreviada de escribir funciones anónimas.
  // 1. Se declaran con una variable.
  // 2. Se declaran con una flecha =>, no confundir con el mayor igual( >= ).
  // 3. Pueden llevar parámetros o no.
  // 4. Bloque de código.
  // 5. Llamar a la variable/función.
  
  const resta = (a, b) => {
    return a - b;
  };
  
  console.log(resta(5, 3));
  
  const multiplicacion = (a, b) => a * b;
  console.log(multiplicacion(5, 5));