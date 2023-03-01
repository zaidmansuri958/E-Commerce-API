const mongoose = require("mongoose")

const maleShirtSchema = mongoose.Schema({

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
    size :{
        type:Object,
        required:true
    }
});

module.exports = mongoose.model("male_shirts", maleShirtSchema);