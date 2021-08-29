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
/*
db.User.hasMany(db.Post);
db.Comment.belongsTo(db.Post);
db.Post.hasMany(db.Comment);
db.Post.belongsTo(db.User);
*/


module.exports = db;
