

console.log('Listo  para la acción!!');

/* capturamos el valor del input del email */
let email = document.getElementById("email").value;

/* capturamos el valor del input del password */
let password = document.getElementById("password").value;

console.log(email); // imprimo la variable
console.log(password);

// Concatenar información con variables
console.log("El email del usuario es: " + email);

// Puedo concatenar con comillas simples
console.log('El password del usuario es: ' + password)

// Interpolar las variables
console.log(`EL usuario envió el email: ${email} y el password: ${password}`);


