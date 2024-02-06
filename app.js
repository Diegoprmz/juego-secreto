let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

console.log(intentos);

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroUsuario === numeroSecreto);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Acertaste el número secreto en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor')
    } else {
        asignarTextoElemento('p','El número secreto es mayor')
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto;
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del número secreto')
    asignarTextoElemento('p', `Escribe un número entre ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();