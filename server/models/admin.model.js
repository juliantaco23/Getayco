// models/admin.model.js
module.exports = (sequelize, type) => {
  return sequelize.define("admins", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: type.STRING,
    password: type.STRING,
    created_at: type.DATE,
  });
};