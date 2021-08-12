"use strict";

module.exports = (sequelize, Sequelize) => {
  const Comments = sequelize.define("Comments", {
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
  });
  return Comments;
};
