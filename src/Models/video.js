const mongoose=require("mongoose");

const videoSchema=mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    productID:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("videos",videoSchema)