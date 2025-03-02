// Importamos el módulo readline para interactuar con el usuario
const readline = require('readline');

// Creamos la interfaz de readline para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos el valor del voltaje al usuario
rl.question('Ingrese el valor del voltaje del circuito: ', (Voltaje) => {
    // Solicitamos el valor de la resistencia
    rl.question('Ingrese el valor de la resistencia del circuito: ', (Resistencia) => {
        // Convertimos los valores a enteros y calculamos la intensidad (amperaje)
        const intensidad = parseInt(Voltaje) / parseInt(Resistencia);

        // Imprimimos el resultado en consola
        console.log(`Al conectar un resistor de R ${Resistencia} ohm a una fuente de V ${Voltaje} voltios circulará una corriente de ${intensidad} amperios.`);

        // Cerramos la interfaz readline
        rl.close();
    });
});