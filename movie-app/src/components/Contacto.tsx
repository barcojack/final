import React, { useState } from 'react';
import './Contacto.css';

const Contacto: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes añadir la lógica para enviar el mensaje de contacto
    alert('Mensaje enviado');
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <form onSubmit={handleContact}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
