/**
 * Checks if the user is using an Android device.
 * @param {Window} window Window object.
 * @returns {boolean} If the device is an Android.
 */
function isAndroid(window: Window): boolean {
  return /android/i.test(window?.navigator?.userAgent.toLowerCase());
}

export { isAndroid };
