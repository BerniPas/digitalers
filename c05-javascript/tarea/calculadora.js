

// 1. Pedir a los users los datos
let datoUno = prompt("Introduce el primer dato: ")

console.log("el dato sugerido es: " + datoUno);

let datoDos = prompt("Introduce el siguiente número: ")

console.log("La segunda data es: " + datoDos);

//2. Convertir el tipo de dato de String a Number

// "5000" => 5000
// nueva variable
datoAEntero = parseInt(datoUno)

//con la misma variable
datoDos = parseInt(datoDos)


//3. Realizo la operación de la suma

let resultado;

resultado = datoAEntero + datoDos;

console.log("El resultado de la suma es " + resultado);

//4. Comunicamos al user el resultado
alert("El resultado de la SUMA es: " + resultado);



