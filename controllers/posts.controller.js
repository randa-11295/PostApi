const postModel = require("../database/models/posts.model")
class Post{
    //add post
    static addPost = async(req,res)=>{
        try{
            const post = new postModel(req.body)
            await post.save()
            res.status(200).send({
                apiStatus: true,
                data:post,
                message:"post added successfuly"
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

     //get all post
     static getAllPosts = async(req, res) => {
        try{
            const allUsers = await postModel.find()
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

    static updatePost = async(req,res) =>{
        try{
            const updatePost = await postModel.findById(req.params.id)
            updatePost.data = req.body.data
            await updatePost.save()
            res.status(200).send({
                apiStatus:true,
                data : updatePost,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
  
      //get single user
      static getSinglePost = async(req, res) => {
        try{
            const postData = await postModel.findById(req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:postData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
  
    static deletePost= async(req,res)=>{
        try{
            const postData = await postModel.findByIdAndDelete(req.param.id)
            res.status(200).send({
                apiStatus:true,
                data:postData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
}
module.exports = Post