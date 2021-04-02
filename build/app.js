"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _RebelIntelligenceRoutes = _interopRequireDefault(require("./routes/RebelIntelligenceRoutes"));

var _AuthRoutes = _interopRequireDefault(require("./routes/AuthRoutes"));

var _init = require("./libs/init");

var app = (0, _express["default"])(); //Creo los roles

(0, _init.createRoles)(); //Creo los satellites

(0, _init.createSatellites)();
app.set("pkg", _package["default"]); //Para poder ver las pegadas que se realizan en consola.

app.use((0, _morgan["default"])('dev')); //Para que entienda en formato json

app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
app.use("/api", _RebelIntelligenceRoutes["default"]);
app.use("/api/auth", _AuthRoutes["default"]);
var _default = app;
exports["default"] = _default;