const User = require("../Models/users")
async function registerUser(req, res) {
    const body = req.body;
    if (!body ||
        !body.attributes.title ||
        !body.attributes.first_name ||
        !body.attributes.last_name ||
        !body.attributes.email ||
        !body.attributes.password
    ) {
        return res.status(400).json({ error: "Attribute value is empty or null" });
    }
    const newUser = await User.create({
        title: body.attributes.title,
        firstName: body.attributes.first_name,
        lastName: body.attributes.last_name,
        email: body.attributes.email,
        password: body.attributes.password,
    })

    return res.status(201).json({ msg: "success",id: newUser._id });
}

module.exports = {
    registerUser,
}