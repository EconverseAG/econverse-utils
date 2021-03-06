/**
 * Inserts an element at the given index. If the index is too large, element is inserted at the end of the list.
 * @since 0.6.0
 * @param {number} index Index to insert element at.
 * @param {any} newItem Element to insert.
 * @param {any[]} list List of items.
 * @returns {any[]} List of items with new item inserted.
 * @example
 * insert(1, 'Batman', [1, 2, 3]);
 * // [1, 'Batman', 2, 3]
 *
 * insert(10, ['Batman'], [1, 2, 3]);
 * // [1, 2, 3, ['Batman']]
 */
function insert(index: number, newItem: any, list: any[]): any[] {
  return [...list.slice(0, index), newItem, ...list.slice(index)];
}

export { insert };
