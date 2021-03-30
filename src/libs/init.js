import Role from "../models/Role";

export const createRoles = async () => {

    try {
        const countRoles = await Role.estimatedDocumentCount();

        //Si ya estan los roles creados sale.
        if(countRoles > 0) return;
    
        //Creo los roles
        const values = await Promise.all([
            new Role({name:'general'}).save(),
            new Role({name:'tripulante'}).save()
        ])
        console.log(values);

    } catch (error) {
        console.error("Error createRoles(): ", error);
    }
   

}