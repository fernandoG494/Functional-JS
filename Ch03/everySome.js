/* eslint-disable no-unused-vars */
// SOME
const employees = [{
  name: 'User1',
  salary: 25000,
}, {
  name: 'User2',
  salary: 12000,
}, {
  name: 'User3',
  salary: 8000,
}, {
  name: 'User4',
  salary: 8000,
}];

const makeMoreThan10k = (employee) => employee.salary > 10000;

const result = employees.some(makeMoreThan10k);
console.log(result);

// EVERY
const formValues = [
  'Shaun',
  'Washell',
  'Maine',
  '',
];

const isNotEmpty = (string) => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);
