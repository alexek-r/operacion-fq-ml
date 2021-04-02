import {Router} from 'express';
import * as RebelIntelligenceControllers from '../controllers/RebelIntelligenceController';
import {authJwt,verifySatellite} from "../middlewares";

const router = Router();

// POST /topsecret/
router.post('/topSecret',[authJwt.verifyToken, authJwt.isGeneral], RebelIntelligenceControllers.topSecretAction);

// POST /topsecret/{satellite_name}
router.post('/topSecret_split/:satellite_name',[authJwt.verifyToken, authJwt.isGeneral, verifySatellite.checkSatelliteExisted], RebelIntelligenceControllers.postTopSecretSplitAction);

// GET /topsecret_split/
router.get('/topSecret_split',[authJwt.verifyToken, authJwt.isGeneral], RebelIntelligenceControllers.topSecretSplitAction);

export default router;