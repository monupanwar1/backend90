const jwt = require("jsonwebtoken");

const {JWT_SECRET}=require("../config");

function adminMiddelware(req,res,next){

    const token = req.headers.authorization;

    const words = token.split(" ");
    const jwtToken =words[1];

    try{
        const decodeValue = jwt.verify({token ,JWT_SECRET})

        if(decodeValue.username){
            next();


        }else{
            res.status(403).json({
                message:"unauthorization",
            })
        }
        

    }catch(e){
        return res.status(401).json({
            message:"Invalid inputs"
        })
    }

   
}


module.exports =adminMiddelware;

