// Comparador de numeros

var a = 15
var b = 10
if (a > b) {
  console.log("El primer número", a , "es mayor que", b); 
} else if (a < b) {
  console.log("el primer número", a , "es menor que", b);
} else {
  console.log("los números", a ,"y", b , "Son iguales");
}

//Calculadora de calificaciones

var nota_b = 10
var nota_c = 10
var nota_a = 10
var nota_final = (nota_a + nota_b + nota_c) / 3;
if (nota_final >= 17 && nota_final <= 20) {
  console.log("Tu nota final es mas de 17", nota_final);
} else if (nota_final >= 13 && nota_final <= 16 ) {
  console.log("tu nota final va de 13 a 16", nota_final);
} else if (nota_final >= 10 && nota_final <= 12) {
  console.log("tu nota final va de 10 a 12", nota_final);
} else if (nota_final >=7 && nota_final <=9) {
  console.log("tu nota final va de 7 a 9" , nota_final);
} else {
  console.log("tu nota final es menor a 6", nota_final);
}

//Verificador de edad para pension

var edad = 60
if (edad >= 55) {
  console.log("tu edad es", edad , "eres mayor");
} else {
  console.log ("tu edad es", edad ,"eres menor");
}

//Comparador de Números Par/Impar

a = 7
if (a % 2 === 0) {
  console.log("El número", a , "es par")
} else {
  console.log("El número", a , "es impar")
}

//Verificador de Número Positivo/Negativo/Cero

var numero = -10
if (numero > 0) {
  console.log("El número", numero , "es positivo");
} else if (numero < 0) {
  console.log("El número", numero , "es negativo");
} else {
  console.log("El número es", numero);
}


