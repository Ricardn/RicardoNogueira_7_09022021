require("dotenv").config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  dialect: "mysql",
  //used for Sequelize connection pool configuration
  pool: {
    max: 5, //maximum number of connection in pool
    min: 0, //minimum number of connection in pool
    acquire: 30000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, //maximum time, in milliseconds, that a connection can be idle before being released
  },
};
