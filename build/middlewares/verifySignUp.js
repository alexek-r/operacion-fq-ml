"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDuplicateUserAndEmailExisted = exports.checkRolesExisted = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = require("../models/Role");

var _User = _interopRequireDefault(require("../models/User"));

var checkRolesExisted = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body.roles) {
              _context.next = 9;
              break;
            }

            console.log(_Role.ROLES); //Verifico si alguno de los roles ingresados no existe

            i = 0;

          case 3:
            if (!(i < req.body.roles.length)) {
              _context.next = 9;
              break;
            }

            if (_Role.ROLES.includes(req.body.roles[i])) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "Role ".concat(req.body.roles[i], " does not exists")
            }));

          case 6:
            i++;
            _context.next = 3;
            break;

          case 9:
            next();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkRolesExisted(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkRolesExisted = checkRolesExisted;

var checkDuplicateUserAndEmailExisted = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user, email;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              username: req.body.username
            });

          case 2:
            user = _context2.sent;

            if (!user) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: 'The username already exists'
            }));

          case 5:
            _context2.next = 7;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 7:
            email = _context2.sent;

            if (!email) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "The email already exists"
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function checkDuplicateUserAndEmailExisted(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkDuplicateUserAndEmailExisted = checkDuplicateUserAndEmailExisted;