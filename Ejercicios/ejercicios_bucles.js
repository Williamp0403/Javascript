// Haciendo un triangulo con bucles escribe un bucle que realice siete llamadas a console.log para moestrar el siguiente triangulo:
//                   #
//                   ##                   
//                   ###
//                   ####
//                   #####
//                   ######
//                   #######

let a = "#";
while (a <= "#######") {
    console.log(a);
    a = a + "#";   
}

// Escribe un programa que use console.log para imprimir todos los numeros del 1 al 100, con dos excepciones. Para los numeros divisibles por 3, imprime "Fizz" en lugar del numero, y para los numeros divisibles por 5 (y no por 3), imprime "Buzz" en su lugar. Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los numeros que son divisibles  por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los numeros que son divisibles solo por uno de esos).

var numero = 0;

while (numero < 100) {
    numero++  
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("FizzBuzz");
        continue;
    } else if (numero % 3 == 0) {
        console.log("Fizz");
        continue;
    } else if (numero % 5 == 0 ) {
        console.log("Buzz");
        continue;
    }     
    console.log(numero);
}

// Tablero de ajedrez: Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres de salto de linea para separar las lineas. En cada posicion del tablero hay un caracter de espacio o un caracter "#". Los caracteres deben formar un tablero de ajedrez. Al pasar esta cadena a console.log deberia mostrar algo como esto: 
//  # # # #
// # # # #
//  # # # # 
// # # # # 
//  # # # #
// # # # #
//  # # # # 
// # # # #

let size = 8;
let board = "";

for (i = 0; i < size; i++) {   
    for(j = 0; j < size; j++) {

    if ((i+j) % 2 !== 0) {
        board += "#";
    } else {
        board += " ";
    }
    }
    board += "\n"
    
}
console.log(board);
 

    var row1 = " # # # #";
    var row2 = "# # # # "

    for(i = 1; i <= 4; i++){
        console.log(row1);
        console.log(row2);
    }