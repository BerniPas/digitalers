
// creamos una variable de tipo arreglo
let productos = [];

function cargarDatos() {

    // dejamos que el user introduzca datos
    let producto = prompt("Introduce un producto: ");

    // cargamos el dato en el arreglo con el método push
    productos.push(producto);
    
}


function mostrarDatos() {

     // imprimimos la cantidad de productos
    console.log(`La cantidad de productos cargados es: ${productos.length}`);

    // imprimimos el arreglo
    console.log(productos);
    
}