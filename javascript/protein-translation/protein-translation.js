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

const getCodons = rna => rna.match(/(.{3})/g) || [];

const getAminoAcid = (codon) => {
  const aminoAcid = CODON_TABLE[codon];
  if (typeof aminoAcid === 'undefined') throw new Error('Invalid codon');
  return aminoAcid;
};

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
