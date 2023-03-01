const express=require("express");
const femaleShoeRouter=express.Router();
const getProduct=require("../Controllers/femaleShoesController");

femaleShoeRouter.get("/",getProduct);

module.exports=femaleShoeRouter;
