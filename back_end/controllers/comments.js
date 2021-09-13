const db = require("../models/index");
const Comment = db.Comment;
const User = db.User;
const Post = db.Post;

const op = db.Sequelize.op;

//Write a Post Comment

exports.addComment = (req, res, next) => {
  console.log(req.body);
  let created = false;
  const comment = {
    UserId: req.body.userId,
    PostId: req.body.postId,
    content: req.body.content,
    date: Date.now(),
  };

  Comment.create(comment)
    .then(() => {
      created = true;
      res.status(201).json({ message: "Comment sent !" });
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
