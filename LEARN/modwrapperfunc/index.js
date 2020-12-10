// Bcoz of IIFE we can't use data outside the function

// Private module

// Grouping Operator
// Anonymous Wrapper Function

(function (exports, require, module, __filename, __dirname) {
  const a = require("module"); //not require to write
  const name = "Sahil";
  console.log(name);
  module.exports = { private };
});

// const name = "Sahil";
// console.log(name);

// BONUS
(function () {
  var a = "Sahil Kaushal";
  console.log(a);
})();

var a = "Sahil Kaushal";
console.log(a);
console.log(__dirname);
console.log(__filename);
