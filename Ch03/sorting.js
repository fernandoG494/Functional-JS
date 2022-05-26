const mixedUpNumbers = [10, 8, 9, 2, 3, 6, 1, 4, 5, 7];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};

const sortedNumbers1 = mixedUpNumbers.slice().sort(ascending);
console.log(sortedNumbers1);

const sortedNumbers2 = mixedUpNumbers.slice().sort(descending);
console.log(sortedNumbers2);
