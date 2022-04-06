/**
 * Removes special characters from a string.
 * @since 0.6.0
 * @param {string} value Text to be cleaned.
 * @param {boolean} keepEmptySpace (Optional) Wheather to keep empty space after removing special characters.
 * @returns {string} Cleaned string.
 * @example
 * removeSpecialCharacters('@açaí')
 * // 'aa'
 *
 * removeSpecialCharacters('@açaí', true)
 * // ' a a'
 */
function removeSpecialCharacters(
  value: string,
  keepEmptySpace?: boolean,
): string {
  return value.replace(/[^a-zA-Z0-9]/g, keepEmptySpace ? ' ' : '');
}

export { removeSpecialCharacters };
