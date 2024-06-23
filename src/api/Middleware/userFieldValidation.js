var { isValidEmail } = require("../../utils/customValidatorFunction");

function invalidAttributeErrorObject(attribute, statusCode) {
    const errorObject = {
        error: `error.client.${attribute}.invalid`,
        status: `${statusCode}`
    }
    return errorObject;
}

function blankAttributeErrorObject(attribute, statusCode) {
    const errorObject = {
        error: `error.client.${attribute}.blank`,
        status: `${statusCode}`
    }
    return errorObject;
}
function handlingErrorMessage() {
    const badRequestStatusCode = "400";
    return (req, res, next) => {
        const body = req.body;
        if (!body.type || body.type === null) return res.status(badRequestStatusCode).json(blankAttributeErrorObject("type", badRequestStatusCode));
        if (!body.title || body.title === null) return res.status(badRequestStatusCode).json(blankAttributeErrorObject("title", badRequestStatusCode));
        if (!body.first_name || body.first_name === null) return res.status(badRequestStatusCode).json(blankAttributeErrorObject("first_name", badRequestStatusCode));
        if (!body.last_name || body.last_name === null) return res.status(badRequestStatusCode).json(blankAttributeErrorObject("last_name", badRequestStatusCode));
        // if (!isValidEmail(body.email)) return res.status(badRequestStatusCode).json(invalidAttributeErrorObject("email", badRequestStatusCode));
        if (!body.email || body.email === null) return res.status(badRequestStatusCode).json(blankAttributeErrorObject("email", badRequestStatusCode));

        next();
    }

}

module.exports = {
    handlingErrorMessage,
}