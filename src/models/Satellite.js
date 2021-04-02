import {Schema,model} from "mongoose";
var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

const satelliteSchema = new Schema({

    name: {
        type: String,
        unique: true
    },
    cords:[{
        type: Float,
        required: true
    }],
    distance:{
        type: Float,
        required: false
    },
    message:[{
        type: String,
        required: false
    }],

});

export default model("Satellite", satelliteSchema);