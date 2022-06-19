const userModel = require("../database/models/user.model")
class User{
    //add user
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in register"
            })
        }
    }
    //get all users
    static getAllUsers = async(req, res) => {
        try{
            const allUsers = await userModel.find()
            res.status(200).send({
                apiStatus:true,
                data:allUsers,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //get single user
    static getSingleUser = async(req, res) => {
        try{
            const userData = await userModel.findById(req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update status (activate)
    static activateUser = async(req,res) =>{
        try{
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            const userData = await userModel.findById(req.params.id)
            userData.status = true
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update status (deactivate)
    static deactivateUser = async(req,res) =>{
        try{
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            const userData = await userModel.findById(req.params.id)
            userData.status = false
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //change status
    static changeStatus = async(req,res) =>{
        try{
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            const userData = await userModel.findById(req.params.id)
            userData.status = !userData.status
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update password
    static updatePassword = async(req,res) =>{
        try{
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            const userPassword = await userModel.findById(req.params.id)
            userPassword.status = !userPassword.status
            await userPassword.save()
            res.status(200).send({
                apiStatus:true,
                data:userPassword,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }

    //update user
    //remove account
}
module.exports = User