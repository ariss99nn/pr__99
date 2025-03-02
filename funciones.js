// Importar el módulo readline para leer entradas del usuario
const readline = require('readline');

// Crear la interfaz de readline para la interacción con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para validar si dos números son iguales
function validarNumeros(a, b) {
    return a === b;
}

// Solicitar al usuario que ingrese un número
rl.question('Introduzca un número: ', (inputA) => {
    const a = parseInt(inputA); // Convertir la entrada a número entero

    // Solicitar al usuario que ingrese otro número
    rl.question('Introduzca otro número: ', (inputB) => {
        const b = parseInt(inputB); // Convertir la entrada a número entero

        // Llamar a la función validarNumeros
        const resultado = validarNumeros(a, b);

        // Verificar si los números son iguales o no
        if (resultado) {
            console.log('Son iguales');
        } else {
            console.log('Son distintos');
        }

        // Cerrar la interfaz de readline
        rl.close();
    });
});