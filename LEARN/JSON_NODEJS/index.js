const fs = require("fs");
const bioData = {
  name: "Sahil Kaushal",
  age: 21,
  channel: "Selfmade Gaming",
};

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// {"name":"Sahil Kaushal","age":21,"channel":"Selfmade Gaming"}

// const objData = JSON.parse(jsonData);
// console.log(objData);

// 1. Convert into JSON
// 2. Save 2 Another File
// 3. ReadFile
// 4. Conver back to js Object Original
// 5. Console.log

// ONE
const jsonData = JSON.stringify(bioData);
// TWO
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("Done");
});
// THREE
fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  // FOUR
  const orgData = JSON.parse(data);
  console.log(orgData);
});
