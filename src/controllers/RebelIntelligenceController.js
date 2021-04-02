import * as RebelIntelligenceService from "../services/RebelIntelligenceService";

//Post - Ejercicio nivel 2
const topSecretAction = async (req, res) => {

    try {

        //Obtener del mensaje el contenido y la localizacion
        let result = await RebelIntelligenceService.messageLocationAndContent(req.body);

        if (result.status == false) {
            res.status(404).send("");
        } else {
            res.status(200).json(result.content);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ups! Internal Error' });
    }



};


//get - Ejercicio nivel 3
const topSecretSplitAction = async (req, res) => {

    try {

        //Obtener del mensaje el contenido y la localizacion
        let result = await RebelIntelligenceService.messageLocationAndContentSplit();

        if (result.status == false) {
            res.status(404).json(result.content);
        } else {
            res.status(200).json(result.content);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ups! Internal Error' });
    }


};

//post - Ejercicio nivel 3
const postTopSecretSplitAction = async (req, res) => {

    try {

        let nameSatellite = req.params.satellite_name.toLowerCase();
        let result = await RebelIntelligenceService.modifySatellite(nameSatellite, req.body)

        if (result.status === false) {
            res.status(result.code).json({ message: result.message });
        } else {
            res.status(result.code).json({ message: result.message });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ups! Internal Error' });
    }

};

export { topSecretAction, topSecretSplitAction, postTopSecretSplitAction }