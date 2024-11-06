const express = require("express");

const jwt = require("jsonwebtoken");

const router = express.Router();


const adminMiddleware =require("../middleware/admin");

const {Admin,Course}=require("../db");

const {JWT_SECRET}=require("../config");
const adminMiddelware = require("../middleware/admin");



router.post("/signup",async function(req,res){

    const{username,password}=req.body;

    const existingAdmin = await Admin.findOne({
        username
    })

    if(existingAdmin){
        return res.status(400).json({
            message:"admin already exists"
        })
    }

    await Admin.create({
        username,
        password
    })

    res.status(201).json({
        message:"admin created successfully"
    })


})


router.post("/signin",async function(req,res){
    const {username,password}=req.body;

    const user = await Admin.findOne({
        user,
        password
    })

    if(user){

        const token = jwt.sign({username},JWT_SECRET)

        return res.status(200).json({
            token,
            message:"admin signin succesfully"
        })

    }else{
        return res.status(401).json({
            message:"invalid credentials"
        })
    }

})



router.post('/courses',async function(req,res){

    const {title,discription,imageLink,price}=req.body;

    const newCourse = await Course.create({
        title,
        discription,
        imageLink,
        price
    })

    res.status(201).json({
        message:"course created successfully",
        courseId:newCourse._id,
    })
})


router.delete("/courses",adminMiddelware,async function(req,res){

    const courseId=req.body.courseId;

    const courses = await Course.findById(courseId);

    if(!courses){
        return res.status(404).json({
            message:"course not found"
        })
    }

    await Course.deleteOne({
        _id:courseId
    })

    res.status(204).json({
        message:"course deleted successfully"
    })
})






router.get("/courses",adminMiddelware,async function(req,res){
    const courses = await Course.find({})

    res.status(200).json({
        courses:courses,
    })
})

module.exports = router;