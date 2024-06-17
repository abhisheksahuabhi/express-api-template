const express = require('express');
const {registerUser,getAllUser} = require('../Controllers/users');
const {validateUserRegisteration} = require('../Middleware/usersValidation')

const router = express.Router();

router.route("/").post(validateUserRegisteration,registerUser);

module.exports = router;