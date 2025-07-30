
console.log("Operadores");

let nombre; // Declaracion de variable

nombre = "Juan"; // Asignacion de variable =

let apellido = "Perez"; // Declaracion y asignacion de variable


// Concatenacion + de cadenas 1
console.log('Buenas ' + nombre +  ' ' + apellido)

// Concatenacion + de cadenas 2
console.log("Buenas " + nombre +  " " + apellido);

// Concatenacion + de cadenas 3
console.log(`Buenas ${nombre} ${apellido}`)

console.log('===========================================================');

// 2. Operadores matemáticos + - * / % < > <= >= !=

let numUno = 50
let numDos = 45

const iva = 21;

// JAVA
//int numeroUno = 50
//int numeroDos = 25
//boolean compar = false
//float interes = 1.5

// TypeScript
//let numeroUno: int = 50
//let boolean: boolean = false

let resultado;

resultado = numUno + numDos;
console.log("El resultado de la suma es: " + resultado)

resultado = numUno - numDos;
console.log("El resultado de la resta es: " + resultado)

resultado = numUno * numDos;
console.log('El resultado de la multiplicación es: ' + resultado)

resultado = numUno / numDos;
console.log("El resultado de la división es: " + resultado)

resultado = numUno % numDos;
console.log("El resultado del módulo es: " + resultado)

console.log('===========================================================');

// Relacionales

resultado = numUno < numDos // 50 menor que 28 false
console.log(resultado);

resultado = numUno > numDos // 50 mayor que 25 true
console.log(resultado)

resultado = numUno != numDos //
console.log(resultado);

resultado = numUno == numDos
console.log(resultado);

resultado = numUno === numDos
console.log(resultado)


console.log('===========================================================');

// Condicionales
// si => true
/* if (condition) {
    // se ejecuta el dódigo de acá
} */

edad = 17

resultado = edad > 18

console.log(resultado);

if (edad > 18) {// solo se ejecuta si la condición es true
    console.log('Podes viajar sin la autorización de tus padres')
}

resultado = numUno != numDos
console.log(resultado);

if (numUno === numDos){
    console.log('Puedes acceder a tus cuentas');
    
}else{ // si es el resultado es false
    console.log('Los codigos de acceso con incorrectos');
}

console.log('========================================================');

// Ejercicio con ventanas
let user = prompt('Indica tu nombre: ');

if(user.length > 2){// funcion de cuenta la longitud del nombre del usuario
    alert(`Bienvenido ${user}`)
}else{
    alert('El nombre de usuario tiene que ser mayor a 2 caracteres')
    location.href = "error.html" // redirige al user a una página específica
}

console.log('========================================================');

// Ejercicio
// Pequeña calculadora que: 
// 1. reciba dos datos desde el prompt
// 2. realice todas las operaciones matemáticas 
// 3. muestre al user en una ventana de confim los resultados













