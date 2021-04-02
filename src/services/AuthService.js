import User from "../models/User";
import jwt from "jsonwebtoken";
import Role from "../models/Role";

/**
 * Creacion de cuenta
 * @param {String} username 
 * @param {String} password 
 * @param {String} email 
 * @param {String} roles 
 * @returns 
 */
export const signUp = async (username, password, email, roles) => {

    try {



        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password),
        })

        if (roles) {
            //Busco que el rol elegido exista en los roles de la bd
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles = foundRoles.map(role => role.id);
        } else {
            //Si no le ingresa ningun rol se le asigna por defecto como tripulante
            const role = await Role.find({ name: { $in: 'tripulante' } });
            newUser.roles = [role.id];
        }

        //Guardo el usuario en la bd.
        const savedUser = await newUser.save();

        if (savedUser) {

            const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
                expiresIn: 86400 // 24 hours
            })

            return { status: true, token: token, message: "User created successfully" };
        } else {
            return { status: false, message: "Error creating user" }
        }

    } catch (error) {
        return { status: false, message: "Error in system" }
    }

}

/**
 * Login de usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns 
 */
export const signInAction = async (email, password) => {

    //Verifico que el usuario exista con el email
    const userFound = await User.findOne({ email: email }).populate('roles');
    if (!userFound) return { status: false, code: 400, message: 'User not found' };

    //Verifico que sea correcta la contraseña
    const matchPassword = await User.comparePassword(password, userFound.password);
    if (!matchPassword) return { status: false, code: 401, token: null, message: 'Invalid password' };

    //Verifico que exista la palabra secreta para el token
    if (!process.env.SECRET) throw new Error("Token secret must be provide!");

    //Si es todo correcto retorno el token del usuario
    const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
        expiresIn: 86400 //24hs
    })

    return { status: true, code: 200, token, message: 'Welcome ' + userFound.username }

}