import isAfterDate from '.';

describe('isAfterDate', () => {
  it('should return true when the given date is after the current date', () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    expect(isAfterDate(currentDay, currentMonth, currentYear - 1)).toBe(true);
    expect(isAfterDate(currentDay, currentMonth - 1, currentYear)).toBe(true);
    expect(isAfterDate(currentDay - 1, currentMonth, currentYear)).toBe(true);
  });
  it('should return false when the given date is the same as the current date', () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    expect(isAfterDate(currentDay, currentMonth, currentYear)).toBe(false);
  });
  it('should return false when the given date is before the current date', () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    expect(isAfterDate(currentDay, currentMonth, currentYear + 1)).toBe(false);
    expect(isAfterDate(currentDay, currentMonth + 1, currentYear)).toBe(false);
    expect(isAfterDate(currentDay + 1, currentMonth, currentYear)).toBe(false);
  });
});
