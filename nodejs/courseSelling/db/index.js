const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const{MONGO_URI}=require("..config/");


// mongodb connection code ➡️


mongoose.connect(MONGO_URI)
.then(()=>console.log("Connect"))
.catch((err)=>console.log("connection error: " + err))







const AdminSchema= Schema({
    username:{type:String,unique:true},
    password:String,
})


const UserSchema = Schema({
    username:{type:String,unique:true},
    password:String,
    purchasedCourses:[{
        type:Schema.Types.ObjectId,
        ref:'Course',
    }]
})



const CourseSchema = Schema({
    title:String,
    discription:String,
    imageLink:String,
    price:Number,
})



const Admin=mongoose.model('Admin',"AdminSchema");
const User=mongoose.model('User',"UserSchema");
const Course=mongoose.model('Course',"CourseSchema");



module.exports ={
    Admin,
    User,
    Course,
 
}