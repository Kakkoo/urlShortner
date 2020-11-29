const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create schema
const UrlSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  fullurl: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  shorturl: {
    type: String,
  },
});
module.exports = Url = mongoose.model("urls", UrlSchema);