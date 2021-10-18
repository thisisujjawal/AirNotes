const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_CODE;
const donenv = require("dotenv");

donenv.config({path : "../config.env"})

const verifyToken = async (req, res , next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        // if it is not verifies then it will  throw an error
        if(token){
            const decodedData = jwt.verify(token , SECRET);
            req.userId = decodedData.id;
            next();
        }else{
            return res.status(401).json({error:true , msg : "token invalid"})
        }
    } catch (error) {
        res.status(400).json({error : true , msg : error.message});
    }
}

module.exports = verifyToken;