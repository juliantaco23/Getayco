const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
// Configuración de variables de entorno
dotenv.config();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar rutas
const adminRoutes = require('./routes/admin.routes');
const fileRoutes = require('./routes/file.routes');
const projectRoutes = require('./routes/project.routes');
const serviceRoutes = require('./routes/service.routes');
const sessionRoutes = require('./routes/session.routes');
const workerRoutes = require('./routes/worker.routes');

// Usar rutas
app.use('/admin', adminRoutes);
app.use('/file', fileRoutes);
app.use('/project', projectRoutes);
app.use('/service', serviceRoutes);
app.use('/session', sessionRoutes);
app.use('/worker', workerRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;