const express=require("express");
const femaleTopRouter=express.Router();
const getProduct=require("../Controllers/femaleTopController");

femaleTopRouter.get("/",getProduct);

module.exports=femaleTopRouter;
