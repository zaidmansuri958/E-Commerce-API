const express=require("express");
const videoRouter=express.Router();
const getVideo=require("../Controllers/videoController")

videoRouter.get("/",getVideo)

module.exports=videoRouter