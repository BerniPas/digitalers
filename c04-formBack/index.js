
// Variables que ejecutan express como servidor web
const express = require('express');
const app = express();

// Puerto donde se ejecutará el servidor
const PORT = 9000;

// Funciones para conocer lo que se envía desde el formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruto del HOME
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para recibir los datos del formulario
app.post('/form', (req, res) => {

    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;

    console.log(`Nombre: ${nombre}, Email: ${email}, Password: ${password}`);

    res.send(`<h1>Datos recibidos</h1>
            <p>Nombre: ${nombre}</p>
            <p>Email: ${email}</p>
            <p>Password: ${password}</p>
            <a href="/">Volver al formulario</a>`
    );

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});