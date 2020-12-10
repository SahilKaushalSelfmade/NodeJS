const { EventEmitter } = require("events");
// const EventEmitter = require("events");

// const event = require("events");

const event = new EventEmitter();
// event.on("saymyname", () => {
//   console.log("Your Name IS Sahil ");
// });
// event.on("saymyname", () => {
//   console.log("Your Name IS Kaushal");
// });
// event.on("saymyname", () => {
//   console.log("Your Name IS Sahil Kaushal");
// });

// event.emit("saymyname");

event.on("checkpage", (sc, msg) => {
  console.log(`status code is ${[sc]} and the page is ${msg}`);
});
event.emit("checkpage", 200, "Ok");
