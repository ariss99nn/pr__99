<?php
// Definimos constantes
define("PI", 3.1416);
define("VALOR_CONST", 2);

// Función para validar entradas numéricas en CLI
function obtenerNumero($mensaje)
{
    do {
        echo $mensaje;
        $valor = trim(fgets(STDIN)); // Captura la entrada desde la terminal

        if (!is_numeric($valor)) {
            echo "⚠ Entrada no válida. Por favor, ingrese un número válido.\n";
        }
    } while (!is_numeric($valor));

    return (float) $valor;
}

// Mostrar opciones
echo "Seleccione la figura a calcular su área:\n";
echo "1. Rombo\n2. Rectángulo\n3. Cuadrado\n4. Trapecio\n";

// Validar opción
do {
    echo "Ingrese su opción: ";
    $opcion = trim(fgets(STDIN));

    if (!is_numeric($opcion) || $opcion < 1 || $opcion > 4) {
        echo " Opción no válida. Por favor, ingrese un número entre 1 y 4.\n";
    }
} while (!is_numeric($opcion) || $opcion < 1 || $opcion > 4);

$opcion = (int) $opcion;

// Calcular el área según la opción elegida
switch ($opcion) {
    case 1: // Rombo
        $Dmayor = obtenerNumero("Ingrese la diagonal mayor: ");
        $Dmenor = obtenerNumero("Ingrese la diagonal menor: ");
        $areaRombo = ($Dmayor * $Dmenor) / VALOR_CONST;
        echo " El área del rombo es: " . number_format($areaRombo, 2) . "\n";
        break;

    case 2: // Rectángulo
        $Largo = obtenerNumero("Ingrese el largo del rectángulo: ");
        $Ancho = obtenerNumero("Ingrese el ancho del rectángulo: ");
        $areaRectangulo = $Largo * $Ancho;
        echo " El área del rectángulo es: " . number_format($areaRectangulo, 2) . "\n";
        break;

    case 3: // Cuadrado
        $Lado = obtenerNumero("Ingrese el lado del cuadrado: ");
        $areaCuadrado = $Lado * $Lado;
        echo " El área del cuadrado es: " . number_format($areaCuadrado, 2) . "\n";
        break;

    case 4: // Trapecio
        $Bmayor = obtenerNumero("Ingrese la base mayor: ");
        $Bmenor = obtenerNumero("Ingrese la base menor: ");
        $H = obtenerNumero("Ingrese la altura del trapecio: ");
        $areaTrapecio = (($Bmayor + $Bmenor) * $H) / VALOR_CONST;
        echo " El área del trapecio es: " . number_format($areaTrapecio, 2) . "\n";
        break;
}
