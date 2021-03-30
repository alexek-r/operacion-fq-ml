import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";


/**
 * Registro de usuario
 * @param {Object} req 
 * @param {Object} res 
 */
export const signUp = async (req,res) => {

    //Destructuring
    const { username, password, email, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
    })

    if(roles){
        //Busco que el rol elegido exista en los roles de la bd
        const foundRoles = await Role.find({name: { $in: roles}})
        newUser.roles = foundRoles.map(role => role.id);
    }else{
        //Si no le ingresa ningun rol se le asigna por defecto como tripulante
        const role = await Role.find({name: {$in: 'tripulante'}});
        newUser.roles = [role.id];
    }

    //Guardo el usuario en la bd.
    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, process.env.SECRET, {
        expiresIn: 86400 // 24 hours
    })

    //retorno el token.
    res.status(200).json({token});
}

/**
 * Login de usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns 
 */
export const signIn = async (req,res) => {
    
    //Verifico que el usuario exista con el email
    const userFound = await User.findOne({ email: req.body.email }).populate('roles');
    if(!userFound) return res.status(400).json({message:'User Not Found'});

    //Verifico que sea correcta la contraseña
    const matchPassword = await User.comparePassword(req.body.password, userFound.password);
    if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"});

    //Si es todo correcto retorno el token del usuario
    const token = jwt.sign({id: userFound._id}, process.env.SECRET, {
        expiresIn: 86400 //24hs
    })

    res.status(200).json({token});

}