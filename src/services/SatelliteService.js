import Satellite from "../models/Satellite";



const getOne = async (name) => {

    let satelliteFound = null;

    try{
        satelliteFound =  await Satellite.findOne({name: name});
    }catch(error){
        console.error(error);
    }

    return satelliteFound
}


const UpdateOne = async (name) => {

    let satelliteFound = null;

    try{
        satelliteFound =  await Satellite.findOne({name: name});
    }catch(error){
        console.error(error);
    }

    return satelliteFound
}

/**
 * Verifica que los campos de los 3 satellites esten completos
 * @returns True or False
 */
const verifySatellitesCompleteInformation = async () => {

    /*Query 
        distance => verifico que exista el campo y que sea double (ejemplo: distance: 100.0)
        message => verifico que exista el campo, que sea array y no este vacio (ejemplo: message: ["hola","probando"])
    */
    let query = { distance: {$exists: true, $type:'double'}, message: { $exists: true, $type:'array', $ne: [] }};
    let count = await Satellite.find(query).count();


    let result = false;

    if(count === 3){
        result = true;
    }

    return result
}

const getSatellitesInformation = async () => {
    let response = null;

    let verifyResult = await verifySatellitesCompleteInformation();
    

    if(verifyResult){
        let values = await Satellite.find({});

        if(values.length === 3){
           response = formatDocumentSatellites(values);
        }
    }


    return response
}

const formatDocumentSatellites = (values) => {

    const document = {
        "satellites": [
          {
            "name": values[0].name,
            "distance": values[0].distance,
            "message": values[0].message,
          },
          {
            "name": values[1].name,
            "distance": values[1].distance,
            "message": values[1].message
          },
          {
            "name": values[2].name,
            "distance": values[2].distance,
            "message": values[2].message
          }
        ]
      }

      return document;
}

const satelliteFindAndUpdate = async (name, content) =>{
   let result = null
    
   //Destructuring
   const { distance, message} = content;

   let filter = {name: name}

    if(distance && message){
        result = await Satellite.updateOne(filter, {$set: {distance: distance, message: message} },{
            new: true
          });
    }

    return result;
}

export {getOne,UpdateOne,getSatellitesInformation,satelliteFindAndUpdate}


