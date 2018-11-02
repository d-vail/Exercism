/**
 * @file Exercism: Leap
 */

/**
 * Given a year return true if it is a leap year and false if it is a common year.
 * @param {number} year - The year date.
 * @returns {boolean}
 */
export const isLeap = (year) => {
  const divBy4 = year % 4 === 0;
  const divBy100 = year % 100 === 0;
  const divBy400 = year % 400 === 0;

  return (divBy4 && !divBy100) || (divBy100 && divBy400);
};
