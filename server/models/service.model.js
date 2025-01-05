// models/service.model.js
module.exports = (sequelize, type) => {
  return sequelize.define("services", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    unit: type.STRING,
    created_at: type.DATE,
  });
};
