
// creamos una variable global de tipo arreglo
let productos = [];

function cargarDatos() {

    // 1. dejamos que el user introduzca datos
    let producto = prompt("Introduce un producto: ");

    // 2. cargamos el dato en el arreglo con el método push
    productos.push(producto);
    
}


function mostrarDatos() {

     // imprimimos la cantidad de productos
    console.log(`La cantidad de productos cargados es: ${productos.length}`);

    // imprimimos el arreglo
    console.log(productos);

    // imprimir los datos con un bucle
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i]);
    }

    console.log("=================================");

    // bucle con un for in
    for (const producto in productos) {
        console.log(producto);// imprime el índice
    }
        
    

    
}

// Funciones: bloques de código, que se repiten y se ejecutan al llamarlos
//1. palabra reservada 2. nombre 3. info
function arquero(guantes, otraCamiseta) {

    //creamos una variable local
    let productos = 'Tengo 3 kilos de arroz'
    console.log('Atajo penales como el Dibu');
    console.log(productos);
    //console.log(producto); variable de otra función

    if(guantes && otraCamiseta) {
        console.log(guantes);
        console.log(otraCamiseta);
    } else{
        console.log("El arquero no tiene guantes ni camiseta");
    }
/*     if(otraCamiseta == true) {

        console.log(otraCamiseta);
    } */

}


// esta función es la que se ejecuta al final, ya que tiene el mismo nombre
/* function arquero() {
    console.log("Soy otro arquero");
    
} */


// Llamamos a la función para que realice la tarea sin parámetros
arquero();

console.log('===================================================');

let guantes = "Son geniles los guantes";
let otraCamiseta = "naranja"
// Llamamos a la misma función y le pasamos info
arquero(guantes, otraCamiseta);
