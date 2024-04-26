console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("11");
console.log("12");

// While

// var numero = 1;

// 1. variable de control
// 2. user palabra reservada while
// 3. (condición)
// 4. { bloque de código }
// 5. Incrementar variable de control en cada iteracion
var numero = 0
while (numero < 11) {
  console.log(numero);
  numero++;
  // numero = numero + 1;
  // numero += 1;
}

// while (true) {
//   console.log(numero);
//   numero++;
//   if (numero > 12) {
//     break;
//   }
// }

// Do while
do {
  console.log(numero);
  numero++;
} while (false);

i = 1;

while (i <= 100) {
  if (i % 2 == 0) {
    console.log("El numero", i, "es Par");
  } else {
    console.log(`El numero ${i} es Impar`);
  }
  i++;
}

// For

// 1. Palabra reservada for
// 2. (variable de control; condición; incremento)
// 3. { bloque de código }

// for (var i = 0; i < 10; i++) {

for (var i = 1; i <= 1000; i = i * 2) {
  console.log(i);
}

// Formas de concatenar variables

var name = "Juan";
var lastName = "Perez";

var fullName = `${name} ${lastName}`;
var fullName2 = name + " " + lastName;
console.log(fullName);
console.log(fullName2);

// For in y For on

var datos = ["William", "Jose", "Pinto", "Rodriguez"];

for (info in datos) {
    console.log(info);
}

for (info of datos) {
    console.log(info);
}
