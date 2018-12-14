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
const Z = 122;

/**
 * Total number of available characters for cipher.
 * @const {number}
 */
const LETTERS = 26;

class Cipher {
  constructor(key = undefined) {
    const cipherKey = key === undefined ? Cipher.generateKey() : Cipher.validateKey(key);

    this.key = cipherKey;
    this.keyShift = Cipher.getKeyShift(cipherKey);
  }

  /**
   * Encodes a shift cipher based on the given input and the stored key.
   * @param {string} input - String to be encoded.
   * @returns {string} Cipher.
   */
  encode(input) {
    return input.split('').reduce((acc, char, index) => acc + this.getEncodedChar(char, index), '');
  }

  /**
   * Decodes a shift cipher based on the given cipher and the stored key.
   * @param {string} cipher - Encoded cipher.
   * @returns {string} Decoded string.
   */
  decode(cipher) {
    return cipher
      .split('')
      .reduce((acc, char, index) => acc + this.getDecodedChar(char, index), '');
  }

  /**
   * When given a character from an input string and the index of that character, return
   * the encoded character or the shifted character based on the stored key.
   * @param {string} char - Character from input to be encoded.
   * @param {number} index - Index of character from input.
   * @returns {string} Encoded character.
   */
  getEncodedChar(char, index) {
    const shift = char.charCodeAt() + this.keyShift[index];
    const encodedCharCode = shift > Z ? shift - LETTERS : shift;
    return String.fromCharCode(encodedCharCode);
  }

  /**
   * When given a character from an cipher string and the index of that character, return
   * the decoded character or the unshifted character based on the stored key.
   * @param {string} char - Character from cipher to be decoded..
   * @param {number} index - Index of character from cipher.
   * @returns {string} Decoded character.
   */
  getDecodedChar(char, index) {
    const shift = char.charCodeAt() - this.keyShift[index];
    const decodedCharCode = shift < A ? shift + LETTERS : shift;
    return String.fromCharCode(decodedCharCode);
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
   * Get the shift length for each character in given key.
   * @param {string} - Cipher key.
   * @returns {array} The shift lengths.
   */
  static getKeyShift(key) {
    return key.split('').map(char => char.charCodeAt() - A);
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
