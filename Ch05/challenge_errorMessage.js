const currentInputValues = {
  firstName: 'Fernando',
  lastName: 'Garcia',
  zipCode: '98160',
  state: 'Zacatecas',
};

const inputCriteria = {
  firstName: [
    (value) => (value.length >= 2
      ? ''
      : 'First name must be at least 2 characters'),
  ],
  lastName: [
    (value) => (value.length >= 2
      ? ''
      : 'Last name must be at least 2 characters'),
  ],
  zipCode: [
    (value) => (value.length >= 5
      ? ''
      : 'Zip code must be at least 2 characters'),
  ],
  state: [
    (value) => (value.length >= 2
      ? ''
      : 'State must be at least 2 characters'),
  ],
};

// eslint-disable-next-line arrow-body-style
const getErrorCriteria = (inputs, criteria) => {
  return Object.keys(inputs).reduce((acc, fieldName) => [
    ...acc,
    ...criteria[fieldName].map((test) => test(inputs[fieldName])),
  ], []);
};

console.log(getErrorCriteria(currentInputValues, inputCriteria));
