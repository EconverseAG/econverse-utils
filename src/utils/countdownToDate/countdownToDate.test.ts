import countdownToDate from './countdownToDate';

describe('countdownToDate', () => {
  it('should be able to countdown to a date', () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    date.setMinutes(date.getMinutes() + 152);
    date.setSeconds(date.getSeconds() + 20);
    const result = countdownToDate(date);

    expect(result).toMatchObject({
      days: 3,
      hours: 2,
      minutes: 32,
      seconds: 20,
    });
  });
});
