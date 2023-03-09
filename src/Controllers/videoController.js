const videoModel = require("../Models/video");
const express = require("express");

const getVideo = async function (req, res) {
    try {
        const video = await videoModel.find()
        res.status(200).json(video)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }

}

module.exports=getVideo;