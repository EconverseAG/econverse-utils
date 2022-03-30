/**
 * Insert ellipsis (...) to input text.
 * @since 0.1.0
 * @param input Text to be ellipsed.
 * @param limit Limit of characters before ellipsed.
 * @param trail (Optional) Custom trail to be inserted.
 * @example
 * textEllipsis('Lorem ipsum', 4) // 'Lore...'
 * textEllipsis('Lorem ipsum', 4, '-') // 'Lore-'
 * @returns {String} Ellipsed input.
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

export default textEllipsis;
