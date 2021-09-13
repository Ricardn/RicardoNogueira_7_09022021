"use strict";

module.exports = (sequelize, Sequelize) => {
  const Comments = sequelize.define("Comments", {
    content: {
      type: Sequelize.TEXT,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
  return Comments;
};
