/**
 * Replace accents for its equivalent non-accents characters.
 * @since 0.6.0
 * @param {string} value Text to be cleaned.
 * @example
 * cleanAccents('açaí')
 * // 'acai'
 * @returns {string} Cleaned string.
 * @type {(value: string) => string}
 */
function cleanAccents(value: string): string {
  return value
    .replace(/[\u00C0-\u00C5]/g, 'A')
    .replace(/[\u00C8-\u00CB]/g, 'E')
    .replace(/[\u00CC-\u00CF]/g, 'I')
    .replace(/[\u00D2-\u00D6]/g, 'O')
    .replace(/[\u00D9-\u00DC]/g, 'U')
    .replace(/[\u00D1]/g, 'N')
    .replace(/[\u00C7]/g, 'C')
    .replace(/[\u00E0-\u00E5]/g, 'a')
    .replace(/[\u00E8-\u00EB]/g, 'e')
    .replace(/[\u00EC-\u00EF]/g, 'i')
    .replace(/[\u00F2-\u00F6]/g, 'o')
    .replace(/[\u00F9-\u00FC]/g, 'u')
    .replace(/[\u00F1]/g, 'n')
    .replace(/[\u00E7]/g, 'c');
}

export default cleanAccents;
