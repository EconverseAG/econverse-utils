/**
 * Formats a string into CNPJ.
 * @since 0.6.0
 * @param {string} cnpj String to be formatted.
 * @example
 * formatCnpj('90742025000153')
 * // '90.742.025/0001-53'
 * @returns {string} Formatted CNPJ.
 * @type {(cnpj: string) => string}
 */
function formatCnpj(cnpj: string): string {
  return cnpj
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

export { formatCnpj };
