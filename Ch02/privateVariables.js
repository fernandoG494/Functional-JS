/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
const Person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (newJob) => _job = newJob,
  };
};

const me = Person({ name: 'Fernando', age: 24, job: 'developper' });
console.log(me.getName());
console.log(me._name); // undefined

me.setJob('software engineer');
console.log(me.getJob());
