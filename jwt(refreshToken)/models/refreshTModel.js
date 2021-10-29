const path = require('path');
const mongoose = require('mongoose');

const { Schema } = mongoose;


const generalSchema = new Schema({
  tokenId: {
    type: Schema.Types.String,
    unique: true
  },
  uid: {
      type: Schema.Types.ObjectId,
      ref: 'client',
  }

});

const modelname = path.basename(__filename, '.js');
const model = mongoose.model(modelname, generalSchema)

module.exports = model;