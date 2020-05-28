const express = require("express");
const router = express.Router();
const categoryController = require("../controller/Category");

router.post("/create", categoryController.create);
router.get("/show", categoryController.getAllCategory);

module.exports = router;
