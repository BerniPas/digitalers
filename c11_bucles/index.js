

// Tipos de variables
// arreglos o arrays
let manzana = 'manzana'
let naranja = 'naranja'
let platano = 'platano'

// indice        0            1         2
let frutas = ['manzana', 'naranja', 'platano'];

// indice         0            1       2
let empleados = ['Juan', 'Maria', 'Pedro', 'Mario', 'Anibal'];

// pueden incluir diferentes tipos de datos
let datos = ['Juan', 30, true];

// accediendo a los elementos
console.log(datos[0]); // 'Juan'
console.log(datos[1]); // 30
console.log(datos[2]); // tru

// imprimir las variables
console.log(manzana);
console.log(empleados);
console.log(datos);


// bucles for
// la variable - limite - paso
for(let index = 0; index < 15; index++){
    console.log(index);
}

// función que me cuenta la cantidad de elementos de un arreglo
console.log(`La cantidad de empleados es de: ${empleados.length}`);

// usamos laa función para el bucle for
for (let index = 0; index < empleados.length; index++) {
    console.log(empleados[index]);
}

console.log('===============================================');

for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]);
    
}

console.log('===============================================');

// objetos literales parecidos json: objeto con notación de Javascript
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    provincia: "Mendoza",
    país: "Argentina"
}

console.log('===============================================');
// acceso a los OL
console.log(persona.nombre);
console.log(persona.país);






