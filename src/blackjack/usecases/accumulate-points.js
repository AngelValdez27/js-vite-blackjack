import { valorCarta } from './card-value'
/**
 *
 * @param {String} carta Ejemplo: '7C'
 * @param {Number} turno Ejemplo: 1 ó arreglo[0]
 * @param {Array<number>} puntosJugadores Ejemplo: [0,1]
 * @param {HTMLElement} marcadores Ejemplo: Elemento HTML
 * @returns {Number} Retorna los puntos de un jugador dependiendo del turno
 */

export const acumularPuntosJugador = (
  carta,
  turno,
  puntosJugadores,
  marcadores
) => {
  // console.log(turno)
  //console.log(puntosJugadores)
  //console.log(valorCarta(carta))
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
  marcadores[turno].innerText = puntosJugadores[turno]
  console.log('pj', puntosJugadores[turno])
  return puntosJugadores[turno]
}
