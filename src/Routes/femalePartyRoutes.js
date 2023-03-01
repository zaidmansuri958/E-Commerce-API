const express=require("express");
const femalePartyRouter=express.Router();
const getProduct=require("../Controllers/femalePartyController");

femalePartyRouter.get("/",getProduct);

module.exports=femalePartyRouter;
