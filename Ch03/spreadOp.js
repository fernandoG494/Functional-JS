/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// object 1
const person = {
  name: 'Jimmy Smith',
  age: 24,
  heirColor: 'brown',
  eyeColor: 'blue',
};

// object 2
// const carrerData = {
//   title: 'developer',
//   company: 'ABC Software',
// };

// object 2.1
const carrerData = {
  name: 'Fernando Garcia',
  title: 'developer',
  company: 'ABC Software',
};

// object 3 with spread
const personWithCarrerData = {
  ...person,
  ...carrerData,
};

const updateData = {
  age: 25,
};

const updatedArray = {
  ...personWithCarrerData,
  ...updateData,
};

// EXAMPLE 2

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [
  0,
  ...numbers,
  6,
];

console.log(newNumbers);
