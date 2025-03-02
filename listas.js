// Creamos una lista (array) en JavaScript
let a = [1, 2, 3, 4];
console.log(a);

// Operamos como si fuera un "basestring" (accedemos a un valor de índice)
console.log(a[0]);

// Imprimimos un rango de elementos en el array
console.log(a.slice(0, 2));

// Concatenamos la lista con otra lista o un número
let b = [5, 6];
console.log(a.concat(b));

// Podemos sustituir el valor de una posición
a[3] = 'Hola';
console.log(a);

// Usamos el método push() para añadir un elemento (equivalente a append() en Python)
a.push(3);
console.log(a);

// Al igual que en los strings, podemos obtener el tamaño con .length
console.log(a.length);

// Comprobamos si un elemento está en el array
console.log(a.includes(5)); // Retorna true si 5 está en el array
console.log(a.includes(1)); // Retorna true si 1 está en el array