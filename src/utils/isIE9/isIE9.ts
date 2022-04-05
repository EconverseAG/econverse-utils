/**
 * Checks if the user is using Internet Explorer 9.
 * @param {Window} window Window object.
 * @returns {boolean} If the browser is Internet Explorer 9.
 */
function isIE9(window: Window): boolean {
  return /msie 9.0/i.test(window?.navigator?.userAgent.toLowerCase());
}

export { isIE9 };
