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
const app = express();
const mongoose = require("mongoose");

app.use("/maleTshirts", maleTshirtRouter);
app.use("/maleShirts", maleShirtRouter);
app.use("/maleShoes", maleShoesRouter);
app.use("/malePants", malePantsRouter);
app.use("/femalePants", femalePantsRouter);
app.use("/femaleParty", femalePartyRoutes);
app.use("/femaleTraditional", femaleTradionalRoutes);
app.use("/femaleShoes", femaleShoesRouter);


const PORT = process.PORT || 3000
mongoose.connect(process.env.DB)
    .then(function () {
        app.listen(PORT, function () {
            console.log("Listning on port " + PORT);
        });
    }).catch(function (error) {
        console.log(error)
    })

