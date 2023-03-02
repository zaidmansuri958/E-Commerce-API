const express=require("express");
const sliderRouter=express.Router();
const getProduct=require("../Controllers/sliderController");

sliderRouter.get("/",getProduct);

module.exports=sliderRouter;
