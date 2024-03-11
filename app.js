/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';
}*/
//CODIGO SIN BUENA PRACTICA
let numeroSecreto = 0;
let contadorIntentos = 0;
let listaNumeroSorteados = [];
let numeroMax = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${contadorIntentos} ${contadorIntentos===1 ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        } 
        contadorIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value="";
}

function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;

    console.log(numeroSecreto);
    console.log(listaNumeroSorteados);
    //si el numero generado esta incluido en la lista

    if(listaNumeroSorteados.length == numeroMax){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
        }    return numeroGenerado;
    }
}


/*
FUNCION PARA EL BOTON DE BORRAR EL NUMERO EN LA CAJA CUANDP ESTE MAL
function limpiar(){
    document.getElementById("valorUsuario").value = "";
}
*/

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumSecreto();
    contadorIntentos=1;
}

function reiniciarJuego(){
    limpiarCaja(); //limpiar juego
    condicionesIniciales(); //parte para que reinicie el 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
console.log(numeroSecreto);
