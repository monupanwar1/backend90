// import jwt from "jsonwebtoken";
// import zod from "zod";


// const jwtPassword ="secret";




// const emailSchema = zod.string().email();
// const passwordSchema =zod.string().min(6);




// function signJwt(username,password){
//     const usernameResponse =emailSchema.safeParse(username)
//     const passwordResponse =passwordSchema.safeParse(password);




//     if(!usernameResponse || !passwordResponse){
//         return null;



//     }


//     const singnature = jwt.sign({
//         username,
//     },password);


//         return singnature;

// }




// const ans = signJwt("kunal@gmail.com","kunal124");


// console.log(ans)








// jwt decoder





// import jwt from "jsonwebtoken";

// function decodeJwt(token){
//     const decoded =jwt.decode(token);


//     return decoded?"true":"false";

// }


// const ans =decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imt1bmFsQGdtYWlsLmNvbSIsImlhdCI6MTcyOTA3OTc5OH0.fCzuidABxHgwcuZnwh9p4yfSAm6cUmUVVv9JAkM6Kcw")



// console.log(ans);



// 



// import express from "express";


// import jwt, { decode } from "jsonwebtoken";

// const app = express();



// app.use(express.json());



// const users =[];




// const JWT_SECRET ="kunal@1234";



// app.post("/signup",(req,res)=>{

//     const {username,password}=req.body;

//     // check if already exits
//     if(users.find((user)=>user.username===username)){
//         return res.json({
//             message:"user already exists"
//         })
//     }

//     if(username.length<5){
//         return res.json({
//             message:"username must be at least 5 characters✅"
//         })
//     }


//     users.push({
//         username:username,
//         password:password,
//     })
//     res.json({ message: "you have signed up successfully" });
// })




// app.post("/signin",(req,res)=>{

//     const {username,password}=req.body;


//     const foundUser =users.find((user)=>user.username===username && user.password===password);


//     if(foundUser){
//         const token = jwt.sign({
//             username:foundUser.username,
//         },
//         JWT_SECRET);

//         return res.json({
//             message:"you signed in sucessfully"

//         })

//     }else{
//         return res.json({
//             message:"invalid username or password"
//         })
//     }

// })



// function auth(req,res,next){

//     const token = req.headers.authorization;


//     if(!token){
//         return res.json({
//             message:"token is missing",

//         })
//     }



//     jwt.verify(token,JWT_SECRET,(err,decoded)=>{
//         if(err){
//             return res.json({
//                 message:"Unauthorizations❌"
//             })
//         }
//         req.users =decode;

//         next();
//     })
// }



// app.get("/me" ,auth,(req,res)=>{

//     const user =req.user;


//     res.json({
//         username:user.username,
//     })
// })







// app.listen(3000,()=>{
//     console.log("server is listening on the port 3000")
// });





// import express  from "express";

// import jwt from "jsonwebtoken";

// const app = express();

// app.use(express.json());




// const users =[];





// const JWT_SECRET ="kunal@12345";



// const logger = (req,res,next)=>{
//     console.log(`${req.method} request came😊`)

//     next();

// }


// app.post("/signup",logger,(req,res)=>{

//     const{username,password}=req.body;


//     if(users.find((user)=>user.username===username)){
//         return res.json({
//             message:"user already exists 😂"

//         })

//     }

//     if(username.length<5){
//         return res.json({
//             message:"username must be at least 5 characters ❌❌"
//         })

//     }

//     users.push({
//         username,password
//     })

//     res.json({ message: "you have signed up successfully✅✅✅" })

// })



// app.post("/signin",logger, (req,res)=>{

//     const {username,password}=req.body;

//     const founduser = users.find((user)=>user.username===username && user.password === password)


//     if(founduser){
//         const token = jwt.sign({
//             username,
//         },JWT_SECRET)

//       return res.json({
//             message:"you signed in successfully 😂",
//             token
//         })
        
//     }else{
//         return res.json({
//             message:"invalid username or password ❌❌"
//         })
//     }
// })



// const auth = (req,res,next)=>{

//     const token = req.headers.authorization;


//     if(!token ){
//         return res.json({
//             message:"token is missing 😂"
//         })
        
//     }


//     try{

//         const decodeData = jwt.verify(token,JWT_SECRET);

//         req.username =decodeData.username;

//         next();

//     }catch(err){
//         return res.json({
//             message:"invalid token",
//         })
//     }
// }






// app.get("/me",logger,auth,(req,res)=>{

//     const curretUser = req.username;


//     const foundUser = users.find((user)=>user.username==curretUser);
//     if(foundUser){

//         res.json({
//             username,
//             password
            
//         })
//     }else{
//         return res.json({
//             message:"user not found ❌"
//         })
//     }
// })












// app.listen(3000,()=>{
//     console.log("server is listning on the port 3000")
// })



const express = require('express');

const jwt = require("jsonwebtoken")




const app =express();
app.use(express.json());


app.use(cors());


const users =[];


const JWT_SECRET = "kunal@12345";


function logger(req,res,next){
    console.log(`${req.method} request came`)

    next();


}




app.get('/',(req, res)=>{

    res.sendFile(__dirname + "/public/index.html")


})



app.post("/signup",logger,(req,res)=>{

    const{username,password}=req.body;

    if(users.find((user)=>user.username===username)){
        res.json({
            message:"user already present"
        })
    }
    if(username.length<5){
        return res.json({
            message:"username must be at least 5 characters"
        })
    }


    users.push({
        username,password
    })

    return res.json({
        message:"you have signed up successfully"
    })

})



app.post("/signin",logger,(req,res)=>{

    const{username,password}=req.body;

    const foundUser = users.find((user)=>user.username===username && user.password===password)

    if(foundUser){

        const token = jwt.sign({
            username
        },JWT_SECRET)


        return res.send({
            message:"you are logged in ",
            token
        })
    }

})




const auth  = (req,res,next)=>{

    const token = req.headers.authorization;


    if(!token){
        return res.json({
            message:"token is missing"
        })

    }



    try{

        const decodeData = jwt.verify(token, JWT_SECRET)
        req.username =decodeData.username

        next();

    }catch(err){
        return res.json({
            message:"invalid token"
        })
    }
}



app.get('/me',logger,auth,(req,res)=>{

    const curretUser =req.username;

    const foundUser =users.find((user)=>user.username===curretUser)


    if(foundUser){
        return res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        return res.json({
            message:"user not found"
        })
    }

});


app.listen(3000,()=>{
    console.log("server is listening on the port 3000")
})








