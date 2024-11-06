const jwt = require("jsonwebtoken");


const JWT_SECRET ="kunal@123";


function auth(req,res,next){

    const token = req.headers.authorization;


    try{

        const decodeData = jwt.verify(token,JWT_SECRET);
        req.userid = decodeData.id;

        next();

    }catch(error){
        res.status(403).json({
            message:"Token is missing or invalid"
        })
    }
}

module.exports={
    auth,
    JWT_SECRET
 
}