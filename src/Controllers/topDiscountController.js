const express = require("express");
const TopDiscountModel = require("../Models/topDiscount");

const getProduct = async function (req, res) {
    try {
        const TopDiscount = await TopDiscountModel.find();
        res.status(200).json(TopDiscount);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



