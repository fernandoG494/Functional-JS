const add = (x, y, z) => x + y + z;
// eslint-disable-next-line no-unused-vars
const args = [1, 2, 3];
const add1 = add.bind(null, 1);

console.log(add1.add(2, 3));
