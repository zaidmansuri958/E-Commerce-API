const express=require("express");
const maleShirtRouter=express.Router();
const getProduct=require("../Controllers/maleShirtController");

maleShirtRouter.get("/",getProduct);

module.exports=maleShirtRouter;
