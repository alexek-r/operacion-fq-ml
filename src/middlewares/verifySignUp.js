import {ROLES} from "../models/Role";
import User from "../models/User";



export const checkRolesExisted = async (req,res,next) => {

    //Chequeo si le agrego roles en el signUp
    if(req.body.roles){

        console.log(ROLES);
        //Verifico si alguno de los roles ingresados no existe
        for(let i = 0 ; i< req.body.roles.length ; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({ message: `Role ${req.body.roles[i]} does not exists` })
            }
        }
    }

    next();
}

export const checkDuplicateUserAndEmailExisted = async (req,res,next) => {
    
    //Valido si el usuario ya existe
    const user = await User.findOne({username: req.body.username});
    if(user) return res.status(400).json({message: 'The username already exists'});

    //Valido si el email ya existe
    const email = await User.findOne({email: req.body.email});
    if(email) return res.status(400).json({message: "The email already exists"});

    next();
}