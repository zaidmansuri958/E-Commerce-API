const mongoose=require("mongoose");

const videoSchema=mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    productID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },

    productDesc: {
        type: String,
        required: true
    },

    productImg1: {
        type: String,
        required: true
    },

    productImg2: {
        type: String,
        required: true
    },

    productImg3:{
        type: String,
        required: true
    },

    productPrice: {
        type: String,
        required: true
    },

    size :{
        type:Object,
        required:true
    }
});

module.exports=mongoose.model("videos",videoSchema)