<?php

function jugar_mundial($equipos) {
    $fases = ["Octavos de final", "Cuartos de final", "Semifinal", "Final"];
    $finalistas = [];  // Lista para almacenar los finalistas
    $tercer_lugar = "";  // Para almacenar al tercer lugar

    while (count($equipos) > 1) {
        $fase = array_shift($fases);  // Obtener la primera fase de las fases
        echo "\n" . $fase . "\n";
        
        $ganadores = [];
        for ($i = 0; $i < count($equipos); $i += 2) {
            $equipo1 = $equipos[$i];
            $equipo2 = $equipos[$i + 1];
            echo "$equipo1 vs $equipo2\n";
            
            while (true) {
                // Pedimos los goles y validamos que sean válidos
                echo "Goles de $equipo1: ";
                $goles1 = trim(fgets(STDIN));

                echo "Goles de $equipo2: ";
                $goles2 = trim(fgets(STDIN));

                if ($goles1 == $goles2) {
                    echo "Resultado inválido. Los goles no pueden ser iguales.\n";
                } elseif ($goles1 < 0 || $goles2 < 0) {
                    echo "Los goles no pueden ser negativos. Ingrese nuevamente.\n";
                } elseif (!is_numeric($goles1) || !is_numeric($goles2)) {
                    echo "Por favor ingrese un número válido para los goles.\n";
                } else {
                    break;  // Si todo está correcto, rompemos el bucle
                }
            }

            // Determinamos el ganador
            if ($goles1 > $goles2) {
                $ganadores[] = $equipo1;
            } else {
                $ganadores[] = $equipo2;
            }
        }

        $equipos = $ganadores;  // Actualizamos la lista de equipos para la siguiente ronda
    }

    // Finalistas y tercer lugar
    $finalistas = array_slice($equipos, 0, 2);  // Primer y segundo lugar
    $tercer_lugar = isset($equipos[2]) ? $equipos[2] : "";  // Tercer lugar, si existe

    echo "\n¡{$finalistas[0]} es el campeón del mundial!\n";
    echo "Los tres finalistas son: {$finalistas[0]}, {$finalistas[1]}, y {$tercer_lugar}\n";
}

// Equipos iniciales
$equipos = ["Brasil", "Argentina", "Francia", "Alemania", "España", "Inglaterra", "Portugal", "Holanda", 
            "Uruguay", "Bélgica", "Croacia", "México", "EEUU", "Senegal", "Japón", "Corea del Sur"];

jugar_mundial($equipos);

?>
