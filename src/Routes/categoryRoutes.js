const express=require("express");
const categoryRouter=express.Router();
const getProduct=require("../Controllers/categoryController");

categoryRouter.get("/",getProduct);

module.exports=categoryRouter;
