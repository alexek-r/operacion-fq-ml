import {Router} from 'express';
import * as AuthController from '../controllers/AuthController';
import {verifySignUp} from "../middlewares";
const router = Router();

//EndPoint para login
router.post("/signin", AuthController.signInAction);

//EndPoint para registrarse + middlewares de checkeo de email, usuario y si los roles existen
router.post("/signup",[verifySignUp.checkDuplicateUserAndEmailExisted, verifySignUp.checkRolesExisted, ], AuthController.signUpAction);

export default router;