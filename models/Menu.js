const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = require ('./Category')

const newMenuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category : {
    ref: 'Category',
    type: Schema.Types.ObjectId
  },
  imageURL: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("menu", newMenuSchema);