// Importamos el módulo readline para interactuar con el usuario en la terminal
const readline = require('readline');

// Creamos la interfaz de readline para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos los datos al usuario
rl.question('Escriba sus nombres completos: ', (a) => {
    rl.question('Escriba sus apellidos completos: ', (b) => {
        rl.question('Escriba su profesión: ', (c) => {
            rl.question('Escriba su año de nacimiento: ', (d) => {
                // Convertimos el año de nacimiento a un entero y calculamos la edad
                const edad = 2025 - parseInt(d);

                // Imprimimos el mensaje con los datos proporcionados
                console.log(`El (La) ${c} ${a} ${b} tiene ${edad} años.`);

                // Cerramos la interfaz readline
                rl.close();
            });
        });
    });
});