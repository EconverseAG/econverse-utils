/**
 * Format string to CEP.
 * @since 0.2.0
 * @param cep String to be formatted.
 * @example
 * formatCep('11740000') // '11740-000'
 * @returns {String} Formatted string.
 */
function formatCep(cep: string): string {
  return cep.replace(/[^\d]/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
}

export { formatCep };
