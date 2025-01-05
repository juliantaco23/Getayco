// controllers/worker.controller.js
const { Worker, Project, Session } = require('../config/db')
const { errorServer } = require('../helpers/ErrorMessage')

const getWorkerByName = async (req, res) => {
  const { name } = req.params
  try {
    const worker = await Worker.findOne({ where: { name } })
    if (!worker) return res.status(404).json({ message: 'Worker not found' })
    return res.status(200).json({ worker })
  } catch (error) {
    errorServer(res, error)
  }
}

const createWorker = async (req, res) => {
  try {
    const worker = await Worker.create({ ...req.body })
    if (!worker) return res.status(400).json({ message: 'Error creating worker' })
    return res.status(201).json({ worker })
  } catch (error) {
    errorServer(res, error)
  }
}

const getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.findAll()
    return res.status(200).json({ workers })
  } catch (error) {
    errorServer(res, error)
  }
}

const getWorkerById = async (req, res) => {
  const { id } = req.params
  try {
    const worker = await Worker.findOne({ where: { id } })
    if (!worker) return res.status(404).json({ message: 'Worker not found' })
    return res.status(200).json({ worker })
  } catch (error) {
    errorServer(res, error)
  }
}

const updateWorker = async (req, res) => {
  const { id } = req.params
  try {
    await Worker.update(req.body, { where: { id } })
    return res.status(204).json()
  } catch (error) {
    errorServer(res, error)
  }
}

const deleteWorker = async (req, res) => {
  const { id } = req.params
  try {
    await Worker.destroy({ where: { id } })
    return res.status(204).json()
  } catch (error) {
    errorServer(res, error)
  }
}

const getWorkerSessions = async (req, res) => {
  const { id } = req.params
  try {
    const sessions = await Session.findAll({ where: { worker_id: id } })
    return res.status(200).json({ sessions })
  } catch (error) {
    errorServer(res, error)
  }
}

const getWorkerProjects = async (req, res) => {
  const { id } = req.params
  try {
    const projects = await Project.findAll({ where: { worker_id: id } })
    return res.status(200).json({ projects })
  } catch (error) {
    errorServer(res, error)
  }
}

module.exports = {
  getWorkerByName,
  createWorker,
  getAllWorkers,
  getWorkerById,
  updateWorker,
  deleteWorker,
  getWorkerSessions,
  getWorkerProjects,
}
