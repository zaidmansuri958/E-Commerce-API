const express=require("express");
const  topDiscountRouter=express.Router();
const getProduct=require("../Controllers/topDiscountController");

topDiscountRouter.get("/",getProduct);

module.exports=topDiscountRouter;
