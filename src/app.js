require('../database/connect')
const express= require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes=require("../routes/user.routes")
const postsRoutes=require("../routes/posts.routes")
app.use("/user",userRoutes)
app.use("/posts",postsRoutes)
module.exports = app
