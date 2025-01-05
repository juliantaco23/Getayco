// models/project.model.js
module.exports = (sequelize, type) => {
  return sequelize.define("projects", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    custom_id: type.STRING,
    name: type.STRING,
    location: type.STRING,
    status: {
      type: type.ENUM,
      values: ["active", "completed", "cancelled"],
      defaultValue: "active",
    },
    admin_id: type.INTEGER,
    created_at: type.DATE,
  });
};
