"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var naveControllers = _interopRequireWildcard(require("../controllers/nave.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/topSecret', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isGeneral], naveControllers.getTopSecret);
router.post('/topSecret', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isGeneral], naveControllers.messageTopSecret);
router.get('/topSecret_split', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isGeneral], naveControllers.topSecretSplit);
var _default = router;
exports["default"] = _default;