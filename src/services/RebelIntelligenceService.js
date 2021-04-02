import { verifySignUp } from "../middlewares";
import * as LocationService from "../services/LocationService";
import * as MessageService from "../services/MessageService";
import * as SatelliteService from "../services/SatelliteService"

const messageLocationAndContent = async (information) => {

    //Destructuring
    let { satellites } = information;

    let messageResults;
    let cordsResult;
    let response;

    //Decifro el mensaje enviado por los satelites
    messageResults = MessageService.generateMessage(satellites);

    if (messageResults) {
        // decifro la localizacion
        cordsResult = await LocationService.generateLocation(satellites);
    }

    //Verifico que no tenga error cords y mensaje
    if (cordsResult === null || messageResults === null) {
        response = { status: false, content: "No hay suficiente informacion" };
    } else {
        response = {
            status: true,
            content: {
                position: {
                    x: cordsResult.x,
                    y: cordsResult.y
                },
                message: messageResults
            }
        }
    }

    return response
}


const messageLocationAndContentSplit = async () => {

    let messageResults;
    let cordsResult;
    let response;

    //Verifico que los 3 satellites esten completos con su informacion
    let resultSatellites = await SatelliteService.getSatellitesInformation();
    
    if(resultSatellites !== null){

        //Destructuring 
        let { satellites } = resultSatellites;

        //Decifro el mensaje enviado por los satelites
        messageResults = MessageService.generateMessage(satellites);

        if (messageResults) {
            // decifro la localizacion
            cordsResult = await LocationService.generateLocation(satellites);
        }
    }

    //Verifico que no tenga error cords y mensaje
    if (resultSatellites == null || cordsResult === null || messageResults === null) {
        response = { status: false, content: "No hay suficiente informacion" };
    } else {
        response = {
            status: true,
            content: {
                position: {
                    x: cordsResult.x,
                    y: cordsResult.y
                },
                message: messageResults
            }
        }
    }

    return response
}


const modifySatellite = async (name,content) => {
    let response;

    let result = await SatelliteService.satelliteFindAndUpdate(name,content);

    if(result === null){
        response = {status: false, code: 404, message: 'No hay suficiente informacion'};
    }else{
        response = {status: true, code: 200, message: "Satellite modify successfully" }
    }

    return response;
}


export { messageLocationAndContent,messageLocationAndContentSplit,modifySatellite};