const user = require('../Models/StudentRegistrationByStaff')
const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage: storage }).single("file");
const saveform = async (req, res) => {
    console.log(req.file)
    console.log(req.body)
    let image = req.file;
    const a = new user({
        name: req.body.name,
        dob: req.body.dob,
        id: req.body.id,
        department: req.body.department,
        year: req.body.year,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        librarycardnumber: req.body.librarycardnumber,
        dateofreg: req.body.dateofreg,
        issuedbook: req.body.issuedbook,
        duedate: req.body.duedate,
        fine: req.body.fine,
        image: req.file
    })
    const user1 = await a.save()
        .then((result) => {
            res.status(200).json({
                message: 'Registered Successfully'
            })
        })
        .catch((err) => {
            console.error("Error while saving:", err);
            res.status(500).json({
                message: "Warning",
            
            })
        })
}
// const Form=async(req,res)=>{
//     user.find()
//     .then((result) => {
//         res.status(200).json({
//             message: 'success',
//             data:result
//         })
//     })
//     .catch((err) => {
//         res.status(500).json({
//             message: "Warning"
//         })
//     })
// }
// const param=async(req,res)=>{
//     const a=req.params.DelId
//     user.findById({"_id":a})
//     .then((x)=>{
//         res.status(200).json({
//             data:x,
//             message:"Success"
//         })
//     })
//     .catch((err)=>{
//         res.status(404).json({
//             message:"Id not found"
//         })
//     })
// }
// const del=async(req,res)=>{
//     const c=req.params.pids;
//     await user.findByIdAndDelete({"_id":c})
//     .then((y)=>{
//         res.status(200).json({
//             data:y,
//             message:"Success"
//         })
//     })
//     .catch((err)=>{
//         res.status(404).json({
//             message:"Id not found"
//         })
//     })

// }
// const upd=async(req,res)=>{
//     const d=req.params.pid;
//     await user.findByIdAndUpdate({"_id":d},{"name":"Aaditya"},{new:true})
//     .then((res)=>{
//         res.status(200).json({
//             data:res,
//             message:"Success"
//         })
//     })
//     .catch((err)=>{
//         res.status(404).json({
//             message:"Id not found"
//         })
//     })

// }

module.exports = {saveform,upload}