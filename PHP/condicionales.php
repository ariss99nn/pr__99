<?php
// Solicitar al usuario que seleccione una figura para calcular su área
echo "Seleccione la figura para calcular su área: \n\n";
echo "1 para Rombo\n";
echo "2 para Rectángulo\n";
echo "3 para Cuadrado\n";
echo "4 para Trapecio\n";
echo "Ingrese el número de la figura: ";
$Figura = trim(fgets(STDIN)); // Leer la opción ingresada por el usuario

// Definir constantes
define("PI", 3.1416);
define("CONST_DIV", 2);

// Evaluar la figura seleccionada
switch ($Figura) {
    case '1': // Rombo
        echo "Ingrese el valor de la diagonal mayor: ";
        $Dmayor = (int)trim(fgets(STDIN));
        echo "Ingrese el valor de la diagonal menor: ";
        $Dmenor = (int)trim(fgets(STDIN));
        $Area = ($Dmayor * $Dmenor) / CONST_DIV; // Fórmula correcta
        echo "El área del rombo es: $Area\n";
        break;

    case '2': // Rectángulo
        echo "Ingrese el valor del largo del rectángulo: ";
        $Largo = (int)trim(fgets(STDIN));
        echo "Ingrese el valor del ancho del rectángulo: ";
        $Ancho = (int)trim(fgets(STDIN));
        $Area = $Largo * $Ancho;
        echo "El área del rectángulo es: $Area\n";
        break;

    case '3': // Cuadrado
        echo "Ingrese el valor del lado del cuadrado: ";
        $Lado = (int)trim(fgets(STDIN));
        $Area = $Lado * $Lado;
        echo "El área del cuadrado es: $Area\n";
        break;

    case '4': // Trapecio
        echo "Ingrese el valor de la base mayor: ";
        $Bmayor = (int)trim(fgets(STDIN));
        echo "Ingrese el valor de la base menor: ";
        $Bmenor = (int)trim(fgets(STDIN));
        echo "Ingrese la altura del trapecio: ";
        $H = (int)trim(fgets(STDIN));
        $Area = (($Bmayor + $Bmenor) * $H) / CONST_DIV;
        echo "El área del trapecio es: $Area\n";
        break;

    default: // Opción inválida
        echo "Opción no válida. Por favor, seleccione un número entre 1 y 4.\n";
}
