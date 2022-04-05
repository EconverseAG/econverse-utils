/**
 * Unformat money to number.
 * @since 0.0.2
 * @param {string} money String to be formatted.
 * @param {number} base (Optional) Base for unit value. Representation of R$ 1,00 in number. (default: 100)
 * @example
 * unformatMoney('R$ 98,90') // 9890
 * unformatMoney('R$ 98,90', 1) // 98.90
 * @returns {number} Money value.
 * @type {(money: string, base?: number) => number}
 */
function unformatMoney(money: string, base: number = 100): number {
  return Number(money.replace('R$', '').replace(',', '.').trim()) * base;
}

export { unformatMoney };
