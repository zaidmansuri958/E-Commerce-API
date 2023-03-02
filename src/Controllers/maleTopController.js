const express = require("express");
const MaleTopModel = require("../Models/maleTop");

const getProduct = async function (req, res) {
    try {
        const maleTop = await MaleTopModel.find();
        res.status(200).json(maleTop);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}

module.exports=getProduct;



