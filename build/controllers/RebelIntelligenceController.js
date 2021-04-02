"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postTopSecretSplitAction = exports.topSecretSplitAction = exports.topSecretAction = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var RebelIntelligenceService = _interopRequireWildcard(require("../services/RebelIntelligenceService"));

//Post - Ejercicio nivel 2
var topSecretAction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return RebelIntelligenceService.messageLocationAndContent(req.body);

          case 3:
            result = _context.sent;

            if (result.status == false) {
              res.status(404).send("");
            } else {
              res.status(200).json(result.content);
            }

            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            res.status(500).json({
              message: 'Ups! Internal Error'
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function topSecretAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //get - Ejercicio nivel 3


exports.topSecretAction = topSecretAction;

var topSecretSplitAction = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return RebelIntelligenceService.messageLocationAndContentSplit();

          case 3:
            result = _context2.sent;

            if (result.status == false) {
              res.status(404).json(result.content);
            } else {
              res.status(200).json(result.content);
            }

            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            res.status(500).json({
              message: 'Ups! Internal Error'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function topSecretSplitAction(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //post - Ejercicio nivel 3


exports.topSecretSplitAction = topSecretSplitAction;

var postTopSecretSplitAction = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var nameSatellite, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            nameSatellite = req.params.satellite_name.toLowerCase();
            _context3.next = 4;
            return RebelIntelligenceService.modifySatellite(nameSatellite, req.body);

          case 4:
            result = _context3.sent;

            if (result.status === false) {
              res.status(result.code).json({
                message: result.message
              });
            } else {
              res.status(result.code).json({
                message: result.message
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            res.status(500).json({
              message: 'Ups! Internal Error'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function postTopSecretSplitAction(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postTopSecretSplitAction = postTopSecretSplitAction;