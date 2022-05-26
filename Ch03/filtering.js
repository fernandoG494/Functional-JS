/* eslint-disable no-unused-vars */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (x) => x % 2 === 0;

const evenNumbers = numbers.filter((x) => x % 2 === 0);

// console.log(evenNumbers);

const words = [
  'hello',
  'goodbye',
  'the',
  'Antartica',
];

const createLengthList = (minLength) => (word) => word.length > minLength;
const longWords = words.filter(createLengthList(5));

console.log(longWords);
