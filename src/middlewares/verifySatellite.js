import Satellite from "../models/Satellite";

export const checkSatelliteExisted = async (req,res,next) => {

    //Chequeo si le agrego el satelite en el param
    if(req.params.satellite_name){

        let nameSatellite = req.params.satellite_name.toLowerCase();
   
        //Busco que exista el satelite
       let satelliteExist = await Satellite.findOne({name: nameSatellite})
 
       //Si el satelite no existe
       if(!satelliteExist){
        return res.status(400).json({ message: `Satellite ${nameSatellite} does not exists` })
        }

    }else{
        //valida si agrego un param
        return res.status(400).json({ message: `Error satellite_name must be Provide, Example: /topSecret_split/Satellite_Name` })
    }

   next();
}