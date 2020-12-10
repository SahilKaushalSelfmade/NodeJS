// 1. To create a server first require http
// 2. The http.createServer() method includes a request and response parameter which is supplied by Node.js
// 3. The request object can be used to get information about the
const fs = require("fs");
const http = require("http");
// server create

// const server = http.createServer((req, res) => {
//   // console.log("req, res");

//   res.end("response from the other side.");
// });

// server.listen(8000, "localhost", () => {
//   console.log("Listen to the Port : 8000");
// });
// server create

// Routing (How http handles request in node JS)
const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/user_API/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/home") {
    res.end("response from the Home side");
  } else if (req.url == "/about") {
    res.end("response from the About side");
  } else if (req.url == "/userAPI") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(objData["colors"][2].category);
    // res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); //For showing content type & showing error code 404 not found
    res.end("<h1>404 Page doesn't exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listen to the Port : 8000");
});
// Routing (How http handles request in node JS)

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if ((req.url = "/")) {
//     res.end("Hello From The c Side");
//   } else if ((req.url = "/home")) {
//     res.end("Hello From The Home Side");
//   }
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listen to the Port : 8000");
// });
