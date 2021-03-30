"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topSecretSplit = exports.getTopSecret = exports.messageTopSecret = void 0;

var naveServices = _interopRequireWildcard(require("../libs/naveServices"));

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