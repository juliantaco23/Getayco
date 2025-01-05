// routes/file.routes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const fileController = require('../controllers/file.controller');
const { upload } = require('../middlewares/upload');
const { validateFields } = require('../middlewares/validateFields');

router.post('/upload', [
  upload.single('file'),
  check('session_id', 'Session ID is required').not().isEmpty(),
  check('type', 'Type must be photo or audio').isIn(['photo', 'audio']),
  validateFields
], fileController.uploadFile);

router.get('/session/:session_id', [
  check('session_id', 'Session ID is required').not().isEmpty(),
  validateFields
], fileController.getSessionFiles);

module.exports = router;