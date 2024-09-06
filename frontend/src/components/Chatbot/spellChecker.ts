import * as spellchecker from 'spellchecker';

export const correctSpelling = (text: string): string => {
  const correctedText = spellchecker.getCorrectionsForMisspelling(text);
  if (correctedText.length > 0) {
    return correctedText.join(', ');
  }
  return text;
};
