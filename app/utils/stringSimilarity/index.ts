// The Jaccard similarity compares the similarity between two sets
// by dividing the size of their intersection by the size of their union.
// You can tokenize the strings into words or character n-grams
// and use Jaccard similarity to determine how similar two strings are.

const stringSimilarity = (str1: string, str2: string): number => {
  const set1 = new Set(str1.split(' '));
  const set2 = new Set(str2.split(' '));

  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size;
};

export default stringSimilarity;
