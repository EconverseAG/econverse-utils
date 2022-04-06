/**
 * Checks if the given value is a valid CPF or not.
 * @since 0.4.0
 * @param {string} value Value to be checked.
 * @returns {boolean} Whether the value is a valid CPF or not.
 * @example
 * isCpf('223.101.020-83');
 * // true
 *
 * isCpf('22310102083');
 * // true
 *
 * isCpf('111.111.111-11')
 * // false
 */
function isCpf(value: string): boolean {
  let cpf: string = value.replace(/[^\d]+/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  const items = [...new Set(cpf)];
  if (items.length === 1) return false;

  const digits = cpf.substring(9, 11);

  const calculateFirstDigit = () => {
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);

    let result = 11 - (sum % 11);
    if (result === 10 || result === 11) result = 0;

    return result;
  };

  const calculateSecondDigit = () => {
    let sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);

    let result = 11 - (sum % 11);
    if (result === 10 || result === 11) result = 0;

    return result;
  };

  return (
    digits ===
    calculateFirstDigit().toString() + calculateSecondDigit().toString()
  );
}

export { isCpf };
