import _ from 'underscore'
import {
  crearDeck,
  pedirCarta,
  valorCarta,
  crearCarta,
  turnoPc,
  acumularPuntosJugador
} from './usecases'

const miModulo = (() => {
  'use strict'
  /**
   * 2C = Two of clubs (Tréboles)
   * 2D =  Two of diamonds (Diamantes)
   * 2H = Two of hearts (Corazones)
   * 2S = Two of spades (Espadas)
   */

  let deck = []
  const tipos = ['C', 'H', 'D', 'S'],
    especiales = ['A', 'J', 'Q', 'K']

  let puntosJugadores = []

  // HTML REFERENCES
  const btnPedir = document.querySelector('#btn-pedir'),
    btnDetener = document.querySelector('#btn-detener'),
    btnNuevo = document.querySelector('#btn-nuevo'),
    marcadores = document.querySelectorAll('small'),
    divCartas = document.querySelectorAll('.div-cartas')

  //crearDeck(tipos, especiales)

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales)
    puntosJugadores = []
    for (let index = 0; index < numJugadores; index++) {
      puntosJugadores.push(0)
    }

    marcadores.forEach(m => (m.innerText = 0))
    divCartas.forEach(c => (c.innerHTML = ''))

    btnPedir.disabled = false
    btnDetener.disabled = false
  }

  //Events buttons
  //la segunda (argumento) funcion es un callback, ya que se manda como argumento de otra funcion
  btnPedir.addEventListener('click', function () {
    const carta = pedirCarta(deck)
    const puntosJugador = acumularPuntosJugador(
      carta,
      0,
      puntosJugadores,
      marcadores
    )
    crearCarta(carta, 0, divCartas)
    console.log('Puntos ', puntosJugador)

    if (puntosJugador > 21) {
      console.warn('Perdtse')
      btnPedir.disabled = true
      btnDetener.disabled = true
      turnoPc(puntosJugador, puntosJugadores, divCartas, deck, marcadores)
    } else if (puntosJugador === 21) {
      console.warn('21, bien')
      alert('Ganaste!')
      btnPedir.disabled = true
      btnDetener.disabled = true
      turnoPc(puntosJugador, puntosJugadores, divCartas, deck, marcadores)
    }
  })

  //detener
  btnDetener.addEventListener('click', function () {
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoPc(puntosJugadores[0], puntosJugadores, divCartas, deck, marcadores)
  })

  //Nuevo juego
  btnNuevo.addEventListener('click', function () {
    console.clear()
    inicializarJuego()
  })

  return {
    nuevoJuego: inicializarJuego
  }
})()
