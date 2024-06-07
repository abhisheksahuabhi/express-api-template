const User = require("../Models/users.js")
async function registerUser(req, res) {
    const body = req.body;
    if (!body ||
        !body.type ||
        !body.title ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.password
    ) {
        return res.status(400).json({ error: "Attribute value is empty " + `${body.type}` });
    }
    const newUser = await User.create({
        type: body.type,
        title: body.title,
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        password: body.password,
    })

    return res.status(201).json({ msg: "success", id: newUser._id });
}

async function getAllUser(req, res){
    const fetchAllUsers=await User.find({});
    return res.json(fetchAllUsers);
}
module.exports = {
    registerUser,
    getAllUser,
}