const {check, validationResult}= require('express-validator');

const validateUserRegisteration=[
    check('type').notEmpty().withMessage('Type should not be empty'),
    check('title').notEmpty().withMessage('title should not be empty'),
    check('first_name').notEmpty().withMessage('first_name should not be empty'),
    check('last_name').notEmpty().withMessage('last_name should not be empty'),
    check('email').notEmpty().withMessage('email should not be empty').isEmail().withMessage("Invalid email"),
    (req,res,next)=>{
        const error= validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error: error.array()})
        }
        next();
    }
]


module.exports={
    validateUserRegisteration,
}