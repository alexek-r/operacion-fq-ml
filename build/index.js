"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

//Dejo la app escuchando en el puerto
_app["default"].listen(3000);

console.log("server listen on port", 3000);