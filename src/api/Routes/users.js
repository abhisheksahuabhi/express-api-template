const express = require('express');
const {registerUser,getAllUser} = require('../Controllers/users');
const {handlingErrorMessage} = require('../Middleware/userFieldValidation')

const router = express.Router();

router.route("/").post(handlingErrorMessage(),registerUser).get(getAllUser);

module.exports = router;