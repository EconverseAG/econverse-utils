/**
 * Formats bytes as a human readable string.
 * @since 0.7.0
 * @param {number} bytes Number of bytes.
 * @returns {string} Formatted string.
 * @example
 * bytesToSize(1024)
 * // 1.0 KB
 */
function bytesToSize(bytes: number): string {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];

  if (bytes < 1024) return `${bytes} B`;

  const i = parseInt(
    Math.floor(Math.log(bytes) / Math.log(1024)).toString(),
    10,
  );

  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

export { bytesToSize };
