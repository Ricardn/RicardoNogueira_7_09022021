const db = require("../models/index");
const Comment = db.Comment;
const User = db.User;
const Post = db.Post;

const op = db.Sequelize.op;

//Write a Post Comment

exports.addComment = (req, res, next) => {
  let created = false;
  const comment = {
    userId: req.body.userId,
    postId: req.body.postId,
    content: req.body.content,
  };
    console.log("comment",comment);


  Comment.create(comment)
    .then(() => {
      created = true;
      res.status(201).send(created);
    })
    .catch((error) =>
      res.status(500).send({ error, message: "Unable to create a comment" })
    );
};

//Delete a comment
exports.deteleComment = (req, res, next) => {
  const commentId = req.params.id;

  Comment.destroy({
    where: { id: commentId },
  }).catch((err) => {
    res
      .status(500)
      .send({ message: "An error occurred while deleting the comment" });
  });
};