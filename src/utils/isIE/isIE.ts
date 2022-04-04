/**
 * Checks if the user is using Internet Explorer.
 * @param {Window} window Window object.
 * @returns {boolean} If the browser is Internet Explorer.
 */
function isIE(window: Window): boolean {
  return /msie|trident/i.test(window?.navigator?.userAgent.toLowerCase());
}

export default isIE;
