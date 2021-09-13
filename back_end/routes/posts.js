const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/posts");
const multer = require("../middleware/multer-config");

//Get All posts
router.get("/", auth, postCtrl.getAllPosts);

//Create a new post
router.post("/", auth, multer, postCtrl.createNewPost);

//Update a Post
//router.put("./:id", auth, postCtrl.updatePost);

//Delete a Post
router.delete("/:id", auth, postCtrl.deletePost);

module.exports = router;
