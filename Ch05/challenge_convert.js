const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
  'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
  'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
  'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
  'Dane', 'Dane', 'Rick', 'Donna', 'Mortier',
];

const tallyVotes = (votes) => votes.reduce((acc, name) => ({
  ...acc,
  [name]: acc[name] ? acc[name] + 1 : 1,
}), {});

console.log(tallyVotes(electionVotes));
