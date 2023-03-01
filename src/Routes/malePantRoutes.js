const express=require("express");
const malePantRouter=express.Router();
const getProduct=require("../Controllers/malePantsController");

malePantRouter.get("/",getProduct);

module.exports=malePantRouter;
