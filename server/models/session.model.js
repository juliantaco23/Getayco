// models/session.model.js
module.exports = (sequelize, type) => {
  return sequelize.define("sessions", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: type.INTEGER,
    worker_id: type.INTEGER,
    service_id: type.INTEGER,
    quantity: type.DECIMAL(10, 2),
    has_issues: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    created_at: type.DATE,
  });
};
