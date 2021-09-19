const path = require('path');
const mongoose = require('mongoose');

require('./book')
const { Schema } = mongoose;

const generalSchema = new Schema({
    name: {
        type: Schema.Types.String,
        default: '',
        maxlength: 255,
        required: true,
        unique: true
    }
})

const modelname = path.basename(__filename, '.js')
const model = mongoose.model(modelname, generalSchema)

module.exports = model;