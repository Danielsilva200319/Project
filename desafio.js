//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

//-----------------------------------------------------------------------//

//PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

//Ganador:
var ganador;

//-----------------------------------------------------------------------//

//COMPARACIÓN POR PODER DE ATAQUE

//La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
//contador. Según la condición que se cumpla, se irán sumando los puntos.

//EJEMPLO ESTRUCTURA DE COMPARACIÓN
const habilidadACompararJugador1 = jugadorUno.habilidades["ataque"];
const habilidadACompararJugador2 = jugadorDos.habilidades["ataque"];
if (habilidadACompararJugador1 > habilidadACompararJugador2) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (habilidadACompararJugador2 > habilidadACompararJugador1) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

// (Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR VELOCIDAD:
const velocidadACompararJugador1 = jugadorUno.habilidades["velocidad"];
const velocidadACompararJugador2 = jugadorDos.habilidades["velocidad"];
if (velocidadACompararJugador1 > velocidadACompararJugador2) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (velocidadACompararJugador1 > velocidadACompararJugador2) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}
//(Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR NIVEL DE VIDA:
const vidaACompararJugador1 = jugadorUno.habilidades["vida"];
const vidaACompararJugador2 = jugadorDos.habilidades["vida"];
if (vidaACompararJugador1 > vidaACompararJugador2) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (vidaACompararJugador2 > vidaACompararJugador1) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}
//(Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR MAGIA:
const magiaACompararJugador1 = jugadorUno.habilidades["magia"];
const magiaACompararJugador2 = jugadorDos.habilidades["magia"];
if (magiaACompararJugador1 > magiaACompararJugador2) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (magiaACompararJugador2 > magiaACompararJugador1) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}
//(Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS:
const articulosACompararJugador1 = jugadorUno.articulos.length;
const articulosACompararJugador2 = jugadorDos.articulos.length;
if (articulosACompararJugador1 > articulosACompararJugador2) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (articulosACompararJugador2 > articulosACompararJugador1) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}
//(Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

// ejemplo:
// var resultado = {
//  [nombreDeJug1]: contadorPuntosJug1,
//  [nombreDeJug2]: contadorPuntosJug2,
//  ganador: nombreDeJug1
// }
// console.log(resultado)
if (contadorPuntosJug1 > contadorPuntosJug2) {
  ganador = jugadorUno.nombre;
} else if (contadorPuntosJug2 > contadorPuntosJug1) {
  ganador = jugadorDos.nombre;
} else {
  ganador = "Empate";
}

console.log(`${jugadorUno.nombre}: ${contadorPuntosJug1} | ${jugadorDos.nombre}: ${contadorPuntosJug2}.
La ganadora es: ${ganador}`);

//-----------------------------------------------------------------------//