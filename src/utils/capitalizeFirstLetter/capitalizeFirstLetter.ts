/**
 * Capitalizes the first letter of (each) word(s).
 * @param {string} input The string to be capitalized.
 * @param {boolean} allWords (Optional) Whether to capitalize all words or just the first.
 * @returns {string} String with first letter capitalized.
 */
function capitalizeFirstLetter(
  input: string,
  allWords: boolean = false,
): string {
  let result: string;

  result = allWords
    ? input
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    : input.charAt(0).toUpperCase() + input.slice(1);

  return result;
}

export { capitalizeFirstLetter };
