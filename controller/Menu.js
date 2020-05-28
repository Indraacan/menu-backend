const MenuSchema = require("../models/Menu");
// const CategorySchema = require('../models/Category')
module.exports = {
  create: (req, res) => {
    MenuSchema.create({
      name: req.body.name,
      detail: req.body.detail,
      price: req.body.price,
      category : req.body.category,
      imageURL: req.file.path,
    })
      .then((response) => res.json(response))
      .catch((err) => err);
  },

  getAllData: (req, res) => {
    MenuSchema.find({})
      .populate('category')
      .then((response) => res.json(response))
      .catch((err) => err);
  },

  getDataById: (req, res) => {
    MenuSchema.findById({})
      .then((response) => res.json(response))
      .catch((err) => err);
  },

  deleteById: (req, res, next) => [
    MenuSchema.findByIdAndRemove({})
      .then((response) => res.json(response))
      .catch((err) => err),
  ],
};