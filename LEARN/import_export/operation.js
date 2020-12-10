const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
// console.log(`${add(5, 4)}`);

const name = `Sahil Kaushal`;

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

module.exports = { add, sub, mul, name };
