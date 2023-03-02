const express = require("express");
const BestSellerModel = require("../Models/bestSeller");

const getProduct = async function (req, res) {
    try {
        const bestSeller = await BestSellerModel.find();
        res.status(200).json(bestSeller);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



