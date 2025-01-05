// controllers/session.controller.js
const { Session, Worker, Project, Service, File } = require('../config/db')

const createSession = async (req, res) => {
  const { project_id, worker_id, service_id, quantity, has_issues } = req.body
  try {
    const session = await Session.create({
      project_id,
      worker_id,
      service_id,
      quantity,
      has_issues
    })
    return res.status(201).json({ session })
  } catch (error) {
    errorServer(res, error)
  }
}

const getSessionsByProject = async (req, res) => {
  const { project_id } = req.params
  try {
    const sessions = await Session.findAll({
      where: { project_id },
      include: [
        { model: Worker },
        { model: Service },
        { model: File }
      ]
    })
    return res.status(200).json({ sessions })
  } catch (error) {
    errorServer(res, error)
  }
}

const getOneSession = async (req, res) => {
  const { id } = req.params
  try {
    const session = await Session.findOne({
      where: { id },
      include: [
        { model: Worker },
        { model: Service },
        { model: File }
      ]
    })
    return res.status(200).json({ session })
  } catch (error) {
    errorServer(res, error)
  }
}

const updateSession = async (req, res) => {
  const { id } = req.params
  try {
    await Session.update(req.body, { where: { id } })
    return res.status(204).json()
  } catch (error) {
    errorServer(res, error)
  }
}

const deleteSession = async (req, res) => {
  const { id } = req.params
  try {
    await Session.destroy({ where: { id } })
    return res.status(204).json()
  } catch (error) {
    errorServer(res, error)
  }
}

const errorServer = (res, error) => {
  return res.status(500).json({ error: error.message })
}

module.exports = {
  createSession,
  getSessionsByProject,
  getOneSession,
  updateSession,
  deleteSession
}
