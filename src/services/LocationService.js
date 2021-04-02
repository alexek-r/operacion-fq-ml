import Satellite from "../models/Satellite";
import * as SatelliteService from "../services/SatelliteService";
import trilat from "trilat";


/**
 * Obtengo la localizacion del emisor del mensaje
 * @param {Object} satellites 
 * @returns 
 */
const generateLocation = async (satellites) => {

    //Genero el Array de distancias
    let distancesResult = transformDistances(satellites);
    //Obtengo la ubicacion del emisor del mensaje
    let cordsResult = await getLocation(distancesResult);

    return cordsResult
}



/**
 * Obtener localizacion del emisor del mensaje
 * @param {Array} distances 
 * @returns 
 */
const getLocation = async (distances) => {

    let cords = null;

    try {

        /*se aplica la trilateralizacion para poder hacer el calculo entre los 3 puntos 
        de los satelites y sus respectivas distancias donde en el angulo que se juntan 
        los 3 da con la posicion del emisor */

        let satelliteOne = await SatelliteService.getOne(process.env.SATELLITE_ONE);
        let satelliteTwo = await SatelliteService.getOne(process.env.SATELLITE_TWO);
        let satelliteThree = await SatelliteService.getOne(process.env.SATELLITE_THREE);


        if (satelliteOne !== null && satelliteTwo !== null && satelliteThree !== null) {

            let input = [
                //      X   ,  Y  ,   R = Distancia
                [satelliteOne.cords[0], satelliteOne.cords[1], distances[0]],
                [satelliteTwo.cords[0], satelliteTwo.cords[1], distances[1]],
                [satelliteThree.cords[0], satelliteThree.cords[1], distances[2]]
            ];

            //Valido que si un campo es un string
            let error;
            let external = input.find(element => { 
                element.find( dat => { if(typeof dat == "string") error = true });
            });
           
            if (error === true || external !== undefined) {
                input = null;
            }

            let output = trilat(input);

            //Si al hacer el calculo me da un array de un elemento retorna error.
            if (output.length == 2){

                cords = {
                    x: parseFloat(output[0].toFixed(1)),
                    y: parseFloat(output[1].toFixed(1))
                }
            }
        }

    } catch (error) {
        return null;
    }

    return cords;
}


/**
 * Formo un Array de mensajes de los satellites.
 * @param {Object} satellites 
 * @returns 
 */
const transformDistances = (satellites) => {

    let distances = new Array();

    for (let sat of satellites) {
        distances.push(sat.distance);
    }

    return distances
}

export {generateLocation, getLocation}