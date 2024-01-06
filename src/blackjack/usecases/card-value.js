/**
 *
 * @param {String} carta Ejemplo: '2C'
 * @returns {String} Retorna una carta tipo String
 */

//EXTRAE EL NUMERO DE CARTA PARA SABER EL VALOR
export const valorCarta = carta => {
  //substring corta el string indicandole de cual a cual posición cortar
  const valor = carta.substring(0, carta.length - 1)
  //isNan indica si no es un numero
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1
}
