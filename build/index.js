"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Dejo la app escuchando en el puerto
_app["default"].set("port", process.env.PORT || 3000);

_app["default"].listen(_app["default"].get("port"), function () {
  console.log("Server listen on port", _app["default"].get("port"));
});