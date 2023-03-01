const express=require("express");
const femaleTraditionalRouter=express.Router();
const getProduct=require("../Controllers/femaleTraditionalController");

femaleTraditionalRouter.get("/",getProduct);

module.exports=femaleTraditionalRouter;
