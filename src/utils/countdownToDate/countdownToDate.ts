import { ICountdownToDateReturn } from './countdownToDate.types';

/**
 * Countdown to given date.
 * @since 0.7.0
 * @param {Date} date Date to countdown to.
 * @returns {ICountdownToDateReturn} Countdown to date object (days, hours, minutes and seconds).
 */
function countdownToDate(date: Date): ICountdownToDateReturn {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export { countdownToDate };
