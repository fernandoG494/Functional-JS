import words from 'an-array-of-english-words';

const countOcurrences = (arr) => {
  arr.reduce((acc, str) => ({
    ...acc,
    [str]: acc[str] ? acc[str] + 1 : 1,
  }), {});
};

const hasSameLetterCount = (word1, word2) => {
  const word1Count = countOcurrences(word1.split(''));
  const word2Count = countOcurrences(word2.split(''));

  return Object.keys(word1Count).length === Object.keys(word2Count).length
  && Object.keys(word1Count).every((letter) => word1Count[letter] === word2Count[letter]);
};

// eslint-disable-next-line max-len
const findAnagrams = (word, allWords) => allWords
  .filter((entry) => hasSameLetterCount(word, entry))
  .filter((anagram) => anagram !== word);

console.log(findAnagrams('cinema', words));
