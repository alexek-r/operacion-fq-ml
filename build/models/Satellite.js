"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var Float = require('mongoose-float').loadType(mongoose);

var satelliteSchema = new _mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  cords: [{
    type: Float,
    required: true
  }],
  distance: {
    type: Float,
    required: false
  },
  message: [{
    type: String,
    required: false
  }]
});

var _default = (0, _mongoose.model)("Satellite", satelliteSchema);

exports["default"] = _default;