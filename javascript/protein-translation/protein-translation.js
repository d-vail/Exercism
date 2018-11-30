const CODON_TO_PROTEIN = {
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

const getProtein = (codon) => {
  const protein = CODON_TO_PROTEIN[codon];
  if (typeof protein === 'undefined') throw new Error('Invalid codon');
  return protein;
};

const translate = codons => codons.reduce(
  (acc, codon) => {
    const { stop, polypeptide } = acc;
    const protein = getProtein(codon);

    return stop
      ? acc
      : {
        stop: !protein,
        polypeptide: protein ? polypeptide.concat([protein]) : polypeptide,
      };
  },
  { stop: false, polypeptide: [] },
).polypeptide;

export default (rna = '') => translate(getCodons(rna));
