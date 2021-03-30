"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv").config();

_mongoose["default"].connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log("Db is connected");
})["catch"](function (error) {
  return console.log("Error DB: ", error);
});