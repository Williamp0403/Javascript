// Calculo simple de promedio de un estudiante

function promedio (nota1, nota2, nota3) {

    resultado = (nota1 + nota2 + nota3) / 3;

    if (resultado >= 9.5  && resultado <= 20)
        console.log(`Tu nota final es ${resultado} aprobaste :)`);
    else if (resultado > 20){
        console.log(`Introduciste tus notas mal, tu nota final es ${resultado}, el limimte es 20`);
    }
    else {
        console.log(`Tu nota final es ${resultado} reprobaste :(`);
    }
}

promedio(15, 14, 20);

// Calculo de puntaje de equipo, teniendo en cuenta que al ganar obtendar 3pts, al empatar 1pts y al perder 0pts.

function equipo (ganados, empatados, perdidos) {
     ganados *= 3;
     puntaje = ganados + empatados
     console.log("El puntaje del equipo es", puntaje);
}

equipo(2, 2, 1)

// Se desea calcular el costo total de un articulo que tiene un precio cualquiera aplicando un 20% de descuento

let articulo1 = function (precio) {

    descuento = precio * 0.20;
    console.log(`El articulo cuesta "${precio}$" su descuento es ${descuento}$`);
    
}
 articulo1(100);

// de otra forma pero colocando el descuento que uno quiera

let articulo2 = function (descuento) {
    descuento /= 100;
    precio = 100 * descuento;
    console.log(`el descuento del articulo es ${precio}$`);  
}
articulo2(40);