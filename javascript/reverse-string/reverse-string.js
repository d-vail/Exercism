/**
 * @file Exercism: Reverse String
 */

/**
 * Given a string, return the string reversed.
 * @param {string} str - Input string.
 * @returns {string} The input string reversed.
 */
const reverseString = (str) => {
  let reverseStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }

  return reverseStr;
};

export default reverseString;
