import * as MessageService from "../../src/services/MessageService";
var assert = require('assert');
//var MessageService = require('../../src/services/MessageService');

describe('MessageService Testing', function () {

    describe('getMessage', function () {

        it('Mensaje con mensajes de la misma longitud', function () {
            let arrayTest = [["este", "", "", "mensaje", ""],
            ["", "es", "", "", "secreto"], 
            ["este", "", "un", "", ""]];

            let response = MessageService.getMessage(arrayTest);
            assert(response, "este es un mensaje secreto");

        });

        it('Mensaje con desfasaje de una posicion', function () {
            let arrayTest = [["","este","es","un","mensaje"],
            ["este","","un","mensaje"],
            ["","","es","","mensaje"]];

            let response = MessageService.getMessage(arrayTest);
            assert(response, "este es un mensaje");

        });

        it('Mensaje con desfasaje de doble posicion y una posicion', function () {
            let arrayTest = [["","hola","","","un",""],
            ["hola","","","","mensaje"],
            ["","","","este","es","","mensaje"]];

            let response = MessageService.getMessage(arrayTest);
            assert(response, "hola este es un mensaje");

        });

        it('Error mensaje de longitud iguales con palabras distintas en misma posicion', function () {
            let arrayTest = [["este", "", "", "mensaje", ""],
            ["", "es", "", "", "secreto"],
            ["hola", "", "un", "", ""]];

            let resultNull = false;
            let response = MessageService.getMessage(arrayTest);

            if (response == null) {
                resultNull = true
            }

            return assert(resultNull, true);

        });

        it('Error mensaje quedan palabras sin saber', function () {
            let arrayTest = [["", "hola", "", "bien"],
            ["", "hola", "", "",],
            ["", "", "estoy", "bien"]];

            let resultNull = false;
            let response = MessageService.getMessage(arrayTest);

            if (response == null) {
                resultNull = true
            }

            return assert(resultNull, true);

        });

        it('Error mensaje no existe palabra en los demas satellites con desfasaje', function () {
            let arrayTest = [["", "hola", "", ""],
            ["", "como", ""],
            ["", "", "estas"]];

            let resultNull = false;
            let response = MessageService.getMessage(arrayTest);

            if (response == null) {
                resultNull = true
            }

            return assert(resultNull, true);

        });

        it('Error mensaje no se puede eliminar el desfasaje', function () {
            let arrayTest = [["hola", "", ""],
            ["", "como", ""],
            ["", "", "estas",""]];

            let resultNull = false;
            let response = MessageService.getMessage(arrayTest);

            if (response == null) {
                resultNull = true
            }

            return assert(resultNull, true);

        });

    });

});

