import * as AuthService from "../services/AuthService"


/**
 * Registro de usuario
 * @param {Object} req 
 * @param {Object} res 
 */
export const signUpAction = async (req,res) => {

    //Destructuring
    const { username, password, email, roles} = req.body;

    const signUpResult = await AuthService.signUp(username,password,email,roles);

    if(signUpResult === false){
        return res.status(403).json({ message: signUpResult.message});
    }else{
        res.status(200).json({message: signUpResult.message, token: signUpResult.token});
    }
}

/**
 * Login de usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns 
 */
export const signInAction = async (req,res) => {


    const signInActionResult = await AuthService.signInAction(req.body.email, req.body.password); 

    if(signInActionResult.status === false){
        res.status(signInActionResult.code).json({message:signInActionResult.message, token: signInActionResult.token})
    }else{
        res.status(200).json({message:signInActionResult.message, token: signInActionResult.token});
    }


}