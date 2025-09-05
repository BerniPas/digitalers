
// capturo el elemento h3
let user = document.getElementById("user");

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
