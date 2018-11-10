/**
 * @file Exercism: Darts
 */

/**
 * Given the maximum value from a point representing a single toss in a Darts game, return the
 * score.
 * @param {number} position - Maximum coordinate.
 * @returns {number} The points earned.
 */
const getScore = (position) => {
  const DARTS = [
    {
      radius: 1,
      points: 10,
    },
    {
      radius: 5,
      points: 5,
    },
    {
      radius: 10,
      points: 1,
    },
  ];

  for (let i = 0; i < DARTS.length; i += 1) {
    if (position <= DARTS[i].radius) return DARTS[i].points;
  }

  return 0;
};

/**
 * Given a point representing a single toss in a Darts game, return the score.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @returns {number} The points earned.
 */
export default (x, y) => (typeof (x + y) !== 'number' ? null : getScore(Math.max(x, y)));
