import {Router} from 'express';
import * as naveControllers from '../controllers/nave.controller';
import {authJwt} from "../middlewares";

const router = Router();

router.get('/topSecret', [authJwt.verifyToken, authJwt.isGeneral], naveControllers.getTopSecret);

router.post('/topSecret',[authJwt.verifyToken, authJwt.isGeneral], naveControllers.messageTopSecret);

router.get('/topSecret_split',[authJwt.verifyToken, authJwt.isGeneral], naveControllers.topSecretSplit);

export default router;