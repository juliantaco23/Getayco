// controllers/project.controller.js
const { Project, Worker, Session } = require('../config/db')

const createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      admin_id: req.admin.id
    })
    return res.status(201).json({ project })
  } catch (error) {
    errorServer(res, error)
  }
}

const getProjectsByAdmin = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: { admin_id: req.admin.id }
    })
    return res.status(200).json({ projects })
  } catch (error) {
    errorServer(res, error)
  }
}

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      where: { id: req.params.id }
    })
    return res.status(200).json({ project })
  } catch (error) {
    errorServer(res, error)
  }
}

const updateProject = async (req, res) => {
  try {
    const project = await Project.update(req.body, {
      where: { id: req.params.id }
    })
    return res.status(200).json({ project })
  } catch (error) {
    errorServer(res, error)
  }
}

const deleteProject = async (req, res) => {
  try {
    await Project.destroy({
      where: { id: req.params.id }
    })
    return res.status(204).json()
  } catch (error) {
    errorServer(res, error)
  }
}

const getWorkersByProject = async (req, res) => {
  try {
    const workers = await Worker.findAll({
      where: { project_id: req.params.id }
    })
    return res.status(200).json({ workers })
  } catch (error) {
    errorServer(res, error)
  }
}

const getSessionsByProject = async (req, res) => {
  try {
    const sessions = await Session.findAll({
      where: { project_id: req.params.id }
    })
    return res.status(200).json({ sessions })
  } catch (error) {
    errorServer(res, error)
  }
}

module.exports = {
  createProject,
  getProjectsByAdmin,
  getProjectById,
  updateProject,
  deleteProject,
  getWorkersByProject,
  getSessionsByProject
}

