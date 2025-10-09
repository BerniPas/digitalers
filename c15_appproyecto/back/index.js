
// Variables que ejecutan express como servidor web
const express = require('express');
const app = express();

// Cors para permitir las peticiones desde otros dominios
const cors = require('cors');

// Puerto donde se ejecutará el servidor
const PORT = 9000; //3000 CRA     5173 VITE

// Funciones para conocer lo que se envía desde el formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Ruta del HOME
app.get('/', (req, res) => {
    res.send(
        `<h1>Servidor Express</h1>
        <p>Servidor ejecutándose en el puerto ${PORT}</p>
        `
    )
});

// Ruta para recibir los datos del formulario
app.post('/login', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    console.log(`Email: ${email}, Password: ${password}`);

    if (email === 'pepe@gmail.com' && password === '12345678') {
        res.status(200).send({
            status: 'ok',
            message: 'Login correcto',
            data: {
                name: 'Pepe',
                email: 'pepe@gmail.com'
            }
        });
    } else {
        res.status(401).send({
            status: 'error',
            message: 'Login fallido',
            data: null
        });
    }

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
