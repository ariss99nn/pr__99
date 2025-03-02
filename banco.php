<?php
// Clase Usuario que representa a un cliente del banco
class Usuario
{
    public $nombre;
    public $pin;
    public $saldo;

    public function __construct($nombre, $pin, $saldo)
    {
        $this->nombre = $nombre;
        $this->pin = $pin;
        $this->saldo = $saldo;
    }
}

// Clase Banco que maneja los usuarios y sus operaciones
class Banco
{
    private $usuarios = [];

    public function __construct($usuarios = [])
    {
        $this->usuarios = $usuarios;
    }

    // Método para autenticar al usuario
    public function autenticar($nombre, $pin)
    {
        foreach ($this->usuarios as $usuario) {
            if ($usuario->nombre === $nombre) { // Verificamos si el usuario existe
                if ($usuario->pin == $pin) { // Comprobamos si el PIN es correcto
                    echo "¡Estás logueado!\n";
                    return true;
                } else {
                    echo "Pin o nombre incorrecto.\n";
                    return false;
                }
            }
        }
        echo "El usuario no existe.\n";
        return false;
    }

    // Método para retirar dinero de la cuenta de un usuario
    public function sacarDinero($nombre, $cantidad)
    {
        foreach ($this->usuarios as $usuario) {
            if ($usuario->nombre === $nombre) {
                if ($usuario->saldo < $cantidad) { // Verificamos si hay saldo suficiente
                    echo "Saldo insuficiente.\n";
                } else {
                    $usuario->saldo -= $cantidad; // Restamos el monto al saldo
                    echo "El saldo disponible es: " . $usuario->saldo . "\n";
                }
                return;
            }
        }
    }
}

// Crear instancias de usuarios con nombre, PIN y saldo inicial
$ana = new Usuario("Ana", 9872, 450);
$pablo = new Usuario("Pablo", 5555, 200);
$rodrigo = new Usuario("Rodrigo", 2222, 900);

// Crear una instancia del Banco con los usuarios registrados
$banco = new Banco([$ana, $pablo, $rodrigo]);

// Función para solicitar entrada del usuario
function solicitarEntrada($mensaje)
{
    echo $mensaje;
    return trim(fgets(STDIN));
}

// Función para iniciar sesión en el sistema
function iniciarSesion($banco)
{
    $nombre = solicitarEntrada("Introduzca su nombre: ");
    $pin = solicitarEntrada("Introduzca su pin: ");

    if (!is_numeric($pin)) {
        echo "El PIN debe ser un número.\n";
        iniciarSesion($banco);
        return;
    }

    if ($banco->autenticar($nombre, (int)$pin)) {
        menuUsuario($banco, $nombre);
    } else {
        iniciarSesion($banco);
    }
}

// Función que muestra el menú de opciones para el usuario autenticado
function menuUsuario($banco, $nombre)
{
    echo "Por favor, elija una opción:\n1. Sacar dinero\n2. Terminar sesión\n";
    $opcion = solicitarEntrada("");

    if ($opcion === "1") { // Opción para retirar dinero
        $cantidad = solicitarEntrada("Introduce cantidad a sacar: ");

        if (!is_numeric($cantidad) || (int)$cantidad <= 0) {
            echo "Por favor, ingrese un monto válido.\n";
            menuUsuario($banco, $nombre);
            return;
        }

        $banco->sacarDinero($nombre, (int)$cantidad);
        menuUsuario($banco, $nombre); // Volvemos a mostrar el menú

    } elseif ($opcion === "2") { // Opción para cerrar sesión
        echo "Saliendo del sistema.\n";
        exit;
    } else { // Opción inválida
        echo "Opción incorrecta.\n";
        menuUsuario($banco, $nombre);
    }
}

// Mensaje de bienvenida e inicio de sesión
echo "Bienvenido al Banco\n";
iniciarSesion($banco);
