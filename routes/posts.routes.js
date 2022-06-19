const post = require("../controllers/posts.controller")
const router = require("express").Router()

router.post("/addPost", post.addPost)

router.get("/", post.getAllPosts)

router.post("/updatePost/:id", post.updatePost)

router.get("/getSinglePost/:id", post.getSinglePost)


router.delete("/deletePost/:id", post.deletePost)

module.exports=router