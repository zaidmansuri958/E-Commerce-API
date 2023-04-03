const express=require("express")
const userCartRouter=express.Router();
const auth=require("../MiddleWares/auth")
const {createCart, getCart, deleteCart}=require("../Controllers/userCartController")

userCartRouter.post("/",auth,createCart);
userCartRouter.get("/",auth,getCart);
userCartRouter.delete("/:id",auth,deleteCart)

module.exports=userCartRouter;