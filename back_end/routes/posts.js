const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/posts");
const multer = require("../middleware/multer-config");

const logMiddleware = (message) => (req, res, next) => {
  console.log(message);
  next();
};

//Get All posts
router.get("/", auth, postCtrl.getAllPosts);

//Create a new post
router.post(
  "/",
  logMiddleware("before auth"),
  auth,
  logMiddleware("before multer"),
  multer,
  logMiddleware("after multer"),
  postCtrl.createNewPost
);

//Update a Post
router.put("/:id", auth, postCtrl.updatePost);

//Delete a Post
router.delete("./:id", auth, postCtrl.deletePost);

//Like a Post
router.put("/like/:id", auth, postCtrl.likePost);

module.exports = router;
