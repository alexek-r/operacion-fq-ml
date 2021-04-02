"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInAction = exports.signUpAction = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var AuthService = _interopRequireWildcard(require("../services/AuthService"));

/**
 * Registro de usuario
 * @param {Object} req 
 * @param {Object} res 
 */
var signUpAction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, email, roles, signUpResult;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Destructuring
            _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email, roles = _req$body.roles;
            _context.next = 3;
            return AuthService.signUp(username, password, email, roles);

          case 3:
            signUpResult = _context.sent;

            if (!(signUpResult === false)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: signUpResult.message
            }));

          case 8:
            res.status(200).json({
              message: signUpResult.message,
              token: signUpResult.token
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUpAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Login de usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns 
 */


exports.signUpAction = signUpAction;

var signInAction = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var signInActionResult;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return AuthService.signInAction(req.body.email, req.body.password);

          case 2:
            signInActionResult = _context2.sent;

            if (signInActionResult.status === false) {
              res.status(signInActionResult.code).json({
                message: signInActionResult.message,
                token: signInActionResult.token
              });
            } else {
              res.status(200).json({
                message: signInActionResult.message,
                token: signInActionResult.token
              });
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signInAction(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signInAction = signInAction;