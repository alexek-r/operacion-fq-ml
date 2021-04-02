import jwt from 'jsonwebtoken';
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) =>{
try {

    //Verifico que contenga el header con el token
    const token = req.headers['ml-access-token'];
    if(!token) return res.status(403).json({message: 'Token must be provide'});

    //Decodifico el token que dentro tiene el id del usuario.
    const decoded = jwt.verify(token,process.env.SECRET);

    //Lo guardo en el request para usarlo en los demas middlewares.
    req.userId = decoded.id;

    //Busco el usuario y verifico que exista
    const user = await User.findById(req.userId, {password: 0});
    if(!user) return res.status(404).json({message: "No user found"});

    next();
    
} catch (error) {
    return res.status(401).json({message: "Unauthorized"});
}
    
}

export const isGeneral = async (req, res, next) => {
    //Busco el usuario
    const user = await User.findById(req.userId)

    //Guarda todos los roles que contenga el usuario
    const roles = await Role.find({_id: {$in: user.roles}});


    //Recorro los roles a ver si contiene el de general
    for(let i = 0; i< roles.length; i++ ){
        
        if(roles[i].name === "general"){
            next();
            return;
        }
    }

    return res.status(403).json({message: 'Required general rol'})
}