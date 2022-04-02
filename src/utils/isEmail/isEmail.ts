/**
 * Checks if the given value is a valid email or not.
 * @since 0.6.0
 * @param value Value to be checked.
 * @example
 * isEmail('test@email.com')
 * // true
 *
 * isEmail('testemail.com')
 * // false
 * @returns Whether the value is a valid email or not.
 * @type {(value: string) => boolean}
 */
function isEmail(value: string): boolean {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

export default isEmail;
