import _ from 'underscore'

/**
 *
 * @param {array<string>} tiposDeCarta Ejemplo: ['C', 'H', 'D', 'S']
 * @param {array<string>} tiposEspeciales Ejemplo: ['C', 'H', 'D', 'S']
 * @returns  {array<string>} Retorna un nuevo deck de cartas - Array<string>
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length == 0)
    throw new Error('tiposDeCarts es obligatorio')

  let deck = []
  //DECK DE CARTAS DEL 2 AL 10
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo)
    }
  }
  //DECK DE ESPECIALES
  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo)
    }
  }
  //Rebarajea el deck
  return _.shuffle(deck)
}

/* export default crearDeck */
