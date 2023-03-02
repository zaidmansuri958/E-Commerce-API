const mongoose = require("mongoose");

const SliderSchema = mongoose.Schema({
  
    productDesc: {
        type: String,
        required: true
    },

    productImg1: {
        type: String,
        required: true
    },

    btnText:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("slider_images", SliderSchema);