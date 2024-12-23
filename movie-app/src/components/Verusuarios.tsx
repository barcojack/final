import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/User'; // Importar la interfaz
import './VerUsuarios.css';

const VerUsuarios: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Usar la interfaz para definir el tipo

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default VerUsuarios;
