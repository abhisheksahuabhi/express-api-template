const fs = require("fs");
function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()}`, (err, data) => {
            next();
        })
    }
}

module.exports = {
    logReqRes,
}