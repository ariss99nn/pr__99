const readline = require('readline');

// Crear una interfaz de lectura de la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para simular el juego del Mundial
function jugarMundial(equipos) {
    const fases = ["Octavos de final", "Cuartos de final", "Semifinal", "Final"];
    let finalistas = [];  // Array para almacenar los finalistas
    let tercerLugar = "";  // Para almacenar al tercer lugar

    // Mientras haya más de un equipo, sigue jugando
    while (equipos.length > 1) {
        let fase = fases.shift();  // Obtener la primera fase de las fases
        console.log(`\n${fase}`);
        
        let ganadores = [];
        for (let i = 0; i < equipos.length; i += 2) {
            let equipo1 = equipos[i];
            let equipo2 = equipos[i + 1];
            console.log(`${equipo1} vs ${equipo2}`);
            
            rl.question(`Goles de ${equipo1}: `, (goles1) => {
                rl.question(`Goles de ${equipo2}: `, (goles2) => {
                    goles1 = parseInt(goles1);
                    goles2 = parseInt(goles2);
                    
                    // Validación para asegurar que los goles no sean iguales ni nulos
                    while (isNaN(goles1) || isNaN(goles2) || goles1 === goles2) {
                        console.log("Resultado inválido. Los goles no pueden ser iguales ni nulos.");
                        rl.question(`Goles de ${equipo1}: `, (goles1) => {
                            rl.question(`Goles de ${equipo2}: `, (goles2) => {
                                goles1 = parseInt(goles1);
                                goles2 = parseInt(goles2);
                                if (isNaN(goles1) || isNaN(goles2) || goles1 === goles2) {
                                    console.log("Resultado inválido. Por favor, ingrese goles válidos.");
                                }
                            });
                        });
                    }
                    
                    // Determinamos el ganador
                    if (goles1 > goles2) {
                        ganadores.push(equipo1);
                    } else {
                        ganadores.push(equipo2);
                    }
                    
                    // Después de que todos los partidos se jueguen, actualizar los equipos
                    if (ganadores.length === equipos.length / 2) {
                        equipos = ganadores;
                        if (equipos.length === 1) {
                            finalistas.push(equipos[0]); // Añadir el campeón
                            tercerLugar = equipos[1] ? equipos[1] : ""; // Tercer lugar
                            console.log(`\n¡${equipos[0]} es el campeón del mundial!`);
                            console.log(`Los tres finalistas son: ${finalistas[0]}, ${finalistas[1]}, y ${tercerLugar}`);
                            rl.close();
                        }
                    }
                });
            });
        }
    }
}

