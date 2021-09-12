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

//Delete a Post
exports.deletePost = (req, res, next) => {
  const connectedId = req.params.id;

  Post.destroy({
    where: { id: connectedId },
  })

    .then((num) => {
      if (num == 1) {
        res.status(200).send({ message: "Post has been deleted successfully" });
      } else {
        res.status(401).send({ message: "Unable to delete a post" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "An error occurred while deleting the post" });
    });
};
