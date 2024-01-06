/**
 * @param {Array<string>} deckCartas Ejemplo: ['C', 'H', 'D', 'S']
 * @returns {String} Retorna una carta
 */

export const pedirCarta = deckCartas => {
  if (!deckCartas || deckCartas.length === 0) {
    throw 'No hay cartas en la baraja'
  }
  return deckCartas.pop()
}
