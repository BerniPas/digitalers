
/* imprime en la consola información para el user */
console.log('1. Estoy en el archivo externo de JS');

/* JS: lenguaje de programación interpretado */
/* Tiene palabras reservadas */
/* if, for, const, let  */

/* Variables: son espacios de memoria para guardar info que usamos despues */
let nombre; // declaración de una variable: crear un espacio de memoria para info

// asignación de una variable
nombre = 'Pepe'; // el punto y coma es opcional, variable de tipo string

console.log(nombre);

var saldo = 3500; // la declaracción y asignación de la variable 

saldo = 1000; // variable de tipo numerica

console.log(saldo);


console.log('=========================================================');

// Ventanas en JS
// 1. Alert: lanza una info al user
alert('Bienvenido a nuestra App de Digitalers')

// 2. Confirmar: lanza una pregunta que requiere una respuesta
var respuesta = confirm('¿Está seguro de cerrar sesión?')
//  me responde con variables booleanas
// true = verdadero
// false = falso

// Imprimo en consola la respuesta del user
console.log(respuesta);


// 3. Prompt: sirve para introducir datos al sistema
// JS es casesensitive: reconoce mayúsculas y minúsculas
var nombrE = prompt("Introduce tu nombre por favor: ")

// imprimimos la info del user 
console.log(nombrE);



console.log('=========================================================');


// Ejecución de JS con el comando node nombre del archivo. Ej node index.js
// No se ejecuta JS en la terminal cuando tiene funcionalidades del navegador


// constante: no cambia el valor durante la ejecuciòn de la aplicaciòn
const DNI = 123456789;

// las constantes no se pueden reasignar
//DNI = 254544654635; // tira un error en ejecuciòn 



