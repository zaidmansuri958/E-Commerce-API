const express=require("express");
const maleTopRouter=express.Router();
const getProduct=require("../Controllers/maleTopController");

maleTopRouter.get("/",getProduct);

module.exports=maleTopRouter;
