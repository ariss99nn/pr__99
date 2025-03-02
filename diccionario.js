// Definimos la lista de barcos
let barcos = [
    {
        'nombre': 'Poseidón',
        'tipo': 'yate',
        'color': 'blanco',
        'año': 2015,
        'matrícula': 'BRC1234'
    },
    {
        'nombre': 'Nautilus',
        'tipo': 'submarino',
        'color': 'gris',
        'año': 2008,
        'matrícula': 'SUB5678'
    },
    {
        'nombre': 'Mistral',
        'tipo': 'velero',
        'color': 'azul',
        'año': 2020,
        'matrícula': 'VEL9012'
    },
    {
        'nombre': 'Leviatán',
        'tipo': 'buque de carga',
        'color': 'rojo',
        'año': 2012,
        'matrícula': 'CARG3456'
    }
];

// Modificamos el color del primer barco
barcos[0].color = 'azul';

// Imprimimos el primer barco modificado
console.log(barcos[0]);

// Imprimimos todos los barcos de la lista
for (let barco of barcos) {
    console.log(barco);
}