const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    data:{
        type:String,
        required: true,
      
    }, 

},
{
    timestamps:true
})

const post = mongoose.model("Post",postSchema)
module.exports=post