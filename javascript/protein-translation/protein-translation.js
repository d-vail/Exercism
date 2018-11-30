/**
 * @file Exercism: Protein Translation
 */

/**
 * RNA codon to amino acid map.
 * @const {object}
 */
const CODON_TABLE = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: false,
  UAG: false,
  UGA: false,
};

/**
 * Given an RNA sequence, return an array of codons or 3 nucleotide sequences.
 * @param {string} rna - RNA sequence.
 * @returns {array} An array of codons.
 * @example
 *  ['AUG', 'UUU', 'UCU', 'UAA', 'AUG']
 */
const getCodons = rna => rna.match(/(.{3})/g) || [];

/**
 * Given a codon, return the matching amino acid.
 * @param {string} codon - RNA codon.
 * @returns {string} The matching amino acid.
 * @throws Will throw an error if the argument is an invalid codon.
 */
const getAminoAcid = (codon) => {
  const aminoAcid = CODON_TABLE[codon];
  if (typeof aminoAcid === 'undefined') throw new Error('Invalid codon');
  return aminoAcid;
};

/**
 * Given an array of codons, return the correct polypeptide chain as an array.
 * @param {array} codons - An array of codons.
 * @example
 *  ['AUG', 'UUU', 'UCU', 'UAA', 'AUG']
 * @returns {array} The polypeptide chain.
 * @example
 *  ['Methionine', 'Phenylalanine', 'Serine']
 */
const translate = codons => codons.reduce(
  (acc, codon) => {
    const { stop, polypeptide } = acc;
    const aminoAcid = getAminoAcid(codon);

    return stop
      ? acc
      : {
        stop: !aminoAcid,
        polypeptide: aminoAcid ? polypeptide.concat([aminoAcid]) : polypeptide,
      };
  },
  { stop: false, polypeptide: [] },
).polypeptide;

export default (rna = '') => translate(getCodons(rna));
