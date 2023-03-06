const userModel = require("../Models/user");
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const SECRET_KEY = "ecommerce app"

const signUp = async function (req, res) {

    //Existing use check
    //Hashed password
    //User craetion
    //Tocken generate

    const { name, email, password, mobile_no, address, pincode } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: "User alrady exists" })
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            name: name,
            email: email,
            password: hashPassword,
            mobile_no: mobile_no,
            address: address,
            pincode: pincode
        });

        const token = jsonwebtoken.sign({ email: result.email, id: result._id }, SECRET_KEY)
        res.status(201).json({ user: result, token: token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Some thing went wrong" })
    }

}

const signIn = async function (req, res) {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email })
        if (!existingUser) {
            return res.status(404).json({ message: "User is not exists" })
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ messge: "Invalid Credentials" })
        }
        const token = jsonwebtoken.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY)
        res.status(201).json({ user: existingUser, token: token })
    } 
    
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Some thing went wrong" })
    }


}

module.exports = { signUp, signIn }