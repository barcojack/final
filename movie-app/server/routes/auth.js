const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint para registrar usuarios
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya está registrado' });
    }

    const newUser = new User({ email, password });
    await newUser.save();
    
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint para listar usuarios registrados
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
