/**
 *
 * @param {String} carta
 * @param {Number} turno
 * @param {HTMLElement} divCartas
 */

//Crea la carta en el HTML
export const crearCarta = (carta, turno, divCartas) => {
  const imgCarta = document.createElement('img')
  imgCarta.classList.add('carta')
  imgCarta.src = `assets/cartas/${carta}.png`
  divCartas[turno].append(imgCarta)
}
