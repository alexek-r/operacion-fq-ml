"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Dejo la app escuchando en el puerto
_app["default"].listen(3000);

console.log("server listen on port", 3000);