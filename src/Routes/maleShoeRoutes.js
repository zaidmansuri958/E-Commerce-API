const express=require("express");
const maleShoeRouter=express.Router();
const getProduct=require("../Controllers/maleShoeController");

maleShoeRouter.get("/",getProduct);

module.exports=maleShoeRouter;
