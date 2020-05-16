// Crea con lo aprendido de Javascript, un juego que en Consola de Chrome funcione.
// Te he dado un ejemplo en Clase Online, pero tu tienes que pensarlo de otra manera y que funcione.
// Vas crear un archivo if.js y otro switch.js. Cada uno cumplirán el ejercicio, pero uno utilizando solo if/else/else if y el otro Switch.


/*
JUEGO: Piedra, Papel, Tijera, Lagarto, Spock
UTILIZAMOS/PRACTICAMOS "if" 

Paper covers Rock, disproves Spock
Rock crushes Scissors, crushes Lizard
Scissors cuts Paper, decapites Lizard
Lizard poisons Spock, eats Paper
Spock smashes Scissors, vaporizes Rock

Piedra aplasta Tijeras y aplasta Lagarto
Papel cubre Piedra y desautoriza Spock
Tijeras corta Papel y decapita Lagarto
Spock rompe Tijeras y vaporiza Piedra
Lagarto envenena Spock y come Papel
*/


//VARIABLES & CONSTANTS
var elementos = ["piedra", "papel", "tijeras", "lagarto", "Spock"];
var input1, input2;
var gana1 = 'Gana jugador 1 porque ';
var gana2 = 'Gana jugador 2 porque ';
var logo = "JUEGO PAPEL-PIEDRA-TIJERAS-LAGARTO-SPOCK \n", info = '\n\
Uso -- Elige numero 1-5\n\
Piedra = 1, Papel = 2, Tijera = 3, Lagarto = 4 Spock = 5\n\
y escriba en la consola cada jugador su elecion dentro de ()\n\
Jugador 1 - primera posicion, Jugador 2 - la segunda como asi - game(1,5).\n\
Disfruta.';
var result = 'Error';

//DEFINITIONS
e1 = elementos[0]; //piedra
e2 = elementos[1]; //papel
e3 = elementos[2]; //tijera
e4 = elementos[3]; //Lagarto
e5 = elementos[4]; //Spock

//MAIN PROGRAM
function game(input1, input2) {
    switch (input1) { //comprobar empate o ganador
        case 1: //piedra

            switch (input2) {
                case 3: result = gana1 + e1 + " aplasta " + e3; break;
                case 4: result = gana1 + e1 + " aplasta " + e4; break;
                case 2: result = gana2 + e2 + " cubre " + e1; break;
                case 5: result = gana2 + e5 + " vaporiza " + e1; break;
                default: result = `EMPATE por ${elementos[input2 - 1]}`; break;  //empate
            };
            break;
        case 2: //papel
            switch (input2) {
                case 1: result = gana1 + e2 + " cubre " + e1; break;
                case 5: result = gana1 + e2 + " desautoriza " + e5; break;
                case 3: result = gana2 + e3 + " corta " + e2; break;
                case 4: result = gana2 + e4 + " come " + e2; break;
                default: result = `EMPATE por ${elementos[input2 - 1]}`; break;  //empate
            }
            break;
        case 3: //tijeras
            switch (input2) {
                case 2: result = gana1 + e3 + " corta " + e2; break;
                case 4: result = gana1 + e3 + " decapita " + e4; break;
                case 5: result = gana2 + e5 + " rompe " + e3; break;
                case 1: result = gana2 + e1 + " aplasta " + e3; break;
                default: result = `EMPATE por ${elementos[input2 - 1]}`; break;  //empate
            }
            break;
        case 4: //lagarto
            switch (input2) {
                case 2: result = gana1 + e4 + " come " + e2; break;
                case 5: result = gana1 + e4 + " envenena " + e5; break;
                case 1: result = gana2 + e1 + " aplasta " + e4; break;
                case 3: result = gana2 + e3 + " decapita " + e4; break;
                default: result = `EMPATE por ${elementos[input2 - 1]}`; break;  //empate
            }
            break;
        case 5: //spock
            switch (input2) {
                case 1: result = gana1 + e5 + " vaporiza " + e1; break;
                case 3: result = gana1 + e5 + " rompe " + e3; break;
                case 2: result = gana2 + e2 + " desautoriza " + e5; break;
                case 4: result = gana2 + e4 + " envenena " + e5; break;
                default: result = `EMPATE por ${elementos[input2 - 1]}`; break;  //empate
            }
            break;
        default:
            result = 'Entregados numeros invalidos.'
    }
    console.log(result);  //muestra resultado de la funcion 
    result = 'Error';
}

console.clear();  //limplia la pantalla
console.log(logo + info);  //introduce el text generico
