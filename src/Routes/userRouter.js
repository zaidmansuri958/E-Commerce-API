const express=require("express")
const userRouter=express.Router()
const {signUp,signIn}=require("../Controllers/userController")

userRouter.post("/signUp",signUp)
userRouter.post("/signIn",signIn)

module.exports=userRouter