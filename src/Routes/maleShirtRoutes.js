const express=require("express");
const maleShirtRouter=express.Router();
const {getProduct,getProductByID}=require("../Controllers/maleShirtController");

maleShirtRouter.get("/",getProduct);
maleShirtRouter.get("/:productID",getProductByID)

module.exports=maleShirtRouter;
