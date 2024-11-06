const express = require("express");

const jwt = require("jsonwebtoken");

const router = express.Router();

const{User,Course}=require("../db");


const userMiddleware = require("../middleware/user");



const { JWT_SECRET}=require("../config");



router.post("/signup",async(req,res)=>{
    const {username,password}=req.body;

    const existingUser = await User.findOne({
        username
    });

    
    
    if(existingUser){
        return res.status(400).json({
            message:"user already exists"
        })
    }
    
    
    await User.create({
        username,
        password
    });
    
    
    res.status(200).json({
        message:"user creates succesfully",
    })
    
})


router.post("/signin",async(req,res)=>{
    const {username,password}=req.body;



    const user  = await User.findOne({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username,
        },JWT_SECRET);

        res.status(200).json({
            token,
            message:"you are signed in successfully"
            
        })
    }else{
        return res.status(401).json({
            message:"Invalid username or password"
        })
    }

})

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Extract course ID from request parameters and username from the request object
    const courseId = req.params.courseId;
    const username = req.username;

    try {

        await User.updateOne(
            {
                username: username,
            },
            {
                $push: {
                    purchasedCourses: courseId, 
                },
            }
        );
    } catch (err) {
        
        return res.status(400).json({
            message: "Course purchase failed", 
            error: err.message, 
        });
    }

    
    res.status(200).json({
        message: "Course purchased successfully", 
    });
});



router.get("/course",async (req,res)=>{
    const courses = await Course.find({});

    res.status(200).json({
        courses:courses,
    })

})

router.get("purchasedCourse",async (req,res)=>{
    const username = req.username;

    const user = await User.findOne({
        username
    })

    const courses = await Course.find({
        _id:{$in:user.purchasedCourses}

    });


    res.status(200).json({
       courses
    })

   

})

module.exports=router;