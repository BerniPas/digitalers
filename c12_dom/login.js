
// 1.capturamos el botón
let botonLogin = document.getElementById("login");

// veamos el botonLogin
console.log(botonLogin);


// 2. Agrego un evento al elemento, callback: una función que recibe de argumento otra función
botonLogin.addEventListener("click", login)

// opción b, con una función anónima
//botonLogin.addEventListener("click", function() {})

// función que ejecuta el login
function login(e) {
    //alert("Login correcto")

    e.preventDefault(); // previene la ejecución del evento

    console.log(e);
    

    //1. Capturamos el input del email 
    let email = document.getElementById("email").value;
    console.log(email);

    //2. capturamos el input del password
    let password = document.getElementById("password").value;
    console.log(password);
    

    //3. procesamos los datos
    if(email == "admin@gmail.com" && password == "12345678") {
        alert("Bienvenido Admin Pepe");
        location.href = "productos.html";
    }else{
        alert("Contraseña o Email incorrectos");
        location.href="error.html";
    }
    
}






/* (()=>{
    console.log("Soy anónimo");
})() */

/* const flecha = () => {}

let pepe = function () {
    alert("algo");
} */