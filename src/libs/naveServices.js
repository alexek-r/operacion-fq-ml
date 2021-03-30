/**
 * Segun la informacion de los satelites determino el mensaje
 * @param {Object Array} satellites 
 * @returns palabraFinal
 */
 export const getMessage = (satellites) => {

    let aux = [];
    let cantPalabras = 0;
    let majorReception;
 
    //Recorro los satelites
    for(let i = 0; i< satellites.length ; i++){
         //Determino la cantidad de palabras del mensaje
         if(satellites[i].message.length > cantPalabras){
             cantPalabras = satellites[i].message.length;
         }   
    }

    let maxPalabras = 0;
 
     for(let i = 0; i< satellites.length ; i++){
         //Determino el satellite con mayor cantidad de palabras recibidas
         let palabrasRecibidas = 0;
         for(let y= 0 ; y< satellites[i].message.length ; y++){
             if(satellites[i].message[y] !== ""){
                 palabrasRecibidas++;
             }
         }
 
         if(palabrasRecibidas > maxPalabras){
             maxPalabras = palabrasRecibidas;
             majorReception = satellites[i]; 
         }
 
     }


     let sateliteMenor;
     let ban = false;
     for(let i = 0; i< satellites.length ; i++){
        //Determino el satellite con el tamaño mas chico del mensaje
        // for(let y= 0 ; y< satellites[i].message.length ; y++){
        //     if(satellites[i].message[y] !== ""){
        //         palabrasRecibidas++;
        //     }
        // }

        if(ban == false || satellites[i].message.length < sateliteMenor.length ){
            sateliteMenor = satellites[i].message;
            ban = true;
        }

    }

    console.log("SATELITE MENOR", sateliteMenor);

    // for(let a= 0 ; a< sateliteMenor.length; a++){

    //         for(let i = 0; i < satellites.length; i++){
    //             console.log("Satelite:",satellites[i].name)
    //             for(let j = 0; j < satellites[i].message.length; j++){

        
    //                     console.log("AUX",sateliteMenor[a])
    //                     console.log("SAT",satellites[i].message[j])

    //                     console.log("AUX++", sateliteMenor[i+1])
    //                     console.log("SAT++", satellites[i].message[(j+1)])

    //                 }
    
    //         }
    // }

    // console.log("SATELITEEEE",sateliteMenor);

 
     //1 determinar el satellite con la menor cantidad de palabras 
     //2 determinar 
 
    // console.log("cantPalabras", cantPalabras);
    // console.log("Mejor Satellite", majorReception);
     



     aux = sateliteMenor;
     //console.log("aux",aux);
 
     //Verifico las posiciones vacias del mensaje y las completo con las palabras de los satelites en su posicion

     if(satellites[0].message.length == satellites[1].message.length && satellites[1].message.length == satellites[2].message.length){

        for(let a=0; a < aux.length ; a++){
            for(let i = 0; i < satellites.length; i++){
                for(let j = 0; j < satellites[i].message.length; j++){
                    if(aux[a] === "" && a === j){
                        aux[a] = satellites[i].message[j];
   
                    }
                }
            }
        }

     }else{

            let p = 0;
            for(let i = 0; i < satellites.length; i++){
                
                for(let j = 0; j < satellites[i].message.length ; j++){
                    for(p = 0; p < aux.length; p++){


                    if(p !== aux.length-1 && j !== satellites[i].message.length-1){

                        if(aux[p] === "" && aux[p+1] === satellites[i].message[j+1]){

                            if(satellites[i].message[j+1] !== "" ){
                                aux[p] = satellites[i].message[j];
                                console.log("A:", aux[p]);
                                console.log("B:", satellites[i].message[j])
                                console.log("palabra", aux);
                            }
                        }

                    }else{
                        if(aux[p] === "" && aux[p-1] === satellites[i].message[j-1]){
                            console.log("p",p);
                            console.log("j",j)
                            if(satellites[i].message[j-1] !== "" ){
                                aux[p] = satellites[i].message[j];
                                console.log("A:", aux[p]);
                                console.log("A-1:", aux[p-1]);
                                console.log("B-1:", satellites[i].message[j-1])
                                console.log("palabra", aux);
                            }
                        }
                    }

                }
            }
            
        }

        for(let x of aux){
            console.log("TEST",x.message);
        }

        p = 0;
            console.log("INICIAL",p);

            for(let i = 0; i < satellites.length; i++){

                for(let j = 0; j < satellites[i].message.length ; j++){

                    for(p = 0; p < aux.length; p++){

                        if(p !== aux.length-1 && j !== satellites[i].message.length-1){

                            if(aux[p] === "" && aux[p+1] === satellites[i].message[j+1]){
    
                                if(satellites[i].message[j+1] !== "" ){
                                    aux[p] = satellites[i].message[j];
                                    console.log("A:", aux[p]);
                                    console.log("B:", satellites[i].message[j])
                                    console.log("palabra", aux);
                                }
                            }
    
                        }else{
                            if(aux[p] === "" && aux[p-1] === satellites[i].message[j-1]){
    
                                if(satellites[i].message[j-1] !== "" ){
                                    aux[p] = satellites[i].message[j];
                                    console.log("A:", aux[p]);
                                    console.log("B:", satellites[i].message[j])
                                    console.log("palabra", aux);
                                }
                            }
                        }

                }
            }
            
        }

     }

     
 
  //console.log("auxFinal", aux);
 
    // Agarro el Array con todas las palabras y formo la frase
     let palabraFinal = "";
 
     for(let i = 0; i< aux.length ; i++){

         if(i < (aux.length-1)){
             palabraFinal += aux[i].toString() + " ";
         }else{
             palabraFinal += aux[i].toString();
         }
 
     }
 
     return palabraFinal;

}