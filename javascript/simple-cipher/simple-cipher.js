/**
 * @file Exercism: Simple Cipher
 */

class Cipher {
  constructor(key = null) {
    this.key = key || Cipher.generateKey();
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
}

export { Cipher };
