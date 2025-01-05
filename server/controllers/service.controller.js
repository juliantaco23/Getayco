// controllers/service.controller.js
const { Service } = require('../config/db')

const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body)
    return res.status(201).json({ service })
  } catch (error) {
    errorServer(res, error)
  }
}

const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll()
    return res.status(200).json({ services })
  } catch (error) {
    errorServer(res, error)
  }
}

const getOneService = async (req, res) => {
  try {
    const { id } = req.params
    const service = await Service.findOne({ where: { id } })
    return res.status(200).json({ service })
  } catch (error) {
    errorServer(res, error)
  }
}

const updateService = async (req, res) => {
  try {
    const { id } = req.params
    await Service.update(req.body, { where: { id } })
    return res.status(204).json()
  } catch (error) {
    errorServer(res, error)
  }
}

const deleteService = async (req, res) => {
  try {
    const { id } = req.params
    await Service.destroy({ where: { id } })
    return res.status(204).json()
  } catch (error) {
    errorServer(res, error)
  }
}

const errorServer = (res, error) => {
  return res.status(500).json({ error: error.message })
}

module.exports = {
  createService,
  getAllServices,
  getOneService,
  updateService,
  deleteService,
}
