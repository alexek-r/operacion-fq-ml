"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSatellites = exports.createRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _Satellite = _interopRequireDefault(require("../models/Satellite"));

var createRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var countRoles, values;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role["default"].estimatedDocumentCount();

          case 3:
            countRoles = _context.sent;

            if (!(countRoles > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Role["default"]({
              name: 'general'
            }).save(), new _Role["default"]({
              name: 'tripulante'
            }).save()]);

          case 8:
            values = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error("Error createRoles(): ", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createSatellites = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var countSatellites, values;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Satellite["default"].estimatedDocumentCount();

          case 3:
            countSatellites = _context2.sent;

            if (!(countSatellites > 0)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            _context2.next = 8;
            return Promise.all([new _Satellite["default"]({
              name: 'kenobi',
              cords: [-500, -200]
            }).save(), new _Satellite["default"]({
              name: 'skywalker',
              cords: [100, -100]
            }).save(), new _Satellite["default"]({
              name: 'sato',
              cords: [500, 100]
            }).save()]);

          case 8:
            values = _context2.sent;
            console.log("Satellites succesfully", values);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.error("Error createSatellites(): ", _context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function createSatellites() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createSatellites = createSatellites;