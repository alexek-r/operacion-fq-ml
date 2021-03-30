"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessage = void 0;

/**
 * Segun la informacion de los satelites determino el mensaje
 * @param {Object Array} satellites 
 * @returns palabraFinal
 */
var getMessage = function getMessage(satellites) {
  var aux = [];
  var cantPalabras = 0;
  var majorReception; //Recorro los satelites

  for (var i = 0; i < satellites.length; i++) {
    //Determino la cantidad de palabras del mensaje
    if (satellites[i].message.length > cantPalabras) {
      cantPalabras = satellites[i].message.length;
    }
  }

  var maxPalabras = 0;

  for (var _i = 0; _i < satellites.length; _i++) {
    //Determino el satellite con mayor cantidad de palabras recibidas
    var palabrasRecibidas = 0;

    for (var y = 0; y < satellites[_i].message.length; y++) {
      if (satellites[_i].message[y] !== "") {
        palabrasRecibidas++;
      }
    }

    if (palabrasRecibidas > maxPalabras) {
      maxPalabras = palabrasRecibidas;
      majorReception = satellites[_i];
    }
  }

  var sateliteMenor;
  var ban = false;

  for (var _i2 = 0; _i2 < satellites.length; _i2++) {
    //Determino el satellite con el tamaño mas chico del mensaje
    // for(let y= 0 ; y< satellites[i].message.length ; y++){
    //     if(satellites[i].message[y] !== ""){
    //         palabrasRecibidas++;
    //     }
    // }
    if (ban == false || satellites[_i2].message.length < sateliteMenor.length) {
      sateliteMenor = satellites[_i2].message;
      ban = true;
    }
  }

  console.log("SATELITE MENOR", sateliteMenor); // for(let a= 0 ; a< sateliteMenor.length; a++){
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

  aux = sateliteMenor; //console.log("aux",aux);
  //Verifico las posiciones vacias del mensaje y las completo con las palabras de los satelites en su posicion

  if (satellites[0].message.length == satellites[1].message.length && satellites[1].message.length == satellites[2].message.length) {
    for (var a = 0; a < aux.length; a++) {
      for (var _i3 = 0; _i3 < satellites.length; _i3++) {
        for (var j = 0; j < satellites[_i3].message.length; j++) {
          if (aux[a] === "" && a === j) {
            aux[a] = satellites[_i3].message[j];
          }
        }
      }
    }
  } else {
    var p = 0;

    for (var _i4 = 0; _i4 < satellites.length; _i4++) {
      for (var _j = 0; _j < satellites[_i4].message.length; _j++) {
        for (p = 0; p < aux.length; p++) {
          if (p !== aux.length - 1 && _j !== satellites[_i4].message.length - 1) {
            if (aux[p] === "" && aux[p + 1] === satellites[_i4].message[_j + 1]) {
              if (satellites[_i4].message[_j + 1] !== "") {
                aux[p] = satellites[_i4].message[_j];
                console.log("A:", aux[p]);
                console.log("B:", satellites[_i4].message[_j]);
                console.log("palabra", aux);
              }
            }
          } else {
            if (aux[p] === "" && aux[p - 1] === satellites[_i4].message[_j - 1]) {
              console.log("p", p);
              console.log("j", _j);

              if (satellites[_i4].message[_j - 1] !== "") {
                aux[p] = satellites[_i4].message[_j];
                console.log("A:", aux[p]);
                console.log("A-1:", aux[p - 1]);
                console.log("B-1:", satellites[_i4].message[_j - 1]);
                console.log("palabra", aux);
              }
            }
          }
        }
      }
    }

    p = 0;
    console.log("INICIAL", p);

    for (var _i5 = 0; _i5 < satellites.length; _i5++) {
      for (var _j2 = 0; _j2 < satellites[_i5].message.length; _j2++) {
        for (p = 0; p < aux.length; p++) {
          if (p !== aux.length - 1 && _j2 !== satellites[_i5].message.length - 1) {
            if (aux[p] === "" && aux[p + 1] === satellites[_i5].message[_j2 + 1]) {
              if (satellites[_i5].message[_j2 + 1] !== "") {
                aux[p] = satellites[_i5].message[_j2];
                console.log("A:", aux[p]);
                console.log("B:", satellites[_i5].message[_j2]);
                console.log("palabra", aux);
              }
            }
          } else {
            if (aux[p] === "" && aux[p - 1] === satellites[_i5].message[_j2 - 1]) {
              if (satellites[_i5].message[_j2 - 1] !== "") {
                aux[p] = satellites[_i5].message[_j2];
                console.log("A:", aux[p]);
                console.log("B:", satellites[_i5].message[_j2]);
                console.log("palabra", aux);
              }
            }
          }
        }
      }
    }
  } //console.log("auxFinal", aux);
  // Agarro el Array con todas las palabras y formo la frase


  var palabraFinal = "";

  for (var _i6 = 0; _i6 < aux.length; _i6++) {
    if (_i6 < aux.length - 1) {
      palabraFinal += aux[_i6].toString() + " ";
    } else {
      palabraFinal += aux[_i6].toString();
    }
  }

  return palabraFinal;
};

exports.getMessage = getMessage;