const User = require("../Models/users.js")
const {handlingErrorMessage} =require('../../utils/usersValidator.js');
async function registerUser(req, res) {
    const body = req.body;
    console.log("body"+body)
    handlingErrorMessage(req,res,"400");
    const newUser = await User.create({
        type: body.type,
        title: body.title,
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        password: body.password,
    })

    return res.status(201).json({ msg: "success", id: newUser._id, users: req.body });
}

async function getAllUser(req, res){
    const fetchAllUsers=await User.find({});
    return res.json(fetchAllUsers);
}
module.exports = {
    registerUser,
    getAllUser,
}