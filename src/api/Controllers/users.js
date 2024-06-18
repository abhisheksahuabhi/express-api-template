const User = require("../Models/users.js");

async function registerUser(req, res) {
    const body = req.body;
    const newUser = await User.create({
        type: body.type,
        title: body.title,
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        password: body.password,
    })

    return res.status(201).json({ msg: "success", users: newUser});
}

async function getAllUser(req, res) {
    const fetchAllUsers = await User.find({});
    return res.status(200).json(fetchAllUsers);
}

async function getUserById(req, res) {
    try{
        const userId=req.params.id;
        const fetchUsers = await User.findById(userId);
        if(!fetchUsers) return res.status(404).json({error:"User id not found",status:"404"});
        return res.status(200).json(fetchUsers);
    }catch(error){
        return res.status(500).json({error:"Server error",error});
    }
    
}
module.exports = {
    registerUser,
    getAllUser,
    getUserById
}