/**
 * Checks if the user is using a mobile screen.
 * @since 0.7.0
 * @param {Window} window Window object.
 * @param {number} mobileWidth (Optional) Mobile screen width. Default is 768.
 * @returns {boolean} If it is a mobile screen.
 */
function isMobile(window: Window, mobileWidth: number = 768): boolean {
  return window.innerWidth <= mobileWidth;
}

export default isMobile;
