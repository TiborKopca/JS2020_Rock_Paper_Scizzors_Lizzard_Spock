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
var input1, input2, response = "\nContinuar?";
var gana1 = 'Gana jugador 1 porque ';
var gana2 = 'Gana jugador 2 porque ';
var logo = "JUEGO PAPEL-PIEDRA-TIJERAS-LAGARTO-SPOCK \n";
var result;

//DEFINITIONS
e1 = elementos[0]; //piedra
e2 = elementos[1]; //papel
e3 = elementos[2]; //tijera
e4 = elementos[3]; //Lagarto
e5 = elementos[4]; //Spock

//FUNCIONS
function inputPlayer1() {               //input jugador1
    do {                                 //I call this LoopDeeLoop :)
        do {
            input1 = Number(prompt(logo + "Jugador1 \n Piedra = 1, Papel = 2, Tijera = 3, Lagarto = 4 Spock = 5", "Elige numero 1-5"));
            // console.log(typeof(input1) +" "+ input1 +" and is NaN : "+isNaN(input1));
            // console.log(`"Elegido" + ${elementos[input1 - 1]}`);
        } while (input1 <= 0 || input1 > 6)
    } while (isNaN(input1))               //When input1 is string and not an number == NaN 
}
function inputPlayer2() {   //input jugador2
    do {
        do {
            input2 = Number(prompt(logo + "Jugador2 \n Piedra = 1, Papel = 2, Tijera = 3, Lagarto = 4 Spock = 5", "Elige numero 1-5"));
        } while (input2 <= 0 || input2 > 6)
    } while (isNaN(input2))               //When input2 is string == NaN 
}

function testWinner() { //comprobar empate o ganador
    if (input1 == input2) {    //EMPATE
        console.log(`EMPATE por ${elementos[input1 - 1]}`);
    }
    //GANADOR JUGADOR 1 [13,14,21,25,32,34,42,45,51,53]
    else if (input1 == 1 && input2 == 3) { result = gana1 + e1 + " aplasta " + e3; }
    else if (input1 == 1 && input2 == 4) { result = gana1 + e1 + " aplasta " + e4; }
    else if (input1 == 2 && input2 == 1) { result = gana1 + e2 + " cubre " + e1; }
    else if (input1 == 2 && input2 == 5) { result = gana1 + e2 + " desautoriza " + e5; }
    else if (input1 == 3 && input2 == 2) { result = gana1 + e3 + " corta " + e2; }
    else if (input1 == 3 && input2 == 4) { result = gana1 + e3 + " decapita " + e4; }
    else if (input1 == 4 && input2 == 2) { result = gana1 + e4 + " come " + e2; }
    else if (input1 == 4 && input2 == 5) { result = gana1 + e4 + " envenena " + e5; }
    else if (input1 == 5 && input2 == 1) { result = gana1 + e5 + " vaporiza " + e1; }
    else if (input1 == 5 && input2 == 3) { result = gana1 + e5 + " rompe " + e3; }
    //GANADOR JUGADOR 2 [12,15,23,24,31,35,41,42,52,54]
    else if (input1 == 3 && input2 == 1) { result = gana2 + e1 + " aplasta " + e3; }
    else if (input1 == 4 && input2 == 1) { result = gana2 + e1 + " aplasta " + e4; }
    else if (input1 == 1 && input2 == 2) { result = gana2 + e2 + " cubre " + e1; }
    else if (input1 == 5 && input2 == 2) { result = gana2 + e2 + " desautoriza " + e5; }
    else if (input1 == 2 && input2 == 3) { result = gana2 + e3 + " corta " + e2; }
    else if (input1 == 4 && input2 == 3) { result = gana2 + e3 + " decapita " + e4; }
    else if (input1 == 2 && input2 == 4) { result = gana2 + e4 + " come " + e2; }
    else if (input1 == 5 && input2 == 4) { result = gana2 + e4 + " envenena " + e5; }
    else if (input1 == 1 && input2 == 5) { result = gana2 + e5 + " vaporiza " + e1; }
    else if (input1 == 3 && input2 == 5) { result = gana2 + e5 + " rompe " + e3; }
}

function questionEnd() {
    var userResponse = confirm(result + response);
    if (userResponse == true) {
        result = "";
        game();
    }
}

//MAIN PROGRAM
function game() {
    inputPlayer1();
    inputPlayer2();
    testWinner();
    questionEnd();
}