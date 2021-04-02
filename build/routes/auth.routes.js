"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var AuthController = _interopRequireWildcard(require("../controllers/AuthController"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //EndPoint para login

router.post("/signin", AuthController.signInAction); //EndPoint para registrarse + middlewares de checkeo de email, usuario y si los roles existen

router.post("/signup", [_middlewares.verifySignUp.checkDuplicateUserAndEmailExisted, _middlewares.verifySignUp.checkRolesExisted], AuthController.signUpAction);
var _default = router;
exports["default"] = _default;