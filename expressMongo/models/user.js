const mongoose = require('mongoose');

require('article');
const { Schema } = mongoose;

const generalSchema = new Schema({
    name: {
        type: Schema.Types.String,
        default: '',
        maxlength: 255,
        required: true,
        unique: true
    }, 
    avtor: {
        type: Schema.Types.String,
    },
    date_publik: {
        type: Schema.Types.Date
    },
    gift: {
        type:Schema.Types.ObjectId, ref: 'article'
    }

})

const model = mongoose.model('user', generalSchema)

module.exports = model;