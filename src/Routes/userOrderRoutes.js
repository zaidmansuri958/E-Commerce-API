const express=require("express")
const userOrderRouter=express.Router();
const auth=require("../MiddleWares/auth")
const {createOrder,getOrder,deleteOrder}=require("../Controllers/userOrderController")

userOrderRouter.post("/",auth,createOrder);
userOrderRouter.get("/",auth,getOrder);
userOrderRouter.delete("/:id",auth,deleteOrder)

module.exports=userOrderRouter;