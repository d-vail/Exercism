/**
 * @file Exercism: Leap
 */

/**
 * Given a year return true if it is a leap year and false if it is a common year.
 * @param {number} year - The year date.
 * @returns {boolean}
 */
export const isLeap = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
