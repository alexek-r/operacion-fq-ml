"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDocumentSatellites = exports.satelliteFindAndUpdate = exports.getSatellitesInformation = exports.UpdateOne = exports.getOne = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Satellite = _interopRequireDefault(require("../models/Satellite"));

var getOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name) {
    var satelliteFound;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            satelliteFound = null;
            _context.prev = 1;
            _context.next = 4;
            return _Satellite["default"].findOne({
              name: name
            });

          case 4:
            satelliteFound = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 10:
            return _context.abrupt("return", satelliteFound);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function getOne(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var UpdateOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name) {
    var satelliteFound;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            satelliteFound = null;
            _context2.prev = 1;
            _context2.next = 4;
            return _Satellite["default"].findOne({
              name: name
            });

          case 4:
            satelliteFound = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 10:
            return _context2.abrupt("return", satelliteFound);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));

  return function UpdateOne(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Verifica que los campos de los 3 satellites esten completos
 * @returns True or False
 */


exports.UpdateOne = UpdateOne;

var verifySatellitesCompleteInformation = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var query, count, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            /*Query 
                distance => verifico que exista el campo y que sea double (ejemplo: distance: 100.0)
                message => verifico que exista el campo, que sea array y no este vacio (ejemplo: message: ["hola","probando"])
            */
            query = {
              distance: {
                $exists: true,
                $type: ['double', 'int']
              },
              message: {
                $exists: true,
                $type: 'array',
                $ne: []
              }
            };
            _context3.next = 3;
            return _Satellite["default"].find(query).count();

          case 3:
            count = _context3.sent;
            result = false;

            if (count === 3) {
              result = true;
            }

            return _context3.abrupt("return", result);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function verifySatellitesCompleteInformation() {
    return _ref3.apply(this, arguments);
  };
}();

var getSatellitesInformation = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var response, verifyResult, values;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            response = null;
            _context4.next = 3;
            return verifySatellitesCompleteInformation();

          case 3:
            verifyResult = _context4.sent;

            if (!verifyResult) {
              _context4.next = 9;
              break;
            }

            _context4.next = 7;
            return _Satellite["default"].find({});

          case 7:
            values = _context4.sent;

            if (values.length === 3) {
              response = formatDocumentSatellites(values);
            }

          case 9:
            return _context4.abrupt("return", response);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getSatellitesInformation() {
    return _ref4.apply(this, arguments);
  };
}();

exports.getSatellitesInformation = getSatellitesInformation;

var formatDocumentSatellites = function formatDocumentSatellites(values) {
  var document = {
    "satellites": [{
      "name": values[0].name,
      "distance": values[0].distance,
      "message": values[0].message
    }, {
      "name": values[1].name,
      "distance": values[1].distance,
      "message": values[1].message
    }, {
      "name": values[2].name,
      "distance": values[2].distance,
      "message": values[2].message
    }]
  };
  return document;
};

exports.formatDocumentSatellites = formatDocumentSatellites;

var satelliteFindAndUpdate = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(name, content) {
    var result, distance, message, filter;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            result = null; //Destructuring

            distance = content.distance, message = content.message;
            filter = {
              name: name
            };

            if (!(distance && message)) {
              _context5.next = 7;
              break;
            }

            _context5.next = 6;
            return _Satellite["default"].updateOne(filter, {
              $set: {
                distance: distance,
                message: message
              }
            }, {
              "new": true
            });

          case 6:
            result = _context5.sent;

          case 7:
            return _context5.abrupt("return", result);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function satelliteFindAndUpdate(_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.satelliteFindAndUpdate = satelliteFindAndUpdate;