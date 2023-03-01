const express = require("express");
const ShirtModel = require("../Models/maleShirt");

const getProduct = async function (req, res) {
    try {
        const maleClothes = await ShirtModel.find();
        res.status(200).json(maleClothes);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



