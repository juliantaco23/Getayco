const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Configuración de variables de entorno
dotenv.config();
const port = process.env.PORT || 8080;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar rutas
const adminRoutes = require('./routes/admin.routes');
const fileRoutes = require('./routes/file.routes');
const projectRoutes = require('./routes/project.routes');
const serviceRoutes = require('./routes/service.routes');
const sessionRoutes = require('./routes/session.routes');
const workerRoutes = require('./routes/worker.routes');

// Usar rutas con prefijo /api
app.use('/api/admin', adminRoutes);
app.use('/api/file', fileRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/worker', workerRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;