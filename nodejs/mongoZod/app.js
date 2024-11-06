

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");



const {UserModel ,TodoModel}= require("./db");

const {auth, JWT_SECRET}= require("./auth");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/todos-app-week-7-2");

app.post("/signup", async function (req, res) {
    
    const requireBody = zod.object({
        email: zod.string().min(3).max(100).email(), // 
        password: zod.string().min(5).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
        name: zod.string().min(3).max(100),
    });




    const{email,password,name}=req.body;

    const hashedpassword = await bcrypt.hash(password,5);

    try{

        await UserModel.create({
            email,
            password: hashedpassword,
            name,
        })

    }catch(err){
        return res.json({
            message:"user already exists",
        })
    }
   
    res.json({ message: "You are signed up!" });
});


app.post("/signin", async  (req, res)=> {
    
})

    



// todos code start here✅

app.post("/todo",auth,async(req,res)=>{

    const {title,done,deadline}=req.body;

    await TodoModel.create({
        userId,
        title,
        done:done||false,
        deadline,
    });

    res.json({
        message:"todo created successfully",
    })
})


app.get("/todo",auth ,async(req,res)=>{

    const userId =req.userId;

    const todos = await TodoModel.find({
        userId,
    })

    if(!todos){
        return res.status.json(404).json({
            message:"no todos found",
        })
    };

    res.json({todos})
})

app.put('/todos/:id',auth,async(req,res)=>{

    const userId = req.userId;
    const todoId = req.params.id

    const{title,done}=req.body;


    const todo = await TodoModel.findOne({_id:todoId,userId})

    if(!todo){
        return res.status(404).json({
            message:"todo not found",
        })
    }

    todo.title=title||todo.title;

    todo.done = (done!==undefined)?done:todo.done
    
    await todo.save();
    res.json({ message: "Todo updated"})
})



app.delete("/todos/:id",auth, async(req,res)=>{

    const userId = req.userId;
    const todoId = req.params.id



    const todo = await TodoModel.findOne({
        _id:todoId,
        userId,
    })
    if(!todo){
        return res.status(404).json({
            message:"todo not found",

        })
    }
    await TodoModel.deleteOne({
        _id:todoId,
        userId,
    })

    res.json({message: "Todo deleted"})
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});