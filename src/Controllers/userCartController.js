const userCartModel = require("../Models/userCart")

const createCart = async function (req, res) {
    const { productID, productName, productDesc, productImg1, productImg2, productImg3, productPrice,quantity,size } = req.body;
    const newCart = new userCartModel({
        productID: productID,
        productName: productName,
        productDesc: productDesc,
        productImg1: productImg1,
        productImg2: productImg2,
        productImg3: productImg3,
        productPrice: productPrice,
        quantity:quantity,
        size: size,

        userID: req.userID
    });
    try {
        await newCart.save();
        res.status(201).json(newCart)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const deleteCart = async function (req, res) {
    const id = req.params.id;
    try {
        const cart=await userCartModel.findByIdAndRemove(id);
        res.status(202).json(order)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const getCart = async function (req, res) {
    try {
        const cart = await userCartModel.find({ userID: req.userID })
        res.status(200).json(cart)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }

}

module.exports = { createCart, getCart, deleteCart }