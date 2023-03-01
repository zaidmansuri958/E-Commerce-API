const express=require("express");
const femaleShoeRouter=express.Router();
const getProduct=require("../Controllers/femalePantsController");

femaleShoeRouter.get("/",getProduct);

module.exports=femaleShoeRouter;
