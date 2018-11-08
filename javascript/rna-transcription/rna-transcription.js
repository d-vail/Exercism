/**
 * @file Exercism: RNA Transcription
 */

 /**
  * DNA to RNA nucleotide complements.
  * @const {object}
  */
const RNA_KEY = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

/**
 * Given a DNA sequence, return its RNA complement.
 * @param {string} dna - DNA sequence.
 * @returns {string} The complementing RNA sequence.
 */
export const toRna = (dna) => {
  let rna = '';

  for (let i = 0; i < dna.length; i += 1) {
    if (!RNA_KEY[dna[i]]) throw new Error('Invalid input DNA.');
    rna += RNA_KEY[dna[i]];
  }

  return rna;
};
