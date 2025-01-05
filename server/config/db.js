const Sequelize = require('sequelize')
const SQ = require('./SQ')
const ProjectModel = require('../models/project.model')
const AdminModel = require('../models/admin.model')
const SessionModel = require('../models/session.model')
const WorkerModel = require('../models/worker.model')
const FileModel = require('../models/file.model')
const ServiceModel = require('../models/service.model')

console.log("DATABASE CONNECTION", process.env.DATA_BASE_HOST, process.env.DATA_BASE_USER, process.env.DATA_BASE_PASSWORD, process.env.DATA_BASE_SCHEME, process.env.DATA_BASE_PORT)

const dbConfig = {
  HOST: process.env.DATA_BASE_HOST?.replace(/"/g, ''),
  USER: process.env.DATA_BASE_USER,
  PASSWORD: process.env.DATA_BASE_PASSWORD,
  DB: process.env.DATA_BASE_SCHEME,
  PORT: process.env.DATA_BASE_PORT,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  define: {
    timestamps: false,
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false,
})
SQ.sequelize = sequelize;
const Project = ProjectModel(sequelize, Sequelize)
const Admin = AdminModel(sequelize, Sequelize)
const Session = SessionModel(sequelize, Sequelize)
const Worker = WorkerModel(sequelize, Sequelize)
const File = FileModel(sequelize, Sequelize)
const Service = ServiceModel(sequelize, Sequelize)

sequelize.sync({ force: false }).then(() => {
  console.log('Tablas sincronizadas')
})
 
module.exports = {
  Project,
  Session,
  Worker,
  File,
  Service,
  Admin,
}
