/**
 * Format number to money.
 * @since 0.0.2
 * @param {number} amount Number to be formatted.
 * @param {number} base (Optional) Base for unit value. Representation of R$ 1,00 in number. (default: 100)
 * @example
 * formatNumber(9890) // R$ 98,90
 * formatNumber(9890, 1) // R$ 9890,00
 * @returns {string} Formatted string.
 * @type {(amount: number, base?: number) => string}
 */
function formatMoney(amount: number, base: number = 100): string {
  return `R$ ${(amount / base).toFixed(2).replace('.', ',')}`;
}

export { formatMoney };
