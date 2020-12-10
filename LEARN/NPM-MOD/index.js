const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.bold.blue.white.inverse("Hello World"));

const res = validator.isEmail("skaushal91299@gmail.com");
console.log(res);

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
