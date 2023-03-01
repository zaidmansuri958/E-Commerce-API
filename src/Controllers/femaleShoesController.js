const express = require("express");
const FemaleShoeModel = require("../Models/femaleShoes");

const getProduct = async function (req, res) {
    try {
        const femaleClothes = await FemaleShoeModel.find();
        res.status(200).json(femaleClothes);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



