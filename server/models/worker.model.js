// models/worker.model.js
module.exports = (sequelize, type) => {
  return sequelize.define("workers", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    created_at: type.DATE,
  });
};
