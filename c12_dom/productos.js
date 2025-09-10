
// capturo el elemento h3
let user = document.getElementById("user");

// Funciones y elementos del User
user.innerText = "Bienvenido Pepe";

// capturamos el titulo de la página
let titulo = document.getElementById("titulo");
let borrar = document.getElementById("borrar");
let mostrar = document.getElementById("mostrar");


function mostrarDatos() {
    user.hidden = false;
    titulo.innerHTML = "<p>Bienvenido Pepe</p>";
    mostrar.textContent = "Datos Escritos";
}

function borrarDatos() {
    user.hidden = true;
    titulo.innerHTML = "<h1>Formulario Productos</h1>";
}


// Funciones y elementos del Formulario

// declaro las variables de los inputs
let nombreProducto = "";
let precioProducto = "";
let stockProducto = "";
let descripcionProducto = "";

// capturo el formulario
let formularioProducto = document.getElementById("formularioProducto");

// capturo el botón y le agrego un evento
let botonGuardar = document.getElementById("botonGuardar");

// Arreglo para guardar los productos
let listadoProductos = [];

botonGuardar.addEventListener("click", function (e) {

    // Evito que se recargue la página
    e.preventDefault();

    // Capturo los valores de los inputs
    nombreProducto = document.getElementById("nombreProducto").value;
    precioProducto = parseFloat(document.getElementById("precioProducto").value);
    stockProducto = parseInt(document.getElementById("stockProducto").value);
    descripcionProducto = document.getElementById("descripcionProducto").value;

    let precioHelp = document.getElementById("precioHelp");

    // validamos que los campos no estén vacíos
    if (nombreProducto === "" || isNaN(precioProducto) || isNaN(stockProducto) || descripcionProducto === "") {
        alert("Por favor, complete todos los campos del formulario.");

        // Si el precio no es un número válido, muestro un mensaje de ayuda
        precioHelp.textContent = " * El precio debe ser un número válido.";
        return; // Salimos de la función si hay campos vacíos
    }

    // Creo un objeto literal con los datos del producto
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        stock: stockProducto,
        descripcion: descripcionProducto
    };

    // imprimo el objeto producto en consola
    console.log(producto);

    // agrego el producto al listado
    listadoProductos.push(producto);

    // guardo el arreglo en el localStorage
    localStorage.setItem("listadoProductos", JSON.stringify(listadoProductos));

    // imprimo el arreglo en consola
    console.log(listadoProductos);

    // reseteo el formulario
    //formularioProducto.reset();
    limpiarFormulario();

    // limpio el mensaje de ayuda
    precioHelp.textContent = ""; 

    // pongo el foco en el primer input
    let focusNombre =  document.getElementById("nombreProducto");
    focusNombre.focus();
});


// función para limpiar el formulario
const limpiarFormulario = () => {
    document.getElementById("nombreProducto").value = "";
    document.getElementById("precioProducto").value = "";
    document.getElementById("stockProducto").value = "";
    document.getElementById("descripcionProducto").value = "";
};
