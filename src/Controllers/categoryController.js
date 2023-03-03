const express = require("express");
const CategoryModel = require("../Models/category");

const getProduct = async function (req, res) {
    try {
        const category = await CategoryModel.find();
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :"Something wrong happen"});
    }
}
module.exports=getProduct;



