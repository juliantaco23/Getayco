// routes/worker.routes.js
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields')
const workerController = require('../controllers/worker.controller')

router.get(
  '/:name',
  [check('name', 'Name is required').not().isEmpty(), validateFields],
  workerController.getWorkerByName
)

router.post(
  '/',
  [check('name', 'Name is required').not().isEmpty(), validateFields],
  workerController.createWorker
)

module.exports = router