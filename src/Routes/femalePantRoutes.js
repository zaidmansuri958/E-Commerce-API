const express=require("express");
const femaleShoeRouter=express.Router();
const {getProduct,getProductByID}=require("../Controllers/femalePantsController");

femaleShoeRouter.get("/",getProduct);
femaleShoeRouter.get("/:productID",getProductByID)

module.exports=femaleShoeRouter;
