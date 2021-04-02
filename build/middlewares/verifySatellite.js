"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSatelliteExisted = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Satellite = _interopRequireDefault(require("../models/Satellite"));

var checkSatelliteExisted = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var nameSatellite, satelliteExist;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.params.satellite_name) {
              _context.next = 9;
              break;
            }

            nameSatellite = req.params.satellite_name.toLowerCase(); //Busco que exista el satelite

            _context.next = 4;
            return _Satellite["default"].findOne({
              name: nameSatellite
            });

          case 4:
            satelliteExist = _context.sent;

            if (satelliteExist) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "Satellite ".concat(nameSatellite, " does not exists")
            }));

          case 7:
            _context.next = 10;
            break;

          case 9:
            return _context.abrupt("return", res.status(400).json({
              message: "Error satellite_name must be Provide, Example: /topSecret_split/Satellite_Name"
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkSatelliteExisted(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkSatelliteExisted = checkSatelliteExisted;