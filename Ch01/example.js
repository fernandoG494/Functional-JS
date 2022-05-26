// const x = 5;
// x = 6;

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 100;
// numbers.reverse();

// const person = {
//   name: 'Fernando Garcia',
//   age: 24,
// };

// person.name = 'Bob';

const person = {
  name: 'Fernando Garcia',
  age: 24,
};

// should launch error for immutable activated on .eslintrc, delete next commented line
// eslint-disable-next-line immutable/no-mutation
person.name = 'Bob';
