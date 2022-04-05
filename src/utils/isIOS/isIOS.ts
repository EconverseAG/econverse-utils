/**
 * Checks if the user is using an iOS device.
 * @param {Window} window Window object.
 * @returns {boolean} If the device is an iOS.
 */
function isIOS(window: Window): boolean {
  return /iphone|ipad|ipod/i.test(window?.navigator?.userAgent.toLowerCase());
}

export { isIOS };
