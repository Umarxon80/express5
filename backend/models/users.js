const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        maxlength:20,
        minlength:1,
        required:true
    },
    img:{
        type:String
    },
    age:{
        type:Number,
        min:1,
        max:150
    },
    login:{
        type:String,  
        required: true
    },
    password:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User",UserSchema)


module.exports=User