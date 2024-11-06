const express = require('express');

const jwt = require('jsonwebtoken')







const app =express();

app.use(express.json());

const users =[];

const JWT_SECRET="kunal@123"





function logger(req,res,next){

    console.log(`${req.method} request came`);

    next();

}



app.get('/',(req,res)=>{

    res.sendfile(__dirname + '/public/index.html');

})



app.post('/signup',logger,(req,res)=>{

    const {username,password}=req.body;


    if(!username || !password){
        return res.json({
            message:"username and password are required",

        })
    }


    if(username.length<5){
        return res.json({
            message:"username must have at least 5 characters",
        })
    }

    if(users.find((user)=>user.username==username)){
        return res.json({
            message:"you are already signed up"
        })
    }

    users.push({username,password});

    return res.json({
        message:"signed up successfully"
    })




})
app.post('/signin',logger,(req,res)=>{

    const {username,password}=req.body;

    if(!username && !password){
        return res.json({
            message:"username and password are required",
        })

    }

    const foundUser  = users.find((user)=>user.username==username && user.password==password)


    if(foundUser){
        
        const token = jwt.sign({username },JWT_SECRET)

        res.json({
            message:"you signed in sucessfully",
            token
        })


    }else{
        return res.json({
            message:"invalid credentials"
        })

    }
})



function auth(req, res, next){

    const token = req.headers.authorization;

    if(!token){
        return res.json({
            message:"token is missing",
        })


    }


    try{
        const decodeData =jwt.verify(token,JWT_SECRET);

        req.username = decodeData.username;

    }catch(e){
        res.json({
            message:"invalid token"
        })
    }
}



app.get("/me",logger,auth,(req,res)=>{

    const currentUser = req.username;


    const foundUser  =users.find((user)=>user.username === currentUser)


    if(foundUser){
        res.json({
            username,
            password
        })
    }else{
        message:"user not found"
    }
    
})


app.listen(3000);








