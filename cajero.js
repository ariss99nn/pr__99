const readline = require('readline');

// Definimos la interfaz de readline para interactuar con el usuario en el terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clase Usuario
class Usuario {
    constructor(nombre, pin, saldo) {
        this.nombre = nombre;
        this.pin = pin;
        this.saldo = saldo;
    }
}

// Clase Banco
class Banco {
    constructor(usuarios = []) {
        this.usuarios = usuarios;
    }

    autenticar(nombre, pin, callback) {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre) {
                if (usuario.pin === pin) {
                    console.log("¡Estás logueado!");
                    return callback(true);
                } else {
                    console.log("Pin o nombre incorrecto.");
                    return callback(false);
                }
            }
        }
        console.log("El usuario no existe.");
        return callback(false);
    }

    sacarDinero(nombre, cantidad) {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre) {
                if (usuario.saldo < cantidad) {
                    console.log("Saldo insuficiente.");
                } else {
                    usuario.saldo -= cantidad;
                    console.log("El saldo disponible es: " + usuario.saldo);
                }
                return;
            }
        }
    }
}

// Crear usuarios
const ana = new Usuario("Ana", 9872, 450);
const pablo = new Usuario("Pablo", 5555, 200);
const rodrigo = new Usuario("Rodrigo", 2222, 900);

// Crear el banco con los usuarios
const banco = new Banco([ana, pablo, rodrigo]);

// Función principal para interactuar con el usuario
function iniciarSesion() {
    rl.question("Bienvenido al Banco, por favor, identifíquese.\nIntroduzca su nombre: ", (nombre) => {
        rl.question("Introduzca su pin: ", (pin) => {
            banco.autenticar(nombre, parseInt(pin), (autenticado) => {
                if (autenticado) {
                    mostrarOpciones(nombre);
                } else {
                    console.log("Usuario no autenticado. Por favor, introduzca nombre y pin correctos.");
                    iniciarSesion(); // Volver a intentar la autenticación
                }
            });
        });
    });
}

// Función para mostrar las opciones de la sesión bancaria
function mostrarOpciones(nombre) {
    rl.question("Por favor, elija una opción:\n1. Sacar dinero\n2. Terminar sesión\n", (opcion) => {
        if (opcion === "1") {
            rl.question("Introduce cantidad a sacar: ", (cantidad) => {
                banco.sacarDinero(nombre, parseInt(cantidad));
                mostrarOpciones(nombre); // Volver a mostrar las opciones después de sacar dinero
            });
        } else if (opcion === "2") {
            console.log("Saliendo del sistema.");
            rl.close(); // Salir del sistema
        } else {
            console.log("Opción incorrecta. Por favor, introduzca otra opción.");
            mostrarOpciones(nombre); // Volver a mostrar las opciones si es incorrecta
        }
    });
}

// Iniciar el proceso de autenticación
iniciarSesion();
