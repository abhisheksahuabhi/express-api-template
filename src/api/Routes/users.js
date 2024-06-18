const express = require('express');
const {registerUser,getAllUser,getUserById} = require('../Controllers/users');
const {handlingErrorMessage} = require('../Middleware/userFieldValidation')

const router = express.Router();

router.route("/").post(handlingErrorMessage(),registerUser).get(getAllUser);
router.route("/:id").get(getUserById)
module.exports = router;