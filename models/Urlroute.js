const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create schema
const UrlSchema = new Schema({
  fullurl: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  shorturl: {
    type: String
  }
});
module.exports = Url = mongoose.model("urls", UrlSchema);