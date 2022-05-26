/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line consistent-return
/**
 * Common math function with initial check
 */
const divide = (x, y) => {
  if (y === 0) {
    console.log('Error: divided by zero');
    return null;
  }
  return x / y;
};

// Higher order function
// verifier
const secondArgumentIsntZero = (funct) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (...args) => {
    if (args[1] === 0) {
      console.log('Error: divided by zero');
      return null;
    }

    return funct(...args);
  };

// function recall
const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 8));
console.log(divideSafe(7, 0));
