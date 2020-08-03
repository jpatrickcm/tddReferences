/**
 * Elaborar un programa que solicite el numero de 
 * respuestas correctas, incorrectas y en blanco, 
 * correspondientes a postulantes, y muestre su puntaje final considerando, que por cada 
 * respuesta correcta tendrá 4 puntos, 
 * respuestas incorrectas tendrá -1 y 
 * respuestas en blanco tendrá 0
 * 
 */

let respuestascorrectas = 20;
let respuestasincorrectas = 5;
let respuestasenblanco = 0;

let valorRespuestaCorrecta = 4;
let valorRespuestaIncorrecta = -1;
let valorRespuestaEnBlanco = 0;

let calcularValorRespuestascorrectas = respuestascorrectas * valorRespuestaCorrecta;
let calcularValorRespuestasincorrectas = respuestasincorrectas * valorRespuestaIncorrecta;
let calcularValorRespuestasenblanco = respuestasenblanco * valorRespuestaEnBlanco;

let = puntajeFinal = calcularValorRespuestascorrectas + calcularValorRespuestasenblanco + calcularValorRespuestasincorrectas;

console.log('Puntaje Final : ' + puntajeFinal);