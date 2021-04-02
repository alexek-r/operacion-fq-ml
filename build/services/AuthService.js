"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInAction = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Role = _interopRequireDefault(require("../models/Role"));

/**
 * Creacion de cuenta
 * @param {String} username 
 * @param {String} password 
 * @param {String} email 
 * @param {String} roles 
 * @returns 
 */
var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password, email, roles) {
    var newUser, foundRoles, role, savedUser, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 6;
            return _User["default"].encryptPassword(password);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 12:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role.id;
            });
            _context.next = 20;
            break;

          case 16:
            _context.next = 18;
            return _Role["default"].find({
              name: {
                $in: 'tripulante'
              }
            });

          case 18:
            role = _context.sent;
            newUser.roles = [role.id];

          case 20:
            _context.next = 22;
            return newUser.save();

          case 22:
            savedUser = _context.sent;

            if (!savedUser) {
              _context.next = 28;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, process.env.SECRET, {
              expiresIn: 86400 // 24 hours

            });
            return _context.abrupt("return", {
              status: true,
              token: token,
              message: "User created successfully"
            });

          case 28:
            return _context.abrupt("return", {
              status: false,
              message: "Error creating user"
            });

          case 29:
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t5 = _context["catch"](0);
            return _context.abrupt("return", {
              status: false,
              message: "Error in system"
            });

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 31]]);
  }));

  return function signUp(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Login de usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns 
 */


exports.signUp = signUp;

var signInAction = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email, password) {
    var userFound, matchPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: email
            }).populate('roles');

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", {
              status: false,
              code: 400,
              message: 'User not found'
            });

          case 5:
            _context2.next = 7;
            return _User["default"].comparePassword(password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", {
              status: false,
              code: 401,
              token: null,
              message: 'Invalid password'
            });

          case 10:
            if (process.env.SECRET) {
              _context2.next = 12;
              break;
            }

            throw new Error("Token secret must be provide!");

          case 12:
            //Si es todo correcto retorno el token del usuario
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, process.env.SECRET, {
              expiresIn: 86400 //24hs

            });
            return _context2.abrupt("return", {
              status: true,
              code: 200,
              token: token,
              message: 'Welcome ' + userFound.username
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signInAction(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signInAction = signInAction;