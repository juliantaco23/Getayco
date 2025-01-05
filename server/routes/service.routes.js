// routes/service.routes.js
const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/service.controller')
const { validateAdminToken } = require('../middlewares/validateToken')
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

router.post('/', [
  validateAdminToken,
  check('name', 'Name is required').not().isEmpty(),
  check('unit', 'Unit is required').not().isEmpty(),
  validateFields
], serviceController.createService)

router.get('/', validateAdminToken, serviceController.getAllServices)
module.exports = router
