const readline = require('readline');

// Crear una interfaz de lectura de la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar figura a calcular
rl.question('Selecciona la figura a calcular:\n1 para Rombo\n2 para Rectángulo\n3 para Cuadrado\n4 para Trapecio\n', (figura) => {

  // Solicitar los valores necesarios
  rl.question('Ingresa el primer valor: ', (var1) => {
    rl.question('Ingresa el segundo valor: ', (var2) => {

      // Convertir los valores a números enteros
      var1 = parseInt(var1);
      var2 = parseInt(var2);
      const pi = 3.1416;

      // Variable de resultado
      let res;

      // Operaciones según la figura seleccionada
      switch (figura) {
        case "1": // Rombo
          res = (var1 * var2) / 2;
          console.log("El área del Rombo es:", res);
          break;
        case "2": // Rectángulo
          res = var1 * var2;
          console.log("El área del Rectángulo es:", res);
          break;
        case "3": // Cuadrado
          res = var1 * var2;
          console.log("El área del Cuadrado es:", res);
          break;
        case "4": // Trapecio
          res = var1 * var2;
          console.log("El área del Trapecio es:", res);
          break;
        default:
          // Caso por defecto para otras entradas
          res = var1 * pi;
          console.log("Resultado por defecto:", res);
          break;
      }

      // Cerrar la interfaz de lectura
      rl.close();
    });
  });
});
