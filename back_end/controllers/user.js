const db = require("../models/index");
const User = db.User;
const op = db.Sequelize.op;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//SignUp User
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = {
        password: hash,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
      };
      User.create(user)
        .then(() => res.status(201).json({ message: "User Account created !" }))
        .catch((error) =>
          res.status(500).send({
            message: error.message + "Impossible to create User Account",
          })
        );
    })
    .catch((error) => res.status(500).json({ error }));
};

//SignIn User
exports.signin = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).send({ error: "Wrong Password !" });
          }
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, process.env.TOKEN, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).send({ error }));
    })
    .catch((error) => res.status(500).send({ error }));
};

//Get Own Profile
exports.getMyProfile = (req, res, next) => {
  const connectedId = req.params.id;

  User.findByPk(connectedId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) =>
      res
        .status(500)
        .send({ error, message: "Impossible to show Account Informations" })
    );
};

//Update Own Profile
exports.updateMyProfile = (req, res, next) => {
  const connectedId = req.params.id;

  User.update(req.body, {
    where: { id: connectedId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Profile updated." });
      } else {
        res.send({
          message: `Impossible to update your Profile.`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        error,
        message: "An error occurred while updating the Profile",
      });
    });
};

//Delete Own Profile
exports.deleteMyProfile = (req, res, next) => {
  const connectedId = req.params.id;

  User.destroy({
    where: { id: connectedId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Your Profile has been deleted !" });
      } else {
        res.send({ message: "Impossible to delete your Profile" });
      }
    })
    .catch((error) => {
      res.status(500).send({
        error,
        message: "An error occurred while deleting the Profile",
      });
    });
};
