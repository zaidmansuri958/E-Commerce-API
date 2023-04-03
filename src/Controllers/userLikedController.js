const userLikedModel = require("../Models/userLiked")

const createLiked = async function (req, res) {
    const { productID, productName, productDesc, productImg1, productImg2, productImg3, productPrice,quantity,size } = req.body;
    const newLiked = new userLikedModel({
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
        await newLiked.save();
        res.status(201).json(newLiked)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const deleteLiked = async function (req, res) {
    const id = req.params.id;
    try {
        const liked=await userLikedModel.findByIdAndRemove(id);
        res.status(202).json(liked)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const getLiked = async function (req, res) {
    try {
        const liked = await userLikedModel.find({ userID: req.userID })
        res.status(200).json(liked)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }

}

module.exports = { createLiked, getLiked, deleteLiked }