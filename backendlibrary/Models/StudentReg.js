const { text } = require('express')
var mongoose=require('mongoose')
const StudentRegSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
   
})
module.exports=new  mongoose.model('StudentReg',StudentRegSchema)