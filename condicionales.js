const readline = require('readline');

// Crear una interfaz de lectura de datos desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para pedir el nombre, edad y ciudad al usuario
function pedirDatos() {
    rl.question("¿Cuál es tu nombre? ", function(nombre) {
        rl.question("¿Cuántos años tienes? ", function(edad) {
            rl.question("¿De qué ciudad eres? ", function(ciudad) {
                
                // Convertimos la edad a un número
                edad = parseInt(edad);

                // Verificamos las condiciones basadas en el nombre, edad y ciudad
                if (nombre === "Ana" && edad === 28 && ciudad === "Colombia") {
                    console.log("Su nombre es Ana, tiene 28 años y es de Colombia");
                } else if (nombre === "Ana" && edad !== 28) {
                    console.log("Su nombre es Ana y no tiene 28 años");
                } else if (nombre !== "Ana" && edad === 28) {
                    console.log("Su nombre no es Ana y tiene 28 años");
                } else {
                    console.log("No se llama Ana ni tiene 28 años");
                }

                // Cerrar la interfaz de readline después de realizar la operación
                rl.close();
            });
        });
    });
}

// Llamar a la función que empieza el proceso
pedirDatos();
