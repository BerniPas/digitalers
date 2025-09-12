

// 1. obtendo los datos del localStorage sin PARSEAR
let listado = localStorage.getItem("listadoProductos");

// imprimo en consola el listado de productos
//console.log(listadoProductos);

// 1.b parseo los datos del localStorage para convertirlos en un arreglo de objetos
let listadoProductos = JSON.parse(localStorage.getItem("listadoProductos"));

// 2. capturo el elemento donde voy a mostrar los productos
let parrafo = document.getElementById("pruebaData");

//3. imprimo los productos en el HTML como prueba
parrafo.innerText = listado;


// Arranco con la Tabla de Productos
//4. capturo el div donde voy a mostrar los productos
let productos = document.getElementById("productos");

// Paso 1: creamos el elemento para inyectarlo en el HTML
let tabla = document.createElement("table");

// le agregamos una clase de bootstrap
tabla.className = "table table-striped";

//creamos el thead
let thead = document.createElement("thead");

//crearmos el tbody
let tbody = document.createElement("tbody");

//creamos una fila para el thead
let filaThead = document.createElement("tr");

//creamos las celdas del thead
let celda1Thead = document.createElement("th");
celda1Thead.scope = "col";
celda1Thead.textContent = "Nombre";

let celda2Thead = document.createElement("th");
celda2Thead.scope = "col";
celda2Thead.textContent = "Precio";

let celda3Thead = document.createElement("th");
celda3Thead.scope = "col";
celda3Thead.textContent = "Stock";

//agregamos las celdas a la fila
filaThead.appendChild(celda1Thead);// Nombre
filaThead.appendChild(celda2Thead);// Precio
filaThead.appendChild(celda3Thead);// Stock

//subimos la fila al thead
thead.appendChild(filaThead);

//creamos las filas del tbody
let filaBody = document.createElement("tr");

//creamos las primer celda del tbody  
let celda1Body = document.createElement("td");
celda1Body.textContent = `${listadoProductos[0].nombre}`;  

let celda2Body = document.createElement("td");
celda2Body.textContent = `${listadoProductos[0].precio}`;

let celda3Body = document.createElement("td");
celda3Body.textContent = `${listadoProductos[0].stock}`;

// creamos otra fila del tbody
let filaBody2 = document.createElement("tr");


//tarea: crear las celdas de la segunda fila del tbody con los datos del segundo producto

//agregamos las celdas a la fila
filaBody.appendChild(celda1Body);// Nombre
filaBody.appendChild(celda2Body);// Precio
filaBody.appendChild(celda3Body);// Stock

//agregamos la fila al tbody
tbody.appendChild(filaBody);

//le agregamos la cebecera de la tabla a la tabla
tabla.appendChild(thead);

// le agregamos el cuerpo de la tabla a la tabla
tabla.appendChild(tbody);

// Paso 2: agregamos un texto al elemento
//tabla.textContent = "Tabla de Productos";

// Paso 3: agregamos la tabla al div productos
productos.appendChild(tabla);



// función para eliminar los datos del localStorage
const eliminarDatos = () => {
    localStorage.clear();
    location.reload();  // recargo la página para que se vean los cambios
}