const path = require('path');
const mongoose = require('mongoose');

require('./user');
require('./genre');
const { Schema } = mongoose;

const generalSchema = new Schema({
    name: {
        type: Schema.Types.String,
        default: '',
        maxlength: 255,
        required: true,
        unique: true
    }, 
    avtor: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    articleGenre: [{
        type: Schema.Types.ObjectId, 
        ref: 'genre'
    }],
    datePublik: {
        type: Schema.Types.Date
    },
    articleText: {
        type:Schema.Types.String
    }

})

const modelname = path.basename(__filename, '.js')
const model = mongoose.model(modelname, generalSchema)

module.exports = model;