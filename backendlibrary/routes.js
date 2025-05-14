var express=require('express');
let formController=require('./Controller/FormController')
let StaffRegController=require('./Controller/StaffRegController')
let StudentRegistrationController=require('./Controller/StudentRegController')
var route=express.Router();

route.post('/StudentRegistrationByStaff',formController.upload,formController.saveform)
route.post('/StaffReg',StaffRegController.StaffReg)
route.post('/StudentReg',StudentRegistrationController.StudentReg)




module.exports=route