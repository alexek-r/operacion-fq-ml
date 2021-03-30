"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topSecretSplit = exports.getTopSecret = exports.messageTopSecret = void 0;

var naveServices = _interopRequireWildcard(require("../libs/naveServices"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//Post
var messageTopSecret = function messageTopSecret(req, res) {
  //console.log(req.body);
  var satellites = req.body.satellites; // console.log(satellites);
  //Obtengo el mensaje entre los satelites

  var mensaje = naveServices.getMessage(satellites);
  console.log("MENSAJE", mensaje);
  res.json(satellites);
}; //Get


exports.messageTopSecret = messageTopSecret;

var getTopSecret = function getTopSecret(req, res) {
  res.json("get TopSecret");
}; //Post y Get


exports.getTopSecret = getTopSecret;

var topSecretSplit = function topSecretSplit(req, res) {
  res.json("get TopSecret_Split");
};

exports.topSecretSplit = topSecretSplit;