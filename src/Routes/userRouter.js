const express=require("express")
const userRouter=express.Router()
const {signUp,signIn,getUser}=require("../Controllers/userController")
const auth=require("../MiddleWares/auth")

userRouter.post("/signUp",signUp)
userRouter.post("/signIn",signIn)
userRouter.get("",auth,getUser)

module.exports=userRouter