"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessage = exports.generateMessage = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Obtengo el mensaje a decifrar
 * @param {Object} satellites 
 * @returns 
 */
var generateMessage = function generateMessage(satellites) {
  //Transformo en un array la informacion de los mansajes de los satelites
  var messageArray = transformMessages(satellites); //Decifro el mensaje entre los satellites

  var mensajeResults = getMessage(messageArray);
  return mensajeResults;
};
/**
 * Segun la informacion de los satelites determino el mensaje
 * @param {Array} messages 
 * @returns palabraFinal
 */


exports.generateMessage = generateMessage;

var getMessage = function getMessage(messages) {
  var senderMessage = new Array();
  var text = null; //determino el array que contenga una palabra en la primera posicion y contenga algo el array

  senderMessage = messages.find(function (message) {
    return message[0] !== "";
  });

  if (senderMessage !== undefined) {
    var pos = null;
    var palabra = null;
    var palabraDos = null;
    var posDos = null;
    var palabraTres = null;
    var posTres = null; //Guardo las palabras que contiene para buscarlas en los demas arrays

    for (var i = 0; i < senderMessage.length; i++) {
      if (senderMessage[i] !== '') {
        if (pos == null && palabra == null) {
          pos = i;
          palabra = senderMessage[i];
        } else if (posDos == null && palabraDos == null) {
          posDos = i;
          palabraDos = senderMessage[i];
        } else if (posTres == null && palabraTres == null) {
          posTres = i;
          palabraTres = senderMessage[i];
        }
      }
    } //Aplico esto para eliminar el gap buscando si una palabra es igual


    for (var _i = 0; _i < messages.length; _i++) {
      for (var j = 0; j < messages[_i].length; j++) {
        if (palabra !== null && palabra === messages[_i][j]) {
          if (pos < j) {
            var count = j - pos;
            messages[_i] = messages[_i].slice(count);
            break;
          }
        }

        if (palabraDos !== null && palabraDos === messages[_i][j]) {
          if (posDos < j) {
            var _count = j - posDos;

            messages[_i] = messages[_i].slice(_count);
            break;
          }
        }

        if (palabraTres !== null && palabraTres === messages[_i][j]) {
          if (posTres < j) {
            var _count2 = j - posTres;

            messages[_i] = messages[_i].slice(_count2);
            break;
          }
        }
      }
    }

    if (messages[0].length === messages[1].length && messages[1].length === messages[2].length) {
      var error = false; //una vez eliminado el desfasaje completo los espacios vacios

      for (var a = 0; a < senderMessage.length; a++) {
        for (var _i2 = 0; _i2 < messages.length; _i2++) {
          for (var _j = 0; _j < messages[_i2].length; _j++) {
            if (senderMessage[a] === "" && a === _j) {
              senderMessage[a] = messages[_i2][_j];
            } // validacion de que si la palabra existe sea la misma del otro satellite si comparte posicion


            if (senderMessage[a] !== "" && a === _j) {
              if (messages[_i2][_j] !== "" && a === _j) {
                if (senderMessage[a] !== messages[_i2][_j]) {
                  error = true;
                }
              }
            }
          }
        }
      }

      if (error) {
        senderMessage = null;
      } else {
        var verify = senderMessage.find(function (msg) {
          return msg === "";
        }); //Validacion Si encontro algun valor vacio

        if (verify !== undefined) {
          senderMessage = null;
        }
      }
    } else {
      //Validacion de que no se pudo eliminar el desfasaje
      senderMessage = null;
    }
  } else {
    //Validacion de que no existio una palabra en el primer lugar del array
    senderMessage = null;
  }

  if (senderMessage) {
    text = finalText(senderMessage);
  }

  return text;
};
/**
 *  Le agrego los epacios entre las palabras para formar el mensaje
 * @param {*} Array 
 * @returns 
 */


exports.getMessage = getMessage;

var finalText = function finalText(Array) {
  var finalText = "";

  for (var i = 0; i < Array.length; i++) {
    if (i < Array.length - 1) {
      finalText += Array[i].toString() + " ";
    } else {
      finalText += Array[i].toString();
    }
  }

  return finalText;
};
/**
 * Formo un Array de mensajes de los satellites.
 * @param {Object} satellites 
 * @returns 
 */


var transformMessages = function transformMessages(satellites) {
  var messages = new Array();

  var _iterator = _createForOfIteratorHelper(satellites),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sat = _step.value;
      messages.push(sat.message);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return messages;
};