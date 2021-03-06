/**
 * Insert ellipsis (...) to input text.
 * @since 0.1.0
 * @param {string} input Text to be ellipsed.
 * @param {number} limit Limit of characters before ellipsed.
 * @param {string} trail (Optional) Custom trail to be inserted.
 * @returns {string} Ellipsed input.
 * @example
 * textEllipsis('Lorem ipsum', 4)
 * // 'Lore...'
 *
 * textEllipsis('Lorem ipsum', 4, '-')
 * // 'Lore-'
 */
function textEllipsis(
  input: string,
  limit: number,
  trail: string = '...',
): string {
  if (input.length > limit) {
    return input.substring(0, limit).trim() + trail;
  }
  return input;
}

export { textEllipsis };
