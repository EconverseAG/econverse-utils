/**
 * Checks if the given value is a valid CNPJ or not.
 * @since 0.4.0
 * @param {string} value Value to be checked.
 * @returns {boolean} Whether the value is a valid CNPJ or not.
 * @example
 * isCnpj('95.890.661/0001-46');
 * // true
 *
 * isCnpj('95890661000146');
 * // true
 *
 * isCnpj('11.111.111/1111-11')
 * // false
 */
function isCnpj(value: string): boolean {
  let cnpj: string = value.replace(/[^\d]+/g, '');

  if (cnpj.length !== 14) {
    return false;
  }

  const items = [...new Set(cnpj)];
  if (items.length === 1) return false;

  const numbers = cnpj.split('').map(Number);

  const calc = (x: number) => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
  };

  const digits = numbers.slice(12);

  const digit0 = calc(12);
  if (digit0 !== digits[0]) return false;

  const digit1 = calc(13);
  return digit1 === digits[1];
}

export { isCnpj };
