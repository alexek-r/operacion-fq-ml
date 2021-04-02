import Role from "../models/Role";
import Satellite from "../models/Satellite"

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

    } catch (error) {
        console.error("Error createRoles(): ", error);
    }
   

}


export const createSatellites = async () => {

    try {

        const countSatellites = await Satellite.estimatedDocumentCount();

        if(countSatellites > 0) return;

        const values = await Promise.all([
            new Satellite({name:'kenobi', cords:[-500,-200] }).save(),
            new Satellite({name:'skywalker',cords:[100,-100]}).save(),
            new Satellite({name:'sato',cords:[500,100] }).save()
        ])

        console.log("Satellites succesfully",values);
        
    } catch (error) {
        console.error("Error createSatellites(): ", error);
    }

}