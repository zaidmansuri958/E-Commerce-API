const express = require("express");
const FemalePartyModel = require("../Models/femaleParty");

const getProduct = async function (req, res) {
    try {
        const femaleClothes = await FemalePartyModel.find();
        res.status(200).json(femaleClothes);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



