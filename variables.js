// Variable: Es un espacio en memoria que se reserva para almacenar un valor.
// Tipos de variables: var, let, const

// Var: Es una variable que puede ser reasignada y redeclarada.
// Let: Es una variable que puede ser reasignada pero no redeclarada.
// Const: Es una variable que no puede ser reasignada ni redeclarada.

// Scope de la aplicación: Es el alcance que tiene una variable en el código.
// Puede ser global o local.

var nombre = "Juan";
console.log("Mi nombre es " + nombre);
console.log(typeof nombre);

var edad = 25;
console.log("Mi edad es " + edad);

var esEstudiante = true;
console.log("¿Es estudiante? " + esEstudiante);
console.log(typeof esEstudiante);

const PI = 3.1416;
console.log("El valor de PI es " + PI);

// Flujo de una variable: Declaración, Inicialización, Uso

var puestoDeTrabajo;
console.log(typeof puestoDeTrabajo);
puestoDeTrabajo = "Desarrollador Web";
console.log("Mi puesto de trabajo es " + puestoDeTrabajo);