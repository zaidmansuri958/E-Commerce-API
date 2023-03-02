const express = require("express");
const FemaleTopModel = require("../Models/femaleTop");

const getProduct = async function (req, res) {
    try {
        const femaleTop = await FemaleTopModel.find();
        res.status(200).json(femaleTop);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



