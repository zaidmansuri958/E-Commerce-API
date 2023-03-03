const express = require("express");
const ShoeModel = require("../Models/maleShoes");

const getProduct = async function (req, res) {
    try {
        const maleShoes = await ShoeModel.find();
        res.status(200).json(maleShoes);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



