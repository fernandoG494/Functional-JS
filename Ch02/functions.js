/* eslint-disable no-unused-vars */
function myFunction(arg1, arg2) {
  // function body
}

// eslint-disable-next-line func-names
const myOtherFunction = function (x, y) {
  // body function
};

/**
 * Other way to declare a function:
 * const [name] = ([arguments]) => [what we do in the function]
 */
const add = (x, y) => x + y;

const double = (number) => number * 2;

// eslint-disable-next-line func-names
const double2 = function (number) {
  return number * 2;
};

/**
 * We can return an object
 */
const getPersonalData = () => ({
  name: 'Fernando Garcia',
  age: 24,
  job: 'junior programmer',
});

// eslint-disable-next-line no-console
console.log(getPersonalData);
