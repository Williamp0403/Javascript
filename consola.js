// ----- Funciones de registro ----- //

// - assert() [NO ESTANDAR]: Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparecera nada.

console.assert(5 > 10);

//- clear(): Limpia la consola.

console.clear();

// - error(): Muestra un mensaje informativo a la Consola Web.

console.error("Error");

// info(): Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la Consola Web.

console.info("Compartiendo informacion mediante la consola con .info()");

// - log(): Muestra un mensaje en la consola web (o del interpetre JavaScript).

console.log("Compartiendo informacion mediante la consola con .log()");

// - table(): Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en consola.

console.table([1,11,15,3,6,7,1,57,88,7,44,4]);

// - warn(): Imprime un mensaje de advertencia en la Consola Web.

 console.warn("Mensaje de advertencia mediante .warn()");

// - dir() [NO ESTANDAR]: Despliega una lista interactiva de las propiedades del objeto JavaScript especificado.

console.dir([2,4,4,5,2,11,6,65,3,2]);

// ----- Funciones de conteo ----- //

// - count(): Registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional una etiqueta.

console.count();
console.count();
console.count();
console.count();
console.count();

// - countReset(): Resetea el contador console.count().

console.count();
console.count();
console.count();
console.countReset();
console.count();
console.count();

// ----- Funciones de agrupacion ----- //

// - group(): Crea un nuevo grupo en linea de registro de la consola web.

// - grupEnd(): Remueve un grupo en linea en el registro de la consola web.

// - groupCollapsed(): Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.

// ----- Funciones de temporizacion ----- //

// - time(): Inicia un temporizador.

console.time();

// - timeLog(): Registra el valor actual de un temporizado.

console.timeLog();

// - timeEnd():Detiene un temporizador

console.timeEnd();

// ----- Modificar el estilo del texto ----- //

console.log("%cHola", "color:white; background-color:black; padding:20px; margin:20px; border:solid 2px blue");

