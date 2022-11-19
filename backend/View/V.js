"use strict";
exports.__esModule = true;
var URL = "http://localhost:5000/api/goals";
fetch(URL, {
  method: "GET",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    return console.log(data);
  })
  ["catch"](function (err) {
    return console.log(err);
  });
