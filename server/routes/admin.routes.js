// routes/admin.routes.js
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const adminController = require('../controllers/admin.controller')
const { validateFields } = require('../middlewares/validateFields')

router.post('/register', [
  check('username', 'Username is required').not().isEmpty(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  validateFields
], adminController.createAdmin)

router.post('/login', [
  check('username', 'Username is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty(),
  validateFields
], adminController.loginAdmin)

module.exports = router
