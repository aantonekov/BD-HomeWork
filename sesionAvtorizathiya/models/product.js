const path = require('path');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const generalSchema = new Schema({
    name: {
        type: Schema.Types.String,
        default: '',
        maxlength: 255
    },
    kind: {
        type: Schema.Types.String,
    },
    price: {
        type: Schema.Types.Number,
    }
})



const modelname = path.basename(__filename, '.js');
const model = mongoose.model(modelname, generalSchema)

module.exports = model;