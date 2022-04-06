/**
 * Format string to CEP.
 * @since 0.2.0
 * @param {string} cep String to be formatted.
 * @returns {string} Formatted string.
 * @example
 * formatCep('11740000')
 * // '11740-000'
 */
function formatCep(cep: string): string {
  return cep.replace(/[^\d]/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
}

export { formatCep };
