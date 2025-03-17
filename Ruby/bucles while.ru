# Inicializamos un contador en 0
contador = 0

# Bucle while que se ejecuta mientras contador sea menor que 30
while contador < 30
  contador += 1  # Incrementamos el contador
  puts "Iteración #{contador}"  # Imprimimos la iteración
end

# Combinado con if else
loop do  # Bucle infinito (similar a `while True` en Python)
  puts "Introduzca un valor mayor a 10"
  a = gets.to_i  # Leemos entrada del usuario y la convertimos a entero

  if a > 10
    puts "Es correcto"
  else
    puts "Es incorrecto, pruebe de nuevo"
    break  # Rompe el bucle si el valor es incorrecto
  end
end
