const fs = require("fs");

fs.mkdir("sahil", (err) => {
  console.log("Folder Created");
});

fs.writeFile("./sahil/sahil.txt", "My Name is Sahil Kaushal", (err) => {
  console.log("File Created");
});

fs.readFile("./sahil/sahil.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.rename("./sahil/sahil.txt", "./sahil/sahilkaushal.txt", (err) => {
  console.log("rename done");
});
fs.unlink("./sahil/sahilkaushal.txt", (err) => {
  console.log("FIle Deleted");
});

fs.rmdir("sahil", (err) => {
  console.log(err);
});
