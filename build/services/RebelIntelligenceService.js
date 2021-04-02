"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifySatellite = exports.messageLocationAndContentSplit = exports.messageLocationAndContent = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _middlewares = require("../middlewares");

var LocationService = _interopRequireWildcard(require("../services/LocationService"));

var MessageService = _interopRequireWildcard(require("../services/MessageService"));

var SatelliteService = _interopRequireWildcard(require("../services/SatelliteService"));

var messageLocationAndContent = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(information) {
    var satellites, messageResults, cordsResult, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Destructuring
            satellites = information.satellites;
            //Decifro el mensaje enviado por los satelites
            messageResults = MessageService.generateMessage(satellites);

            if (!messageResults) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return LocationService.generateLocation(satellites);

          case 5:
            cordsResult = _context.sent;

          case 6:
            //Verifico que no tenga error cords y mensaje
            if (cordsResult === null || messageResults === null) {
              response = {
                status: false,
                content: "No hay suficiente informacion"
              };
            } else {
              response = {
                status: true,
                content: {
                  position: {
                    x: cordsResult.x,
                    y: cordsResult.y
                  },
                  message: messageResults
                }
              };
            }

            return _context.abrupt("return", response);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function messageLocationAndContent(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.messageLocationAndContent = messageLocationAndContent;

var messageLocationAndContentSplit = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var messageResults, cordsResult, response, resultSatellites, satellites;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return SatelliteService.getSatellitesInformation();

          case 2:
            resultSatellites = _context2.sent;

            if (!(resultSatellites !== null)) {
              _context2.next = 10;
              break;
            }

            //Destructuring 
            satellites = resultSatellites.satellites; //Decifro el mensaje enviado por los satelites

            messageResults = MessageService.generateMessage(satellites);

            if (!messageResults) {
              _context2.next = 10;
              break;
            }

            _context2.next = 9;
            return LocationService.generateLocation(satellites);

          case 9:
            cordsResult = _context2.sent;

          case 10:
            //Verifico que no tenga error cords y mensaje
            if (resultSatellites == null || cordsResult === null || messageResults === null) {
              response = {
                status: false,
                content: "No hay suficiente informacion"
              };
            } else {
              response = {
                status: true,
                content: {
                  position: {
                    x: cordsResult.x,
                    y: cordsResult.y
                  },
                  message: messageResults
                }
              };
            }

            return _context2.abrupt("return", response);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function messageLocationAndContentSplit() {
    return _ref2.apply(this, arguments);
  };
}();

exports.messageLocationAndContentSplit = messageLocationAndContentSplit;

var modifySatellite = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(name, content) {
    var response, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return SatelliteService.satelliteFindAndUpdate(name, content);

          case 2:
            result = _context3.sent;

            if (result === null) {
              response = {
                status: false,
                code: 404,
                message: 'No hay suficiente informacion'
              };
            } else {
              response = {
                status: true,
                code: 200,
                message: "Satellite modify successfully"
              };
            }

            return _context3.abrupt("return", response);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function modifySatellite(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.modifySatellite = modifySatellite;