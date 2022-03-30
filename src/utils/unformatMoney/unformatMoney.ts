/**
 * Unformat money to number.
 * @param money String to be formatted.
 * @param base Base for unit value. Representation of R$ 1,00 in number. (default: 100)
 * @example
 * unformatMoney('R$ 98,90') // 9890
 * unformatMoney('R$ 98,90', 1) // 98.90
 * @returns {Number} Money value.
 */
function unformatMoney(money: string, base = 100): number {
  return Number(money.replace('R$', '').replace(',', '.').trim()) * base;
}

export default unformatMoney;
