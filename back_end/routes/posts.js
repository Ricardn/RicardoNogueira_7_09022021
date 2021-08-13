const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/posts");

//Get All posts
router.get("/", auth, postCtrl.getAllPosts);

//Create a new post
router.post("/", auth, postCtrl.createNewPost);

//Update a Post
router.put("/:id", auth, postCtrl.updatePost);

//Delete a Post
router.delete("./:id", auth, postCtrl.deletePost);

//Like a Post
router.put("/like/:id", auth, postCtrl.likePost);

module.exports = router;