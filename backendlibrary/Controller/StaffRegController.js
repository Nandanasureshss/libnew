const newuser = require('../Models/StaffRegSchema')
const StaffReg = async (req, res) => {
    const a = new newuser({
        name: req.body.name,
        age: req.body.age,
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword

    })
    const user1 = await a.save()
        .then((result) => {
            res.status(200).json({
                message: 'success'
            })
        })
        .catch((err) => {    
            console.error("Error while saving:", err);
            res.status(500).json({
                message: err
            })
        })
}
module.exports = {StaffReg}