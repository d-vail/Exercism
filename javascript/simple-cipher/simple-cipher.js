/**
 * @file Exercism: Simple Cipher
 */

class Cipher {
  constructor(key = undefined) {
    this.key = key === undefined ? Cipher.generateKey() : Cipher.validateKey(key);
  }

  /**
   * Generate a random key of 100 lowercase characters in length.
   * @returns {string} 100 character key
   */
  static generateKey() {
    const key = new Array(100).fill(0);
    return key.reduce(acc => acc + String.fromCharCode(Cipher.getRandomInt(97, 121)), '');
  }

  /**
   * Generate a random integer.
   * @param {number} min - The minimum integer to allow in range.
   * @param {number} max - The maximum integer to allow in range.
   */
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Check if the key provided is valid.
   * @param {string} key - The user provided key.
   * @returns {string} The original key.
   */
  static validateKey(key) {
    const invalid = key.length ? key.match(/[^a-z]/) : true;
    if (invalid) throw new Error('Bad key');
    return key;
  }
}

export { Cipher };
