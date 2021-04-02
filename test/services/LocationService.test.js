//import * as LocationService from "../../src/services/LocationService";
import trilat from "trilat";
var assert = require('assert');

describe('LocationService Testing', function () {

    describe('Test algoritmo getLocation', function () {

        it('Location resulado correcto con ubicacion con float', async function () {
            let arrayTest = [[ 0.0,  0.0, 10.0],
            [10.0, 10.0, 10.0],
            [10.0,  0.0, 14.142135]];

            //Calculador de cordenadas
            let response = trilat(arrayTest);

            assert(response, [2.205170988086251e-7, 9.999999779478834]);
        });


        it('Location resultado correcto con ubicacion en number', async function () {
            let arrayTest = [[ -500,  -200, 100.0],
            [100, -100, 115.5],
            [500,  100, 142.7]];

            //Calculador de cordenadas
            let response = trilat(arrayTest);

            assert(response, [-16.220457469988354, -58.185322230089376]);
        });

    });

});

