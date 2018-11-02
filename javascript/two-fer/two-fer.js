/**
 * @file Exercism: Two Fer
 */

/**
 * Return the phrase "One for X, one for me." where X is a name or "you".
 * @param {string} name - Optional name.
 * @returns {string} The phrase "One for X, one for me.".
 */
export const twoFer = name => `One for ${name || 'you'}, one for me.`;
