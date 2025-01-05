// routes/session.routes.js
const express = require('express')
const router = express.Router()
const sessionController = require('../controllers/session.controller')
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

router.post(
  '/',
  [
    check('project_id', 'Project ID is required').not().isEmpty(),
    check('worker_id', 'Worker ID is required').not().isEmpty(),
    check('service_id', 'Service ID is required').not().isEmpty(),
    check('quantity', 'Quantity is required').not().isEmpty(),
    validateFields
  ],
  sessionController.createSession
)

router.get(
  '/project/:project_id',
  [check('project_id', 'Project ID is required').not().isEmpty(), validateFields],
  sessionController.getSessionsByProject
)

module.exports = router