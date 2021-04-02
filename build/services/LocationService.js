"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = exports.generateLocation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Satellite = _interopRequireDefault(require("../models/Satellite"));

var SatelliteService = _interopRequireWildcard(require("../services/SatelliteService"));

var _trilat = _interopRequireDefault(require("trilat"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Obtengo la localizacion del emisor del mensaje
 * @param {Object} satellites 
 * @returns 
 */
var generateLocation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(satellites) {
    var distancesResult, cordsResult;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Genero el Array de distancias
            distancesResult = transformDistances(satellites); //Obtengo la ubicacion del emisor del mensaje

            _context.next = 3;
            return getLocation(distancesResult);

          case 3:
            cordsResult = _context.sent;
            return _context.abrupt("return", cordsResult);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function generateLocation(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Obtener localizacion del emisor del mensaje
 * @param {Array} distances 
 * @returns 
 */


exports.generateLocation = generateLocation;

var getLocation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(distances) {
    var cords, satelliteOne, satelliteTwo, satelliteThree, input, error, external, output;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cords = null;
            _context2.prev = 1;
            _context2.next = 4;
            return SatelliteService.getOne(process.env.SATELLITE_ONE);

          case 4:
            satelliteOne = _context2.sent;
            _context2.next = 7;
            return SatelliteService.getOne(process.env.SATELLITE_TWO);

          case 7:
            satelliteTwo = _context2.sent;
            _context2.next = 10;
            return SatelliteService.getOne(process.env.SATELLITE_THREE);

          case 10:
            satelliteThree = _context2.sent;

            if (satelliteOne !== null && satelliteTwo !== null && satelliteThree !== null) {
              input = [//      X   ,  Y  ,   R = Distancia
              [satelliteOne.cords[0], satelliteOne.cords[1], distances[0]], [satelliteTwo.cords[0], satelliteTwo.cords[1], distances[1]], [satelliteThree.cords[0], satelliteThree.cords[1], distances[2]]]; //Valido que si un campo es un string

              external = input.find(function (element) {
                element.find(function (dat) {
                  if (typeof dat == "string") error = true;
                });
              });

              if (error === true || external !== undefined) {
                input = null;
              }

              output = (0, _trilat["default"])(input); //Si al hacer el calculo me da un array de un elemento retorna error.

              if (output.length == 2) {
                cords = {
                  x: parseFloat(output[0].toFixed(1)),
                  y: parseFloat(output[1].toFixed(1))
                };
              }
            }

            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", null);

          case 17:
            return _context2.abrupt("return", cords);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 14]]);
  }));

  return function getLocation(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Formo un Array de mensajes de los satellites.
 * @param {Object} satellites 
 * @returns 
 */


exports.getLocation = getLocation;

var transformDistances = function transformDistances(satellites) {
  var distances = new Array();

  var _iterator = _createForOfIteratorHelper(satellites),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sat = _step.value;
      distances.push(sat.distance);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return distances;
};