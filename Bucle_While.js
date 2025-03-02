const readline = require('readline');

// Crear una interfaz de lectura de datos desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Primer bucle: Iteración
let contador = 0;
while (contador < 10) {
    contador += 1;
    console.log("Iteración", contador);
}

// Segundo bucle: Solicitar un valor mayor que 5
function pedirValor() {
    rl.question("Introduzca un valor mayor que 5: ", function(a) {
        a = parseInt(a); // Convertir la entrada a número

        if (a > 5) {
            console.log("Es correcto");
            rl.close();  // Cerrar la interfaz de readline si el valor es correcto
        } else {
            console.log("Es incorrecto, pruebe de nuevo");
            pedirValor();  // Volver a pedir el valor si no es correcto
        }
    });
}

// Iniciar el ciclo de petición de valor
pedirValor();