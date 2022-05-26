/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const map = (arr, func) => {
  // code function here!
  if (arr.length <= 0) {
    console.log('Error: empty array');
    return null;
  }

  const result = [];
  for (let x = 0; x < arr.length; x++) {
    // eslint-disable-next-line immutable/no-mutation
    result[x] = func(arr[x]);
  }

  return result;
};

// testing if it works:
// Should be [2, 4, 6]
console.log(map([1, 2, 3], (x) => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9], (x) => -x));

// Should be [A, B, C, D]
console.log(map(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));
