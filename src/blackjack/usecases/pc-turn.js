import { pedirCarta } from './ask-for-card'
import { crearCarta } from './create-card'
import { acumularPuntosJugador } from './accumulate-points'
/**
 *
 * @param {Number} puntosMinimos
 * @param {Array<string>} deck
 * @param {Array<string>} puntosJugadores
 * @param {HTMLElement} divCartas
 * @param {HTMLElement} marcadores
 *
 */
export const turnoPc = (
  puntosMinimos,
  puntosJugadores,
  divCartas,
  deck,
  marcadores
) => {
  if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios')
  if (!deck) throw new Error('Deck es necesario')

  let puntosPC = 0
  do {
    const carta = pedirCarta(deck)
    console.log('Carta ', carta)
    puntosPC = acumularPuntosJugador(
      carta,
      puntosJugadores.length - 1,
      puntosJugadores,
      marcadores
    )
    crearCarta(carta, puntosJugadores.length - 1, divCartas)
  } while (puntosPC <= puntosMinimos && puntosMinimos <= 21)
  determinarGanador(puntosJugadores)
}

const determinarGanador = puntosJugadores => {
  console.log({ puntosJugadores })
  const [puntosMinimos, puntosPC] = puntosJugadores
  setTimeout(() => {
    if (puntosMinimos === puntosPC) alert('Nadie gana')
    if (puntosMinimos > 21) alert('Perdiste...')
    if (puntosPC > 21 && puntosMinimos <= 21) alert('Ganaste!')
    if (puntosPC > puntosMinimos && puntosPC <= 21) alert('Perdiste!')
  }, 30)
}
