

/**
 * Obtengo el mensaje a decifrar
 * @param {Object} satellites 
 * @returns 
 */
const generateMessage = (satellites) => {

    //Transformo en un array la informacion de los mansajes de los satelites
    let messageArray = transformMessages(satellites);

    //Decifro el mensaje entre los satellites
    let mensajeResults = getMessage(messageArray);

    return mensajeResults
}


/**
 * Segun la informacion de los satelites determino el mensaje
 * @param {Array} messages 
 * @returns palabraFinal
 */
 const getMessage = (messages) => {

    let senderMessage = new Array();
    let text = null;

    //determino el array que contenga una palabra en la primera posicion y contenga algo el array
    senderMessage = messages.find(message => message[0] !== "");

    if (senderMessage !== undefined) {
        let pos = null;
        let palabra = null;
        let palabraDos = null;
        let posDos = null;
        let palabraTres = null;
        let posTres = null

        //Guardo las palabras que contiene para buscarlas en los demas arrays
        for (let i = 0; i < senderMessage.length; i++) {
            if (senderMessage[i] !== '') {
                if (pos == null && palabra == null) {
                    pos = i
                    palabra = senderMessage[i];
                } else if (posDos == null && palabraDos == null) {
                    posDos = i
                    palabraDos = senderMessage[i];
                } else if (posTres == null && palabraTres == null) {
                    posTres = i
                    palabraTres = senderMessage[i];
                }
            }
        }


        //Aplico esto para eliminar el gap buscando si una palabra es igual
        for (let i = 0; i < messages.length; i++) {
            for (let j = 0; j < messages[i].length; j++) {

                if (palabra !== null && palabra === messages[i][j]) {
                    if (pos < j) {
                        let count = j - pos
                        messages[i] = messages[i].slice(count);
                        break;
                    }
                }
                if (palabraDos !== null && palabraDos === messages[i][j]) {
                    if (posDos < j) {
                        let count = j - posDos
                        messages[i] = messages[i].slice(count);
                        break;
                    }
                }
                if (palabraTres !== null && palabraTres === messages[i][j]) {

                    if (posTres < j) {
                        let count = j - posTres
                        messages[i] = messages[i].slice(count);
                        break;
                    }
                }

            }
        }


        if (messages[0].length === messages[1].length && messages[1].length === messages[2].length) {

            let error = false;
            //una vez eliminado el desfasaje completo los espacios vacios
            for (let a = 0; a < senderMessage.length; a++) {
                for (let i = 0; i < messages.length; i++) {
                    for (let j = 0; j < messages[i].length; j++) {

                        if(senderMessage[a] === "" && a===j){
                            senderMessage[a] = messages[i][j];
                        }

                        // validacion de que si la palabra existe sea la misma del otro satellite si comparte posicion
                        if(senderMessage[a] !== "" && a===j){
                           if( messages[i][j] !== "" && a===j){
                                
                            if(senderMessage[a] !== messages[i][j]){
                                error = true;
                            }
                           }
                        }

                    }
                }
            }

            if(error){
                senderMessage = null;
            }else{

                let verify = senderMessage.find(msg => msg === "");

                //Validacion Si encontro algun valor vacio
                if (verify !== undefined) {
                    senderMessage = null;
                }

            }

            

        } else {
            //Validacion de que no se pudo eliminar el desfasaje
            senderMessage = null;
        }

    } else {
        //Validacion de que no existio una palabra en el primer lugar del array
        senderMessage = null;
    }

    if (senderMessage) {
        text = finalText(senderMessage)
    }

    return text;
}



/**
 *  Le agrego los epacios entre las palabras para formar el mensaje
 * @param {*} Array 
 * @returns 
 */
const finalText = (Array) => {

    let finalText = "";

    for (let i = 0; i < Array.length; i++) {

        if (i < (Array.length - 1)) {
            finalText += Array[i].toString() + " ";
        } else {
            finalText += Array[i].toString();
        }

    }
   
    return finalText

}

/**
 * Formo un Array de mensajes de los satellites.
 * @param {Object} satellites 
 * @returns 
 */
 const transformMessages = (satellites) => {

    let messages = new Array();

    for (let sat of satellites) {
        messages.push(sat.message);
    }

    return messages
}

export { generateMessage, getMessage }
