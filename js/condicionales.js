
// IF
var tiempo = 'sol';


if (tiempo == 'sol') {
    console.log('Buenos días!');
} 

else if (tiempo == 'nublado') {
    console.log('Esta nublado, no salgas a la calle!');
} 

else {
    console.log('Buenos noches!');
}

// SWITCH
var tiempo = 'sol';

switch (tiempo) {
    case 'sol':
        console.log('Buenos días!');
        break;
    case 'nublado':
        console.log('No salgas a la calle');
        break;
    case 'luna':
        console.log('Burnas noches');
        break;
    default:
        console.log('Error');
}

// ARRAYS
var mascotas = ['perro', 'gato', 'serpiente'];

var mascotas_plus = [
    'perro', 4, 'boby','gato', 12, 'misha', [], 80, '' //podemos en array anadir diferentes datos
];

var nombre = mascotas_plus.indexOf('misha');
// resultado 5
var edad = mascotas_plus[nombre - 1]; // mascotas_plus[4] // 12
var raza = mascotas_plus[nombre - 2]; // mascotas_plus[3] // 'gato'
