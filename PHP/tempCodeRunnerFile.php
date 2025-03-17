<?php
// Solicitar al usuario el primer valor
echo "Ingrese el primer valor: ";
$A = intval(trim(fgets(STDIN))); // Leer entrada y convertir a entero

// Solicitar al usuario el segundo valor
echo "Ingrese el segundo valor: ";
$C = intval(trim(fgets(STDIN))); // Leer entrada y convertir a entero

// Calcular la potencia A^C
$potencia = pow($A, $C); // Función pow(base, exponente) en PHP

// Mostrar el resultado
echo "La potencia de $A sobre $C es: $potencia\n";
