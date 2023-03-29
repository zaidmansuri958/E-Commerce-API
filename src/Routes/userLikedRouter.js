const express = require("express")
const userLikedRouter = express.Router();
const auth = require("../MiddleWares/auth")
const { createLiked, getLiked, deleteLiked } = require("../Controllers/userLikedController")

userLikedRouter.post("/", auth, createLiked);
userLikedRouter.get("/", auth, getLiked);
userLikedRouter.delete("/:id", auth, deleteLiked)

module.exports = userLikedRouter;