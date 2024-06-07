const express = require('express');
const {registerUser,getAllUser} = require('../Controllers/users');
const router = express.Router();

router.route("/").post(registerUser).get(getAllUser);

module.exports = router;