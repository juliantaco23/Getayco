// routes/project.routes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const projectController = require('../controllers/project.controller');
const { validateFields } = require('../middlewares/validateFields');
const { validateAdminToken } = require('../middlewares/validateToken');

// Crear un nuevo proyecto
router.post('/create', [
  check('name', 'Project name is required').not().isEmpty(),
  validateFields
], projectController.createProject);

// Obtener todos los proyectos de un administrador
router.get('/admin', validateAdminToken, projectController.getProjectsByAdmin);

// Obtener un proyecto por ID
router.get('/:id', validateAdminToken, projectController.getProjectById);

// Actualizar un proyecto por ID
router.put('/:id', [
  validateAdminToken,
  check('name', 'Project name is required').not().isEmpty(),
  validateFields
], projectController.updateProject);

// Eliminar un proyecto por ID
router.delete('/:id', validateAdminToken, projectController.deleteProject);

// Obtener todos los trabajadores de un proyecto
router.get('/:id/workers', validateAdminToken, projectController.getWorkersByProject);

// Obtener todas las sesiones de un proyecto
router.get('/:id/sessions', validateAdminToken, projectController.getSessionsByProject);

module.exports = router;