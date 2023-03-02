const express=require("express");
const bestSellerRouter=express.Router();
const getProduct=require("../Controllers/bestSellersControler");

bestSellerRouter.get("/",getProduct);

module.exports=bestSellerRouter;
