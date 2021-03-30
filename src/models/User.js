import {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    roles: [{
        ref:"Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false,
})

/**
 * Encriptar password
 * @param {String} password 
 * @returns 
 */
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

/**
 * Compara la contraseña que ingresada por el usuario si es correcta con el encriptado
 * @param {String} password 
 * @param {String} receivedPassword 
 * @returns 
 */
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model("User",userSchema);