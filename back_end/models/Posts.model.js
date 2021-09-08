"use strict";

module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define("Posts", {
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
    },
    likes: {
      type: Sequelize.INTEGER,
      unsigned: true,
      default: 0,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
  });
  return Posts;
};
