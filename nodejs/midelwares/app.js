// // midelwares


// import express from 'express'

// const app =express();


// const isOldEnough =(req,res,next)=>{

//     const age =req.query.age;


//     if(age>14){
//         next();
//     }else{
//         res.status(411).json({
//             message:"you are not able to do so ",
//         });
//     }
    
// }



// app.use(isOldEnough);


// app.get("/ride1",(req,res)=>{
//     res.send({
//         message:"your are allowed to do so 1",
//     })
// })
// app.get("/ride2",(req,res)=>{
//     res.send({
//         message:"your are allowed to do so 2",
//     })
// })



// app.listen(3000,()=>{
//     console.log("server is running ")
// })



// // request counter 


// import express from "express";


// const app =express();




// let requestCount = 0;

// const requestCouter =(req,res,next)=>{
//     requestCount++;

//     next();
// }


// app.use(requestCouter);


// app.get("/user1",(req,res)=>{
//     res.status(200).send({
//         name:"kunal"
        
//     })

// })
// app.get("/user1",(req,res)=>{
//     res.status(200).send({
//         name:"kunal"
        
//     })

// })
// app.get("/user2",(req,res)=>{
//     res.status(200).send({
//         name:"kunalpanwar"
        
//     })

// })
// app.get("/requestCount",(req,res)=>{
//     res.status(200).json({
//      requestCount
        
//     })

// })


// app.listen(3000,()=>{
//     console.log("server listening on 3000",{requestCount})

// })

// ratelimiter


// 








// error counter



// import express from "express";


// const app =express();






// let errorCount =0;



// app.get("/user",(req,res)=>{
//     throw new Error("something went wrong");

//     res.status(200).json({
//         name:"kunal"
//     })

// })



// app.post("/user",(req,res)=>{
//     res.status(200).json({ msg: "created dummy user" });

// })
// app.get("/user",(req,res)=>{
//     res.status(200).json({ errorCount});

// })


// app.use(function(req,res,next){
//     res.status(400).send({})


//     errorCount++;


// })


// app.listen(3000,()=>{
//     console.log("hello server")
// });




// import express from "express";

// const app =express();




// app.get("/sum/:num1/:num2",(req,res)=>{
//     const {num1,num2}=req.params;

//     res.send({
//         result:parseInt(num1)+parseInt(num2),
//     })
// })
// app.get("/sum/:num1/:num2",(req,res)=>{
//     const {num1,num2}=req.params;

//     res.send({
//         result:parseInt(num1)+parseInt(num2),
//     })
// })
// app.get("/sub/:num1/:num2",(req,res)=>{
//     const {num1,num2}=req.params;

//     res.send({
//         result:parseInt(num1)-parseInt(num2),
//     })
// })
// app.get("/mul/:num1/:num2",(req,res)=>{
//     const {num1,num2}=req.params;

//     res.send({
//         result:parseInt(num1)*parseInt(num2),
//     })
// })
// app.get("/divide/:num1/:num2",(req,res)=>{
//     const {num1,num2}=req.params;

//     res.send({
//         result:parseInt(num1)/parseInt(num2),
//     })
// })

// app.listen(3000,()=>{
//     console.log("server is listening on port 3000")

// })




// import express from 'express'


// const app  =express();



// const requestLoger=(req,res,next)=>{

//     const currentTime =new Date();


//     console.log(req.method)
//     console.log(`{req.protocol}://{req.get('host)}${req.url}`)
//     console.log(currentTime)

//     next();


// }

// app.use(requestLoger);



// app.get('*',(req,res)=>{
//     res.send('hello world')
// })
// app.post('*',(req,res)=>{
//     res.send('hello world')
// })
// app.put('*',(req,res)=>{
//     res.send('hello world')
// })
// app.delete('*',(req,res)=>{
//     res.send('hello world')
// })


// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })


// import express from "express";


// const app =express();


// let requestCount =0;


// const requestCouter =(req,res,next)=>{
//     requestCount++;


//     next();

// }



// app.use(requestCouter);


// app.get("/",(req,res)=>{
//     res.send({
//      Message:"hello dude ✅"
//     })
// })
// app.get("/requestCount",(req,res)=>{
//     res.send({
//      totalRequest:requestCount
//     })
// })



// app.listen(3000,()=>{
//     console.log("server is lsitening on the port")
// })




// import express from "express";


// const app =express();


// let requestCount =0;

// function requestCouter(req,res,next){
//     requestCount++;

//     console.log(`total number of request :${requestCount}`)
//     next();
// }



// function sumHandler(req,res){
//     console.log("multiplication ✅")
//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     res.json({
//         ans:a+b,

//     })
// }
// function mulHandler(req,res){
//     console.log("multiplication ✅")
//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     res.json({
//         ans:a*b,

//     })
// }



// app.get("/sum",requestCouter,sumHandler)
// app.get("/mul",requestCouter,mulHandler)



// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })




// import express from "express";
// import bodyParser from "body-parser"

// const app =express();


// app.use(bodyParser.json());

// app.get("/sum", function (req, res) {
//     // get the values of a and b from the query parameters and convert them to integers
//     const a = parseInt(req.body.a);
//     const b = parseInt(req.body.b);

    
//     res.json({
//         ans: a + b,
//     });
// });

// // Server listens on port 3000
// app.listen(3000);



import express from "express";
import cors from "cors";
const app =express();




app.use(express.json());


app.use(cors());



app.post("/sum",(req,res)=>{

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);


    console.log(a,b);

    res.json({
        ans:a+b
    })
})




app.get("/sum",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
    
})

app.listen(3000);
