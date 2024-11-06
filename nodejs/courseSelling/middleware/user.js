const jwt = require("jsonwebtoken");

const {JWT_SECRET}= require("../config")

function userMiddleware(req, res, next) {

    const token = req.headers.authorization;

    const word = token.split(" ");
    const jwtToken=word[1];

    try{

        const decodeValue = jwt.verify(jwtToken,JWT_SECRET)
        if(decodeValue.username){

            req.username = decodeValue.username;
            next();

        }else{
            res.status(403).json({
                message:"you are not authnticated",

            })
        }

    }catch(e){
        res.status(403).json({
            message:"incorect inputs",
        })
    }






}


module.exports =userMiddleware;