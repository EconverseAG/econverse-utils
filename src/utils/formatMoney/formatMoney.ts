/**
 * Format number to money.
 * @param amount Number to be formatted.
 * @param base Base for unit value. Representation of R$ 1,00 in number. (default: 100)
 * @example
 * formatNumber(9890) // R$ 98,90
 * formatNumber(9890, 1) // R$ 9890,00
 * @returns {String} Formatted string.
 */
function formatMoney(amount: number, base = 100): string {
  return `R$ ${(amount / base).toFixed(2).replace('.', ',')}`;
}

export default formatMoney;
