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
    include: ["Comments", "User"],
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
    console.log(" try to create post");
    console.log("req.file", req.file);
    const imageUrl = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;

    console.log("imgUrl", imageUrl);

    if (!req.body.userId) {
      return res
        .status(500)
        .send({ error: "validation", message: "missing field userId" });
    }

    console.log(req.body);

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
