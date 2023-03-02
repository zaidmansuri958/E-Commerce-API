const express = require("express");
const SliderModel = require("../Models/slider");

const getProduct = async function (req, res) {
    try {
        const slider = await SliderModel.find();
        res.status(200).json(slider);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



