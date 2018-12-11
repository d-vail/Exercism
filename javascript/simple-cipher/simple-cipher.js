/**
 * @file Exercism: Simple Cipher
 */

/**
 * Unicode for character 'a'.
 * @const {string}
 */
const A = 97;

/**
 * Unicode for character 'z'.
 * @const {string}
 */
const Z = 121;

class Cipher {
  constructor(key = undefined) {
    this.key = key === undefined ? Cipher.generateKey() : Cipher.validateKey(key);
  }

  /**
   * Encodes a shift cipher based on the given input and the stored key.
   * @param {string} input - String to be encoded.
   * @returns {string} Cipher.
   */
  encode(input) {
    const key = this.key.split('').map(char => char.charCodeAt() - A);
    return input
      .split('')
      .reduce((acc, char, index) => acc + String.fromCharCode(char.charCodeAt() + key[index]), '');
  }

  /**
   * Decodes a shift cipher based on the given cipher and the stored key.
   * @param {string} cipher - Encoded cipher.
   * @returns {string} Decoded string.
   */
  decode(cipher) {
    const key = this.key.split('').map(char => char.charCodeAt() - A);
    return cipher
      .split('')
      .reduce((acc, char, index) => acc + String.fromCharCode(char.charCodeAt() - key[index]), '');
  }

  /**
   * Generate a random key of 100 lowercase characters in length.
   * @returns {string} 100 character key
   */
  static generateKey() {
    const key = new Array(100).fill(0);
    return key.reduce(acc => acc + String.fromCharCode(Cipher.getRandomInt(A, Z)), '');
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
