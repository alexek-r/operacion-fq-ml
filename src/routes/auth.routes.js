import {Router} from 'express';
import * as authController from '../controllers/auth.controller';
import {verifySignUp} from "../middlewares";
const router = Router();

//EndPoint para login
router.post("/signin", authController.signIn);

//EndPoint para registrarse + middlewares de checkeo de email, usuario y si los roles existen
router.post("/signup",[verifySignUp.checkDuplicateUserAndEmailExisted, verifySignUp.checkRolesExisted, ], authController.signUp);

export default router;