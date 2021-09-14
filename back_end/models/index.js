const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USER,
  dbConfig.DB_PASSWORD,
  {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./Users.model")(sequelize, Sequelize);
db.Post = require("./Posts.model")(sequelize, Sequelize);
db.Comment = require("./Comments.model")(sequelize, Sequelize);

//Relations

//User as many Posts and Comments
db.User.hasMany(db.Post, { onDelete: 'CASCADE', hooks: true });
db.User.hasMany(db.Comment, { onDelete: "CASCADE", hooks: true });
// Post has many Comments
db.Post.hasMany(db.Comment, { onDelete: 'CASCADE', hooks: true,  as: "Comments" });

//Post belongs to a User
db.Post.belongsTo(db.User, {
  as: "User",
});

//Comment belongs to a Post
db.Comment.belongsTo(db.Post, {
  as: "Posts",
});

//Comment belongs to a User
db.Comment.belongsTo(db.User, {
  as: "User",
});







module.exports = db;
