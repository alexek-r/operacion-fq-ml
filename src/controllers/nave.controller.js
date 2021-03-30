import * as naveServices from "../libs/naveServices";

//Post
export const messageTopSecret = (req,res) =>{

    //console.log(req.body);
    const { satellites }  = req.body;
   // console.log(satellites);


   //Obtengo el mensaje entre los satelites
   let mensaje = naveServices.getMessage(satellites);

   console.log("MENSAJE", mensaje)
    res.json(satellites);
};

//Get
export const getTopSecret = (req,res) =>{

    res.json("get TopSecret");

};

//Post y Get
export const topSecretSplit = (req,res) =>{

    res.json("get TopSecret_Split");

};