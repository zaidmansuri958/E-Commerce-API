require('dotenv').config();
const express = require("express");
const maleTshirtRouter = require("./Routes/maleTshirtRoutes");
const maleShirtRouter = require("./Routes/maleShirtRoutes");
const maleShoesRouter = require("./Routes/maleShoeRoutes");
const malePantsRouter = require("./Routes/malePantRoutes");
const femalePantsRouter = require("./Routes/femalePantRoutes");
const femaleTradionalRoutes = require("./Routes/femaleTraditionalRoutes");
const femalePartyRoutes = require("./Routes/femalePartyRoutes");
const femaleShoesRouter = require("./Routes/femaleShoeRoutes");
const bestSellerRouter= require("./Routes/bestSellerRoutes");
const maleTopRouter=require("./Routes/maleTopRouter");
const femaleTopRouter=require("./Routes/femaleTopRouter");
const topDiscountRouter=require("./Routes/topDiscountRoutes")
const sliderRouter=require("./Routes/sliderRoutes")
const categoryRouter=require("./Routes/categoryRoutes");
const userRouter=require("./Routes/userRouter");
const userOrderRouter=require(".//Routes/userOrderRoutes");
const videoRouter=require("./Routes/videoRoutes");
const app = express();
const mongoose = require("mongoose");

//https://rich-jade-agouti-wig.cyclic.app/maleTshirts
app.use(express.json())
app.use("/maleTshirts", maleTshirtRouter);
app.use("/maleShirts", maleShirtRouter);
app.use("/maleShoes", maleShoesRouter);
app.use("/malePants", malePantsRouter);
app.use("/femalePants", femalePantsRouter);
app.use("/femaleParty", femalePartyRoutes);
app.use("/femaleTraditional", femaleTradionalRoutes);
app.use("/femaleShoes", femaleShoesRouter);
app.use("/bestSeller", bestSellerRouter);
app.use("/maleTop",maleTopRouter);
app.use("/femaleTop",femaleTopRouter);
app.use("/topDiscount",topDiscountRouter);
app.use("/sliders",sliderRouter);
app.use("/categories",categoryRouter);
app.use("/user",userRouter);
app.use("/userOrder",userOrderRouter);
app.use("/video",videoRouter);


const PORT = process.PORT || 3000
mongoose.connect(process.env.DB)
    .then(function () {
        app.listen(PORT, function () {
            console.log("Listning on port " + PORT);
        });
    }).catch(function (error) {
        console.log(error)
    })

app.get("/", function (req, res) {
    res.send("working");
})
