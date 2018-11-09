/**
 * @file Exercism: Darts
 */

/**
 * Dart target radii and points.
 * @const {object}
 */
const DARTS = {
  inner: {
    radius: 1,
    points: 10,
  },
  mid: {
    radius: 5,
    points: 5,
  },
  outer: {
    radius: 10,
    points: 1,
  },
};

/**
 * Given an argument, determine if it is a number.
 * @param {*} arg
 * @returns {boolean}
 */
const isNaN = arg => typeof arg !== 'number';

/**
 * Given a point representing a single toss in a Darts game, return the score.
 * @param {number} x - x coordinate.
 * @param {number} y - y coordinate.
 * @returns {number} The points earned.
 */
export default (x, y) => {
  if (isNaN(x) || isNaN(y)) return null;

  const maxPosition = Math.max(x, y);

  if (maxPosition <= DARTS.inner.radius) return DARTS.inner.points;
  if (maxPosition <= DARTS.mid.radius) return DARTS.mid.points;
  if (maxPosition <= DARTS.outer.radius) return DARTS.outer.points;

  return 0;
};
