const jwt = require("jsonwebtoken");

const userModel = require("../model/userModel")
const { isValidObjectId } = require("../middleware/validation")

//=====================================================Authentication========================================================================


const authenticate = async function (req, res, next) {
    try {

        let token = req.headers["x-api-key"];
        if (!token) {
            token = req.headers["X-Api-Key"];
        }

        if (!token) {
            return res.status(400).send({
                status: false,
                message: "token is not present"
            })
        }
        
        if (token) {
            jwt.verify(token, "Function-Up radon", (err, decoded) => {
                if (err) {
                    return res.status(401).send({
                        status: false,
                        message: "Authentication Failed"
                    })
                }
                else {
                    req.token = decoded
                    next()
                }
            })
        }
    }
    catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}

//********authorization */

const authorization = async function (req, res, next) {
    try {

        let userLoggedIn = req.token.userId
        let userId = req.params.userId
        let checkUserId = await userModel.findById({_id : userId})
        if(!checkUserId){
            return res.status(400).send({
                status: false,
                message: "params userId not present in user DB"
            })
        }

        if (!isValidObjectId(userId)) {
            return res.status(400).send({
                status: false,
                message: "params's userId is invalid "
            })
        }

        if (userLoggedIn != userId) {
            return res.status(403).send({
                status: false,
                message: "authorization failed"
            });
        }
        next();
    }
    catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}


module.exports.authenticate = authenticate
module.exports.authorization = authorization