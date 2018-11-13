/**
 * @file Exercism: RNA Transcription
 */

/**
 * DNA to RNA base complements.
 * @const {object}
 */
const RNA_KEY = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

/**
 * Given a DNA base, return the matching RNA base.
 * @param {string} base - DNA base.
 * @returns {string} The complementing RNA base.
 * @throws Will throw an error if the argument is an invalid DNA base.
 */
const transcribe = (base) => {
  if (!RNA_KEY[base]) throw new Error('Invalid input DNA.');
  return RNA_KEY[base];
};

/**
 * Given a DNA sequence, return its RNA complement.
 * @param {string} dna - DNA sequence.
 * @returns {string} The complementing RNA sequence.
 */
export const toRna = dna => dna.replace(/./g, transcribe);
