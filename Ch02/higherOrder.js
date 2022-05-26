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
