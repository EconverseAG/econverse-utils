/**
 * Gets a parameter from the url.
 * @since 0.6.0
 * @param {string} url Url to be parsed.
 * @param {string} param Parameter to be searched for.
 * @returns {string} Parameter value.
 * @example
 * getUrlParam('http://localhost:8080/?param=value', 'param');
 * // returns 'value'
 */
function getUrlParam(url: string, param: string): string {
  const regex = new RegExp(`[?&]${param}=([^&#]*)`);
  const results = regex.exec(url);

  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export { getUrlParam };
