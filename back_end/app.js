require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const mysql = require('mysql2');

const db = require('./models/index');


const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts')


const app = express();

app.use(helmet());

db.sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


app.use(cors());
app.use(express.json());

// simple route
app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);
//app.use("/api/comments", commentRoutes);

//Set the images path.
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;