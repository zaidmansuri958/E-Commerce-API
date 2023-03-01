const express = require("express")
const maleTshirtRouter = express.Router();
const getProduct= require("../Controllers/maleTshirtController")


maleTshirtRouter.get("/", getProduct)

module.exports = maleTshirtRouter
