const express = require("express");
const TshirtModel = require("../Models/maleTshirt");

const getProduct = async function (req, res) {
    try {
        const maleClothes = await TshirtModel.find()
        res.status(200).json(maleClothes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }

}

// const addProduct = async function (req, res) {
//     const { productID, productName, productDesc, productImg1, productImg2, productImg3, productPrice } = req.body;
//     const newProduct = new maleClothes({
//         productID: productID,
//         productName: productName,
//         productDesc: productDesc,
//         productImg1: productImg1,
//         productImg2: productImg2,
//         productImg3: productImg3,
//         productPrice: productPrice
//     })
//     try {
//         await newProduct.save();
//         res.status(200).json(newProduct)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Something went wrong" })
//     }
// }

// const deleteProduct = function (req, res) {

// }

module.exports = getProduct;