// models/file.model.js
module.exports = (sequelize, type) => {
  return sequelize.define("files", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: type.INTEGER,
    type: {
      type: type.ENUM,
      values: ["photo", "audio"],
    },
    url: type.STRING,
    created_at: type.DATE,
  });
};
