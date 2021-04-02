"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var RebelIntelligenceControllers = _interopRequireWildcard(require("../controllers/RebelIntelligenceController"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); // POST /topsecret/

router.post('/topSecret', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isGeneral], RebelIntelligenceControllers.topSecretAction); // POST /topsecret/{satellite_name}

router.post('/topSecret_split/:satellite_name', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isGeneral, _middlewares.verifySatellite.checkSatelliteExisted], RebelIntelligenceControllers.postTopSecretSplitAction); // GET /topsecret_split/

router.get('/topSecret_split', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isGeneral], RebelIntelligenceControllers.topSecretSplitAction);
var _default = router;
exports["default"] = _default;