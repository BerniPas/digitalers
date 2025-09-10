

// 1. obtendo los datos del localStorage
let listadoProductos = localStorage.getItem("listadoProductos");

console.log(listadoProductos);

let productos = document.getElementById("productos");

productos.innerText = listadoProductos;
