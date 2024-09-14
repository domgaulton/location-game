// The Jaccard similarity compares the similarity between two sets
// by dividing the size of their intersection by the size of their union.
// You can tokenize the strings into words or character n-grams
// and use Jaccard similarity to determine how similar two strings are.

const stringSimilarity = (str1: string, str2: string): number => {
  const cleanString = (str: string) =>
    str
      .toLowerCase() // Convert to lowercase for case-insensitive comparison
      .replace(/[^\w\s]/gi, ''); // Remove all special characters

  const set1 = new Set(cleanString(str1).split(' '));
  const set2 = new Set(cleanString(str2).split(' '));

  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size;
};

export default stringSimilarity;
