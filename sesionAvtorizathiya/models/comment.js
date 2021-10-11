const path = require('path');
const mongoose = require('mongoose');

require('./user')
const { Schema } = mongoose;

const generalSchema = new Schema({
    author: {
        types: Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        types: Schema.Types.String
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
})


const modelname = path.basename(__filename, '.js');
const model = mongoose.model(modelname, generalSchema)

module.exports = model;