import React, { useState } from 'react';
import axios from 'axios';
import './Registrarse.css';

const Registrarse: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      setMessage(response.data.message);
    } catch (error: unknown) { // Asegurando que el tipo de error es unknown
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message || 'Error al registrar usuario');
      } else {
        setMessage('Error desconocido al registrar usuario');
      }
    }
  };

  return (
    <section id="registrarse" className="registrarse">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
};

export default Registrarse;
