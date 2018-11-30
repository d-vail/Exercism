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

export default rna => rna.match(/(.{3})/g).reduce(
  (acc, codon) => {
    if (acc.stop) return acc;

    const protein = CODON_TO_PROTEIN[codon];
    return protein
      ? { ...acc, polypeptide: acc.polypeptide.concat([protein]) }
      : { ...acc, stop: true };
  },
  { stop: false, polypeptide: [] },
).polypeptide;
