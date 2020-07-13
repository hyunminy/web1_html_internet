// var testFolder = "data";
// var fs = require("fs");

// fs.readdir(testFolder, function (error, filelist) {
//   console.log(filelist);
// });

var testFolder = "./nodelearn/nodejs/data";
var fs = require("fs");

fs.readdir(testFolder, function (error, filelist) {
  console.log("readdir 찾았다");
  console.log(filelist);
});
