const db = require("../models/index");
const { post } = require("../routes/user");
const Post = db.Post;
const User = db.User;
const Comment = db.Comment;
const op = db.Sequelize.op;

//Get All Posts
exports.getAllPosts = (req, res, next) => {
  Post.findAll({
    attributes: { exclude: ["createdAt", "updateAt"] },
    include: { all: true, nested: true },
    order: [["createdAt", "DESC"]],
  })
    .then((data) => res.status(200).send(data))
    .catch((error) =>
      res.status(500).send({ error, message: "Unable to display posts" })
    );
};

//Create a new post
exports.createNewPost = async (req, res, next) => {
  try {
    const imageUrl = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;

    if (!req.body.userId) {
      return res
        .status(500)
        .send({ error: "validation", message: "missing field userId" });
    }

    const post = {
      UserId: req.body.userId,
      date: Date.now(),
      content: req.body.content,
      likes: 0,
      imageUrl: imageUrl,
    };

    await Post.create(post);
    console.log("post created");
    res.status(201).json({ message: "Post created !" });
  } catch (error) {
    res.status(500).send({ error, message: error.message });
  }
};

//Update a Post
exports.updatePost = (req, res, next) => {
  Post.update(
    {
      content: req.body.content,
      imageURL: req.body.imageURL,
    },
    { where: { id: postId } }
  )
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Post has been updated successfully" });
      } else {
        res.send({
          message: "Unable to update a post",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        error,
        message: "An error occurred while updating the post",
      });
    });
};


//Delete Post 
exports.deletePost = async (req, res, next) => {
  const postId = req.params.id;
  
  const postToDelete = await Post.findByPk(postId);

  console.log(postToDelete)
  if(req.user.userId === postToDelete.UserId || req.user.isAdmin) {
    await postToDelete.destroy();
    res.status(200).send({ message: "Your Post has been deleted !!" }); 
  }else{
    res.status(500).send({
      error: 500,
      message: "You are not allowed to delete this post",
    });
  }
};
