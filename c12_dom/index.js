
// 1. capturamos el div con el id de root
let root = document.getElementById("root");

// 2. Creamos la barra de navegacion
let nav = document.createElement("nav");

// 3. le agregamos las clases de bootstrap a la barra de navegacion
nav.className = "navbar navbar-expand-lg bg-body-tertiary";

//4. Creamos el ul dentro de la barra de navegacion
let ul = document.createElement("ul");

// 5. le agregamos las clases de bootstrap al ul
ul.className = "navbar-nav";

// 6. Creamos los li dentro del ul
let li = document.createElement("li");

let li2 = document.createElement("li");

// 7. le agregamos las clases de bootstrap al li
li.className = "nav-item";

// 8. Creamos el a dentro del li
let a = document.createElement("a");

// 9. le agregamos las clases de bootstrap al a
a.className = "navbar-brand";
a.href = "login.html";
a.textContent = "Login";
a.ariaCurrent = "page";
a.style = "margin-left: 40px; text-transform: uppercase;"; // le agregamos un margen al a

let b = document.createElement("a");
b.className = "navbar-brand";
b.href = "index.html";
b.textContent = "Inicio";
b.ariaCurrent = "page";
b.style = "margin-left: 40px; text-transform: uppercase;"; // le agregamos un margen al b

// 10. Agregamos a su contenedor padre todos los elementos creados
li.appendChild(a);
li2.appendChild(b);
ul.appendChild(li);
ul.appendChild(li2);
nav.appendChild(ul);
root.appendChild(nav);