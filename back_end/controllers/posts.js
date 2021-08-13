const db = require("../models/index");
const { post } = require("../routes/user");
const Post = db.Post;
const User = db.User;
const op = db.Sequelize.op;

//Get All Posts
exports.getAllPosts = (req, res, next) => {
  Post.findAll({
    attributes: { exclude: ["createdAt", "updateAt"] },
  })
    .then((data) => res.status(200).send(data))
    .catch((error) =>
      res.status(500).send({ error, message: "Unable to display posts" })
    );
};

//Create a new post
exports.createNewPost = (req, res, next) => {
  if (!req.body.title) {
    res.status(401).send({
      message: "The post must have a title",
    });
    return;
  }

  if (req.body.imageUrl) {
    const post = {
      userId: req.body.userId,
      title: req.body.title,
      date: Date.now(),
      content: req.body.content,
      likes: 0,
      imageUrl: req.body.imageUrl,
    };
    Post.create(post)
      .then(() => res.status(201).json({ message: "Post created !" }))
      .catch((error) =>
        res.status(500).send({ error, message: "Unable to create a post" })
      );
  }
};

//Update a Post
exports.updatePost = (req, res, next) => {
  Post.update(
    {
      title: req.body.title,
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

//Delete a Post
exports.deletePost = (req, res, next) => {
  const id = req.params.id;

  Post.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Post has been deleted successfully" });
      } else {
        res.send({ message: "Unable to delete a post" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "An error occurred while deleting the post" });
    });
};

//Like a Post
exports.likePost = (req, res, next) => {
  const postId = req.params.id;
  userId = req.body.userId;
  likeValue = req.body.likes;

  Post.findByPk(postId)
    .then((post) => {
      switch (likeValue) {
        case 1: //User liked
          Post.update({ likes: post.likes + 1 }, { where: { id: postId } })
            .then(() => {
              post.addUser(userId);
              User.findByPk(userId).then((user) => {
                user.addPost(postId);
              });
            })
            .then(() => res.status(201).json({ message: "Post Liked" }));
          break;

        case 1:
          Post.update({ likes: post.likes - 1 }, { where: { id: postId } })
            .then(() => {
              post.removeUser(userId);
              User.findByPk(userId).then((user) => {
                user.addPost(postId);
              });
            })
            .then(() => res.status(201).json({ message: "Post UnLiked" }));
          break;
      }
    })
    .then(() => res.status(201))
    .catch((error) =>
      res.status(500).send({ error, message: "Unable to like a post" })
    );
};
