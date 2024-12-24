const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Importar módulo para manejar rutas de archivos estáticos
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => console.log(`Servidor corriendo en el puerto ${PORT}`));
  })
  .catch((err) => console.log('Error al conectar con MongoDB:', err.message));

// Servir archivos estáticos para el front-end
const frontendPath = path.join(__dirname, '../dist'); // Cambia 'dist' si tu front-end genera la carpeta en otro lugar
app.use(express.static(frontendPath));

// Manejar todas las demás rutas y servir el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});
