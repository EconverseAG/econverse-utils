/**
 * Remove special characters from a string.
 * @since 0.6.0
 * @param {string} value Text to be cleaned.
 * @param {string} keepEmptySpace (Optional) Wheather to keep empty space after removing special characters.
 * @example
 * removeSpecialCharacters('@açaí')
 * // 'aa'
 *
 * removeSpecialCharacters('@açaí', true)
 * // ' a a'
 * @returns {string} Cleaned string.
 * @type {(value: string, keepEmptySpace?: boolean) => string}
 */
function removeSpecialCharacters(
  value: string,
  keepEmptySpace?: boolean,
): string {
  return value.replace(/[^a-zA-Z0-9]/g, keepEmptySpace ? ' ' : '');
}

export default removeSpecialCharacters;
