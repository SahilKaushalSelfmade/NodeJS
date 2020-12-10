const fs = require("fs");

// call back function is required for sync function

// fs.writeFile("read.txt", "Today Node Js", (err) => {
//   console.log("File is created");
// });

// fs.readFile("read.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// fs.mkdir("read", (err) => {
//   console.log(err);
// });

fs.writeFile("./read/read.txt", "My Name is Sahil Kaushal", (err) => {
  console.log(err);
});
fs.appendFile("./read/read.txt", " My Name is Sahil ", (err) => {
  console.log(err);
});
