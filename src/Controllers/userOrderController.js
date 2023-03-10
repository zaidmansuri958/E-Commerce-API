const userOrder = require("../Models/userOrder");
const userOrderModel = require("../Models/userOrder")

const createOrder = async function (req, res) {
    const { productID, productName, productDesc, productImg1, productImg2, productImg3, productPrice,quantity,size } = req.body;
    const newOrder = new userOrderModel({
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
        await newOrder.save();
        res.status(201).json(newOrder)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const deleteOrder = async function (req, res) {
    const id = req.params.id;
    try {
        const order=await userOrderModel.findByIdAndRemove(id);
        res.status(202).json(order)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const getOrder = async function (req, res) {
    try {
        const orders = await userOrderModel.find({ userID: req.userID })
        res.status(200).json(orders)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }

}

module.exports = { createOrder, getOrder, deleteOrder }