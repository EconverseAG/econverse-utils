/**
 * Checks wheather the current date is before the given date or not.
 * @since 0.6.0
 * @param {number} date Date of the month (1-31).
 * @param {number} month Month of the year (0-11).
 * @param {number} year Year (4 digits).
 * @returns {boolean} True if the current date is before the given date
 * @example
 * isBeforeDate(31, 11, 3999);
 * // true
 */
function isBeforeDate(date: number, month: number, year: number): boolean {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  if (year > currentYear) {
    return true;
  }
  if (year === currentYear && month > currentMonth) {
    return true;
  }
  if (year === currentYear && month === currentMonth && date > currentDay) {
    return true;
  }
  return false;
}

export { isBeforeDate };
