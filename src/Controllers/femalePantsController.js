const express = require("express");
const FemalePantsModel = require("../Models/femalePants");

const getProduct = async function (req, res) {
    try {
        const femaleClothes = await FemalePantsModel.find();
        res.status(200).json(femaleClothes);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

const getProductByID = async function (req, res) {
    const id=req.params.productID
    try {
        const femaleClothes = await FemalePantsModel.find({productID:id});
        res.status(200).json(femaleClothes);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports={getProduct,getProductByID};



