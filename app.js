let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', "Ya se sortearon todos los numeros posibles");
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', "El numero es menor");
        } else {
            asignarTextoElemento('p', "El numero es mayor");
        }
        intentos++;
        cleanBox()
    }
    return;
}

function cleanBox() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', "Indique un numero entre 1 y 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    cleanBox();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();