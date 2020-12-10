const fs = require("fs");

// SYNC
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);

// ASYNC
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("After the data");
