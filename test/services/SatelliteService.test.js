import * as SatelliteService from "../../src/services/SatelliteService";
var assert = require('assert');

describe('SatelliteService Testing', function () {

    describe('formatDocumentSatellites', function () {

        it('Formateo de response de satellites', function () {
            let values = [
                {
                  cords: [ -500, -200 ],
                  message: [ 'este', '', '', 'mensaje', '' ],
                  _id: "6064122cbcba59b43147a4b1",
                  distance: 100,
                  name: 'kenobi',
                  __v: 0
                },
                {
                  cords: [ 100, -100 ],
                  message: [ '', 'es', '', '', 'secreto' ],
                  _id: "6064127ca84abeb443b9672f",
                  distance: 115.5,
                  name: 'skywalker',
                  __v: 0
                },
                {
                  cords: [ 500, 100 ],
                  message: [ 'este', '', 'un', '', '' ],
                  _id: "6064127ca84abeb443b96730",
                  distance: 142,
                  name: 'sato',
                  __v: 0
                }
              ];

            let response = SatelliteService.formatDocumentSatellites(values);

            let correctResponse = {
                satellites: [
                  {
                    name: 'kenobi',
                    distance: 100,
                    message: ["este","","","mensaje",""]
                  },
                  {
                    name: 'skywalker',
                    distance: 115.5,
                    message: ["","es","","","secreto"]
                  },
                  { name: 'sato',
                    distance: 142,
                    message: ["este","","un","",""] }
                ]
              }


            assert(response, correctResponse);

        });

    });

});

