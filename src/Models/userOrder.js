const mongoose = require("mongoose");

const userOrderSchema = mongoose.Schema({
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

    productImg3: {
        type: String,
        required: true
    },

    productPrice: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },
    
    quantity: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
},{timeStamps:true});

module.exports=mongoose.model("user_orders",userOrderSchema);