const { text } = require('express')
var mongoose=require('mongoose')
const StudentRegistrationByStaffSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    
    email:{
        type:String,                                                             
        required:true
    },
    phonenumber:{
        type:Number,                                                             
        required:true
    },
    librarycardnumber:{
        type:Number,                                                             
        required:true
    },
    dateofreg:{
        type:String,                                                             
        required:true
    },
    issuedbook:{
        type:String,                                                             
        required:true
    },
    duedate:{
        type:String,                                                             
        required:true
    },
    fine:{
        type:Number,                                                             
        required:true
    }
})
module.exports=new  mongoose.model('StudentRegistrationByStaff',StudentRegistrationByStaffSchema)






